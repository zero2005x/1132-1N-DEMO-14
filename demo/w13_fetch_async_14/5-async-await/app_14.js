const btn = document.querySelector(".btn");
const url = "./api/person.json";

let persons = [];

btn.addEventListener("click", async () => {
  getDataAsyncAwait(url);
});

const getDataAsyncAwait = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    console.log("response", response);
    displayItems(data);

    console.log("data", data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

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
      persons = data;
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
