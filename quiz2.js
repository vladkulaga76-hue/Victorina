let quiz = 
[
    {
        vopros: "В каком году началась Вторая мировая война?",
        variant: ["1937", "1939", "1940", "1941"],
        trueotvet: 1
    },
    {
        vopros: "Кто был первым президентом США?",
        variant: ["Джордж Вашингтон", "Томас Джефферсон", "Авраам Линкольн", "Джон Адамс"],
        trueotvet: 0
    },
    {
        vopros: "Где в Беларуси открыли первую школу?",
        variant: ["Витебск", "Минск", "Слуцк", "Борисов"],
        trueotvet: 2
    },
    {
        vopros: "Кто написал труд «Капитал»?",
        variant: ["Карл Маркс", "Фридрих Энгельс", "Владимир Ленин", "Адам Смит"],
        trueotvet: 0
    },
    {
        vopros: "В каком году была разрушена Берлинская стена?",
        variant: ["1989", "1990", "1991", "1988"],
        trueotvet: 0
    },
    {
        vopros: "Какое древнее государство прославилось гладиаторскими боями?",
        variant: ["Древняя Греция", "Персидская империя", "Древний Египет", "Римская империя"],
        trueotvet: 3
    },
    {
        vopros: "Кто изобрёл книгопечатание в Европе?",
        variant: ["Бенджамин Франклин", "Иоганн Гутенберг", "Томас Эдисон", "Никола Тесла"],
        trueotvet: 1
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
        window.location.href = 'result2.html?schet=' + schet;
        return;
    }
    index++;
    Vopros(index);
};

Vopros(0);