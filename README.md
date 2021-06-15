# RateCity Developer Test

Your task is to build a React application, Please choose one of tasks to complete from the followings,

Test 1:
Build a product component as per design provided in `similiarProductModule.jpg`

- Component needs to be responsive
- Data needs to come from API provided below

Test 2:
Build a product listing page

- request a list of products using the REST api detailed below
- render products in a table view
- add ability to paginate the table

Test 3:
Build a compare rate component

- Allow user to input interest rates
- Render graph to show where the user entered rate is compared against the products returned by the API

Our expectations:

- Good codebase structure
- ES6
- Surprise us

## Notes

Feel free to use any boilerplate or libraries to help you achieve a result.

## Deliverable

#### Please don't push branches,

Submit a pull request against this repository. Developers will review your code and ask you questions in the pull request.

We will pull your code and execute the following commands:

start the server - client app on PORT 3000 and server app on PORT 5000

```
yarn
yarn start

```

These commands should bring your app up in development mode. We expect the terminal to display a URL where we can visit in browser.

## REST API

Please add http header `x-api-key` with `MaDX2Oo31g3FLAHesYHtGa3rHe40uqkJ8TmbPJn9` when making the requests.

API Endpoint:
`https://api.ratecity.com.au/v2/home-loans`

Paginate the result by passing the page query parameter:
`https://api.ratecity.com.au/v2/home-loans?page=2`

Sample responses,

```json
{
  "hits": [
    {
      "uuid": "f68a68e2-8e21-4f65-93ef-ea46e797e0x5",
      "name": "Low Rate Home Loan - Prime (Principal and Interest) (Investment) (LVR < 60%)",
      "companyName": "Homeloans.com.au",
      "companyDisplayName": "Homeloans.com.au",
      "companySlug": "homeloans-com-au",
      "companyType": [
          "Finance Company"
      ],
      "companyLogo": "//production-ultimate-assets.ratecity.com.au/ratecity/image/upload/v1597805820/company/jlxkbh5qzv93otec2crw.png",
      "companyUrl": "/home-loans/homeloans-com-au",
      ...
    },
    ...
  ],
  "meta": {
    "page": 1,
    "pageSize": 15,
    "totalCount": 63,
    "pageCount": 5,
    "params": {
      "page": 1,
      "pageSize": 15,
    }
  }
}
```
