const open = indexedDB.open("MyFirstDB", 2);

// you need to open a database

open.onupgradeneeded = () => {
  const db = open.result;
// it will make or upgrade the store
  db.createObjectStore("MyUserStore", { keyPath: "id" });
  // unique ID will be generAated
};

// create an object store like a database

open.onsuccess = () => {
  console.log("SUCCESS!!!");
  const db = open.result;
  const transaction = db.transaction("MyUserStore", "readwrite");
  const store = transaction.objectStore("MyUserStore");
// everything has to be done by transactions "read write will allow changing data"
// read only will just allow access to values.

  //   store.put({ id: 2, username: "Brandy", age: 9 });
  //   store.put({ id: 3, username: "Brandon", age: 12 });
  //   store.put({ id: 4, username: "Brady", age: 34 });
  //   const largeString = new Array(5 * 1024 * 1024 + 1).join("a");
  //   store.put({ id: 5, username: largeString });

  // you can see how you would put data above or even give it the large string
  //  which is over 5.2MB. 
  const user = store.getAll();
  user.onsuccess = () => {
    console.log(user.result);
  };
  // this will get all the results from the database.
  // all the databases persist it is tied to the website like local storage. 
  

  transaction.oncomplete = () => {
    db.close();
  };
};

open.onerror = () => {
  console.log("ERROR!");
};

// IndexDB //

// like a server side database. can store GB of data. 
// supports schemas indexing and keys. 
// it is aysnchronous. 
// doesnt support promises. 
// there is a limit to local stoarge over 5mb if you need to store alot of data 
// on the client side Indexed is stored on home directory with browser preferences. 
// it is alot more complicated than using 
