function slider() {
    document.querySelector('.btn-start').classList.add('hide');

    let text = document.createElement('div');
    text.classList.add('slide');

    const body = document.querySelector('body');
    body.append(text);

    body.addEventListener('click', () => {
        randomColor();
        addText();
    });

    const data = [
        "Начальник не всегда прав, но он всегда начальник.",
        "Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.",
        "Если нужно срочно сделать какое - либо дело, обратись к тому, кто занят больше всех.",
        "Не спеши выполнять приказ — его могут отменить.",
        "Тому, кто сам ничего не делает, все кажется по плечу.",
        "Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.",
        "Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял не самой инструкции, ни разъяснений к ней.",
        "Если отложить дело надолго, то его либо выполнит кто - нибудь другой, либо оно вообще перестанет быть нужным.",
        "Не будь незаменимым — тебя никогда не повысят.",
        "Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.",
    ];

    const bgColor = ['#CC0000', '#FF6600', '#FF3366', '#9933CC', '#003333', '#708090'];

    let count = 0;

    function randomColor() {
        body.style.background = bgColor[Math.floor(Math.random() * (bgColor.length))];
    }

    function addText() {
        count++;
        if (count >= data.length) count = 0;
        text.textContent = data[count];
    }
}

document.querySelector('.btn-start').addEventListener('click', slider);