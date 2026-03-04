// fetch API is used to make network requests and handle responses in JavaScript. It provides a modern and flexible way to interact with APIs and retrieve data from servers. The Fetch API is built on top of Promises, which allows for easier handling of asynchronous operations.

// HTTP Basics: HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted between clients (like browsers) and servers. HTTP uses methods like GET, POST, PUT, DELETE, etc., to perform different actions on resources. Understanding HTTP basics is crucial for working with APIs and making network requests effectively.

// fetch --> then --> then --> catch

fetch("https://randomuser.me/api/0.8/?results=10") // inbuild fnc in browser to make network request, it takes url as an argument and return a promise
  .then(function (rawdata) {
    console.log(rawdata);
    // console.log(rawdata.json());
    return rawdata.json();
  }) // use can use .then((raw)=> raw.json())
  .then((data) => {
    console.log(data);
    console.log(data.results);
    console.log(data.results[0]);
    console.log(data.results[0].user.name);
  })
  .catch((err) => {
    console.log(err);
  });

// create a user card with tailwind css  with refresh btn


// Fetch API: get and POST Basics

// Headers, status codes, JSON Parsing(.json())

// Form Submission via Fetach API
