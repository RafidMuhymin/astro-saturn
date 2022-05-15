const response = await fetch("/api/config", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    spa: true,
  }),
}).then((res) => res.json());

console.log(response);

export {};
