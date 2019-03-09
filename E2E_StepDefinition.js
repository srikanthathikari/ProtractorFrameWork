
var { Given, When, Then } = require('cucumber');
var { browser, by } = require('protractor');

const { defineSupportCode } = require('cucumber');

defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(20 * 1000);
});


Given(/^User Lands on any given home page$/, function () {

    return browser.get('https://www.delta.com');

})

Then(/^Go to MyTrips page$/, function () {

    return browser.element.all(by.className('nav-link app-link nav-link-mytrips')).click().then(function () {
        return browser.sleep('5000');

    })
})


