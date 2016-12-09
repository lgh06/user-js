// ==UserScript==
// @name         wechat－右键点击文章页蓝色公众号id 进入微信历史文章－请允许弹出窗口
// @version      0.0.1
// @description  请允许弹出窗口－右键点击文章页蓝色公众号id 进入微信历史文章
// @include      *://*.qq.com/*
// @include      *://*.sogou.com/*
// @author       lgh06
// @run-at       document-idle
// @grant        none
// ==/UserScript==




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


    var $ = s => document.querySelector(s);
    var $$ = s => document.querySelectorAll(s);
    var aaa = function(){
        if(window.location.href.indexOf('mp.weixin.qq.com')>=0){
            var a = $('#post-user');
            if(a) {
                var s = $('.profile_meta_value');
                var sid = s.innerText;
                console.log($('#post-user').innerText);
                console.log(sid);
                $('.rich_media_meta_list').addEventListener('contextmenu', function(ev) {
                    ev.preventDefault();

                    if(ev.target === a){
                        console.log(11111111);
                        var n = document.createElement('a');
                        n.href = 'http://weixin.sogou.com/weixin?type=1&query='+sid+'&ie=utf8&_sug_=n&_sug_type_=';
                        //window.open(n.href);
                        //n.target="_blank";
                        n.click();
                        //window.open(n.href);
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
                if(history.length) setTimeout(()=>{history.back();},1000);
            }
            console.log(search,text);
        }
    };
    setTimeout(aaa,500);
})();
