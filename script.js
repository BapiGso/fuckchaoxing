// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://mooc1.chaoxing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function(){
        var shuiying=document.getElementsByClassName("mask_div")
        for (var i=0;i<shuiying.length;i++){
            shuiying[i].innerHTML=""
            shuiying[i].style.color="#FFF"
        }
}
})();
