let autocomplete;
      function initAutocomplete() {
        const inputs = document.querySelectorAll('input')
        console.log(inputs);
        inputs.forEach(input => {
          
          new google.maps.places.Autocomplete(input, {
            types: ['establishment'], 
            componentRestrictions: {'country' : ['NL']},
            fields: ['places_id' , 'geometry', 'name']
          })
        })
      }

      var test = document.getElementById("locatie");

      //Dit is de functie van de button, met geolocatie pakt ie lat en lon
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
          
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
        
      }
      //Hier zet ie de huidige lat en lon en de console, dit moet dus uiteindelijk als stad of land in de HTML komen
      function showPosition(position) {
        let currentLatLon = `${position.coords.latitude}, ${position.coords.longitude}`;
        test.innerHTML = 
        `Latitude: ${position.coords.latitude}<br> Longitude: ${position.coords.longitude}`;
        console.log(currentLatLon);
      }

  
  function getData(){
    
    // fetch(url) dus de url van je api

    //ik dacht misschien als ik hier een template string van maak en dan de uitgecommente fetch doe.
    fetch(`http://api.positionstack.com/v1/reverse?access_key=489c94689aedfbbce029bb9ec16310c1&query=52.9618562,4.7517031&country=NLD&output=json`)

    // fetch(`http://api.positionstack.com/v1/reverse?access_key=489c94689aedfbbce029bb9ec16310c1&query=${position.coords.latitude},${position.coords.longitude}&country=NLD&output=json`)
     
    // dit is een get request, en dan krijg je een response terug in .then in js gebruik je json dus wil je de response naar json vormen met de method .json() dus response.json()
      .then(response => response.json())
    // Hierna is data beschikbaar binnen de volgende .then() en dan kun je daarna die data bijvoorbeeld console.log, of opschonen of wat je ook wilt doen met de data.
      .then(data => console.log(data.data[0].label))
  }
  getData()
