"use strict";

/** app for groupchat */

const express = require("express");
const app = express();

// serve stuff in static/ folder

app.use(express.static("static/"));

/** Handle websocket chat */

const ChatUser = require("./ChatUser");

/** Handle a persistent connection to /chat/[roomName]
 *
 * Note that this is only called *once* per client --- not every time
 * a particular websocket chat is sent.
 *
 * `ws` becomes the socket for the client; it is specific to that visitor.
 * The `ws.send` method is how we'll send messages back to that socket.
 */

// allow for app.ws routes for websocket routes
const wsExpress = require("express-ws")(app);
app.ws("/chat/:roomName", function (ws, req, next) {
  try {
    const user = new ChatUser(
      ws.send.bind(ws), // fn to call to message this user
      req.params.roomName // name of room for user
    );

    // register handlers for message-received, connection-closed

    ws.on("message", function (data) {
      try {
        user.handleMessage(data);
      } catch (err) {
        console.error(err);
      }
    });

    ws.on("close", function () {
      try {
        user.handleClose();
      } catch (err) {
        console.error(err);
      }
    });
  } catch (err) {
    console.error(err);
  }
});

/** serve homepage --- just static HTML
 *
 * Allow any roomName to come after homepage --- client JS will find the
 * room name in the URL.
 *
 * */

app.get("/:roomName", function (req, res, next) {
  res.sendFile(`${__dirname}/chat.html`);
});

module.exports = app;

// web sockets //

// web socket set up a persistent connection between a server 
// and a user, this allows bidirectional information rather than request/ response
// this allows for low letancy efficient updates of things like chat apps 
// live delivery services. the altenative is called long poling where 
// a http request is made every 1 second but this is high letancy and bombards a server
// with alot of requests that will result in negative responses. 
// this is why websockets are the more efficeint option.
// web sockets work with other languages like python and ruby. 
// need to use express-ws lib to make this easier. 
// once called a websocket will persist for that user.
// web sockets are different between the client side it isnt the same tunnel.
// .open only occurs once when the web socket is opened. 
// .onmessage occurs every time a message is sent.
// .onerror is what happens if the websocet fails 
// opens to an empty or invalid end point or opening socket failed
// .onclose this only desplays once once the websocket is closed.
// when user idle, show alert when user idle for 5 minutes .onclose websocket. 
// this could be useful functionality.

// frontend websocket //
// broadcast is a helper function that iterates over all the members in a chat room
// then it sends message down those websockets.