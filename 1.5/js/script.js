new Swiper ('.swiper-container', {
	direction:'horizontal',
	autoHeight: true,
	pagination: {
		el: '.swiper-pagination',
	   clickable: true,
	    },

		 breakpoints: {
			 320: {
				slidesPerView: 'auto',
      			spaceBetween: 16,
				  slidersPerColumn: 1
			 }
		 },

});

const element = document.querySelector('.menu[hidden]');
const styleElementUnlo = document.querySelector('.read-more__unloaded');
const styleElementLo = document.querySelector('.read-more__loaded');
const btn = document.querySelector("#btn");
btn.onclick = function(){
	element.style.maxHeight = "260px";
	styleElementLo.style.display = "none";
	styleElementUnlo.style.display = "block";
  };
  btn.unonclick = function(){
	element.style.maxHeight = "170px";
	styleElementLo.style.display = "block";
	styleElementUnlo.style.display = "none";
  };
console.log("jfklskdm");
document.querySelector(".title").interHTML = "njnrenvf";