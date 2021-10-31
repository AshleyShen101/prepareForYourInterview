async function load() {
  const resRaw = await fetch("./check");
  if (!resRaw) {
    window.location.href = "/index.html";
    console.log(resRaw);
    return;
  }
}

load();