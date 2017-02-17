// ==UserScript==
// @name         delete-qq-mail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  delete-qq-mail,QQ邮箱想一键删除几千封邮件，没门，自己写个脚本吧,to begin:set window.BEGIN = 1,to stop:refresh current page.
// @author       LGH
// @match        https://mail.qq.com/cgi-bin/frame_html*
// @grant        none
// @require      https://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function a () {
        var i;
        window.LGH = window.$ = jQuery;
        var begin ;
        i =
            setInterval(()=>{
            begin = window.BEGIN;

            if(begin){
                console.log('in func');
                LGH(LGH('#mainFrame')[0].contentWindow.document).find('input#ckb_selectAll').click();
                LGH(LGH('#mainFrame')[0].contentWindow.document).find('#quick_del').click();
            }

        },4000);
    }

    setTimeout(a,4000);

})();
