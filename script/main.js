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


//*****************************
//***Меняющий цвета логотип**** >>
//*****************************
var linkSvgLogo = document.querySelector('.page-header__logo'); //Ссылка с лого
//Теги <source>
var svgLogo_desctop = document.querySelector('.page-header__logo-image--desctop'),
	svgLogo_tablet = document.querySelector('.page-header__logo-image--tablet'),
	svgLogo_mobile = document.querySelector('.page-header__logo-image--mobile');

//Логотипы на которые надо менять
var ARRAY_LOGOS = {
	desctop: 'img/logo-pink-white-desktop.svg',
	tablet: 'img/logo-pink-white-tablet.svg',
	mobile: 'img/logo-pink-white-mobile.svg',
};
var ARRAY_LOGOS_HOVER = {
	desctop: 'img/logo-pink-white-desktop--hover.svg',
	tablet: 'img/logo-pink-white-tablet--hover.svg',
	mobile: 'img/logo-pink-white-mobile--hover.svg',
};
var ARRAY_LOGOS_CLICK = {
	desctop: 'img/logo-pink-white-desktop--click.svg',
	tablet: 'img/logo-pink-white-tablet--click.svg',
	mobile: 'img/logo-pink-white-mobile--click.svg',
};

function changeToLogo(arrayLogos){
	if(document.documentElement.clientWidth >= 960){
		svgLogo_desctop.removeAttribute('srcset');
		svgLogo_desctop.setAttribute('srcset', arrayLogos.desctop);
	} else if(document.documentElement.clientWidth >= 660){
		svgLogo_tablet.removeAttribute('srcset');
		svgLogo_tablet.setAttribute('srcset', arrayLogos.tablet);
	} else {
		svgLogo_mobile.removeAttribute('srcset');
		svgLogo_mobile.setAttribute('srcset', arrayLogos.mobile);
	}
}

linkSvgLogo.addEventListener('mouseover', function(){
	changeToLogo(ARRAY_LOGOS_HOVER);
});
linkSvgLogo.addEventListener('mouseout', function(){
	changeToLogo(ARRAY_LOGOS);
});
linkSvgLogo.addEventListener('mousedown', function(){
	changeToLogo(ARRAY_LOGOS_CLICK);
});
linkSvgLogo.addEventListener('mouseup', function(){
	changeToLogo(ARRAY_LOGOS_HOVER);
});

//*****************************
//***Меняющий цвета логотип**** <<
//*****************************