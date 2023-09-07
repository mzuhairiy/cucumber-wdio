const { $ } = require('@wdio/globals');
const Page = require('../pageobjects/page');

class LoginPage extends Page {
    get txtEmail () {
        return $('#email');
    }

    get txtPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get toastMsg () {
        return $("div[role='alert']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.txtEmail.setValue(email);
        await this.txtPassword.setValue(password);
        // await this.btnSubmit.click();
    }

    open() {
        super.open('https://kasirdemo.belajarqa.com')
    }
}

module.exports = new LoginPage();
