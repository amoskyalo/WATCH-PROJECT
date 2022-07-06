
let http = new XMLHttpRequest();
http.open('get', 'products.json', true);
http.send();
http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let products = JSON.parse(this.responseText);
		let gold = products.filter(goldWatches=> goldWatches.category == "gold");
		let diamond = products.filter(diamondWatches => diamondWatches.category == "diamond");
		let silver = products.filter(silverWatches => silverWatches.category == "silver");
		let output1 = "";
		let output2 = "";
		let output3 = "";
		for(let item of gold){
			output1 += `
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
		}
		for(let item of diamond){
			output2 += `
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
		}
		for(let item of silver){
			output3+= `
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
			`
		}
		let length = silver.length;
		console.log(length, silver);
		document.querySelector(".gold").innerHTML = output1;
		document.querySelector(".diamond").innerHTML = output2;
		document.querySelector(".silver").innerHTML = output3;
	}
} 

//dropdowns
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

//courasel
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

sectionIndex = 0;

leftArrow.addEventListener('click', function(){
	sectionIndex = (sectionIndex > 0) ? sectionIndex -1: 0;
	slider.style.transform = 'translate('+(sectionIndex)* -16 +'%)';
})
rightArrow.addEventListener('click', function(){
	sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 :3;
	slider.style.transform = 'translate('+(sectionIndex) * -16 +'%)';
});

//courasel 2
const slider2 = document.querySelector('.slider2');
const leftArrow2 = document.querySelector('.left2');
const rightArrow2 = document.querySelector('.right2');

sectionIndex = 0;

leftArrow2.addEventListener('click', function(){
	sectionIndex = (sectionIndex > 0) ? sectionIndex -1: 0;
	slider2.style.transform = 'translate('+(sectionIndex)* -16 +'%)';
})
rightArrow2.addEventListener('click', function(){
	sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 :3;
	slider2.style.transform = 'translate('+(sectionIndex) * -16 +'%)';
});

//courasel 3
const slider3 = document.querySelector('.slider3');
const leftArrow3 = document.querySelector('.left3');
const rightArrow3 = document.querySelector('.right3');

sectionIndex = 0;

leftArrow3.addEventListener('click', function(){
	let sectionLength = 
	sectionIndex = (sectionIndex > 0) ? sectionIndex -1: 0;
	slider3.style.transform = 'translate('+(sectionIndex)* -16 +'%)';
})
rightArrow3.addEventListener('click', function(){
	sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 :3;
	slider3.style.transform = 'translate('+(sectionIndex) * -16 +'%)';
});

//corasel 4

//number range
var range = document.querySelector('.inputRange');
var field = document.getElementById('num1');

range.addEventListener('input', function(user_value){
	field.value = user_value.target.value;
});
field.addEventListener('input', function(user_value){
	range.value = user_value.target.value;
});