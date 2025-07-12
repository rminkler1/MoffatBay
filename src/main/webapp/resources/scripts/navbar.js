/*
* Navigation Bar scripts
* 
* CSD 460 Team 3
* 
* Ian Lewis
* Robert Minkler
* Kevin Ramirez 
*/

document.addEventListener('DOMContentLoaded', function() {


	// Dropdown scripts
	const userMenu = document.querySelector('.user-menu');
	const dropdown = userMenu.querySelector('.dropdown-content');
	
	userMenu.addEventListener('mouseenter', () => {
	  dropdown.style.display = 'block';
	});
	userMenu.addEventListener('mouseleave', () => {
	  dropdown.style.display = 'none';
	});
	
	document.addEventListener("DOMContentLoaded", function () {
	  const logoutLink = document.querySelector(".logout-link");
	  if (logoutLink) {
	    logoutLink.addEventListener("click", function (e) {
	      const confirmLogout = confirm("Are you sure you want to log out?");
	      if (!confirmLogout) {
	        e.preventDefault();
	      } else {
	        logoutLink.innerText = "Logging out...";
	      }
	    });
	  }
	});
	
	// Mobile menu
	const navToggle = document.getElementById('navToggle');
	navVis = false;

	navToggle.addEventListener('click', togglenav);
	
	function togglenav() {
		if (!navVis) {
			// Center Menu
			document.getElementById('navMenu').style.left = "0%";
			navVis = true;
		} else {
			// Move menu back off screen
			document.getElementById('navMenu').style.left = "-100%";
			navVis = false;
		}
	}

	});
