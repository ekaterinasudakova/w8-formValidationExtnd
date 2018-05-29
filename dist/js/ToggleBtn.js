'use strict';

var background = document.querySelector('.background');
var toggleBody = document.querySelector('.toggle-body');
var toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', function () {
  background.classList.toggle('background--on');
  toggleBody.classList.toggle('toggle-body--on');
  toggleBtn.classList.toggle('toggle-btn--on');
  toggleBtn.classList.toggle('toggle-btn--scale');
});
//# sourceMappingURL=ToggleBtn.js.map
