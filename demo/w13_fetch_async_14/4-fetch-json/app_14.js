const btn = document.querySelector(".btn");
const url = "./api/person.json";

let persons = [];

btn.addEventListener("click", async () => {
  persons = await getDataByFetchAPI2(url);
});

const getDataByFetchAPI = (url) => {
  fetch(url)
    .then((response) => {
      console.log("response", response);
      // console.log('response.json()', response.json());

      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      displayItems(data);
    })
    .catch((err) => console.log(err));
};

const getDataByFetchAPI2 = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      displayItems(data);
    })
    .catch((err) => console.log(err));
};

const displayItems = (persons) => {
  const dispalyData = persons
    .map((person) => {
      return ` <p>${person.id} : ${person.name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = dispalyData;
  document.body.appendChild(element);
};

const getDataByXHR = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log("data", data);
      persons = data;
    }
  };
  xhr.send();
};
