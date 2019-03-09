

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['E2E.feature'],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {

        require: ['E2E_StepDefinition.js'],
        tags: false,

    },


};