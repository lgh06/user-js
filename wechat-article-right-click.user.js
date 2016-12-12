// ==UserScript==
// @name         wechat－右键点击文章页蓝色公众号id 进入微信历史文章－请允许弹出窗口
// @version      0.0.1
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
                window.open($a[0].href);
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

        if(window.location.href.indexOf('weixin.sogou.com')>=0){
            var search = getParameterByName('query');
            var text = $('label[name=em_weixinhao]').innerText;
            if(search === text) {
                $('.tit').querySelector('a').click();
                if(history.length>=3) setTimeout(()=>{history.back();},1000);
            }
            console.log(search,text);
            console.log(jQuery('.tit'));
        }
    };
    setTimeout(aaa,500);
})();
