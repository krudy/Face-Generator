document.querySelector('#form').addEventListener('submit', getFace);

async function getFace(event) {
	event.preventDefault();

	const gender = document.querySelector('#gender').value;
	const age = document.querySelector('#age').value;
	const ethnicity = document.querySelector('#ethnicity').value;

	const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '80be03a6d4msh3de92304a92c4d4p1a3a32jsn601cbf465564',
			'X-RapidAPI-Host': 'face-studio.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.blob();
		const image = URL.createObjectURL(result);
		const imageElement = document.createElement('img');
		const paragraphElement = document.createElement('p');
		paragraphElement.textContent = url;
		imageElement.src = image;
		document.body.appendChild(paragraphElement);
		document.body.appendChild(imageElement);
	} catch (error) {
		console.error(error);
	}
}