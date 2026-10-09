
// Задание 1: Сохранение примитивных данных в LocalStorage

localStorage.setItem("greeting", "Привет, мир!");

let greeting = localStorage.getItem("greeting");
console.log(greeting);


// Задание 2: Удаление данных из LocalStorage

localStorage.removeItem("greeting");

greeting = localStorage.getItem("greeting");
console.log(greeting);


// Задание 3: Хранение объектов в LocalStorage с использованием JSON

let user = {
    name: "Дастан",
    age: 26
};

localStorage.setItem("user", JSON.stringify(user));

user = JSON.parse(localStorage.getItem("user"));
console.log(user);


// Задание 4: Модификация данных в LocalStorage

user = JSON.parse(localStorage.getItem("user"));

user.country = "Казахстан";

localStorage.setItem("user", JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem("user")));


// Задание 5: Проверка наличия данных в LocalStorage

let savedUser = localStorage.getItem("user");

if (savedUser !== null) {
    console.log(JSON.parse(savedUser));
} else {
    user = {
        name: "Новый пользователь",
        age: 18
    };

    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
}


// Задание 6: Очистка LocalStorage

localStorage.clear();

console.log(localStorage.getItem("user"));


// Задание 7: Сохранение списка задач в LocalStorage

let tasks = [
    {
        title: "Изучить JavaScript",
        completed: false
    },
    {
        title: "Выполнить домашнее задание",
        completed: false
    },
    {
        title: "Повторить LocalStorage",
        completed: false
    }
];

localStorage.setItem("tasks", JSON.stringify(tasks));

tasks = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks);


// Задание 8: Обновление состояния задачи

tasks = JSON.parse(localStorage.getItem("tasks"));

tasks[0].completed = true;

localStorage.setItem("tasks", JSON.stringify(tasks));

console.log(JSON.parse(localStorage.getItem("tasks")));