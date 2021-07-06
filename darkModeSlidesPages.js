const slide1 = document.querySelector('.slide-1');

const slide2 = document.querySelector('.slide-2');

const slide3 = document.querySelector('.slide-3');

const slide4 = document.querySelector('.slide-4');

const slide5 = document.querySelector('.slide-5');

const text1 = document.querySelector('.text-1');

const text2 = document.querySelector('.text-2');

const text3 = document.querySelector('.text-3');

const text4 = document.querySelector('.text-4');

const text5 = document.querySelector('.text-5');

const link1 = document.querySelector('.link-1');

const link2 = document.querySelector('.link-2');

const roseModal = document.querySelector('.rose-body');

const roseText = document.querySelector('.rose-text');



//Dark Mode for Slides

darkMode.addEventListener('click', () => {

  slide1.classList.remove('bg-light');
	slide1.classList.add('bg-dark');

  slide2.classList.remove('bg-light');
	slide2.classList.add('bg-dark');

  slide3.classList.remove('bg-light');
	slide3.classList.add('bg-dark');

  slide4.classList.remove('bg-light');
	slide4.classList.add('bg-dark');

  slide5.classList.remove('bg-light');
	slide5.classList.add('bg-dark');

})

lightMode.addEventListener('click', () => {

  slide1.classList.add('bg-light');
	slide1.classList.remove('bg-dark');

  slide2.classList.add('bg-light');
	slide2.classList.remove('bg-dark');

  slide3.classList.add('bg-light');
	slide3.classList.remove('bg-dark');

  slide4.classList.add('bg-light');
	slide4.classList.remove('bg-dark');

  slide5.classList.add('bg-light');
	slide5.classList.remove('bg-dark');
})

// Dark mode for slides Text

darkMode.addEventListener('click', () => {

  text1.classList.add('text-white');
	text1.classList.remove('text-dark');

  text2.classList.add('text-white');
	text2.classList.remove('text-dark');

  text3.classList.add('text-white');
	text3.classList.remove('text-dark');

  text4.classList.add('text-white');
	text4.classList.remove('text-dark');

  text5.classList.add('text-white');
	text5.classList.remove('text-dark');
});

lightMode.addEventListener('click', () => {

  text1.classList.add('text-dark');
		text1.classList.remove('text-white');

  text2.classList.add('text-dark');
		text2.classList.remove('text-white');

  text3.classList.add('text-dark');
		text3.classList.remove('text-white');

  text4.classList.add('text-dark');
		text4.classList.remove('text-white');

  text5.classList.add('text-dark');
		text5.classList.remove('text-white');

});

//Dark Mode for Links

darkMode.addEventListener('click', () => {
  link1.classList.add('dark-mode-link');
  link1.classList.remove('text-dark');

 link2.classList.add('dark-mode-link');
	link2.classList.remove('text-dark');
})

lightMode.addEventListener('click', () => {
  link1.classList.remove('text-white');
  link1.classList.add('text-dark');

 link2.classList.remove('text-white');
	link2.classList.add('text-dark');
})

// Dark Mode for Rose Modal 

darkMode.addEventListener('click', () => {
 roseModal.classList.remove('bg-light');
 roseModal.classList.add('bg-dark');

 roseText.classList.remove('text-dark');
 roseText.classList.add('text-white');
})

 lightMode.addEventListener('click', () => {
  roseModal.classList.remove('bg-dark');
	 roseModal.classList.add('bg-light');

  roseText.classList.add('text-dark');
		roseText.classList.remove('text-white');

 });