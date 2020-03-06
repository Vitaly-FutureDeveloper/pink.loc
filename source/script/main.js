var nojs = document.querySelectorAll('.nojs');
	nojs.forEach( (item) => item.classList.remove('nojs') );

var menu = document.querySelector('.main-nav'),
	PHbuttonToggle = document.querySelector('.page-header__toggle'),
	siteListItems = document.querySelectorAll('.site-list__item'),
	pageHeader = document.querySelector('.page-header'),
	pageMain = document.querySelector('.page-main'),
	slogan = document.querySelector('.intro__slogan');

PHbuttonToggle.addEventListener('click', function(){
	PHbuttonToggle.classList.toggle('page-header__toggle--closed');
	pageHeader.classList.toggle('page-header--closed');
	menu.classList.toggle('main-nav--closed');

	PHbuttonToggle.classList.toggle('page-header__toggle--opened');
	pageHeader.classList.toggle('page-header--opened');
	menu.classList.toggle('main-nav--opened');

	pageMain.classList.toggle('page-main--opened-nav');

	slogan.classList.toggle('show-slogan');
});

//*****************************
//***Меняющий цвета логотип**** >>
//*****************************
var linkSvgLogo = document.querySelector('.page-header__logo'); //Ссылка с лого page-header
var linkSvgLogo_footer = document.querySelector('.page-footer__logo'); //Ссылка с лого page-footer
//Теги <source>
var svgLogo = {
	header : {
		desctop : document.querySelector('.page-header__logo-image--desctop'),
		tablet : document.querySelector('.page-header__logo-image--tablet'),
		mobile : document.querySelector('.page-header__logo-image--mobile'),
	},
	footer : {
		desctop : document.querySelector('.page-footer__logo-image--desctop'),
		tablet : document.querySelector('.page-footer__logo-image--tablet'),
		mobile : document.querySelector('.page-footer__logo-image--mobile'),
	}
};

//Логотипы на которые надо менять
var ARRAY_LOGOS = {
	header : {
		desctop: 'img/logo-pink-white-desktop.svg',
		tablet: 'img/logo-pink-white-tablet.svg',
		mobile: 'img/logo-pink-white-mobile.svg',
	},
	footer : {
		desctop: 'img/logo-pink-blue-desktop.svg',
		tablet: 'img/logo-pink-blue-mobile.svg',
	},
};
var ARRAY_LOGOS_HOVER = {
	header : {
		desctop: 'img/logo-pink-white-desktop--hover.svg',
		tablet: 'img/logo-pink-white-tablet--hover.svg',
		mobile: 'img/logo-pink-white-mobile--hover.svg',
	},
		footer : {
		desctop: 'img/logo-pink-blue-desktop--hover.svg',
		tablet: 'img/logo-pink-blue-mobile--hover.svg',
	},
};
var ARRAY_LOGOS_CLICK = {
	header : {
		desctop: 'img/logo-pink-white-desktop--click.svg',
		tablet: 'img/logo-pink-white-tablet--click.svg',
		mobile: 'img/logo-pink-white-mobile--click.svg',
	},
		footer : {
		desctop: 'img/logo-pink-blue-desktop--click.svg',
		tablet: 'img/logo-pink-blue-mobile--click.svg',
	},
};

function changeToLogo(objDOMLinks, objLogos){
	if(document.documentElement.clientWidth >= 960 && objLogos.desctop != null ){
		objDOMLinks.desctop.removeAttribute('srcset');
		objDOMLinks.desctop.setAttribute('srcset', objLogos.desctop);
	} else if(document.documentElement.clientWidth >= 660 && objLogos.tablet != null ){
		objDOMLinks.tablet.removeAttribute('srcset');
		objDOMLinks.tablet.setAttribute('srcset', objLogos.tablet);
	} else if( document.documentElement.clientWidth >= 320 && objLogos.mobile != null ){
		objDOMLinks.mobile.removeAttribute('srcset');
		objDOMLinks.mobile.setAttribute('srcset', objLogos.mobile);
	}
}

linkSvgLogo.addEventListener('mouseover', () => changeToLogo(svgLogo.header, ARRAY_LOGOS_HOVER.header));
linkSvgLogo.addEventListener('mouseout', () => changeToLogo(svgLogo.header, ARRAY_LOGOS.header));
linkSvgLogo.addEventListener('mousedown', () => changeToLogo(svgLogo.header, ARRAY_LOGOS_CLICK.header));
linkSvgLogo.addEventListener('mouseup', () => changeToLogo(svgLogo.header, ARRAY_LOGOS_HOVER.header));

linkSvgLogo_footer.addEventListener('mouseover', () => changeToLogo(svgLogo.footer, ARRAY_LOGOS_HOVER.footer));
linkSvgLogo_footer.addEventListener('mouseout', () => changeToLogo(svgLogo.footer, ARRAY_LOGOS.footer));
linkSvgLogo_footer.addEventListener('mousedown', () => changeToLogo(svgLogo.footer, ARRAY_LOGOS_CLICK.footer));
linkSvgLogo_footer.addEventListener('mouseup', () => changeToLogo(svgLogo.footer, ARRAY_LOGOS_HOVER.footer));

//*****************************
//***Меняющий цвета логотип**** <<
//*****************************