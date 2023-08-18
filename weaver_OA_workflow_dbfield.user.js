
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

(function () {
  'use strict';
  var $ = jQuery.noConflict();

  var clickTimes = 0;


  function main() {
    var list = $("[data-fieldname]").css({ "position": "relative" });
    Array.from(list).forEach(ele => {

      if (clickTimes == 1) {

        var innerWrap = document.createElement("div");
        $(innerWrap).html($(ele).data("fieldname"));
        $(innerWrap).css({ "position": "absolute", right: "0px", top: "0px", "opacity": "0.8", "zoom": "1.6" }).addClass("liugh");
        if ($(ele).find(".liugh").length) {
        } else {
          $(ele).append(innerWrap);
        }

      } else if (clickTimes == 2) {
        var innerWrap2 = document.createElement("div");
        $(innerWrap2).html($(ele).data("fieldmark").substring(5));
        $(innerWrap2).css({ "position": "absolute", left: "0px", top: "0px", "opacity": "0.8", "zoom": "1.6" }).addClass("liugh2");
        if ($(ele).find(".liugh2").length) {
        } else {
          $(ele).append(innerWrap2);
        }
      } else if (clickTimes == 0) {
        $(ele).find(".liugh,.liugh2").remove();
      }





    });
  }


  $(document).ready(() => {
    console.log($('body'));
    setTimeout(() => {
      //main();

      $(".wea-new-top-req-icon").click(() => {
        clickTimes += 1;
        if (clickTimes > 2) {
          clickTimes = 0;
        }
        console.log("INGINGING")
        main();
      });
    }, 1000);




  });
})();
