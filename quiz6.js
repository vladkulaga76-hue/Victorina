let quiz = 
[
    {
        vopros: "Столица Египта?",
        variant: ["Каир", "Александрия", "Луксор", "Рабат"],
        trueotvet: 0
    },
    {
        vopros: "Столица России?",
        variant: ["Екатеринбург", "Санкт-Петербург", "Новосибирск", "Москва"],
        trueotvet: 3
    },
    {
        vopros: "Столица Турции?",
        variant: ["Стамбул", "Анкара", "Измир", "Анталья"],
        trueotvet: 1
    },
    {
        vopros: "Столица Великобритании?",
        variant: ["Ливерпуль", "Манчестер", "Лондон", "Эдинбург"],
        trueotvet: 2
    },
    {
        vopros: "Столица Туркменистана",
        variant: ["Ашхабад", "Мары", "Дашогуз", "Минск"],
        trueotvet: 0
    },
    {
        vopros: "Столица Норвегии?",
        variant: ["Стокгольм", "Осло", "Копенгаген", "Хельсинки"],
        trueotvet: 1
    },
    {
        vopros: "Столица Вьетнама?",
        variant: ["Дананг", "Хайфон", "Шираз", "Ханой"],
        trueotvet: 3
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
        window.location.href = 'result6.html?schet=' + schet;
        return;
    }
    index++;
    Vopros(index);
};

Vopros(0);