const name = document.getElementById("name");
const level = document.getElementById("level");
const img = document.getElementById("img");
const imgA1 = document.getElementById("img-another1");
const imgA2 = document.getElementById("img-another2");
const imgA3 = document.getElementById("img-another3");
const nameArray = [];

fetch("https://digimon-api.vercel.app/api/digimon/", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((resp) => resp.json())
  .then((resp) =>
    resp.forEach((element) => {
      const newName = element.name;
      nameArray.push(newName);
    })
  );

function Randomnazer() {
  let dato1,
    dato2,
    dato3 = 0;
  dato1 = Math.floor(Math.random() * 209);
  dato2 = Math.floor(Math.random() * 209);
  dato3 = Math.floor(Math.random() * 209);
  return [dato1, dato2, dato3];
}

function nameGiver(arr, num){
  let dato1, dato2, dato3 = "";
  console.log('arr: ', arr);
  console.log(Array.isArray(arr))
  console.log(typeof(arr))
  /*
  dato1 = arr[num[0]]
  dato2 = arr[num[1]]
  dato3 = arr[num[2]]
  console.log(dato1, dato2, dato3)*/
}

anothers = Randomnazer();
names = nameGiver(nameArray,anothers)

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
