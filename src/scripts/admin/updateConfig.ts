const updateConfig = (key, event) => {
  event.preventDefault();

  const formdata = Object.fromEntries(new FormData(event.target));

  fetch("/astro-admin/api/config", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      [key]: formdata,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

// @ts-ignore
window.updateConfig = updateConfig;
