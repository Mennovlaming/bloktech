const express = require('express');

const app = express();
const port = 3000;

// temp data
const data1 = [
   {
     fromLocation: 'Den Helder',
     destination: 'Amsterdam',
     date: '13/05/2022'
   }
];


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://mennovlaming:<password>@cluster0.poqzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// require('dotenv').config();
// const password = process.env.PASSWORD;
// // const uri = 'mongodb+srv://mennovlaming:DataBase_123@cluster0.poqzw.mongodb.net/Cluster0?retryWrites=true&w=majority'

// const { MongoClient } = require("mongodb");
// // Connection URI
// const uri = 'mongodb+srv://mennovlaming:DataBase_123@cluster0.poqzw.mongodb.net/Cluster0?retryWrites=true&w=majority'

// Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



// static files
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true }))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/nameForm', { data: data1 })
})

app.post('/', (req, res) => {
  console.log(req.body);

  data1.push({
    fromLocation: req.body.fromLocation,
    destination: req.body.destination,
    date: req.body.date
  })

  res.render('pages/nameForm', { data: data1 });

})


  


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
});
