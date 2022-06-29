const URL = "https://date.nager.at/api/v3/publicholidays/2022/NL";
const list = document.getElementById("list");

// array is #, anders . !!!
function freeDays() {
  getData(URL).then((data) => {
    var eventData = data;

    eventData.forEach((allEvents) => {
      allEventsHTML = `<li>
                    <h2>${allEvents.localName}</h2>
                    
                                <p>${allEvents.name}</p>
                                <p>${allEvents.date}</p>
                  </li>`;

      list.insertAdjacentHTML("beforeend", allEventsHTML);
    });
  });
}

async function getData(URL) {
  return fetch(URL)
    .then((response) => response.json())
    .then((jsonData) => jsonData);
}

freeDays();

//navragen
//werkt niet omdat hij de .show niet toevoegd bij een element dat gegenereerd word.
//Hij checkt of er iets in de HTML staat, de JS komt later pas en daarom voegt hij de class .show niet toe
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
