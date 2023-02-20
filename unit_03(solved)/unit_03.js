// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.
const inp1 = document.querySelector('.i-1');
const but1 = document.querySelector('.b-1');
const out1 = document.querySelector('.out-1');

but1.onclick = () => {
    inpVal_1 = inp1.value;
    result = 4 == inpVal_1;
    out1.innerHTML = result;
}


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.
const a21 = 45;
const a22 = 32;
const but2 = document.querySelector('.b-2');
const out2 = document.querySelector('.out-2');

but2.onclick = () => {
    if (a21 > a22) {
        out2.innerHTML = a21;
    }
    else {
        out2.innerHTML = a22;
    }
}


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
const out3 = document.querySelector('.out-3');
const inp3 = document.querySelector('.i-31');
const inp3_2 = document.querySelector('.i-32');
const but3 = document.querySelector('.b-3');

but3.onclick = () => {
    const inp3Val = +inp3.value;
    const inp3Val_2 = +inp3_2.value;
    if (inp3Val > inp3Val_2) {
        out3.innerHTML  = inp3Val;
    }
    else {
        out3.innerHTML  = inp3Val_2;
    }
    result
}


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
const inp4 = document.querySelector('.i-4');
const out4 = document.querySelector('.out-4');

document.querySelector('.b-4').onclick = () => {
    const inp4Val = +inp4.value;
    if (inp4Val >= 18) {
        out4.innerHTML = '1';
    }
    else {
        out4.innerHTML = '0'
    }
}

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.
const inp5 = document.querySelector('.i-5');
const out5 = document.querySelector('.out-5');

document.querySelector('.b-5').onclick = () => {
    const inp5Val = +inp5.value;
    if (inp5Val < 0) {
        out5.innerHTML = 'm';
    }
    else if (inp5Val == 0) {
        out5.innerHTML = '0';
    }
    else {
        out5.innerHTML = '1';
    }
}

// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.
const inp6 = document.querySelector('.i-6');
const out6 = document.querySelector('.out-6');

function f6(){
    const inp6Val = +inp6.value
    if (inp6Val % 2 == 0) {
        out6.innerHTML = 'even';
    }
    else if (inp6Val % 2 != 0) {
        out6.innerHTML = 'odd';
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.
const inp7 = document.querySelector('.i-71');
const inp7_2 = document.querySelector('.i-72');
const out7 = document.querySelector('.out-7');

function f7(){
    const inp7Val = inp7.value;
    const inp7Val_2 = inp7_2.value;
        out7.innerHTML = inp7Val ** inp7Val_2;

}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.
const s8 = document.querySelector('.s-8');
const out8 = document.querySelector('.out-8');
function f8(){
    const s8Val = +s8.value;
     switch (s8Val) {
        case 1:
            out8.innerHTML = 'one';
            break;
        case 2:
            out8.innerHTML = 'two';
            break;
        case 3:
            out8.innerHTML = 'three';
            break;
        // default:
        //     console.log('ifug');
     }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.
const i9 = document.querySelector('.i-9');
const out9 = document.querySelector('.out-9');

function f9(){
    const s89Val = +i9.value;

    if (s89Val >= 1 && s89Val <= 32) {
        out9.innerHTML = '1';
    }
    else if (s89Val >= 44 && s89Val <= 64) {
        out9.innerHTML = '3';
    }
    else if (s89Val >= 33 && s89Val <= 43) {
        out9.innerHTML = '2';
    }
    else {
        out9.innerHTML = 'Копухтер уже понял что вы мошенник и позвонил 911';
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.
const s100 = document.querySelector('.s-100');
const out10 = document.querySelector('.out-10');

document.querySelector('.b-10').onclick = () => out10.innerHTML = s100.value;

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.
const s110 = document.querySelector('.s-110');
const out11 = document.querySelector('.out-11');

function f11(){
    out11.innerHTML = s110.value;
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12(){
    let v = i120.value;
    document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?
const i130 = document.querySelector('.i-130').value

function f13(){
document.querySelector('.out-13').innerHTML = (typeof i130)
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.
const out14 = document.querySelector('.out-14');
const inp141 = document.querySelector('.i-141');
const inp142 = document.querySelector('.i-142');
const s143 = document.querySelector('.s-143');

function f14(){
    let i141v = +inp141.value;
    let i142v = +inp142.value;
    let s143v = s143.value;
    let result;
switch (s143v) {
    case '+':
        result = i141v + i142v;
        break;
    case '-':
        result = i141v - i142v;
        break;
    case '*':
        result = i141v * i142v;
            break;
    case '/':
        result = i141v / i142v;
        break;
};
out14.innerHTML = result;
}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.
// const s151 = document.querySelector('.s-151')
// const s152 = document.querySelector('.s-152')
// const s153 = document.querySelector('.s-153')
// const out15 = document.querySelector('.out-15')


// function f15(){
// let s151v = s151.value
// let s152v = s152.value
// let s153v = s153.value

// out15.innerHTML = s151v + s153v + s152v;

// }

function f15() {
    let data1 = document.querySelector('.s-151').value;
    let data2 = document.querySelector('.s-152').value;
    let operation = document.querySelector('.s-153').value;
    let out = document.querySelector('.out-15');
 
    if (operation == '&&' && data1 == 1 && data2 == 1) {
       out.innerHTML = '1';
    }
    else if (operation == '||' && (data1 == 1 || data2 == 1)) {
       out.innerHTML = '1';
    }
    else {
       out.innerHTML = '0';
    }
 }


document.querySelector('.b-15').onclick = f15;