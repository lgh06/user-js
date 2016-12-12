// ==UserScript==
// @name         wechat－右键点击文章页蓝色公众号id 进入微信历史文章－请允许弹出窗口
// @version      0.0.2
// @description  请允许弹出窗口－右键点击文章页蓝色公众号id 进入微信历史文章
// @match        *
// @include      *://*.qq.com/*
// @include      *://*.sogou.com/*
// @author       lgh06
// @run-at       document-idle
// @grant        GM_xmlhttpRequest
// @connect      sogou.com
// @require http://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min.js
// ==/UserScript==

jQuery.noConflict();


(function() {
    'use strict';


    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function doSearch(s){
        var sid = s.innerText;
        console.log(sid);
        console.log(11111111);

        var aurl = 'http://weixin.sogou.com/weixin?type=1&query='+sid+'&ie=utf8&_sug_=n&_sug_type_=';
        GM_xmlhttpRequest({
            method: "GET",
            url: aurl,
            onload: function(response) {
                var label = jQuery(response.responseText).find('.tit').get(0);
                var $a = jQuery(label).find('a');
                if(!$a.length) return;
                window.open($a[0].href);
            }
        });

    }

    function getCount(title,sid){
        var curl = 'http://weixin.sogou.com/weixin?type=2&ie=utf8&query='+title+'&tsn=0&usip='+sid+'&from=tool';
        console.log(curl);
        GM_xmlhttpRequest({
            method: "GET",
            url: curl,
            onload: function(response) {

                var $s1 = jQuery(response.responseText).find('span.s1');
                if(!$s1.length) return;
                console.log('count:'+$s1[0].innerText);
                jQuery('#post-user').after('<span class="rich_media_meta rich_media_meta_text">'+'阅读'+$s1[0].innerText+'伪</span>');
            }
        });
    }

    var $ = s => document.querySelector(s);
    var $$ = s => document.querySelectorAll(s);
    var aaa = function(){
        if(window.location.href.indexOf('mp.weixin.qq.com')>=0){
            var a = $('#post-user');

            if(a) {
                jQuery(a).css('cursor','context-menu');

                var s = $('.profile_meta_value');

                jQuery('#js_profile_qrcode').click(()=>{doSearch(s);}).find('*').css('cursor','pointer');

                console.log($('#post-user').innerText);

                getCount($('#activity-name').innerText,s.innerText);

                $('.rich_media_meta_list').addEventListener('contextmenu', function(ev) {
                    ev.preventDefault();
                    if(ev.target === a){
                        doSearch(s);

                    }
                    return false;
                }, false);
            }
            console.log(9999);
        }

    };
    setTimeout(aaa,500);
})();
