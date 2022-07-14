const showMenu = document.querySelector(".show-menu");
const closeMenu = document.querySelector(".close-menu");
const features = document.querySelector(".features-dropdown");
const featuresClick = document.querySelector(".features-click");
const company = document.querySelector(".company-dropdown");
const companyClick = document.querySelector(".company-click");
const featuresArrowUp = document.querySelector(".features-arrow-up");
const featuresArrowDown = document.querySelector(".features-arrow-down");
const companyArrowUp = document.querySelector(".company-arrow-up");
const companyArrowDown = document.querySelector(".company-arrow-down");

const mobileNav = document.querySelector(".primary-navigation");

showMenu.onclick = () => {
	mobileNav.classList.add("show-nav");
};

closeMenu.onclick = () => {
	mobileNav.classList.remove("show-nav");
};

closeMenu.onclick = () => {
	mobileNav.classList.remove("show-nav");
	features.classList.remove("show");
	featuresArrowDown.classList.remove("hide");
	featuresArrowUp.classList.remove("show");
	company.classList.remove("show");
	companyArrowDown.classList.remove("hide");
	companyArrowUp.classList.remove("show");
};

featuresClick.onclick = () => {
	features.classList.toggle("show");
	featuresArrowDown.classList.toggle("hide");
	featuresArrowUp.classList.toggle("show");
};

companyClick.onclick = () => {
	company.classList.toggle("show");
	companyArrowDown.classList.toggle("hide");
	companyArrowUp.classList.toggle("show");
};
