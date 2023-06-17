// ==UserScript==
// @name         iciba.com桌面网页简洁版 默认柯林斯
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/2.2.4/jquery.min.js
// @match        http://www.iciba.com/word*
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    var $ = jQuery.noConflict();

    $(document).ready(()=>{

        setTimeout(()=>{
            $(`[class^="Kyad_"],[class^="Nav_"]`).remove()
            $(`main[class^="jsx-"]`).css("padding-top","0")
            $(`[class^="DicTab_content__"] li:contains(柯林斯)`).click()

        },1000);


    });})();
