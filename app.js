// // DOM - DOCUMENT OBJECT
// // HOW TO SELECT ELEMENT ON THE page
// // class ,id , tag, combination

// // get element  by the ID
// const text = document.getElementById("text");
// console.log(text);

// // select element by the classname

// const message = document.getElementsByClassName("message");
// console.log(message);

// // querySelector , querySelectorAll - use  css selector . #, div .claa
// const paragraph = document.querySelector("#text");
// console.log(paragraph);
// const paragraphs = document.querySelectorAll(".message");
// console.log(paragraphs);
// // nodelist - array methods can be performed
// // paragraphs.map((paragraph) => {
// // console.log(paragraph);
// // });

// const heading6 = document.querySelector("div h6");

// // textContent , innerText, innerHTML

// const heading = document.querySelector("h1");
// // console.log(heading.textContent);
// heading.textContent += "Js is good";

// const div = document.querySelector("div");
// console.log(div.innerHTML);
// div.innerHTML += "<p> okay </p>";
// const name = "john";
// div.innerHTML = `<h1> welcome ${name} </h1>`;

// // change attributes
// const beginPara = document.querySelector(".begin");
// console.log(beginPara);
// beginPara.className = "okay";
// beginPara.id = "good";
// beginPara.style.color = "red";
// beginPara.style.backgroundColor = "green";

// // interact with css classnames
// const h1 = document.querySelector("h1");
// h1.className = "success";
// // classList - add or remove

// const msg = document.querySelector("h2.message");
// // console.log(msg.classList);
// msg.classList.add("error");
// msg.classList.remove("example");
// console.log(msg.classList.contains("good"));

// console.log(msg);

// //  crate elements

// const section = document.createElement("section");
// section.innerHTML = "<h1> Created from JS </h1>";

// // append it
// const body = document.querySelector("body");
// body.appendChild(section);

// // // remove element removeChild
// // body.removeChild(section);

// // replace child
// const link = document.createElement("a");
// link.innerText = "Visit Google";
// // link.href = "https://google.com";
// link.setAttribute("href", "https://google.com");

// // body.replaceChild(section, link);
// // responding to user interactions
// // event (click), event handler
// // addEventListener - handler
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("btn clicked");
//   body.style.backgroundColor = "aqua";
// });

// // form handling

const form = document.querySelector("form");
// submit
form.addEventListener("submit", () => {
  // default of forms when submittrd is to refresh the page
  event.preventDefault();

  //select

  const username = document.querySelector(".username");
  const password = document.querySelector(".password");

  const usernameValue = username.value.trim();
  const passwordValue = password.Value;
  const small = document.querySelector("small");
  //   console.log(usernameValue, passwordValue);
  // min length for username is 5
  // validate the password must not include password
  // password2343
  // validate()
  if (!usernameValue || !passwordValue) {
    // display error message
    console.log("please provide all fields");
    small.textContent = "please fill all fields";
  } else if (usernameValue.length < 5) {
    small.textContent = "Minimum username length is 5";
  } else if (passwordValue.toLowerCase().includes("password")) {
    small.innerText = "password must not include password";
  } else {
    // SUBMIT THE FORM
    small.textContent = "Form Submitted";
  }
});
