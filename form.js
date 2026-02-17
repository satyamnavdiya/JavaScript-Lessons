let form = document.querySelector("form");
let inp = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", (dets) => {
  dets.preventDefault();

  // console.log(inp[0].value, inp[1].value, inp[2].value, inp[3].value);

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  //   card.appendChild(profile);
  // console.log(card);

  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  );

  let h3 = document.createElement("h3");
  h3.textContent = "Demo user";
  let h5 = document.createElement("h5");
  h5.textContent = "Developer";
  let p = document.createElement("p");
  p.textContent = "Developer is Developer with builder";

  profile.appendChild(img);
  card.appendChild(profile);

  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  main.appendChild(card);

  // ===================
  img.setAttribute("src", inp[0].value);
  h3.textContent = inp[1].value;
  //   h3.textContent = inp[1].value ? inp[1].value : "Developer";
  h5.textContent = inp[2].value;
  p.textContent = inp[3].value;

  inp.forEach((inp) => {
    if (inp.type !== 'submit') {
      inp.value = "";
    }
  });
});

// two way: create variable and fetch the data
// 2. save all data into one single array and then fetch that
