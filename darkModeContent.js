const content = document.querySelector('.content');

const content1 = document.querySelector('.content-1');

const content2 = document.querySelector('.content-2');

const content3 = document.querySelector('.content-3');

const content4 = document.querySelector('.content-4');

const content5 = document.querySelector('.content-5');


darkMode.addEventListener('click', () => {
	// content card
	content.classList.remove('bg-light');
	content.classList.add('bg-dark');
	content1.classList.remove('text-dark');
	content1.classList.add('text-white');
	content2.classList.remove('text-dark');
	content2.classList.add('text-white');

	content5.classList.add('text-light');
	content5.classList.remove('dark-link');

	content3.classList.remove('text-dark');
	content3.classList.add('text-white');
	content4.classList.remove('text-dark');
	content4.classList.add('text-white');
});

lightMode.addEventListener('click', () => {
	// content card
	content.classList.add('bg-light');
	content.classList.remove('bg-dark');
	content1.classList.add('text-dark');
	content1.classList.remove('text-white');
	content2.classList.add('text-dark');
	content2.classList.remove('text-white');

	content5.classList.remove('text-light');
	content5.classList.add('dark-link');

	content3.classList.add('text-dark');
	content3.classList.remove('text-white');
	content4.classList.add('text-dark');
	content4.classList.remove('text-white');
});