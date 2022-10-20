const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://Nirajgns:Ganesh123@cluster0.e9zl36g.mongodb.net/?retryWrites=true&w=majority")
  .then(function() {

    //!get route
    app.get("/", function(req, res) {
      res.send("Ecommerce API Works");
    });

    //!User Routes
    const userRoutes = require("./routes/user_routes");
    app.use("api/user", userRoutes);

  });


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started at PORT: ${ PORT }`);
});

