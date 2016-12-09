// ==UserScript==
// @name         meitu-xunlei
// @version      0.0.1
// @description  白金会员也可观看超级会员视频－http://meitu.xunlei.com/videolist.html
// @match        *://*.xunlei.com/*
// @include      *://*.xunlei.com/*
// @author       lgh06
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var $ = s => document.querySelector(s);
    var aaa = function(){
        if(window.location.href.indexOf('meitu.xunlei.com')>=0){
            if($('#vediocon')) $('#vediocon').style.display = 'none';
            console.log(8888);
        }
        // Your code here...
    };
    setTimeout(aaa,1000);
    })();
