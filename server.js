const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv").config();
const { MongoClient } = require("mongodb");

var db = null;

//Hier maak ik de functie connectDB aan, hiermee word verbinding gemaakt met de database, de URI staat in de .env file.
async function connectDB() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log(db);
    //als het niet lukt, 'catch' een error
  } catch (error) {
    throw new Error(error);
  }
}


connectDB().then(console.log("Verbinding database goed"));

// static files
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
  //data1 is een verbinding met de database opvragen
  // const data1 = await db.collection("matchapp").find({}, {}).toArray();
  const data1 = await db.collection("tours").find({},{}) .toArray();
  console.log(data1)
  //geef data1 mee aan de pages
  res.render("pages/index", { data: data1 });
  
});

app.get("/nameForm", async (req, res) => {
  const data1 = await db.collection("tours").find({},{}) .toArray();
  res.render("pages/nameForm", { data: data1 });
});

app.get("/busritten", async (req, res) => {
  const data1 = await db.collection("tours").find({},{}) .toArray();
  res.render("pages/busRitten", { data: data1 });
});

app.post("/", async (req, res) => {
  //definieer 'busrit', die bevat fromlocation, destination en date
  let busrit = {
    fromLocation: req.body.fromLocation,
    destination: req.body.destination,
    date: req.body.date,
  };

  //add
  //met insertone voeg je een busrit toe, hierboven gedeclareerd
  await db.collection("tours").insertOne(busrit);
  //get latest, data updaten
  const tours = await db.collection("tours").find({}, {}).toArray();
  //render page met de geupdate data
  const title = "succesfully added";
  res.render("pages/nameForm", { title, tours });
});

app.listen(port, console.log(`App draait op ${port}`));

