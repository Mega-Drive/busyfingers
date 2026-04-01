/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Header


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initHeader();

	$(window).on('resize', function()
	{
		
	});

	$(document).on('scroll', function()
	{
		
	});

	$(document).on('load', function()
	{
		
	});

	/* 

	2. Init Header

	*/

	function initHeader()
	{
		const header = document.querySelector('.header');
		const hero = document.querySelector('#hero');

		window.addEventListener('scroll', () =>
		{
			const heroBottom = hero.offsetTop + hero.offsetHeight;
			if (window.scrollY < heroBottom)
			{
				header.classList.add('light');
				header.classList.remove('dark');
			}
			else
			{
				header.classList.add('dark');
				header.classList.remove('light');
			}
		});

	}

});