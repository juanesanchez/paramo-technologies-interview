# Modak Interview

### Install: 

Inside cypress-interview run next command: 
```sh
$ npm install
```
### Run tests

Run test Dashboard mode

```sh
$ npx cypress open
```

Select E2E Testing

![](/docs/install/1-1.jpeg?raw=true)

Choose the browser in which you want to run the test and press Start Testing in Chrome

![](/docs/install/1-2.jpeg?raw=true)

Choose the spec that you want exec.

![](/docs/install/1-3.jpeg?raw=true)
 
 
Run test NON-GUI mode


```sh
$ npx cypress run
```
> Note: this command will it run all tests in your project. 

You can use different tags that you have in your features files or choose different browsers, for example: 

```sh
$ npx cypress run --env tags=@happy --browser chrome
```

### Reports: 

Reports are generated after run test in NON-GUI mode

#### Output report: 

| Type reports | Paths |
| ------ | ------ |
| HTML Report | cypress/reports/cucumber-report.html |
| Json Report | cypress/reports/cucumber-report.jsoncypress/reports/cucumber-report.json |

If you want disabled reports generating you can change the following options to false in `.cypress-cucumber-preprocessorrc.json`

```sh
 "json": {
    "enabled": false,
  },
  "html": {
    "enabled": false,
  }
```

####  Output Videos:
Videos are generated in: 
`cypress/videos/nameFeature.feature.mp4`

If you want disabled video generating you can change the following option in `cypress.config.ts`

`video: true` to `video: false`

#### OutPut Screenshots:

Whether Cypress will take a screenshot when a test fails during cypress run
If you want disabled video generating you can change the following option in `cypress.config.ts`

`screenshotOnRunFailure: true`

![](/docs/install/1-4.jpeg?raw=true)

> Note: It is recommended to leave it enabled if you are using html reporting <br>



### Recommendations: 

For best practice I would recommend identifying the elements through a new attribute within the HTML, for example: `data-cy="contactLink"`

This helps to make the maintenance of the tests easier and more efficient after the deployment.

We can create customs commands that help us to avoid repeating code when we need to find elements

The architecture of the project can be restructured according to the needs of the team

