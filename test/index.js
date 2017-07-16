'use strict';

const chromeNode = require('../lib/chrome-node');

const { describe, it } = require('mocha');
const { expect } = require('chai');


describe('chrome object', () => {
    it ('should be defined', () => {
        expect(chromeNode).to.be.ok;
    });
});