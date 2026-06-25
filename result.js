let scoreDisplay = document.getElementById('scoreDisplay');
let messageText = document.getElementById('messageBlock');

function getParam(name) 
{
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

let schet = parseInt(getParam('schet')) || 0;
scoreDisplay.innerHTML = schet;

if(schet > 4 && schet < 8)
{
    messageText.innerHTML = `Поздравляем! Вы показали блестящий результат!`;
}
else if(schet > 2 && schet < 5)
{
    messageText.innerHTML = `Неплохой результат! Вы на правильном пути.`;
}
else if(schet > -1 && schet < 3)
{
    messageText.innerHTML = `Не расстраивайтесь! Это только начало.`;
}