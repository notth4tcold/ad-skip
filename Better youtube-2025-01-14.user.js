// ==UserScript==
// @name         Better youtube
// @namespace    http://tampermonkey.net/
// @version      2025-01-14
// @description  try to take over the world!
// @author       You
// @match        https://*.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var waitingResponse = false;

(function() {
    'use strict';
    setInterval(() => {
        checkAdButton();
    }, 1000);
    init();
})();

function checkAdButton() {
    let adButton = document.querySelector(".ytp-skip-ad-button")
    if (adButton == null || waitingResponse) return;
    console.log("PRONTO PARA PULAR AD");
    waitingResponse = true;

    movePageUp();
    setTimeout(() => {
        moveButton(adButton);
    }, 6000);
    setTimeout(() => {
        sendRequestToClickSkipAd();
    }, 7000);
}

function movePageUp(){
    window.scrollTo(0, 0);
}

function moveButton(adButton){
    adButton.style.position = "absolute";
    adButton.style.left = 10+'px';
    adButton.style.top = 10+'px';
}

function sendRequestToClickSkipAd() {
    const url = "http://localhost:5000/skipAd";
    fetch(url).then(function(response) {
        waitingResponse = false;
        return response.json();
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}