"use strict";
//this funcion show map
(function () {
		        		
var setting = {"height":400,"width":700,"zoom":17,
				"queryString":"улица Мечникова, 3, Киев, Украина",
				"place_id":"ChIJe0Qe_QDP1EARAgJrw-qb2Rc","satellite":false,"centerCoord":[50.43752961922163,30.528857949999974],
				"cid":"0x17d99beac36b0202","cityUrl":"/ukraine/kiev",
				"id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"63102"};

var d = document;
var s = d.createElement('script');
s.src = 'https://1map.com/js/script-for-user.js?embed_id=63102';
s.async = true;
s.onload = function (e) {
  window.OneMap.initMap(setting)
};
var to = d.getElementsByTagName('script')[0];
to.parentNode.insertBefore(s, to);
  	
})();

// Code for add review. It will be stored in LocalStorage
var reviewContainer = document.getElementById('review__slider-container');
var arr;
var lastElement = document.querySelector(".review__next");

if ( localStorage.data == undefined ) {
	arr = JSON.parse(data);
} else {
	arr = JSON.parse(localStorage.data);
}

for ( var i = 0; i < arr.length; i++) {
	var div = document.createElement('div');
	div.innerHTML = "<p>" + arr[i].name + "</p>" + arr[i].description + "</p>";
	div.className = "review__Slide";
	reviewContainer.insertBefore(div,lastElement);
}

function addReview() {
	var userName = prompt("Введите ваше имя:","");
	var userReview = prompt("Оставьте свой отзыв:","");

	if (userName === null || userName === "" || userReview === null || userReview === "") {
		alert('Вы не ввели информацию');
		return;
	}

	arr[i] = {};
	arr[i].name = userName;
	arr[i].description = userReview;
	var div = document.createElement('div');
	div.innerHTML = "<p>" + arr[i].name + "</p>" + arr[i].description + "</p>";
	div.className = "review__Slide";
	reviewContainer.insertBefore(div,lastElement);
	localStorage.data = JSON.stringify(arr);
	i++;

	slideIndex = i;
	showSlides(slideIndex);
}

// code for slider
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var slides = document.getElementsByClassName("review__Slide");

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for ( var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex-1].style.display = "block";
}