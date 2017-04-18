// ==UserScript==
// @name        openclasseroom
// @namespace   openclasseroom
// @description close popup openclasseroom 
// @include     https://*.openclassrooms.com/*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @run-at      document-start
// ==/UserScript==

window.addEventListener ("load", pageFullyLoaded);

function disable_fancybox(){
document.getElementsByClassName('fancybox-overlay')[0].style.display = "none";
  document.getElementsByClassName('fancybox-wrap')[0].style.display = "none";
}

function check_fancybox(){
console.log(document.getElementsByClassName('fancybox-overlay'));
setTimeout(disable_fancybox, 500);
}

function pageFullyLoaded () {
    console.log ("==> Page is fully loaded, including images.", new Date() );
    //document.getElementsByClassName('fancybox-wrap')[0].style.display = "none";
    console.log(document.getElementsByClassName('course'));
    check_fancybox();
}

