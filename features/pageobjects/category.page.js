const { $ } = require('@wdio/globals');
const Page = require('./page');

class CategoryPage extends Page {
    get btnTambah () {
        return $('.chakra-button.css-1piskbq');
    }

    get namaField () {
        return $('#nama');
    }

    get deskripsiField () {
        return $('#deskripsi');
    }

    get svBtn () {
        return $(".chakra-button");
    }

    get successToast () {
        return $("#chakra-toast-manager-top-right > .chakra-toast > .chakra-toast__inner > div[role='alert'] > .css-njbp03 > .chakra-alert__desc");

    }

    get failedToast () {
        return $("div[role='alert'].chakra-alert.css-qwanz3");
        
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async validData (nama, deskripsi) {
        await this.namaField.setValue(nama);
        await this.deskripsiField.setValue(deskripsi);
        await this.btnSubmit.click();
    }

    async invalidData (nama, deskripsi) {
        await this.namaField.setValue(nama);
        await this.deskripsiField.setValue(deskripsi);
        await this.btnSubmit.click();
    }
}

module.exports = new CategoryPage();