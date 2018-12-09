README
This project is written with Java, Cucumber, Maven, Selenium.

SCENARIO

This is project for test next scenarios:

1. scenario Login Success
- go to http://the-internet.herokuapp.com/login
- fill in valid user credentials (they are displayed on the page)
- after login, verify that the text partial „You logged into a secure area is present“ is displayed in the browser

2. scenario Login failure 1
- go to http://the-internet.herokuapp.com/login
- fill in wrong user name (anything but „tomsmith“)
- after click on login button, verify that the text partial „Your username is invalid“ is displayed in the browser

3. scenario Login failure 2
- go to http://the-internet.herokuapp.com/login
- fill in correct username but wrong password
- after click on login button, verify that the text partial „Your password is invalid“ is displayed in the browser

4. scenario Hovers
- go to http://the-internet.herokuapp.com/hovers
- hover over the 3 avatar pictures
- verify that the username „user1“, „user2“, etc... is displayed as soon as the hover is triggered

5. scenario sortable data table
- go to http://the-internet.herokuapp.com/tables
- main element to test is table „Example 2“
- test should show, that if you order this table by „Last Name“ in an ascending AND descending order, that the
displayed last names are ordered alphabetically in an ascending and descending order

DESCRIPTION

All scenarios are present in Positive.feature in folder src/test/resources.
All steps are defined in Annotantion.class.
Also Page Object model is used for working with elements on the page. WebElements are saved in mainPage.class.
Functions for more comfortable work with WebElements and actions are saved in Steps.java.
Helpful functions are saved in BaseTest.java
RunTest.java is glue for TestNG, Cucumber frameworks. Here is defined format for reports from Cucumber.

REPORTS

Report are generated after tests and saved in targets folder:
cucumber/index.html - HTML report.

HOW TO RUN IT

Should be installed Maven and JRE before running.
Open command line and navigate to folder with project.
Run following command in command line: mvn test ro mvn install.
After that tests will be running.
After that check target folder for reports.
