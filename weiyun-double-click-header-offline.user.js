// ==UserScript==
// @name         weiyun-add-offline-url
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  微云 双击标题栏 离线
// @author       You
// @match        https://www.weiyun.com/disk/index.html
// @grant        none
// @require      https://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    let $ = jQuery.noConflict();
    $('#_main_bar0').dblclick(()=>{
      $('li[data-action="offline_download"]').click();
      setTimeout(()=>($('li.link[data-tab="link"]').click(), $('textarea.j-offline-magnet').focus().select()), 1000);
    });

})();
