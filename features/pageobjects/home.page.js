const { $ } = require('@wdio/globals')

class Home {
    get dashboard () {
        return $('.chakra-container.css-9rmdie');
    }

    get categoryBtn () {
        return $('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1)');
    }
}

module.exports = new Home();
