new Swiper('.swiper-container', {
	direction: 'horizontal',
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

const menuLoaded = document.querySelector('.menu[hidden]');
const styleElementUnlo = document.querySelector('.read-more__unloaded');
const styleElementLo = document.querySelector('.read-more__loaded');
const btn = document.querySelector("#btn");
const menuUnloaded = document.querySelector(".menu_unloaded[hidden]");
let isClicked = false;

btn.addEventListener("click", () => {
	isClicked = !isClicked;

	if (isClicked) {
		menuLoaded.style.maxHeight = "260px";
		styleElementLo.style.display = "none";
		styleElementUnlo.style.display = "block";
	} else {
		menuLoaded.style.maxHeight = "170px";
		styleElementLo.style.display = "block";
		styleElementUnlo.style.display = "none";
	}
       })
