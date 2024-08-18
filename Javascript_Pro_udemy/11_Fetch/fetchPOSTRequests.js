async function postData() {
  const newCompany = {
    handle: "chickenco3",
    name: "Chickens and Company 3",
    description: "A lovely company run by chickens",
    numEmployees: 999,
    logoUrl: "http://www.google.com",
  };

  const response = await fetch("http://localhost:3001/companies", {
    method: "POST",
    // the default method is GET so you need to set it to POST
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newCompany),
  });

  const data = await response.json();
  console.log(data);
}

// postData();

async function getCompany() {
  const response = await fetch("http://localhost:3001/companies/chickenco3");
  const data = await response.json();
  console.log(data);
}
// this is a get request to find the data that has been posted
// this is a real GET/POST request

// POST request //
// this is a request to upload information to the API or database
// this is called creating a new resource.

