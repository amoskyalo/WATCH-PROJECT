// // async function jsonFile(){
// // 	const response = await fetch('products.json');
// // 	const data = await response.json();
// // 	console.log(data)
// // }
// jsonFile()

let http = new XMLHttpRequest();
http.open('get', 'products.json', true);
http.send();
http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let products = JSON.parse(this.responseText);
		let output = "";
		for(let item of products){
			output += `
				<div class="product">
					<img src="${item.image}" alt="${item.description}">
					<p class="title">${item.title}</p>
					<p class="description">${item.description}</p>
					<p class="price">
						<span>Kshs.</span>
						<span>${item.price}</span>
					</p>
					<p class="discount"><span>save.</span>
					     <span>${item.discount}</span>
					<p class="cart">Add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></p>
				</div>
			`;
			if(item.id === 1){
				console.log('true');
			}
		}
		document.querySelector(".products").innerHTML = output;
	}
} 

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }