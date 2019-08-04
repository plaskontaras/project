"use strict";

// modal window
var modal = document.getElementById('modal');

var obj = [{ 
       photo: 1,
       appTypeName: "Сдается в аренду",
         propertyTypeName: "квартира", 
         district: "Голосеевский", 
         street: "Независимости",
         room_amount: "3",
       floor: "5",
       square: "62",
         price: "400",
       description: "Новый дом 2012 года, монолитно-каркасный с кирпичным наполнением. В квартире выполнены подготовительные работы: стяжка, штукатурка, проведена электропроводка. Площадь: жилая 62,4 кв.м, кухня 15,3 кв.м, h=2.90 м, большой холл, 2 с/у, гардеробная, балкон застеклен, индивидуальный счетчик тепла.  За домом закрытый двор с парковкой, охрана, магазины, кафе, ТРЦ Океан Плаза, Метро Дворец Украина – 300 м."
       },
       { 
       photo: 2,
       appTypeName: "Продается",
         propertyTypeName: "квартира", 
         district: "Печерский", 
         street: "Б.Хмельницкого",
         room_amount: "3",
       floor: "2",
       square: "60",
         price: "70000",
       description: "Стеклопакеты, балкон с комнаты застеклен/утеплен/стеклопакеты, линолеум, окна в тихий и зеленый двор, Жилое состояние, Хорошая инфраструктура"
       },
       { 
       photo: 3,
       appTypeName: "Продается",
         propertyTypeName: "квартира", 
         district: "Деснянский", 
         street: "Потапенко",
         room_amount: "4",
       floor: "1",
       square: "83",
         price: "50000",
       description: "Стеклопакеты, балкон с комнаты застеклен/утеплен/стеклопакеты."
       },
       { 
       photo: 4,
       appTypeName: "Продается",
         propertyTypeName: "квартира", 
         district: "Шевченковский", 
         street: "Братиславская",
         room_amount: "3",
       floor: "2",
       square: "73",
         price: "50000",
       description: "Стеклопакеты, балкон с комнаты застеклен/утеплен/стеклопакеты, линолеум, окна в тихий и зеленый двор, Жилое состояние, Хорошая инфраструктура"
       },
       { 
       photo: 1,
       appTypeName: "Продается",
         propertyTypeName: "квартира", 
         district: "Соломенский", 
         street: "Б.Хмельницкого",
         room_amount: "1",
       floor: "4",
       square: "34",
         price: "36000",
       description: "Квартира с хорошим ремонтом сделанным для себя, все раздельно, большой балкон застеклен. Новые окна, сантехника, трубы. Подъезд в хорошем состоянии, новый лифт, домофон. Во дворе дома есть несколько детских площадок, детский сад и школа. Рядом с домом есть бювет, остановки общественного транспорта, сильпо, ТРЦ ОРНАМЕНТ. "
       },
       { 
       photo: 2,
       appTypeName: "Сдается в аренду",
         propertyTypeName: "квартира", 
         district: "Голосеевский", 
         street: "А.Семиренко",
         room_amount: "2",
       floor: "3",
       square: "52",
         price: "700",
       description: "Кафель, паркет,м.п.окна,балкон не застеклён.Хорошая инфраструктура.Чистая продажа"
       },
       { 
       photo: 3,
       appTypeName: "Продается",
         propertyTypeName: "квартира", 
         district: "Деснянский", 
         street: "Потапова",
         room_amount: "2",
       floor: "4",
       square: "40",
         price: "40000",
       description: "Стеклопакеты, балкон с комнаты застеклен/утеплен/стеклопакеты, линолеум, окна в тихий и зеленый двор, Жилое состояние, Хорошая инфраструктура"
       },
       { 
       photo: 5,
       appTypeName: "Продается",
         propertyTypeName: "дом", 
         district: "Соломенский", 
         street: "Б.Хмельницкого",
         room_amount: "10",
       floor: "2",
       square: "162",
         price: "150000",
       description: "Новый дом 2012 года, монолитно-каркасный с кирпичным наполнением. В квартире выполнены подготовительные работы: стяжка, штукатурка, проведена электропроводка. Площадь: жилая 62,4 кв.м, кухня 15,3 кв.м, h=2.90 м, большой холл, 2 с/у, гардеробная, балкон застеклен, индивидуальный счетчик тепла.  За домом закрытый двор с парковкой, охрана, магазины, кафе, ТРЦ Океан Плаза, Метро Дворец Украина – 300 м."
       },
       { 
       photo: 4,
       appTypeName: "Сдается в аренду",
         propertyTypeName: "квартира", 
         district: "Шевченковский", 
         street: "А.Семиренко",
         room_amount: "2",
       floor: "3",
       square: "48",
         price: "600",
       description: "Хорошая инфраструктура"
       },
       { 
       photo: 3,
       appTypeName: "Продается",
         propertyTypeName: "квартира", 
         district: "Печерский", 
         street: "Братиславская",
         room_amount: "2",
       floor: "10",
       square: "52",
         price: "20000",
       description: "Стеклопакеты, балкон с комнаты застеклен/утеплен/стеклопакеты, линолеум, окна в тихий и зеленый двор, Жилое состояние, Хорошая инфраструктура"
       },
       { 
       photo: 6,
       appTypeName: "Сдается в аренду",
         propertyTypeName: "дом", 
         district: "Дарницкий", 
         street: "Братиславская",
         room_amount: "3",
       floor: "1",
       square: "41",
         price: "1000",
       description: "Линолеум, окна в тихий и зеленый двор, Жилое состояние, хорошая инфраструктура"
       },
       { 
       photo: 1,
       appTypeName: "Сдается в аренду",
         propertyTypeName: "квартира", 
         district: "Святошинский", 
         street: "Зависимости",
         room_amount: "1",
       floor: "12",
       square: "23",
         price: "200",
       description: "Стеклопакеты, балкон с комнаты застеклен/утеплен/стеклопакеты, линолеум, окна в тихий и зеленый двор, Жилое состояние, Хорошая инфраструктура"
       }];

