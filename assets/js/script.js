const name = document.getElementById("name");
const level = document.getElementById("level");
const img = document.getElementById("img");
const nameArray = []

fetch("https://digimon-api.vercel.app/api/digimon/", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((resp) => resp.json())
  .then((resp) => resp.forEach(element => {
	const newName = element.name;
    nameArray.push(newName);
    console.log(nameArray);
  }))

const searchDigimon = (event) => {
  event.preventDefault();
  const { value } = event.target.digimon;

  let url = "https://digimon-api.vercel.app/api/digimon/name/" + value;

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => renderDigimonData(response))
    .catch((error) => renderNotFound(error));
};

const renderDigimonData = (response) => {
  let objt = response[0];
  const name1 = objt.name;
  const sprite = objt.img;
  const level1 = objt.level;

  name.innerHTML = name1.toUpperCase();
  img.setAttribute("src", sprite);
  level.innerHTML = level1.toUpperCase();
};

const renderNotFound = (error) => {
  name.innerHTML = "UNKNOWN1";
  img.setAttribute("src", "assets/img/unknownEntity.png");
  level.innerHTML = "UNKNOWN1";
};
