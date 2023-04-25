const name = document.getElementById('name')
const level = document.getElementById('level')
const img = document.getElementById('img')

const searchDigimon = event => {
    event.preventDefault();
    const { value } = event.target.digimon;

	let url = 'https://digimon-api.vercel.app/api/digimon/name/'+ value;

	fetch(url,{
		method: 'GET',
		headers: {
			'Accept': 'application/json',
		},
	})
	.then(response => response.json())
	.then(response => renderDigimonData(response))
    .catch(error => renderNotFound(error));

}

const renderDigimonData = (response) => {
	console.log(response);
	let objt = response[0];
	console.log(objt);
	const name = objt.name;
    const sprite =  objt.img;
    const level = objt.level;

    name.textContent = name;
    img.setAttribute('src', sprite);
	level.textContent = level;
};

const renderNotFound = (error) => {
    name.textContent = 'UNKNOWN2 '+ error;
    img.setAttribute('src', '/assets/img/unknownEntity.png');
    level.textContent = 'UNKNOWN2' ;
};

