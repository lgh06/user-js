
// ==UserScript==
// @name         泛微OA 创建流程 点击左上角蓝色图标 数据库字段名显示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/2.2.4/jquery.min.js
// @match        http://oa.heshenghe.cn:8089/spa/workflow/static4form/index.html*
// @grant none
// ==/UserScript==

(function() {
    'use strict';
    var $ = jQuery.noConflict();


    function main(){
      var list = $("[data-fieldname]").css({ "position": "relative"});
      Array.from(list).forEach(ele =>{

          var innerWrap = document.createElement("div");
          $(innerWrap).html($(ele).data("fieldname"));
          $(innerWrap).css({"position": "absolute", right: "0px", top: "0px", "opacity": "0.5", "zoom": "2"}).addClass("liugh");
          if($(ele).find(".liugh").length){
          }else{
            $(ele).append(innerWrap);
          }

      });
    }


    $(document).ready(()=>{
        console.log($('body'));
        setTimeout(()=>{
          //main();

            $(".wea-new-top-req-icon").click(()=>{
                console.log("INGINGING")
                main();
            });
        },1000);




    });
})();
