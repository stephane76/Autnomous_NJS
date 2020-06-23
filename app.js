var request = require('request');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});
app.get('/NbrProcSE', (req, res) => {
    res.send('2');
  });
  app.get('/NbrProcEE', (req, res) => {
    Proc=req.query.proc*2
    res.send(Proc.toString());
  });
  app.get('/NbrNupSE', (req, res) => {
    res.send('20');
  });
  app.get('/NbrNupEE', (req, res) => {
    res.send('150');
  });
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
/*request('https://soqimfg2zq78y23-mytestpython.adb.eu-frankfurt-1.oraclecloudapps.com/ords/api/cool_data/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
     }
     try {
        var data = JSON.parse(body);
        console.log(data.count);
        MyArr = data.items
        console.log(MyArr[0].name
        } 
        catch(err) {
        console.error("Erreur : "+err)
        }
})*/