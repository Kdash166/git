const toggleButton = document.querySelector("#toggleMode");

const toggleTheme = () => {
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "Enable Dark Mode";
  } else {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Enable Light Mode";
  }
};
// uses the button to change light and datk mode

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Enable Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "Enable Dark Mode";
  }
};
toggleButton.addEventListener("click", toggleTheme);
// checks theme in local storage and applies theme 
// from last session.
applySavedTheme();
// calls fucntion
window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    applySavedTheme();
  }
});

// event listener listens for a change in LocalStorage
//once a change has been detected it the theme is applied.

//Synchronization: This allows the theme (dark or light mode) to stay consistent 
// across different tabs or windows of the same website. 
// If you change the theme in one tab, the change will automatically apply to other 
// open tabs of the same site.

// IMPORTANT NOTE //
// local storages is shared between all tabs or windows of a particular 
// website, host, and domain. 
// you need to listne for a storage event to change somethink.
