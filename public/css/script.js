

// api documentation: https://www.amiiboapi.com/
// api url: https://www.amiiboapi.com/api/amiibo/?gameseries=Super Mario
const URL = "https://www.amiiboapi.com/api/amiibo/?gameseries=Super Mario";

//haal de lijst 'ul' op uit de html
const list = document.querySelector('ul');
//haal de button op uit de html
const button = document.querySelector('button');




// array is #, anders . !!!
/****************/
/* VUL DE LIJST */
/****************/
function getAmiibo() {
	
	// 0. creeer de url om data mee op te vragen (op regel 3)
	// 1. vraag de data op van de api url
	// 2. haal de Amiibo array uit de data en sla doe op
	// 3. loop over elke Amiibo in de lijst
	// 4. schrijf 'statische' html voor een Amiibo
	// 5. maak de variabele delen in de HTML dynamisch
	// 6. voeg die HTML toe aan de lijst 
		getData(URL).then ( data => {
			console.log(data.amiibo);
			
			var allAmiibo = data.amiibo;
			
			allAmiibo.forEach(aAmiibo => {
				console.log(aAmiibo);
				
				aAmiiboHTML = 
					`<li>
						<h2>${aAmiibo.character}</h2>
						<img src="${aAmiibo.image}" alt="${aAmiibo.character}" />
					</li>`;
				
				list.insertAdjacentHTML('beforeend', aAmiiboHTML);
			});
		});
}





/****************/
/* FETCH DATA   */
/* RETURNS JSON */
/****************/
async function getData(URL) {
	return (
		fetch(URL)
		.then ( response => response.json() )
		.then ( jsonData => jsonData )
	);
}





/*********/
/* START */
/*********/
getAmiibo();