const inputs = document.querySelectorAll("input");

let autocomplete;
function initAutocomplete() {
  console.log(inputs);
  inputs.forEach((input) => {
    new google.maps.places.Autocomplete(input, {
      types: ["establishment"],
      componentRestrictions: { country: ["NL"] },
      fields: ["places_id", "geometry", "name"],
    });
  });
}

var test = document.getElementById("locatie");

//test1234
//Dit is de functie van de button, met geolocatie pakt ie lat en lon test123
async function getLocation() {
  if (navigator?.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

//Hier zet ie de huidige lat en lon en de console, dit moet dus uiteindelijk als stad of land in de HTML komen
function showPosition(position) {
  let currentLatLon = `${position?.coords.latitude}, ${position?.coords.longitude}`;
  

  fetch(
    `http://api.positionstack.com/v1/reverse?access_key=489c94689aedfbbce029bb9ec16310c1&query=${position.coords.latitude},${position.coords.longitude}&country=NLD&output=json`
  )
    // dit is een get request, en dan krijg je een response terug in .then in js gebruik je json dus wil je de response naar json vormen met de method .json() dus response.json()
    .then((response) => response.json())
    // Hierna is data beschikbaar binnen de volgende .then() en dan kun je daarna die data bijvoorbeeld console.log, of opschonen of wat je ook wilt doen met de data.
    .then(
      (data) =>
      (document.getElementById("fromLocation").value = data.data[0].locality)
    );

  console.log(currentLatLon);
}
