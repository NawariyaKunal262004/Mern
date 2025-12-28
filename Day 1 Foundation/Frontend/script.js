document.getElementById("btn").addEventListener("click", async () => {
  const output = document.getElementById("output");
  output.innerText = "Calling backend...";

  try {
    const res = await fetch("https://day1-backend.onrender.com/api/test", {
      method: "GET",
      credentials: "include", // 🔑 REQUIRED when backend uses credentials: true
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error(err);
    output.innerText = err.message;
  }
});
