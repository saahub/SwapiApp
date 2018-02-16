let button = document.querySelector('#button-name')
let name = document.querySelector('#name')
/*let height = document.querySelector('#height')
let height = document.querySelector('#mass')
let birthYear = document.querySelector('#birth-year')*/

function wars(){
	axios.get('https://swapi.co/api/people/1').then(function(response){
		updateInfo(response.data)

	})
}

function updateInfo(data){
		name.innerText = data.name
		person.innerImg = data.person
}


button.addEventListener('click', wars)

