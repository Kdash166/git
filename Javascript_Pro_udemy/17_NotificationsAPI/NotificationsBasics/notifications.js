let notification;
async function showNotification() {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    notification = new Notification("Look at my cat!", {
      body: "This is the body of my first notification! I'm so excited :) ",
      icon: "blue.png",
      data: {
        url: "blah.com",
        person: "timbo jimbo",
      },
    });
    notification.addEventListener("click", () => {
      console.log("CLICKED THE NOTIFICATION!");
      console.log(notification);
      window.focus();
      notification.close();
    });
    notification.addEventListener("close", () => {
      console.log("CLOSED THE NOTIFICATION!");
    });
  }
}

document.querySelector("#btn").addEventListener("click", showNotification);

// notification //

// first step, ask for permission. 
// used to support callback now is async 
// first thing, ask if you have permission 
// if permission is granted it will send a notification
// you can do something when someone clicks on the notification
// it can focus in or it can take you to a website.
// notification.permission value can be "default/granted/denied"

// notification events //

// you can add events to the notification you can listen for click and close
// you can use notificatiion.addEventListener("close")
// this might close it when it is clicked or after a certain time. 
// window.focus() takes you to the window the notification came from. 

// notification data and icon //

// you can add different information onto the notification 
// data or icon

// you can see this in the new notification icon 
// notification = new Notification("Look at my cat!", {
//   body: "This is the body of my first notification! I'm so excited :) ",
//   icon: "blue.png",
//   data: {
//     url: "blah.com",
//     person: "timbo jimbo",
//   },
// }
