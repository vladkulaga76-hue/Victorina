let quiz = 
[
    {
        vopros: "Как называется вид задания, проверяющий знания правил русского языка?",
        variant: ["Самостоятельная работа", "Изложение", "Контрольная работа", "Диктант"],
        trueotvet: 3
    },
    {
        vopros: "На каком уроке школьники изучают закон сообщающихся сосудов?",
        variant: ["Химия", "Физика", "Геометрия", "Физкультура"],
        trueotvet: 1
    },
    {
        vopros: "Как по-другому называют стирательную резинку?",
        variant: ["Степлер", "Ластик", "Кнопка", "Корректор"],
        trueotvet: 1
    },
    {
        vopros: "Как называется искусство писать чётким ровным почерком?",
        variant: ["Литография", "Криптография", "Каллиграфия", "Аэрография"],
        trueotvet: 2
    },
    {
        vopros: "Как называется «кривая» линейка?",
        variant: ["Транспортир", "Циркуль", "Угольник", "Лекало"],
        trueotvet: 3
    },
    {
        vopros: "Когда в Республике Беларусь празднуется День учителя?",
        variant: ["Первое воскресенье октября", "Второй четверг ноября", "Первая среда июня", "Второе воскресенье октября"],
        trueotvet: 0
    },
    {
        vopros: "Как называется «колода карт» для урока географии?",
        variant: ["Книга", "Счетные палочки", "Контурная карта", "Атлас"],
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
        window.location.href = 'result1.html?schet=' + schet;
        return;
    }
    index++;
    Vopros(index);
};

Vopros(0);