const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Jagienka", "Adam", "Adrian", "Bartosz", "Kamil", "Sara"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę...", "Szczerze uważam..."];

// console.log(names[index]);

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[indexPrefix]}że najlepsze będzie imię ${names[indexName]}`
}



btn.addEventListener('click', nameGenerator)