const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const CategoryPage = require('../pageobjects/category.page');

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

Then(/^user directed to homepage$/, async () => {
	await expect(HomePage.dashboard).toExist();
});

When(/^user clicks on kategori button$/, async () => {
	(await HomePage.categoryBtn).click()
});

When(/^user clicks on tambah button$/, async () => {
	(await CategoryPage.btnTambah).click()
});

When(/^user input nama as {string} and deskripsi as "(.*)"$/, async (nama, deskripsi) => {
	await CategoryPage.validData(nama, deskripsi);
});

Then(/^user can't create category and see "(.*)" message$/, async (assertion) => {
	await CategoryPage.failedToast.toExist();
    await expect(CategoryPage.failedToast).toHaveTextContaining(assertion)
});

Then(/^user is success to create a category and should see "(.*)" message$/, async (assertion) => {
	await CategoryPage.successToast.toExist();
    await expect(CategoryPage.successToast).toHaveTextContaining(assertion)
});

Given(/^user is on dashboard page$/, async () => {
	await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});


