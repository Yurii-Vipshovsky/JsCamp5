const express = require("express");
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

let result = dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('ProductsImage'));

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

function sortDiscountFirst(a, b) {
    if (a.oldprice === b.oldprice) {
        return 0;
    }
    if (a.oldprice === null) {
        return 1;
    }
    if (b.oldprice === null) {
        return -1;
    }
    return a.oldprice < b.oldprice ? 1 : -1;
}

app.get('/products', (req, res)=>{

    const sql = 'SELECT * FROM product';
    
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Помилка запиту до бази даних: ' + err);
        res.status(500).json({ error: 'Помилка сервера' });
      } 
      else {
        res.json(result.sort(sortDiscountFirst));
      }
    })
})

app.get('/all-orders', (req, res)=>{

  const sql = 'select * from order_clients INNER JOIN order_products ON order_clients.orderId=order_products.orderId INNER JOIN product ON order_products.productId=product.Id;';
  
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Помилка запиту до бази даних: ' + err);
      res.status(500).json({ error: 'Помилка сервера' });
    } 
    else {
      res.json(result);
    }
  })
})

app.post('/order', (req, res)=>{
    let maxOrderId = 1;

    var sql = "select max(orderId) from order_clients";
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Помилка запиту до бази даних: ' + err);
        res.status(500).json({ error: 'Помилка сервера' });
      } 
      else {
        if(result[0]['max(orderId)']!=null){
          maxOrderId = result[0]['max(orderId)']+1;
        }

        var sql = "INSERT INTO order_clients (fullName, email, address, phoneNumber, orderId, message) VALUES ?";
        var values = [[req.body.name, req.body.email, req.body.address, req.body.phone, maxOrderId, req.body.message]];
        
        db.query(sql, [values], (err, result) => {
          if (err) {
            console.error('Помилка запиту до бази даних: ' + err);
            res.status(500).json({ error: 'Помилка сервера' });
          }
        })

        var sql = "INSERT INTO order_products (orderId, productId, count) VALUES ?";
        var values = [];
        
        req.body.products.forEach(element => {
          values.push([maxOrderId, element.id, element.count]);
        });
        
        db.query(sql, [values], (err, result) => {
          if (err) {
            console.error('Помилка запиту до бази даних: ' + err);
            res.status(500).json({ error: 'Помилка сервера' });
          }
        })
      }
    })
    res.sendStatus(200);
})

app.listen(4000, ()=>{
    console.log("APP started")
})