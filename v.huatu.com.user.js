// ==UserScript==
// @name         huatu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://v.huatu.com/tiku/*
// @require      https://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    var $ = jQuery.noConflict();
    $('body > div.g-container.clearfix.paper-writing-body.g-container-writing-xc > div.fr.g-exercise-clock > div').css('opacity', 0.5);
})();
