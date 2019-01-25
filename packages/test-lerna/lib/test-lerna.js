'use strict';
const myPackage = require('@uri-lerna/test-lerna-sub');
module.exports = testLerna;

function testLerna() {
    myPackage();
    console.log('TEST');
}

testLerna();