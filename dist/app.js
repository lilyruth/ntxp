
const submit = document.getElementById('submit');

const inputField = document.getElementById('input');

const noResults = document.getElementById('noResultsModal');

const modalBody = document.querySelector('.modal-body')

// const closeButton = document.getElementById('close-no-results');

const darkMode = document.getElementById('dark-mode');

const lightMode = document.getElementById('dark-mode-off');

const main = document.querySelector('main');

const modalSearchText = document.getElementById('search-text');




//Dark Mode for Content & Nursery Pages & Search Results Modal
darkMode.addEventListener('click', () => {

  // button
  darkMode.classList.add('off');
  lightMode.classList.remove('off');

  // background
  main.classList.add('dark-mode-main');

});



lightMode.addEventListener('click', () => {
	//button
	darkMode.classList.remove('off');
	lightMode.classList.add('off');

	//background
	main.classList.remove('dark-mode-main');

});






submit.addEventListener('click', function (e) {
 e.preventDefault();
 searchProgram();
});

// Modal covers the entire page which is why this function applied to the body wasn't working. Thank you dev tools!

// closeButton.addEventListener('click', () => { noResults.style.display = 'none'; });

noResults.addEventListener('click', () => {
	noResults.style.display = 'none';
});

let searchTerms = { flowers: [
                       'flower',
                       'flowers',
                       'dragon',
                       'dragons',
                       "dragon'sbreath",
                       'celosia',
                       'crossandra',
                       'firecracker',
                       'hibiscus',
                       'hydrangea',
                       'hydrangeas',
                       'petunia',
                       'petunias'
                      ], 
                    
                    trees: [
                     'willow',
                     'crape',
                     'crapemyrtle',
                     'tree',
                     'trees',
                     'magnolia',
                     'evergreen',
                     'redbud',
                     'holly',
                     'nellie',
                     'nelliestevens'
                    ], 

                    shrubs: [
                     'rose',
                     'roses',
                     'shrub',
                     'shrubs',
                     'topgun',
                     'knockout',
                     'knockoutrose',
                     'knockoutroses',
                     'topgunrose',
                     'topgunroses',
                     'privet',
                     'sunshineprivet',
                     'vitex',
                     'chastetree',
                     'boxwood',
                     'boxshrub',
                     'box',
                     'roserosette',
                     'roserosettedisease',
                     'rosettedisease',
                     'quince',
                     'fruit'
                    ], 

                    ground: [
                     'mulch',
                     'rock',
                     'lava',
                     'lavarock',
                     'cedar',
                     'cedarmulch',
                     'groundcovers',
                     'groundcover',
                     'mint',
                     'stonecrop',
                     'angelinastonecrop',
                     'angelina',
                     'liriope'
                    ],

                    houseplants: [
                     'aglaonema',
                     'aglaonemacommutatum',
                     'indoor',
                     'houseplants',
                     'houseplant',
                
                     'houseplants',
                     'pothos',
                     'pothosivy',
                     'ivy',
                     'spider',
                     'spiderplant',
                     'airplane',
                     'airplaneplant',
                     'succulent',
                     'succulents',
                     'tradescantia',
                     'variegated',
                     'potted',
                     'pottedplant',
                     'pottedplants'
                    ],

                    nurseries: [
                     'plantsandplanters',
                     'homegrownplants',
                     "covington's",
                     "covington'snursery",
                     "calloway's",
                     "calloway'snursery",
                     "pucket's",
                     "pucket'snursery",
                     "strong's",
                     "strong'snursery",
                     "walton's",
                     "walton'sgarden center",
                     'gardencenter',
                     'roach',
                     'roachfeedandseed',
                     'roachfeed&seed',
                     'roachfeed',
                     'brucemiller',
                     'nursery',
                     'nurseries',
                     'landscapecenter',
                     'store',
                     'help'
                    ]

                   }

function showNoResultsModal() {
  noResults.style.display = 'block';
}


function searchProgram() {
 if (searchTerms.flowers.indexOf(inputField.value.split(' ').join('').toLowerCase()) != -1) {
		window.open('./flowers.html', '_self');
 } else if (
		searchTerms.trees.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./trees.html', '_self');
 } else if (
		searchTerms.shrubs.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./shrubs.html', '_self');
 } else if (
		searchTerms.ground.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./ground.html', '_self');
 } else if (
		searchTerms.houseplants.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./houseplants.html', '_self');
 } else if (
		searchTerms.nurseries.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./nurseries.html', '_self');
 } else {
   showNoResultsModal();
	 inputField.value = '';
 }
}

