// Koi Pan Code JS ma line by line run thase
// Ane te Natural Pattern hoy chhe ke code line by line chale
// pan code ma kayre aevi pan line aave ke je wait kare and tena pacchi no code run thay jaay

// console.log("hey");
// console.log("hey1");
// setTimeout(() => {
//   console.log("hey2");
// }, 2000);
// console.log("hey3");

// // SYNC -- aevo code jo line by line chalse

// // ASYNC -- aevo code ke je ready thai pacchi chale

// // Callback Pattern and Callback hell
// function abc(val) {
//   setTimeout(
//     () => {
//       console.log(val);
//     },
//     Math.floor(Math.random() * 10) * 1000,
//   );
// }
// abc(12);

// function abc1(fnc) {
//   setTimeout(
//     () => {
//       console.log(fnc());
//     },
//     Math.floor(Math.random() * 10) * 1000,
//   );
// }
// abc1(function () {
//   console.log("Hey. How Are You"); // this is callback function
// });

// ek function ne tame ek bijo function na parameter ma mokali aapo chho, to te parameter walu fnc ne kevai chhe  callback function

function showprofile(username, cb) {
  console.log("Fetching All Post data ...");
  setTimeout(() => {
    // console.log(`profile fetched of ${username}`);
    cb({ id: 1, username });
  }, 2000);
} // in react/mongodb this function not written by us --> this fnc is available into libery

function showAllPost(id, cd) {
  console.log("Fetching Profile Data ...");
  setTimeout(() => {
    cd({ id: id, posts: ["post1", "post2", "post3"] });
  }, 3000);
}

function SavePost(id, cb) {
  console.log("Fetching Saved Posts... ");
  setTimeout(() => {
    cb({ id: id, saved: [1, 2, 3, 4, 5, 6] });
  }, 4000);
}

showprofile("satyam", function (data) {
  console.log(data);

  showAllPost(data.id, function (posts) {
    console.log(posts);

    SavePost(data.id, function (saved) {
      console.log(saved);
    });
  });
}); // we can create this fnc --> Callback Hell -- nested CB Fnc

let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) {
      res(rn);
    } else rej(rn);
    // res("Username");
  }, 3000);
}); // for 3 sec promise will be into pending state --> go to brower and check into console

pr.then(function (val) {
  console.log(val);
}) // run if your promise will be resolved ==> res() will be called
  .catch(function (val) {
    console.log(val);
  }); // run id your promise will be not resolved/ rejeced ==> rej() will be called

// async await
let pr1 = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) {
      res(rn);
    } else rej(rn);
    // res("Username");
  }, 3000);
});

async function abcd() {
  try {
    let val = await pr1; // wait here after 3 sec, if pr1 will be resolved then val ma te value aay jayegi and if pr1 will be rejected then catch block ma jayegi
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}

abcd();

// error handing with try-catch

// chaining aync operations


// next topic --> Fetch APi and HTTP Requests