// ==UserScript==
// @name        openclasseroom
// @namespace   openclasseroom
// @description close popup openclassroom 
// @include     https://*.openclassrooms.com/*
// @version     
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @run-at      document-start
// ==/UserScript==

console.log ("==> Script start.", new Date() );

// 1ST PART OF SCRIPT RUN GOES HERE.
console.log ("==> 1st part of script run.", new Date() );

document.addEventListener ("DOMContentLoaded", DOM_ContentReady);
window.addEventListener ("load", pageFullyLoaded);

function DOM_ContentReady () {
    // 2ND PART OF SCRIPT RUN GOES HERE.
    // This is the equivalent of @run-at document-end
    console.log ("==> 2nd part of script run.", new Date() );
}

function disable_fancybox(){
    document.getElementsByClassName('fancybox-overlay')[0].style.display = "none";
    document.getElementsByClassName('fancybox-wrap')[0].style.display = "none";
}

function check_fancybox(){
    // traitement
    console.log(document.getElementsByClassName('fancybox-overlay'));
    setTimeout(disable_fancybox, 500);
}

function pageFullyLoaded () {
    console.log ("==> Page is fully loaded, including script.", new Date() );
    //document.getElementsByClassName('fancybox-wrap')[0].style.display = "none";
    console.log(document.getElementsByClassName('course'));
    check_fancybox();
}

console.log ("==> Script end.", new Date() );

