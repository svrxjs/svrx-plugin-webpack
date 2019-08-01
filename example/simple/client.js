/* eslint-env browser */
var app = document.getElementById('app');
var time = document.getElementById('time');

var timer = setInterval(updateClock, 1000);

function updateClock() {
  time.innerHTML = (new Date()).toString() + 'helo world';
}

// Edit these styles to see them take effect immediately
app.style.display = 'table-cell';
app.style.width = '100px';
app.style.height = '200px';
app.style.border = '3px solid #633';
app.style.background = '#999';
app.style.color = '#333';
app.style.textAlign = 'left';
app.style.verticalAlign = 'middle';


if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    clearInterval(timer);
  });
}