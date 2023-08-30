# JsCamp5

### `npm start`

Runs the app.\
Listen to [http://localhost:4000](http://localhost:4000)

Routes:
    GET http://localhost:4000/products
    Return in JSON format all products from DB

    GET http://localhost:4000/all-orders
    Return in JSON format information about all orders of all users

    POST http://localhost:4000/order
    Take order from body in JSON format and add information to DB
    Return code 200 if added successfully