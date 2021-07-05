
const submit = document.getElementById('submit');
const inputField = document.getElementById('input');


submit.addEventListener('click', function (e) {
 e.preventDefault();
 searchProgram();
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

function searchProgram() {
 if (searchTerms.flowers.indexOf(inputField.value.split(' ').join('').toLowerCase()) != -1) {
		window.open('./flowers.html');
 } else if (
		searchTerms.trees.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./trees.html');
 } else if (
		searchTerms.shrubs.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./shrubs.html');
 } else if (
		searchTerms.ground.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./ground.html');
 } else if (
		searchTerms.houseplants.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./houseplants.html');
 } else if (
		searchTerms.nurseries.indexOf(
			inputField.value.split(' ').join('').toLowerCase()
		) != -1
 ) {
		window.open('./nurseries.html');
 } else {
		inputField.value = '';
 }
}

