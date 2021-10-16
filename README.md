# KPI-technical-test
## Quick start
### Backend
- `python manage.py migrate`
- `python manage.py runserver`
### Frontend
- `cd app`
- `yarn install`
- `yarn start`

## Todolist
### Stage 1: REST API

Write a REST API to retrieve the investments data:

* List all the investments ✔️
* List investments filtered by `ville` and/or by `etat_d_avancement` ✔️
* Get a single investment by id ✔️

Pay attention to the HTTP methods and status codes you use.

### Stage 2: Web application

Implement a simple web application to show the investments:

* Display the list of investments in the form of a table ✔️
* Add a form so that we can trigger the API filters ✔️
* Add a page to show the details of a single investment ✔️

### Bonus stages

* Add an endpoint to edit an investment ❌
* Deploy your application to Heroku ❌
* Display some graphs or interesting figures in the web application ✔️

## Stacks
### Server
- [django](https://www.djangoproject.com/) logic, routes, auth, validation

### App
- [typescript](https://www.typescriptlang.org/) and types for all used packages.
- [reach router](https://reach.tech/router/) smaller and lighter router than React Router.
- [react-google-charts](https://react-google-charts.com/) charts.