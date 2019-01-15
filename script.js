// function loadJSONData(){

// }

//  let Person = {
// 	  myfname : "Jomar",
// 	  mylname : "Llevado",
// 	  myfavfood: ['lugaw','benignit','champorado'],
// 	  anotherJSON: {
// 	  	anotherName: "John",
// 	  	anotherLname: "Doe"
// 	  }
// 	}

// 	let arrPerson = [
// 		Person, Person, Person
// 	]


// // let arr = [];
// // let obj = {}; // shorthand

// // console.log(obj);

// // let o = new Object();

function loadJSONData(){

	let xhttp = new XMLHttpRequest();

	let myList = document.getElementById('list');

	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			console.log(xhttp.response);
			// let data = JSON.parse(xhttp.response);
			// let html = "";
			// for(let i = 0; i < data.length; i++){
			//    html += "<li>"+data[i].title+"</li>";
			// }
			// myList.innerHTML = html;
		}
	}

	xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts' , true);
	xhttp.send();
}

function loadStringJSONData(){
	let str = '{"myfname" : "Jomar", "mylname" : "Llevado"}';
	let data = JSON.parse(str);
	console.log(data.myfname);
}








