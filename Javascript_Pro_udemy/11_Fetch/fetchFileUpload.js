async function uploadFile(formData) {
  // FormData: This is a built-in JavaScript object that allows you to easily construct a set of key/value pairs representing form fields and their values. It is particularly useful for handling file uploads and other form data that may include files.
  try {
    const response = await fetch(
      "http://localhost:3001/companies/coltco/upload-logo",
      // this is the endpoint the file is sent to
      {
      
        method: "POST",
      // post is for sending a new resource
        body: formData,
      // n summary, the body property in this fetch request is used to send the FormData object, which contains the files and other form fields, to the server. 
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

const fileInput = document.querySelector("#fileUpload");

fileInput.addEventListener("change", (e) => {
  console.log("CHANGED!!");
  const formData = new FormData();
  formData.append("logo", fileInput.files[0]);
  // makes a form data that has a file appended to it
  uploadFile(formData);
});
