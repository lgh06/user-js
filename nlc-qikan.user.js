// ==UserScript==
// @name         国家图书馆-龙源期刊文字版-辅助工具
// @version      0.1
// @description  国家图书馆-辅助工具
// @match        http://nlc.vip.qikan.com.cn/text/*
// @grant        none
// @author       lgh06
// @require      https://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    var $ = jQuery.noConflict();
    var url = window.location.href;
    // 龙源电子期刊 文本版 文章页面 右侧目录 跟随浮动
    if(url.match(/http\:\/\/nlc\.vip\.qikan\.com\.cn\/text\/Article.aspx/)){
        var $firstA = $('.eiboxrightbody0dlcase').find('a')[0];
        $(window).scroll((e)=>{
            if(!isInPage($firstA)){
                $('.eitextbox').css('display','none');
                $('.eiboxrightbody0dlcase').css({position:'fixed',top:0});
            }
            if(isInPage($('.eiboxrightbody0')[0])){
                $('.eitextbox').css('display','block');
                $('.eiboxrightbody0dlcase').css({position:'static'});
            }
        });
        $('.eiboxrightbody0dlcase').find('a').attr('target', '_self');
        var nowId = window.location.href.match(/titleid=.*/)[0].replace('titleid=','');
        var $nowA = $(`.eiboxrightbody0 a[href*=${nowId}]`);
        var $nowAContainer = $('.eiboxrightbody0dlcase');
        var length = $nowA.offset().top - $nowAContainer.offset().top;
        console.log(length);
        $nowAContainer.scrollTop($nowA.offset().top - $nowAContainer.offset().top - 10);
    }


    function isInPage(elem){
        var rect = elem.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }

})();
