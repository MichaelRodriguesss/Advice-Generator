const button = document.querySelector("button");

button.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#id").innerHTML = `advice #${data.slip.id}`;
      document.querySelector("#advice").innerHTML = `${data.slip.advice}`;
    })
    .catch(() => alert("API is not working at this moment"));
});
