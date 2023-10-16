fetch("/api/auth/signin", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "example@example.com", password: "password" }),
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle any errors
  });
