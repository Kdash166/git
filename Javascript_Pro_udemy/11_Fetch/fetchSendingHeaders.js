async function showMeHeaders() {
  const headers = new Headers({ "content-type": "application/json" });
  try {
    // this make sure headers are named correctly
    const res = await fetch("http://localhost:3001/showmeheaders", { headers });
    const data = await res.json();
    console.log("DATA ", data);
  } catch (e) {
    console.log(e);
  }
}

async function getSecret() {
  const headers = new Headers({
    "content-type": "application/json",
    authorization: "Bearer kasjakj1283ajksdh91iasjkhd912",
  });
  try {
    const res = await fetch("http://localhost:3001/secret", { headers });
    const data = await res.json();
    console.log("DATA ", data);
  } catch (e) {
    console.log(e);
  }
}

// showMeHeaders();

getSecret();

// sending Headers with fetch //

// A request header in JavaScript is a key-value pair sent along with an HTTP request from the client 
// (e.g., a web browser or a script) to the server. These headers provide additional information about the request, 
// such as what kind of data is being sent, how the client wants the response formatted, 
// authentication credentials, and other metadata.