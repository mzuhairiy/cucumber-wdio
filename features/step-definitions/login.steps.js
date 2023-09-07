const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

Given(/^user is on the login page$/, async () => {
    await LoginPage.open();
    await expect(browser).toHaveTitle('kasirAja');
});


When(/^user input email as "(.*)" and password as "(.*)"$/, async (email, password) => {
    await LoginPage.login(email, password)
});

When(/^user clicks on login button$/, async () => {
    await LoginPage.btnSubmit.click()
});

Then(/^user can't login and error message (.*) is displayed$/, async function (assertion) {
    await expect(LoginPage.toastMsg).toExist()
    await expect(LoginPage.toastMsg).toHaveTextContaining(assertion)
});

Then(/^user directed to homepage and "(.*)" is displayed$/, async (assertion) => {
    await expect(HomePage.dashboard).toHaveTextContaining(assertion)
});