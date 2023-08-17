const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const rutasNota = require("./routes/notas");
const cors = require('cors')



const app = express();
const port = process.env.PORT || 9000;

app.use(cors(/*{
    origin: "https://notisalud-api-vax3.onrender.com"
}*/))

app.options('*', cors())

//MIDDLEWARE
app.use('/api', rutasNota)



//RUTAS
app.get('/', (req,res) => {
res.send('API Notisalud Univalle');
});


//CONEXION
mongoose.set("strictQuery", false);

mongoose
    .connect(process.env.MONGODB_URI)
    
    .then(() => { console.log('connected to MongoDB atlas')});
    //.catch((error) => console.error(error));

app.listen(port, () => {console.log('server listing on port', port); }) 