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

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
        
      }

      function showPosition(position) {

        test.innerHTML = 
        //  "Latitude: " + position.coords.latitude + 
        //  "<br>Longitude: " + position.coords.longitude;
   `Latitude: ${position.coords.latitude}<br> Longitude: ${position.coords.longitude}`;


   //Hier wou ik de geolocatie gebruiken om de latitude en longitude in te vullen in de widget, 
   //en deze vanaf hier in de HTML laden, helaas werkt dit niet.

    //       `<div w-type="event-discovery" w-tmapikey="ApubkcpsSTs2A1bJ08GTB8ObOlKPTAcs" w-googleapikey="YOUR_GOOGLE_API_KEY"
    //   w-keyword="" w-theme="simple" w-colorscheme="light" w-width="350" w-height="600" w-size="25" w-border="0"
    //   w-borderradius="4" w-radius="25" w-period="month" w-layout="vertical" w-attractionid="" w-promoterid="" w-venueid=""
    //   w-affiliateid="" w-segmentid="" w-proportion="custom" w-titlelink="off" w-sorting="groupByName" w-id="id_x6784p"
    //   w-source="" w-branding="Ticketmaster" w-latlong="${position.coords.latitude},${position.coords.longitude}"></div>`;
        
      }

      