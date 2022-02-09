# beShop
> Application to buy mobiles

- Home page where it shows the products

![image](https://user-images.githubusercontent.com/36509669/153305083-63a3f664-3842-46e0-980d-d83f88c23867.png)

- Additional description for each product. Also, it has a form to buy that it is added to cart and includes persistence in client side during 60 mins.

![image](https://user-images.githubusercontent.com/36509669/153305131-ea202521-d8ae-4fb3-83ad-d6a576fa8ba3.png)

- Filter input by brand or model

![image](https://user-images.githubusercontent.com/36509669/153305228-0586709e-dcdb-4a64-ac8f-42a02b4a8540.png)

### About the code
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Manage of the routes through 'wouter'
- Manage of persistence with 'lscache'
- Includes 'react-icons' (and 'react-spinners' but not used)
- Styles with only CSS. It could be an aspect to improve, maybe with Tailwind CSS & Daisy UI.
- Different components coded in JSX with different hooks (useState, useEffect, useContext)
- Use of three API's (3 services implemented):

GET products
```JS
https://front-test-api.herokuapp.com/api/product
```
GET product by id
```JS
https://front-test-api.herokuapp.com/api/product/:id
```
POST cart
```JS
https://front-test-api.herokuapp.com/api/cart
```

### How can I use this project ?
- It was tested on W10 and Google Chrome
- It requires [NodeJS](https://nodejs.org/es/)
- Git bash

For testing...

First of all, you should clone this repo:
```
 git clone https://github.com/jrodriguezo/react-beshop
```
Then, go to the project directory:
```
 cd react-beshop
```
Then, you should install dependencies from package-json
```
npm install
```
Finally, run the following script
```
npm start
```

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. Enjoy! :smiley:	

_Another option would be using static files with `npm run build`_

## Contributor

Thanks to:
- [@jrodriguezo](https://github.com/jrodriguezo)
