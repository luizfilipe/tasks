# Installation

## Create `.env` files
### Server

```
DB_NAME=tasks
DB_USERNAME=root
DB_PASSWORD=password
DB_HOST=localhost
DB_POST=3306

SYNC=no # yes to generate database

PORT=3000
```  

### Client

```
BASE_URL=http://localhost:3000/api
```                               

## Running project

* Run `npm install`
* Run `npm run server`
* Run `npm run client`

## Running tests

* Run `npm run tests` 
