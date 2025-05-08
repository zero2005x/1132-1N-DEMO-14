const btn = document.querySelector(".btn");
const url = "./api/person.json";

btn.addEventListener("click", () => {
  fetchData(url);
});

const fetchData = (url) => {
  const xhr = new XMLHttpRequest();
  console.log("xhr0", xhr);

  xhr.open("GET", url);
  console.log("xhr", xhr);

  xhr.onreadystatechange = () => {
    console.log("xhr", xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log("data", data);
      // console.log("data in string", JSON.stringify(data));

      const displayData = data
        .map((item) => {
          const { id, name } = item;
          // return `<p>${id} : ${name}</p>`;
          return `<p>${name}</p>`;
        })
        .join("");
      console.log("displayData", displayData);
      const createElement = document.createElement("div");
      createElement.classList.add("data");
      createElement.innerHTML = displayData;
      document.body.appendChild(createElement);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };

  xhr.send();
};
