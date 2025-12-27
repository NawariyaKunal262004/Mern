document.getElementById("btn").addEventListener("click", async () => {
  const output = document.getElementById("output");
  output.innerText = "Calling backend...";

  try {
    const res = await fetch("https://day1-backend.onrender.com/api/test");
    const data = await res.json();
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = err.message;
  }
});
