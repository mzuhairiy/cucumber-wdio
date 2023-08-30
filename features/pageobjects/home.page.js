const { $ } = require('@wdio/globals')

class Home {
    get dashboard () {
        return $('.chakra-container.css-9rmdie');
    }
}

module.exports = new Home();
