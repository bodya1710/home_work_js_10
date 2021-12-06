//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку
// считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let collectionForm = document.forms;
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     for (const inputColection of collectionForm) {
//         for (const item of inputColection.elements) {
//             console.log(item.value);
//         }
//     }
// });

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let ClickCreateTable = document.getElementById('create_table');
// ClickCreateTable.addEventListener('click', function () {
//     let rowTable = document.getElementById('row_table').value;
//     let cells = document.getElementById('cells').value;
//     let contentTable = document.getElementById('content_table').value;
//     let tableBody = document.createElement('table');
//     for (let i = 0; i < +rowTable; i++) {
//         let tr = document.createElement('tr');
//         tableBody.appendChild(tr);
//         for (let j = 0; j < +cells; j++) {
//             let td = document.createElement('td');
//             td.innerText = `${contentTable}`;
//             td.style.border = '1px solid black';
//             tr.appendChild(td);
//         }
//     }
//     tableBody.style.border = '1px solid black';
//     document.body.appendChild(tableBody);
// });

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let badWordsArr = ['сука', 'блять', 'йди нахуй', 'чамара', 'уєбан', 'уйобок'];
// let btnCheck = document.getElementById('btn_check');
// btnCheck.addEventListener('click', function () {
//     let wordInput = document.getElementById('word_check').value;
//     for (const word of badWordsArr) {
//         if (wordInput === word){
//             alert('Не матюкайся')
//         }
//     }
// })

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let badWordsArr = ['сука', 'блять', 'йди нахуй', 'чамара', 'уєбан', 'уйобок'];
let btnCheck = document.getElementById('btn_check');
btnCheck.addEventListener('click', function () {
    let wordInput = document.getElementById('word_check').value;
    for (const word of badWordsArr) {
        // if (wordInput.search(word) === -1){
        //     alert('Не матюкайся')
        // }
        console.log(word);
    }
})

