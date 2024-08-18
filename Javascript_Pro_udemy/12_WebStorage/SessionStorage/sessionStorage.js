// function warnUserOnce() {
//   if (!localStorage.getItem("shownWarning")) {
//     console.log("WARNING!!!! WE ARE SHUTTING DOWN OUR ENTIRE APP IN 2 WEEKS!!");
//   }
//   localStorage.setItem("shownWarning", "true");
// }

// warnUserOnce();

const form = document.querySelector("#checkoutForm");
form.addEventListener("input", (e) => {
  const { name, value } = e.target;
  const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {};
  formData[name] = value;
  sessionStorage.setItem("formData", JSON.stringify(formData));
});

const populateForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {};
  for (let field in formData) {
    form.elements[field].value = formData[field];
  }
};

// if you refresh the search field what you searched stays in place if you refreshed a 
// form. the above function saves the form state. so you dont have to retype information out
// when you refresh a page. it is best to not store this in local storage 
// as there is alot of personally identifiable information. any time the form changes 
// it updates the object. 

populateForm();


// session storage //

// session storage is very similar to local storage however
// the information only persists for as long as the session 
// unlike local storage that persists between sessions
// userthis might be good if you want to show a popup or modal once when someone logs in
// but it wont show up again in that session like the cookie agreements
// maybe some caching or data loading for efficiency. it persists acrss refreshes 
// but not across tabs.

// session storage examples//
