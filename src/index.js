const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const rutasNota = require("./routes/notas");
const cors = require('cors')



const app = express();
const port = process.env.PORT;

app.use(cors())

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
    /*mongoose.connect('mongodb+srv://uvadmin:unavi2022@cluster0.uxzt6ty.mongodb.net/noticias?retryWrites=true&w=majority'
    ) */
    
    .then(() => { console.log('connected to MongoDB atlas')});
    //.catch((error) => console.error(error));

//app.listen(port, () => {console.log('server listing on port', port); }) 