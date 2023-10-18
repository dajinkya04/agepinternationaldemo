const navBtns = document.querySelector('.nav-btns');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelectorAll('.nav-links');
let opacity = 0;
let openNav = false;

menuBtn.addEventListener('click', navigationCheck);

navLinks.forEach(link => {
	link.addEventListener('click', navigationCheck);
})

function navigationCheck() {
	if (openNav === true) {
		openNav = false;
	}
	else {
		openNav = true;
	}
	showNavBtns();
}

function showNavBtns() {

	let addableOpacity = openNav ? 0.05 : -0.05;
	let position = openNav ? 'initial' : 'absolute';
	let transformationDistance = openNav ? '0' : '-200px';
	let transformationAngle = openNav ? '360deg' : '0deg'

	let intervalMethod = setInterval(() => {
		if ((addableOpacity > 0 && opacity > 1) || (addableOpacity < 0 && opacity < 0)) {
			clearInterval(intervalMethod);
		}
		opacity += addableOpacity;
		navBtns.style.opacity = opacity;
	}, 10)



	navLinks.forEach(link => {
		link.style.transform = `rotateZ(${transformationAngle})`;
	})

}