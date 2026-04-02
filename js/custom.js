/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Header
3. Init Menu
4. About Slider
5. Services Reel


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initHeader();
	initMenu();
	initAboutSlider();
	initServicesReel();

	document.addEventListener('DOMContentLoaded', initHeader);

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
		const sections = document.querySelectorAll('section');

		function updateHeaderTheme()
		{
			let currentSection = null;

			sections.forEach(section =>
			{
				const top = section.offsetTop;
				const height = section.offsetHeight;

				// check if header line (scrollY) is inside this section
				if (window.scrollY >= top && window.scrollY < top + height)
				{
					currentSection = section;
				}
			});

			if (currentSection)
			{
				if (currentSection.classList.contains('light-theme'))
				{
					header.classList.add('light');
					header.classList.remove('dark');
				}
				else if (currentSection.classList.contains('dark-theme'))
				{
					header.classList.add('dark');
					header.classList.remove('light');
				}
			}
		}

		// run once on load
		updateHeaderTheme();

		// run on scroll
		window.addEventListener('scroll', updateHeaderTheme);

		// optional: run on resize (keeps offsets accurate if viewport changes)
		window.addEventListener('resize', updateHeaderTheme);
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		const menu = document.querySelector(".menu");
		const body = document.querySelector("body");
		const btn = document.querySelector(".hamburger_container");
		const close = document.querySelector(".close");
		const items = document.querySelectorAll(".menu_nav ul li a");

		btn.addEventListener("click", function()
		{
			menu.classList.toggle("active");
			body.classList.toggle("no-scroll");
		});

		close.addEventListener("click", function()
		{
			menu.classList.toggle("active");
			body.classList.toggle("no-scroll");
		});

		items.forEach(function(item)
		{
			item.addEventListener("click", function()
			{
				menu.classList.toggle("active");
				body.classList.toggle("no-scroll");
			});
		});
	}

	/* 

	4. About Slider

	*/

	function initAboutSlider()
	{
		const slider = $('.about_slider');
		if(!slider) return;

		slider.owlCarousel(
		{
			items: 2,
			loop: true,
			margin: 24,
			autoplay: true,
			autoplayHoverPause: true,
			dots: false,
			nav: false,
			responsive:
			{
				0:
				{
					items: 1,
					margin: 16
				},
				576:
				{
					items: 1,
					margin: 16
				},
				768:
				{
					items: 2,
					margin: 16
				},
				769:
				{
					items: 2,
					margin: 24
				}
			}
		});

		$('.about_slider').on('mouseenter', '.about_slide', function()
		{
			const video = $(this).find('.slide-video').get(0);
			video.currentTime = 0;
			video.play();
		}).on('mouseleave', '.about_slide', function()
		{
			const video = $(this).find('.slide-video').get(0);
			video.pause();
			video.currentTime = 0;
		});
	}

	/* 

	5. Services Reel

	*/

	function initServicesReel()
	{
		const video = $('.services-video').get(0);
		const vid = $('.services-video');
		const btn = $('.services_reel_play_button');
		
		btn.on("click", () =>
		{
			if(video.paused)
			{
				video.classList.toggle("active");
				video.play();
			}
			else
			{
				video.classList.toggle("active");
				video.pause();
			}
			
		});

		vid.on("click", () =>
		{
			if(video.paused)
			{
				video.classList.toggle("active");
				video.play();
			}
			else
			{
				video.classList.toggle("active");
				video.pause();
			}
		});
	}

});