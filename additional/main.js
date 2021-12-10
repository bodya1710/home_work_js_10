//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// document.addEventListener('click', function (e){
//     let targetElement = e.path[0];
//     let targetTagName = targetElement.tagName;
//     let targetClass = targetElement.className;
//     let targetId = targetElement.id;
//     let targetWidth = targetElement.offsetWidth;
//     let targetHeight = targetElement.offsetHeight;
//     let suma = targetWidth * targetHeight;
//
//     console.log(targetTagName);
//     console.log(targetClass);
//     console.log(targetId);
//     console.log(targetWidth);
//     console.log(targetHeight);
//     console.log(suma);
// })

//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.addEventListener('click', function (e) {
//     let targetElement = e.path[0];
//     let targetTagName = targetElement.tagName;
//     let targetClass = targetElement.className;
//     let targetId = targetElement.id;
//     let targetWidth = targetElement.offsetWidth;
//     let targetHeight = targetElement.offsetHeight;
//     let s = targetWidth * targetHeight;
//     let popupWrap = document.createElement('div');
//     popupWrap.classList.add('popup');
//     popupWrap.style.padding = '30px 40px';
//     popupWrap.style.backgroundColor = '#d3d3d3';
//     popupWrap.style.borderRadius = '20px';
//     popupWrap.style.position = 'absolute';
//     popupWrap.style.top = `${e.y}px`;
//     popupWrap.style.left = `${e.x}px`;
//     let nameTagDiv = document.createElement('div');
//     nameTagDiv.innerText = `Tag name: ${targetTagName}`;
//     let listClssDiv = document.createElement('div');
//     listClssDiv.innerText = `Class name: ${targetClass}`;
//     let idDiv = document.createElement('div');
//     idDiv.innerText = `ID name: ${targetId}`;
//     let sDiv = document.createElement('div');
//     sDiv.innerText = `S: ${s}`;
//     document.body.appendChild(popupWrap);
//     popupWrap.appendChild(nameTagDiv);
//     popupWrap.appendChild(listClssDiv);
//     popupWrap.appendChild(idDiv);
//     popupWrap.appendChild(sDiv);
// })
// function remoElement() {
//     let allPopups = document.getElementsByClassName('popup');
//     for (const item of allPopups) {
//         item.remove();
//     }
// }
// setInterval(remoElement, 4000);

//-- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);
let checkStatys = document.createElement('input');
let checkAge = document.createElement('input');
let checkCity = document.createElement('input');
let checkButton = document.createElement('button');
checkButton.innerText = 'Click';
checkStatys.type = 'checkbox';
checkAge.type = 'checkbox';
checkCity.type = 'checkbox';
containerDiv.appendChild(checkStatys);
containerDiv.appendChild(checkAge);
containerDiv.appendChild(checkCity);
containerDiv.appendChild(checkButton);


checkButton.addEventListener('click', function () {
    let statys = checkStatys.checked;
    let age = checkAge.checked;
    let city = checkCity.checked;
    let arr = [];
    if (statys && age && city){
      arr =  usersWithAddress.filter(function (user) {return !user.status && user.age > 29 && user.address.city === 'Kyiv'});
    }
    if (statys && age){
        arr =  usersWithAddress.filter(function (user) {return user.age > 29 && !user.status});
    }
    if (age && city){
        arr =  usersWithAddress.filter(function (user) {return user.age > 29 && user.address.city === 'Kyiv'});
    }
    if (statys){
        arr =  usersWithAddress.filter(function (user) {return !user.status});
    }
    if (age){
        arr =  usersWithAddress.filter(function (user) {return user.age > 29});
    }
    if (city){
        arr =  usersWithAddress.filter(function (user) {return user.address.city === 'Kyiv'});
    }
    console.log(arr)
})


//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
/* Устанавливаем индекс слайда по умолчанию */
let btnPrev = document.getElementById('btn_prev');
let btnNext = document.getElementById('btn_next');
btnPrev.addEventListener('click',function previousSlide() {
    showSlides(slideIndex -= 1);
});
btnNext.addEventListener('click', function nextSlide() {
    showSlides(slideIndex += 1);
})
let slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('img');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
let btnNextNode = document.createElement('button');
let btnPreNode = document.createElement('button');
btnNextNode.innerText = 'Click';
btnPreNode.innerText = 'Click';
document.body.appendChild(btnNextNode);
document.body.appendChild(btnPreNode);
let test = document.getElementsByClassName('slider')[0];
getElement(test);

function getElement(element) {
    console.log(element);
    btnNextNode.addEventListener('click', function () {
        if (element.children.length > 1){
            getElement(element.firstElementChild);
        }else {
            getElement(element.nextElementSibling);
        }
    })
}
//parent Element
console.log(test)














