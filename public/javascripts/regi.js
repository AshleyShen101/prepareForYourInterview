const registerForm = document.querySelector("#register");
const error = document.querySelector("#error");

if(registerForm) {
  registerForm.addEventListener("submit", regiHandler);
}

async function regiHandler(evt) {
  evt.preventDefault();
  const user = getUserInfo(registerForm);
  if (!user.username || !user.password) {
    error.innerHTML = "Please enter username and password";
    return;
  }
  error.innerHTML = "";
  const response = await fetch ("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const res = await response.json();
  if (res && res.work) {
    alert("Registration Success! Please Signin.");
    window.location.replace("/index.html");
  } else {
    error.innerHTML = "This username is taken.";
  }
}

function getUserInfo(form) {
  const data = new FormData(form);
  return {
    username: data.get("username"),
    password: data.get("password"),
  };
}

const loginForm = document.querySelector("#login");

if(loginForm) {
  loginForm.addEventListener("submit", loginHandler);
};

async function loginHandler(evt) {
  evt.preventDefault();
  const user = getUserInfo(loginForm);
  if (!user.username || !user.password) {
    error.innerHTML = "Please provide both of username and password";
    return;
  }
  error.innerHTML = "";
  const response = await fetch("/login", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log(response);
  const res = await response.json();
  if (res && res.work) {
    alert("Successfully Login!");
    window.location.replace("/view.html");
  } else {
    error.innerHTML = "Please try again later. There are something went wrong.";
  }
}