// add all objects to the page
for ( var i = 0; i < obj.length; i++) {
  var d = document.createElement("div");
  
  d.classList.add("div-container");
  
  if (obj[i].appTypeName == "Сдается в аренду") {
    d.classList.add("rent");
  } else {
    d.classList.add("selling");
  }

  if (obj[i].propertyTypeName == "квартира") {
    d.classList.add("apartment");
  } else {
    d.classList.add("house");
  }

  switch (obj[i].district) {
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

  d.innerHTML =   '<div class="img-container img-container' + obj[i].photo +'"></div>' +
          '<p>' + obj[i].appTypeName + 
          '</p><p><b>Тип недвижимости: </b>' + obj[i].propertyTypeName + 
          '</p><p><b>Район: </b>' + obj[i].district +
            '</p><p><b>Улица: </b>' + obj[i].street + 
            '</p><p><b>Комнат: </b>' + obj[i].room_amount + 
            '</p><p><b>Этаж: </b>' + obj[i].floor +
            '</p><p><b>Общая площадь: </b>' + obj[i].square + 
            ' м.кв.</p><p><b>Цена: </b>' + obj[i].price + 
            ' $</p><p>' + obj[i].description;

  document.querySelector(".container").appendChild(d);
}


filterSelection("div-container");

var selectSorting = document.querySelector(".selectSorting");

// highlight active button
var btns = document.getElementsByClassName("filter-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.querySelector(".active");
    current.classList.remove("active");
    this.classList.add("active");
    
    if (!selectSorting.classList.contains("active") ) {
      selectSorting.value = "div-container";
    }
  });
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

function sortByList() {

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

  obj.push(newObject);

  var d = document.createElement("div");
  var i = obj.length-1;
  d.classList.add("div-container");
  
  if (obj[i].appTypeName == "Сдается в аренду") {
    d.classList.add("rent");
  } else {
    d.classList.add("selling");
  }

  if (obj[i].propertyTypeName == "квартира") {
    d.classList.add("apartment");
  } else {
    d.classList.add("house");
  }

  switch (obj[i].district) {
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

  d.innerHTML =   '<div class="img-container img-container' + obj[i].photo +'"></div>' +
          '<p>' + obj[i].appTypeName + 
          '</p><p><b>Тип недвижимости: </b>' + obj[i].propertyTypeName + 
          '</p><p><b>Район: </b>' + obj[i].district +
            '</p><p><b>Улица: </b>' + obj[i].street + 
            '</p><p><b>Комнат: </b>' + obj[i].room_amount + 
            '</p><p><b>Этаж: </b>' + obj[i].floor +
            '</p><p><b>Общая площадь: </b>' + obj[i].square + 
            ' м.кв.</p><p><b>Цена: </b>' + obj[i].price + 
            ' $</p><p>' + obj[i].description;

  document.querySelector(".container").appendChild(d);

  closeModal();
  filterSelection("div-container");
}