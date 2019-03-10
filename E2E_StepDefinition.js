
var { Given, When, Then } = require('cucumber');
var { browser, by } = require('protractor');

var E2E_helper = require('./E2E_helper')

const { defineSupportCode } = require('cucumber');

defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(20 * 1000);
});


Given(/^User Lands on any given home page$/, function () {

    return browser.get('https://www.delta.com');

})

Then(/^Go to MyTrips page$/, function () {

    return E2E_helper.try().then(function () {

    })
})


