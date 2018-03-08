we-connect-app

TECHNOLOGIES USED
-----------------------------------------------------------------------------------------------

.Front-end: React/Redux (Not added)
.Back-end: Node/Expressjs + Sequelize/Postgres (not added)
.Libraries: Babel-CLI, eslint, Mocha/Chai
.UI: html, css, javascript, materialize.css


App Usage
-----------------------------------------------------------------------------------------------------
.Clone or download the repo

.npm install - to install the dependencies needed for the webapp

.npm start - to run the app

.Server is running on port 3030

Routes
-----------------------------------------------------------------------------------------------------
.POST http://localhost:3030/api/v1/business - Adds a new Business
.PUT http://localhost:3030/api/v1/business/:id - Modifies a business
.DELETE http://localhost:3030/api/v1/business/:id - Deletes a business
.POST http://localhost:3030/api/v1/businesses/:id/reviews - Adds review for a business
.GET http://localhost:3030/api/v1/businesses - Gets all businesses
.GET http://localhost:3030/api/v1/business/:id - Gets details of a single business
.POST http://localhost:3030/api/v1/auth/signup - Creates a new user
.POST http://localhost:3030/api/v1/auth/logi
