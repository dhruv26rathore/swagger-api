require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const appcrudrouter = require("./routes/appcrud")
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express();

const options = {
    definition: {
        openapi : '3.0.0',
        info: {
            title: 'Mongo db crud node js with swagger',
            version: '1.0.0'
        },
        servers:[
            {
              url: 'http://localhost:8000/'
            }
        ]
    },
    apis:['./routes/appcrud.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/swagger-api', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Db Connected");
})

app.use(bodyParser.json())

app.use('/api',appcrudrouter);
const port = 8000 || process.env.PORT
app.listen(port,()=>console.log("server running on 8000"))