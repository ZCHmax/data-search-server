const express = require("express");
const body_parser = require("body-parser");
const cors = require('cors')
const MongoClient = require("mongodb").MongoClient;


const dbConnectionUrl = "mongodb+srv://MaxZhang:000000000@cluster0.qxfte.mongodb.net/url_shortener?retryWrites=true&w=majority";
const connectOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true, 
}; 
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
};


const server = express();
server.use(body_parser.json());
server.use(cors(corsOptions));

server.post('/data', async(request, response) => {
    const { query } = request.body;
    const regex = new RegExp(query, "i");
    let result = await collection.find({ watlev: regex }).toArray()
    return response.status(200).json(result);
})

const port = 7000;
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
    // << db setup >>
    const dbName = "sample_geospatial";
    const collectionName = "shipwrecks";
    MongoClient.connect(dbConnectionUrl, connectOptions, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(dbName);
        collection = database.collection(collectionName);
        console.log("Connected to Database`" + collectionName + "`!");
    });
});