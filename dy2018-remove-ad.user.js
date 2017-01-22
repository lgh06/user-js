// ==UserScript==
// @name         dy2018.com-RemoveAd
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @match        http://*.dy2018.com/*
// @grant        none
// @author       lgh06
// @require      https://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    var $ = jQuery.noConflict();
    $('body > a').remove();
})();
