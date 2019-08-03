"use strict";

filterSelection("all");

// highlight active button
var btns = document.getElementsByClassName("sort-btn");

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.querySelector(".active");
		current.classList.remove("active");
		this.classList.add("active");
	});
}

//display by n value 
function filterSelection(n) {

	var x = document.getElementsByClassName("all");

	for (var i = 0; i < x.length; i++) {

		x[i].classList.remove("show");
		if (x[i].className.indexOf(n) != -1) {
			x[i].classList.add("show");
		}

	}

}

//display by list value
function sortByList() {

	var district = document.querySelector(".selectSorting").value;
	filterSelection(district);

}

//display by search
function searchFunction() {

    var searchInput = document.getElementById("search-input");
    var filter = searchInput.value.toUpperCase();
    var allContainers = document.getElementsByClassName("all");

    for (var i = 0; i < allContainers.length; i++) {
        var txtValue = allContainers[i].textContent;
        
        if (txtValue.toUpperCase().indexOf(filter) != -1) {
            allContainers[i].style.display = "";
        } else {
            allContainers[i].style.display = "none";
        }
    }
}