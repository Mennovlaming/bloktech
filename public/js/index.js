const URL = "https://date.nager.at/api/v3/publicholidays/2022/NL";
    const list = document.getElementById('list');

// array is #, anders . !!!
        function freeDays() {
            getData(URL).then ( data => {
              console.log(data);
              var eventData = data;
              
              eventData.forEach(allEvents => {
                console.log(allEvents);
                
                allEventsHTML = 
                  `<li>
                    <h2>${allEvents.localName}</h2>
                    
                                <p>${allEvents.name}</p>
                                <p>${allEvents.date}</p>
                  </li>`;
                
                list.insertAdjacentHTML('beforeend', allEventsHTML);
              });
            });
        }

          async function getData(URL) {
            return (
              fetch(URL)
                  
              .then ( response => response.json() )
              .then ( jsonData => jsonData )
            );
          }

freeDays();

console.log('test123');