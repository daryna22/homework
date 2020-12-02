// task 4
var a = 0; 
while (a < 3) {
    alert('номер ' + a + '!');
    a++;
  }

// task 5
var i; 
do { i = prompt ('Введите число больше 100', 0);
} while (i <= 100 && i);

// task 1
var d = prompt ('Каково "официальное" название JavaScript?', );
if (d == 'ECMAScript') {
  alert ('Верно!');
} else {
  alert ('Не знаете? ECMAScript!');
}

// task 2
var c = prompt ('Введите число', );
if (c > 0 ) {
  alert (1);
} else if (c < 0 ) { 
  alert (-1);
} else if (c == 0 ) { 
  alert (0);
}

// task 3 
var l = prompt ('Кто пришел?', );
if (l == 'Админ') {
  var p = prompt ('Пароль?', );
  if ( p == 'Черный Властелин') {
    alert ('Добро пожаловать!');
} else if (p == null) {
    alert ('Вход отменен');
}
  else {
    alert ('Пароль неверен');
  }
} else if (l == null) {
  alert ('Вход отменен');
} else {
  alert ('Я вас не знаю');
}

