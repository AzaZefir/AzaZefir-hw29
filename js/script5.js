// Задание:
// Перепишите код так, чтобы в нем использовалась конъюнкция

let login = "admin";
let password = "12345";

let inputLogin = prompt("Введите логин");
let inputPassword = prompt("Введите пароль");

if (inputLogin === login && inputPassword === password) {
    alert("Вы авторизованы!");
}
else
{
    alert("Логин или пароль введены неправильно");
}