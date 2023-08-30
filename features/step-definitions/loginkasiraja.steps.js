const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

Given(/^User is on the login page$/, async () => {
    await LoginPage.open();
    await expect(browser).toHaveTitle('kasirAja');
});

When(/^user enters (.*) and (.*)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

When(/^clicks on login button$/, async () => {
    await LoginPage.btnSubmit.click()
});

Then(/^(.*) is displayed$/, async (assertion) => {
    await expect(HomePage.dashboard).toHaveTextContaining(assertion)
});