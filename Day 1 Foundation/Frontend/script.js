document.getElementById("btn").addEventListener("click", async () => {
  const output = document.getElementById("output");
  output.innerText = "Calling backend...";

  try {
    const res = await fetch("http://localhost:5000/api/test");
    const data = await res.json();
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = err.message;
  }
});
