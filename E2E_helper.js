
var { browser, by } = require('protractor');

module.exports = {



    try() {

        return browser.element.all(by.className('nav-link app-link nav-link-mytrips')).click().then(function () {
            return browser.sleep('5000');

        })

    }


    // EnterDetails(confirmation,First,Last) {

    //     return browser.element.all(by.className('input-mobile-tab-class ng-pristine ng-invalid ng-touched')).sendKeys(confirmation);



    // }



}