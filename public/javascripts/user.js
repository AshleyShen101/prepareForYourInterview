const registerForm = document.querySelector("#register");
const loginForm = document.querySelector("#login");
const error = document.querySelector("#error");

if (loginForm) {
  loginForm.addEventListener("handler", loginHandler);
}
if (registerForm) {
  registerForm.addEventListener("handler", registerHandler);
}

function getUserInfo(form) {
  const formData = new FormData(form);

  console.log("form data", formData);

  return {
    username: formData.get("username"),
    password: formData.get("password"),
  };
}

async function loginHandler(evt) {
  evt.preventDefault();
  const userInfo = getUserInfo(loginForm);
  if (!userInfo.username || !userInfo.password) {
    error.innerHTML = "username and password is required!";
    return;
  }
  error.innerHTML = "";

  const response = await fetch("/login", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo), // body data type must match "Content-Type" header
  });
  const res = await response.json();
  if (res && res.success) {
    window.location.href = "/viewRecipe.html";
  } else {
    error.innerHTML = res.message || "sign in failed!";
  }
}

async function registerHandler(evt) {
  evt.preventDefault();
  const userInfo = getUserInfo(registerForm);
  if (!userInfo.username || !userInfo.password) {
    error.innerHTML = "username and password is required!";
    return;
  }
  error.innerHTML = "";

  const response = await fetch("/regist", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo), // body data type must match "Content-Type" header
  });
  const res = await response.json();
  if (res && res.success) {
    window.location.href = "/index.html";
  } else {
    error.innerHTML = res.message || "sign up failed!";
  }
}