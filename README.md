# KPI-technical-test
## Quick start
### Backend
- `cd server`
- `python manage.py migrate`
- `python manage.py runserver`
- Runs on http://localhost:8000/
### Angular Frontend
- `cd angular-app`
- `npm install`
- `ng serve --open --proxy-config proxy.conf.json`
- Runs on http://localhost:4200/
- If you backend runs on another port don't forget to change the `target` line in `proxy.conf.json` with the correct port.
### React Frontend (yes I misread the instructions in the email so I made two fronts...)
- `cd app`
- `yarn install`
- `yarn start`
- Runs on http://localhost:3000/
- If you backend runs on another port don't forget to change the `proxy` line in `package.json` with the correct port.
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
- [django](https://www.djangoproject.com/) logic, routes

### Angular App
- [typescript](https://www.typescriptlang.org/) and types for all used packages.
- [reach router](https://reach.tech/router/) smaller and lighter router than React Router.
- [angular-google-charts](https://github.com/FERNman/angular-google-charts) charts.

### React App
- [typescript](https://www.typescriptlang.org/) and types for all used packages.
- [reach router](https://reach.tech/router/) smaller and lighter router than React Router.
- [react-google-charts](https://react-google-charts.com/) charts.