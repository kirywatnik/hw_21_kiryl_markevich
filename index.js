// const button = document.querySelector('button');
// const text = document.getElementById('text');

// button.addEventListener('click', () => {
//     text.hidden = true;
// } );


// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     btn.hidden = true;
// } );

// const title = document.getElementById('id');
// const list = document.getElementById('list');
// let bool = true;
// title.addEventListener('click', () => {
//     if(bool ===true){
//     list.hidden = bool;
//     bool=false;
//     } else {
//         list.hidden = false;
//         bool= true;
//     }
// });


const input = document.getElementById('input');
const one = document.getElementById('btn_1');
const two = document.getElementById('btn_2');
const three = document.getElementById('btn_3');
const four = document.getElementById('btn_4');
const five = document.getElementById('btn_5');
const six = document.getElementById('btn_6');
const seven = document.getElementById('btn_7');
const eight = document.getElementById('btn_8');
const nine = document.getElementById('btn_9');
const zero = document.getElementById('btn_0');
const sum = document.getElementById('btn_+');
const minus = document.getElementById('btn_-');
const mul = document.getElementById('btn_*');
const delenie = document.getElementById('btn_/');
const del = document.getElementById('btn_del');
const h = document.getElementById('btn_H');
const ravno = document.getElementById('btn_=');
const ce = document.getElementById('btn_ce');
const dot = document.getElementById('btn_.');
const histList = document.getElementById('hist_list');
const list = document.getElementById('list');
const x = document.getElementById('X');

one.addEventListener('click', () => {
    input.value += 1;
});
two.addEventListener('click', () => {
    input.value += 2;
});
three.addEventListener('click', () => {
    input.value += 3;
});
four.addEventListener('click', () => {
    input.value += 4;
});
five.addEventListener('click', () => {
    input.value += 5;
});
six.addEventListener('click', () => {
    input.value += 6;
});
seven.addEventListener('click', () => {
    input.value += 7;
});
eight.addEventListener('click', () => {
    input.value += 8;
});
nine.addEventListener('click', () => {
    input.value += 9;
});
zero.addEventListener('click', () => {
    
        input.value += 0;
    
});
ce.addEventListener('click', () => {
    input.value = "";
});
dot.addEventListener('click', () => {
    if (input.value !== "" && input.value[input.value.length - 1] !== '+' && input.value[input.value.length - 1] !== '-' && input.value[input.value.length - 1] !== '*' && input.value[input.value.length - 1] !== '/' && input.value[input.value.length - 1] !== '.') {
        input.value += ".";
    }
});
del.addEventListener('click', () => {
    let arr = input.value.split('');
    arr.pop();
    input.value = arr.join("");
});

sum.addEventListener('click', () => {
    if (input.value !== "" && input.value[input.value.length - 1] !== '+' && input.value[input.value.length - 1] !== '-' && input.value[input.value.length - 1] !== '*' && input.value[input.value.length - 1] !== '/' && input.value[input.value.length - 1] !== '.') {
        input.value += "+";
    }
});
minus.addEventListener('click', () => {
    if (input.value[input.value.length - 1] !== '+' && input.value[input.value.length - 1] !== '-' && input.value[input.value.length - 1] !== '*' && input.value[input.value.length - 1] !== '/' && input.value[input.value.length - 1] !== '.') {
        input.value += "-";
    }
});
delenie.addEventListener('click', () => {
    if (input.value !== "" && input.value[input.value.length - 1] !== '+' && input.value[input.value.length - 1] !== '-' && input.value[input.value.length - 1] !== '*' && input.value[input.value.length - 1] !== '/' && input.value[input.value.length - 1] !== '.') {
        input.value += "/";
    }
});
mul.addEventListener('click', () => {
    if (input.value !== "" && input.value[input.value.length - 1] !== '+' && input.value[input.value.length - 1] !== '-' && input.value[input.value.length - 1] !== '*' && input.value[input.value.length - 1] !== '/' && input.value[input.value.length - 1] !== '.') {
        input.value += "*";
    }
});
ravno.addEventListener('click', () => {
    list.innerHTML = list.innerHTML + '<li>'+input.value+'</li>';
});
ravno.addEventListener('click', () => {
    if (input.value.includes('+')) {
        let arr = input.value.split('+');
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += Number(arr[i]);
        }
        input.value = sum;
    }
    if (input.value.includes('-', 1)) {
        if (input.value.indexOf('-') === 0) {
            let arr = input.value.split('-');
            arr.shift();
            let result = 0;
            result = Number(arr[0]) + Number(arr[1]);
            input.value = '-' + result;
        } else {
            let arr = input.value.split('-');
            let result = 0;
            for (let i = 0; i < arr.length; i++) {
                result = Number(arr[0]) - Number(arr[1]);
            }
            input.value = result;
        }
    }
    if (input.value.includes('*')) {
        let arr = input.value.split('*');
        let mul = 1;
        for (let i = 0; i < arr.length; i++) {
            mul *= Number(arr[i]);
        }
        input.value = mul;
    }
    if (input.value.includes('/')) {
        let arr = input.value.split('/');
        let result = 1;
        for (let i = 0; i < arr.length; i++) {
            result = Number(arr[0]) / Number(arr[1]);
        }
        input.value = result;
    }
});

h.addEventListener('click', () => {
    histList.style.display = 'flex';
});
x.addEventListener('click', () => {
    histList.style.display = 'none';
});








