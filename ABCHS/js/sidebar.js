function openNav() {
  let sideNav = document.querySelector('.side-nav');
  sideNav.style.display = 'block';
  sideNav.style.animation = 'moveDown 1s ease';
}

function closeNav() {
  let sideNav = document.querySelector('.side-nav');
  sideNav.style.display = 'none';
}

// $(document).ready(function() {
//   $('.menubtn').click(function() {
//     $('.side-nav').slideToggle(1000);
//   })
// });