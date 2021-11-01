const postLocation = document.querySelector("#box");

async function allPosts() {
  const res = await fetch("/getPosts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res && res.work) {
    postLocation.innerHTML = "";
    for (let p of res) {
      postLocation.innerHTML += p;
    }
  }
  return;
}

allPosts();
