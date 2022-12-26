const btnRandomAdvice = document.querySelector('#randomAdvice');
const adviceId = document.querySelector('.advice > .id');
const adviceText = document.querySelector('.advice > .text');


async function getAdvice () {
    let res, data;
    res = await fetch('https://api.adviceslip.com/advice', {cache: 'no-store'});
    data = await res.json();
    return data;

}

function attAdvice () {
    getAdvice()
    .then ((data) => {
        adviceId.textContent = `ADVICE: #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
    })
    .catch ((err) => {
        adviceId.textContent = `ADVICE: #000`;
        adviceText.textContent = err;
    })
}

btnRandomAdvice.addEventListener('click', () => {
    attAdvice();
});
attAdvice();