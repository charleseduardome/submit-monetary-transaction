## Requirements

The project requires [Node v22](https://nodejs.org/).

## Useful Node commands

The project makes use of node and its package manager to help you out carrying some common tasks such as building the
project or running it.

### Install dependencies

```console
$ npm install
```

### Run the application

Run the application which will be listening on port `3000`. There are two ways to run the application.

- Run the application with the current code

  ```console
  $ npm start
  ```

- Run the application with reload on save

  ```console
  $ npm run dev
  ```

## API

### Transactions

Endpoint

```text
POST /transactions
```

Example of body

```json
{
  "amount": 10,
  "description": "Sample Transaction"
}
```

The following POST request, is an example request using CURL.

```console
curl --request POST \
  --url http://localhost:3000/transactions \
  --header 'Content-Type: application/json' \
  --data '{
	"amount": 10,
	"description": "Sample Transaction"
}'
```
