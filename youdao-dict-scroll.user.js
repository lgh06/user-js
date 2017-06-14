// ==UserScript==
// @name         youdao-dict-scroll 有道词典 自动滚动到权威词典部分
// @namespace    http://tampermonkey.net/
// @version      0.2.0
// @description  try to take over the world!
// @author       You
// @match        http://dict.youdao.com/search?q=*
// @match        http://dict.youdao.com/w/*
// @run-at       document-idle
// @grant        GM_xmlhttpRequest
// @require      https://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min.js
// ==/UserScript==
(function (){
  'use strict';
  let e = document.querySelector('#authTrans h3 a span');
  let rect = e.getBoundingClientRect();
  let top = rect.top - 91; // 91为header的高度 暂时写死
  jQuery('html,body').animate({
    scrollTop: top + 'px'
  },300);
})();
