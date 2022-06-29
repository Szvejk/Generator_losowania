// const btn = document.querySelector('button');
// const div = document.querySelector('div');
// const names = ["Jagienka", "Adam", "Adrian", "Bartosz", "Kamil", "Sara"];

// const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę...", "Szczerze uważam..."];

// // console.log(names[index]);

// const nameGenerator = () => {
//     const indexName = Math.floor(Math.random() * names.length);
//     const indexPrefix = Math.floor(Math.random() * prefixs.length);
//     div.textContent = `${prefixs[indexPrefix]}że najlepsze będzie imię ${names[indexName]}`
// }

// btn.addEventListener('click', nameGenerator)

const chars = 'ABCDEFGHIJK123456789';
const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 10;
const charsNumber = 14;

const codesGenerator = () => {
	for (let i = 0; i < codesNumber; i++) {
		let code = "";
		for (let i = 0; i < charsNumber; i++) {
            const index =Math.floor( Math.random() *20)
        
			code += chars[index];
		}
		const div = document.createElement('div');
		div.textContent = code;
		section.appendChild(div);
	}
};

btn.addEventListener('click', codesGenerator);
