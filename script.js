
let http = new XMLHttpRequest();
http.open('get', 'products.json', true);
http.send();
http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let products = JSON.parse(this.responseText);
		let gold = products.filter(goldWatches=> goldWatches.category == "gold");
		let diamond = products.filter(diamondWatches => diamondWatches.category == "diamond");
		let output1 = "";
		let output2 ="";
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
		document.querySelector(".diamond").innerHTML = output2;
	document.querySelector(".gold").innerHTML = output1;
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
	sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 :2;
	slider.style.transform = 'translate('+(sectionIndex) * -16 +'%)';
});
