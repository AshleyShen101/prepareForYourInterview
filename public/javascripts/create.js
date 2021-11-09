const createForm = document.querySelector("#createForm");
const error = document.querySelector("#error");

if (createForm) {
  createForm.addEventListener("submit", createHandler);
}

async function load() {
  const res = await fetch("/check");
  if (res == false) {
    window.location.href = "/index.html";
    console.log(res);
    return;
  }
}

function getPost(form) {
  const data = new FormData(form);
  return {
    title: data.get("title"),
    content: data.get("content"),
  };
}

async function createHandler(evt) {
  evt.preventDefault();
  const post = getPost(createForm);
  const response = await fetch("/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const res = await response.json();
  if (res && res.work) {
    alert("Successfully posts! Thank you for sharing your thoughts.");
    window.location.replace("/posts");
  } else {
    res.redirect("/index.html");
    error.innerHTML = "This username is taken.";
  }
}

load();
