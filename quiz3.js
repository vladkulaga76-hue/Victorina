let quiz = 
[
    {
        vopros: "Откуда взялся свитер Данилы Багрова в фильме Алексея Балабанова «Брат»?",
        variant: ["Купили на блошином рынке", "Украли", "Подарил Вячеслав Бутусов", "Связала мама режиссёра"],
        trueotvet: 0
    },
    {
        vopros: "Как в фильме «Иван Васильевич меняет профессию» Иван Грозный назвал предложенный ему спортивный костюм?",
        variant: ["Чумовой наряд", "Бесовская одёжа", "Отпадный прикид", "Дьявольское одеяние"],
        trueotvet: 1
    },
    {
        vopros: "Кто из перечисленных героев не входит в знаменитую троицу Л.Гайдая?",
        variant: ["Дуралей", "Балбес", "Трус", "Бывалый"],
        trueotvet: 0
    },
    {
        vopros: "Какая фамилия у героя фильма «Служебный роман», которого ошибочно сочли умершим?",
        variant: ["Пряников", "Баранкин", "Бубликов", "Пирогов"],
        trueotvet: 2
    },
    {
        vopros: "В каком фильме звучала фраза: «В 40 лет жизнь только начинается»?",
        variant: ["«Девчата»", "«Москва слезам не верит»", "«Любовь и голуби»", "«Служебный роман»"],
        trueotvet: 1
    },
    {
        vopros: "Как называется фильм, в котором Петруха просит Гюльчатай открыть свое личико?",
        variant: ["«Белое солнце пустыни»", "«Голубое небо пустыни»", "«Желтые пески пустыни»", "«Жаркий воздух пустыни»"],
        trueotvet: 0
    },
    {
        vopros: "Какого ученого звания неожиданно для себя удостоился скромный директор детского сада, он же «джентльмен удачи»?",
        variant: ["Профессор", "Академик", "Кандидат наук", "Доцент"],
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
        window.location.href = 'result3.html?schet=' + schet;
        return;
    }
    index++;
    Vopros(index);
};

Vopros(0);