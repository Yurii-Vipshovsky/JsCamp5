const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());


app.get('/products', (req, res)=>{

    const data = [
        {
            id:1,
            category: 'Vegetable',
            img: 'Brocoli.png',
            name: 'Calabrese Broccoli',
            oldprice: 20.00,
            newprice: 13.00,
            smallDiscription: "Small description. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            productDescription: "Product description. Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
            additionalInfo: "Additional info. A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
            rating: 4
        },
        {
            id:2,
            category: 'Fresh',
            img: 'Banana.jpg',
            name: 'Banana',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:3,
            category: 'Vegetable',
            img: 'Brocoli.png',
            name: 'Calabrese Broccoli',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:4,
            category: 'Fresh',
            img: 'Banana.jpg',
            name: 'Banana',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:5,
            category: 'Vegetable',
            img: 'Brocoli.png',
            name: 'Calabrese Broccoli',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:6,
            category: 'Fresh',
            img: 'Banana.jpg',
            name: 'Banana',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:7,
            category: 'Vegetable',
            img: 'Brocoli.png',
            name: 'Calabrese Broccoli',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:8,
            category: 'Fresh',
            img: 'Banana.jpg',
            name: 'Banana',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:9,
            category: 'Vegetable',
            img: 'Brocoli.png',
            name: 'Calabrese Broccoli',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:10,
            category: 'Fresh',
            img: 'Banana.jpg',
            name: 'Banana',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:11,
            category: 'Vegetable',
            img: 'Brocoli.png',
            name: 'Calabrese Broccoli',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:12,
            category: 'Fresh',
            img: 'Banana.jpg',
            name: 'Banana',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:13,
            category: 'Vegetable',
            img: 'Brocoli.png',
            name: 'Calabrese Broccoli',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:14,
            category: 'Fresh',
            img: 'Banana.jpg',
            name: 'Banana',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:15,
            category: 'Vegetable',
            img: 'Brocoli.png',
            name: 'Calabrese Broccoli',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
        {
            id:16,
            category: 'Fresh',
            img: 'Banana.jpg',
            name: 'Banana',
            oldprice: 20.00,
            newprice: 13.00,
            rating: 5
        },
    ];
    
    res.setHeader('Content-Type', 'application/json');

    res.json(data)
})

app.get('/*', (req, res)=>{
    res.send("404 NOT FOND")
})

app.post('/order', (req, res)=>{
    console.log('Got body:', req.body);
    res.sendStatus(200);
})

app.listen(4000, ()=>{
    console.log("APP started")
})