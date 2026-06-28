let quiz = 
[
    {
        vopros: "Какой язык программирования используется для создания веб-страниц?",
        variant: ["Python", "Java", "HTML", "C++"],
        trueotvet: 2
    },
    {
        vopros: "Как называется ошибка в программе?",
        variant: ["Баг", "Фича", "Код", "Алгоритм"],
        trueotvet: 0
    },
    {
        vopros: "Какой цикл в JavaScript используется для перебора массива?",
        variant: ["for", "while", "do-while", "Все перечисленные"],
        trueotvet: 3
    },
    {
        vopros: "Кто создал язык программирования Python?",
        variant: ["Гвидо ван Россум", "Джеймс Гослинг", "Бьёрн Страуструп", "Юкихиро Мацумото"],
        trueotvet: 0
    },
    {
        vopros: "Что такое ООП?",
        variant: ["Объектно-ориентированное программирование", "Операционная система", "Основы программирования", "Отладка и оптимизация"],
        trueotvet: 0
    },
    {
        vopros: "Что такое Git?",
        variant: ["Язык программирования", "Система контроля версий", "База данных", "Операционная система"],
        trueotvet: 1
    },
    {
        vopros: "Что такое переменная в программировании?",
        variant: ["Константа", "Функция", "Область памяти для хранения данных", "Цикл"],
        trueotvet: 2
    }
]
let index = 0;
let schet = 0;
let otvet = false;

let resultMessage = document.getElementById('resultMessage');
let questionText = document.getElementById('questionText');
let optionsList = document.getElementById('optionsList');
let currentQSpan = document.getElementById('currentQuestionNum');
let nextBtn = document.getElementById('nextBtn');
let answerInput = document.getElementById('answerInput');
let submitBtn = document.getElementById('submitAnswerBtn');

function Vopros(index)
{
    otvet = false;
    resultMessage.className = 'hidden';
    let q = quiz[index];
    questionText.innerHTML = q.vopros;
    optionsList.innerHTML = "";
    for(let i = 0; i < 4; i++)
    {
        let p = document.createElement('p');
        p.className = 'option-item';
        p.innerHTML = `${i + 1}. ${q.variant[i]}`;
        optionsList.appendChild(p);
    }
    currentQSpan.innerHTML = index + 1;
    if(index === 6)
    {
        nextBtn.innerHTML = "Завершить";
    }
    else
    {
        nextBtn.innerHTML = "Следующий вопрос";
    }
    answerInput.value = '';
    answerInput.focus();
}

function obrabotkaotveta()
{
    if(otvet === true)
    {
        return;
    }
    let polevvoda = answerInput.value.trim(); 
    if(polevvoda === "")
    {
        alert("Введите вариант ответа");
        return;
    }
    let znachenie = parseInt(polevvoda);
    if(isNaN(znachenie) || znachenie < 1 || znachenie > 4)
    {
         alert("Введите вариант ответа");
         return;
    }
    let q = quiz[index];
    resultMessage.className = '';
    if((znachenie - 1) === q.trueotvet)
    {
        resultMessage.innerHTML = "Правильно!";
        schet++;
    }
    else
    {
        resultMessage.innerHTML = `Неправильно! Правильный вариант ответа: ${q.trueotvet + 1}`;
    }
    otvet = true;
}

submitBtn.onclick = obrabotkaotveta;
nextBtn.onclick = function()
{
    if(index === 6)
    {
        window.location.href = 'result4.html?schet=' + schet;
        return;
    }
    index++;
    Vopros(index);
};

Vopros(0);