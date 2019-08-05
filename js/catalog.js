"use strict";

// modal window
var modal = document.getElementById('modal');
var arrayOfObjects = JSON.parse(obj);
var btns = document.getElementsByClassName("filter-btn");
var selectSorting = document.querySelector(".selectSorting");

addAllObjects(0);
filterSelection("div-container");

// highlight active button
for ( var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {

        var current = document.querySelector(".active");
        current.classList.remove("active");
        this.classList.add("active");

        if ( !selectSorting.classList.contains("active") ) {
            selectSorting.value = "div-container";
        }
    
    });
}

    for ( i; i < arrayOfObjects.length; i++) {
        
        var d = document.createElement("div");
        d.classList.add("div-container");

        if (arrayOfObjects[i].appTypeName == "Сдается в аренду") {
            d.classList.add("rent");
        } else {
            d.classList.add("selling");
        }

        if (arrayOfObjects[i].propertyTypeName == "квартира") {
            d.classList.add("apartment");
        } else {
            d.classList.add("house");
        }

        switch (arrayOfObjects[i].district) {
            case "Святошинский":
                d.classList.add("sviat");
            break;
            case "Голосеевский":
                d.classList.add("golos");
            break;
            case "Дарницкий":
                d.classList.add("darn");
            break;
            case "Деснянский":
                d.classList.add("desn");
            break;
            case "Печерский":
                d.classList.add("pech");
            break;
            case "Шевченковский":
                d.classList.add("shevch");
            break;
            case "Соломенский":
                d.classList.add("solom");
            break;
            default:
                "Все районы";
        }

        d.innerHTML = 

        '<div class="img-container img-container' + arrayOfObjects[i].photo +'"></div>' +
        '<p>' + arrayOfObjects[i].appTypeName + 
        '</p><p><b>Тип недвижимости: </b>' + arrayOfObjects[i].propertyTypeName + 
        '</p><p><b>Район: </b>' + arrayOfObjects[i].district +
        '</p><p><b>Улица: </b>' + arrayOfObjects[i].street + 
        '</p><p><b>Комнат: </b>' + arrayOfObjects[i].room_amount + 
        '</p><p><b>Этаж: </b>' + arrayOfObjects[i].floor +
        '</p><p><b>Общая площадь: </b>' + arrayOfObjects[i].square + 
        ' м.кв.</p><p><b>Цена: </b>' + arrayOfObjects[i].price + 
        ' $</p><p>' + arrayOfObjects[i].description;

        document.querySelector(".container").appendChild(d);
    
    }

}

function filterSelection(n) {

    var x = document.getElementsByClassName("div-container");

    for (var i = 0; i < x.length; i++) {

        x[i].classList.remove("show");
        if (x[i].className.indexOf(n) != -1) {
            x[i].classList.add("show");
        }

    }

}

function filterByList() {

    var district = document.querySelector(".selectSorting").value;
    filterSelection(district);

}

function searchFunction() {

    var searchInput = document.getElementById("search-input");
    var filter = searchInput.value.toUpperCase();
    var allContainers = document.getElementsByClassName("div-container");

    for (var i = 0; i < allContainers.length; i++) {
        var txtValue = allContainers[i].textContent;
        
        if (txtValue.toUpperCase().indexOf(filter) != -1) {
            allContainers[i].style.display = "";
        } else {
            allContainers[i].style.display = "none";
        }
    }

}

function showModal() {

    modal.style.display = "block";

}

function closeModal() {

    modal.style.display = "none";

}

function addProperty() {

    filterSelection("div-container");

    selectSorting.value = "div-container";

    var form = document.forms.addPropertyForm;
    var photo = form.elements.propertyPhoto.value;
    var userName = form.elements.userName.value;
    var appTypeName = document.getElementById('appTypeName');
    var propertyTypeName = document.getElementById('propertyTypeName');
    var districtName = document.getElementById('districtName');
    var streetName = document.getElementById('streetName');
    var roomNumber = form.elements.roomNumber.value;
    var floorNumber = form.elements.floorNumber.value;
    var squareNumber = form.elements.squareNumber.value;
    var priceNumber = form.elements.priceNumber.value;
    var description = form.elements.description.value;

    var div = document.createElement('div');

    div.classList.add("div-container");
    div.classList.add(appTypeName.value);
    div.classList.add(propertyTypeName.value);
    div.classList.add(districtName.value);

    var newObject = {};

    newObject.photo = 1,
    newObject.appTypeName = appTypeName.options[appTypeName.selectedIndex].text;
    newObject.propertyTypeName = propertyTypeName.options[propertyTypeName.selectedIndex].text;
    newObject.district = districtName.options[districtName.selectedIndex].text; 
    newObject.street = streetName.options[streetName.selectedIndex].text;
    newObject.room_amount = roomNumber;
    newObject.floor = floorNumber;
    newObject.square = squareNumber;
    newObject.price = priceNumber;
    newObject.description = description;

    arrayOfObjects.push(newObject);

    addAllObjects(arrayOfObjects.length-1);
    closeModal();
    filterSelection("div-container");
}

function sortBySelect() {

    var sortSelect = document.getElementById("sortSelect");

    if (sortSelect.options[sortSelect.selectedIndex].text == "Возрастанию цены") {

        arrayOfObjects.sort(function(a,b) {
            return a.price - b.price;
        });

    } else if (sortSelect.options[sortSelect.selectedIndex].text == "Спаданию цены") {
        arrayOfObjects.sort(function(a,b) {
            return b.price - a.price;
        });

    } else if (sortSelect.options[sortSelect.selectedIndex].text == "Возрастанию площади") {
        arrayOfObjects.sort(function(a,b) {
            return a.square - b.square;
        });

    } else if (sortSelect.options[sortSelect.selectedIndex].text == "Спаданию площади") {
        arrayOfObjects.sort(function(a,b) {
            return b.square - a.square;
        });

    } else if (sortSelect.options[sortSelect.selectedIndex].text == "Возрастанию кол. комнат") {
        arrayOfObjects.sort(function(a,b) {
            return a.room_amount - b.room_amount;
        });

    } else if (sortSelect.options[sortSelect.selectedIndex].text == "Спаданию кол. комнат") {
        arrayOfObjects.sort(function(a,b) {
            return b.room_amount - a.room_amount;
        });
    }  


    document.querySelector(".container").innerHTML = "";
    addAllObjects(0);  
    filterSelection("div-container");

}