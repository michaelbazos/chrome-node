'use strict';

const ChromeDebuggerProtocol = require('chrome-remote-interface');
const ChromeLauncher = require('chrome-launcher');

const EventEmitter = require('events');

const defaultOptions = {
    headless: false,
    port: 9222
};

class ChromeNode extends EventEmitter {
    constructor (options) {
        super();
        this.options = Object.assign(defaultOptions, options);
        EventEmitter.call(this);
    }

    async start () {
        this.processInstance = await _launchChrome(this.options);

        this.protocolClient = await _setupRemoteInterface();
    }
}

/**
 * Launches a debugging instance of Chrome.
 * @param {object=} options
 * @param {number} options.port
 * @param {boolean} options.headless
 * @return {Promise<>}
 */
async function _launchChrome (options) {
    return ChromeLauncher.launch({
        port: options.port,
        chromeFlags: [
            '--window-size=732,732',
            '--disable-gpu',
            options.headless ? '--headless' : ''
        ]
    });
}

async function _setupRemoteInterface (host, port) {
    const protocolClient = await new ChromeDebuggerProtocol({
        host,
        port
    });

    await Promise.all([
        protocolClient.Page.enable(),
        protocolClient.Runtime.enable()
    ]);

    return protocolClient;
}

module.exports = ChromeNode;
