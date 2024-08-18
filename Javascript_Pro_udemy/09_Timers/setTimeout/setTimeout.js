function showNotification(message, duration) {
  const notification = document.createElement("DIV");
  notification.innerText = message;
  notification.className = "notification";
  document.body.appendChild(notification);

  setTimeout(function () {
    notification.remove();
  }, duration);
}

showNotification("Signed you in!", 5000);
showNotification("I hate you!", 3000);
showNotification("Please come again", 1000);

// setTimeout //

// this is good for mking a notification that 
// needs to remain on the screen for a set amount of time
// notificarion.remove removes the item from the the DOM
