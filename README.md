
<h1>Mama Recipe (BE)</h1>

## Table of contents
- [About The Project](#about-the-project)
- [Build With](#build-with)
- [Structure Folder](#structure-folder)
- [Getting Started](#getting-started)
- [Packages Included](#packages-included)
- [Related Project](#related-project)
- [Contributing](#contributing)

## About The Project
This is a Back-End FoodRecipe. This is built using Express JS and PostgreSQL.

## Build With
<ul id='build-with'>
  <li><a href='https://www.postgresql.org/'>postgre SQL (for Database Management System)</a></li>
  <li><a href='https://www.postman.com/'>Postman for API documentation management</a></li>
  <li><a href='https://www.npmjs.com/'>NPM for dependency management</a></li>
  <li><a href='https://github.com/motdotla/dotenv'>dotenv: for using environment variabels</a></li>
  <li><a href='https://helmetjs.github.io/'>helmet: for set security HTTP headers</a></li>
  <li><a href='https://www.npmjs.com/package/xss'>XSS: to sanitize untrusted HTML (to prevent XSS)</a></li>
  <li><a href='https://github.com/expressjs/cors'>CORS: Cross-Origin Resourece-Sharing enabled using</a></li>
  <li><a href='https://github.com/kelektiv/node.bcrypt.js'>bcrypt: for hashing password</a></li>
  <li><a href='https://eslint.org/'>ESLINT: for linting and prettier code formatter</a></li>
  <li><a href='https://expressjs.com/'>ExpressJS: for CRUD management</a></li>
  <li><a href='https://jwt.io/'>JWT: for generate JSON WEB TOKEN</a></li>
  <li><a href='https://cloudinary.com/'>Cloudinary: (for file management such as photo or video)</a></li>
  <li><a href='https://nodejs.org/en/'>NodeJS</a></li>
  <li><a href='https://github.com/vickomaris/BE_redux_MamaRecipe/blob/master/package.json'>and you can see the dependencies used in the package.json</a></li>
</ul>

## Structure Folder 
<b>Backend</b>
<ul>
  <li>public</li>
  <ul>
    <li>img <span><b><i>image public access</i></b></span></li>
  </ul>
  <li>src</li>
  <ul>
    <li>config ||<span><b><i>You can put database configuration in here</i></b></span></li>
    <li>controller ||<span><b><i>This folder for the logic componenent of API</i></b></span></li>
    <li>helper ||<span><b><i>This folder is used to help improve the logic of the controller, for example, response alignment.</i></b></span></li>
    <li>middleware ||<span><b><i>Middleware is used as a bridge during the routes API, for example, uploading images.</i></b></span></li>
    <li>model ||<span><b><i>Models are used to give commands to database manipulation, as in the crud example.</i></b></span></li>
    <li>router ||<span><b><i>The router is the place to set the endpoint for the API.</i></b></span></li>
  </ul>
  <li>index.js || <span><b><i>You can setup this application in this file, such as set port, set another library, and other.</i></b></span></li>
</ul>

## Getting Started
Installation

- Clone this project with `git clone https://github.com/vickomaris/BE_redux_MamaRecipe#packages-included

- Install package required with ```npm install```

- Setting .env

```
# database
DB_USERNAME = 
DB_HOST = 
DB_DATABASE = 
DB_PASSWORD =
DB_PORT = 
PORT = 

# jwt
JWT_SECRET=

```
Executing program
Run program with ```npm start```

## Packages Included

<ul id='packages-included'>
  <li><b>NPM dependencies</b></li>
</ul>


  ![](https://img.shields.io/badge/bcrypt-v5.0.1-blue)
  ![](https://img.shields.io/badge/body--parser-v1.19.2-blue)
  ![](https://img.shields.io/badge/cors-v2.8.5-blue)
  ![](https://img.shields.io/badge/dotenv-v16.0.0-blue)
  ![](https://img.shields.io/badge/express-v4.17.3-blue)
  ![](https://img.shields.io/badge/express--validator-v5.3.1-blue)
  ![](https://img.shields.io/badge/helmet-v5.0.2-blue)
  ![](https://img.shields.io/badge/pg-v8.7.3-blue)
  ![](https://img.shields.io/badge/multer-v1.4.4-blue)
  ![](https://img.shields.io/badge/xss--clean-v0.1.1-blue)
  ![](https://img.shields.io/badge/jsonwebtoken-v8.5.1-blue)
  ![](https://img.shields.io/badge/sweetalert-v2.1.2-blue)
  ![](https://img.shields.io/badge/reactstrap-v9.0.2-blue)
  ![](https://img.shields.io/badge/react-router-dom-v6.3.0-blue)
  ![](https://img.shields.io/badge/react-dom-v17.0.2-blue)
  ![](https://img.shields.io/badge/react-v17.0.2-blue)
  ![](https://img.shields.io/badge/jwt-decode-v3.1.2-blue)
  ![](https://img.shields.io/badge/axios-v0.26.1-blue)
  ![](https://img.shields.io/badge/bootstrap-v5.1.3-blue)
  


## Related Project
RESTful API for this web application, clone this for development Foodtemplate.\
- [Frontend-MamaRecipe](https://github.com/vickomaris/FE_redux_mamaRecipe)
- [deploy-vercel](https://fe-redux-mama-recipe.vercel.app/)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b your/branch`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/yourbranch`)
5. Open a Pull Request
