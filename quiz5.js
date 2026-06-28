let quiz = 
[
    {
        vopros: "Логотип этой компании — это слияние двух гербов: три ромба один над другим и дубовые листья.",
        variant: ["Audi", "УАЗ", "Mitsubishi", "BMW"],
        trueotvet: 2
    },
    {
        vopros: "Сколько машин было уничтожено за всё время съемок киносерии “Форсаж”?",
        variant: ["81", "142", "204", "0"],
        trueotvet: 1
    },
    {
        vopros: "Эмблема этой марки — это символ слияния четырёх независимых производителей автомобилей в 1932г.",
        variant: ["Audi", "УАЗ", "Mitsubishi", "BMW"],
        trueotvet: 0
    },
    {
        vopros: "В 1933 году А. Гитлер поручил создать народный автомобиль. Его название с немецкого языка так и переводится - народный автомобиль.",
        variant: ["Audi", "УАЗ", "Mitsubishi", "Volkswagen"],
        trueotvet: 3
    },
    {
        vopros: "Кто основал компанию Tesla Motors?",
        variant: ["Никола Тесла", "Ларри Пейдж и Сергей Брин", "Илон Маск", "Мартин Эбехард и Марк Тарпеннинг"],
        trueotvet: 3
    },
    {
        vopros: "Самый длинный автомобиль в мире?",
        variant: ["12 метров", "30 метров", "20 метров", "8 метров"],
        trueotvet: 1
    },
    {
        vopros: "Эта марка машины носит женское имя. Она была названа в честь дочери одного из членов правления.",
        variant: ["Lada", "УАЗ", "Mersedes", "BMW"],
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
        window.location.href = 'result5.html?schet=' + schet;
        return;
    }
    index++;
    Vopros(index);
};

Vopros(0);