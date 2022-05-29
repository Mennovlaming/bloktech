const express = require('express');

const app = express();
const port = 3000;

const dotenv = require('dotenv').config();

const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

let db = null
// temp data
// const data1 = [
//    {
//      fromLocation: 'Den Helder',
//      destination: 'Amsterdam',
//      date: '13/05/2022'
//    }

// ];

async function connectDB() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  });
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
  } catch (error) {
    throw error;
  }
}

// static files
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true }))

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const data1 = await db.collection('matchapp').find({}, {}).toArray();
  res.render('pages/index', { data: data1 })
})

app.get('/nameForm', async (req, res) => {
  // alles uit db halen 
  //met deze query zou hij alle results uit de db halen met als destination Amsterdam
  //const query = {destination: "Amsterdam"} hiermee filteren
  //const options = {sort : {fromLocation: -1, destination: 1}} hiermee sorteren
  // const data1 = await db.collection('matchapp').find(query, options).toArray();
  const data1 = await db.collection('matchapp').find({}, {}).toArray();

  res.render('pages/nameForm', { data: data1 })
})

app.get('/busritten', async (req, res) => {

  const data1 = await db.collection('matchapp').find({}, {}).toArray();
  
  res.render('pages/busRitten', { data: data1 })
})

// app.post('/', async (req, res) => {

//   const data1 = await db.collection('matchapp').find({}, {}).toArray();

//   data1.push({
//     fromLocation: req.body.fromLocation,
//     destination: req.body.destination,
//     date: req.body.date
//   });

  app.post('/', async (req, res) => {
    let busrit = {
      fromLocation: req.body.fromLocation,
      destination: req.body.destination,
      date: req.body.date
    };
    //add
    await db.collection('matchapp').insertOne(busrit);
    //get latest
    const matchapp = await db.collection('matchapp').find({}, {}).toArray();
    //render page
    const title = "succesfully added";
    res.render('pages/nameForm', {title, matchapp});
  });

  





  // ADD TO DB
  //await.db.collection('matchapp').insertOne(busrit);

//   res.render('pages/nameForm', { data: data1 });

// })

// app.get('/', (req, res) => {
//   res.render('pages/index', { data: data });
// });

//  app.get('/nameForm', (req, res) => {
//    res.render('pages/nameForm', {data: data});
//  });

// app.post('/', (req, res) => {
//   console.log(req);
// })

// app.get('*', (req, res) => {
//   res.send('Error');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  connectDB().then(console.log('verbinding database goed')) 
});

console.log(process.env.DB_NAME)
console.log('test');
