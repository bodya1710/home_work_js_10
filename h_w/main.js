//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
// let p = document.getElementById('text');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     p.style.display = 'none';
// })
// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn2 = document.getElementById('btn2');
// btn2.addEventListener('click', function () {
//     btn2.style.display = 'none';
// })
//створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let btnYear = document.getElementById('btn_year');
// btnYear.addEventListener('click', function () {
//     let year = document.getElementById('year').value;
//     if (+year <= 18){
//         alert('Кіна не буде');
//     }
// })
// Создайте меню, которое раскрывается/сворачивается при клике
// let btnMenu = document.getElementById('btn_menu');
// let menuOpen = document.getElementsByClassName('menu_open')[0];
// btnMenu.addEventListener('click', function () {
//     if (menuOpen.classList.contains('open')){
//         menuOpen.classList.remove('open');
//     }else {
//         menuOpen.classList.add('open');
//     }
//
// })

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.



let arrComent = [
    {
        title: 'Петро з америки',
        body: 'didnt really like this song when i first heard it, but listening to it again and again you realize what a phenomenal song it truly is!'
    },
    {
        title: 'Дядяко з америки',
        body: 'the passion put into this beautiful piece of work is amazing!'
    },
    {
        title: 'Цьотка з америки',
        body: 'I havent heard anything so beautiful like this in my life'
    }
]

for (const item of arrComent) {
    let wrapDiv = document.createElement('div');
    let titleComents = document.createElement('h2');
    titleComents.innerText = `${item.title}`;
    let btnOpenBodyComent = document.createElement('button');
    btnOpenBodyComent.innerText = `Click`;
    let bodyComents = document.createElement('p');
    bodyComents.innerText = `${item.body}`;
    bodyComents.classList.add('close');
    btnOpenBodyComent.addEventListener('click', function () {
    if (bodyComents.classList.contains('open')){
        bodyComents.classList.remove('open');
    }else {
        bodyComents.classList.add('open');
    }
    })
    document.body.appendChild(wrapDiv);
    wrapDiv.appendChild(titleComents);
    wrapDiv.appendChild(btnOpenBodyComent);
    wrapDiv.appendChild(bodyComents);
}

