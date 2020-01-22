console.log("Hello World");

var nojs = document.querySelectorAll('.nojs');
	nojs.forEach( (item) => item.classList.remove('nojs') );

var menu = document.querySelector('.main-nav'),
	PHbuttonToggle = document.querySelector('.page-header__toggle');
	siteListItems = document.querySelectorAll('.site-list__item'),
	pageHeader = document.querySelector('.page-header');

PHbuttonToggle.addEventListener('click', function(){
	PHbuttonToggle.classList.toggle('page-header__toggle--closed');
	pageHeader.classList.toggle('page-header--closed');
	menu.classList.toggle('main-nav--closed');

	PHbuttonToggle.classList.toggle('page-header__toggle--opened');
	pageHeader.classList.toggle('page-header--opened');
	menu.classList.toggle('main-nav--opened');
});