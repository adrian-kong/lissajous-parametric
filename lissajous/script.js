var canvas  = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    width   = canvas.width,
    height  = canvas.height,
    angle   = 0,
    r       = 50,
    ampX    = 1,
    ampY    = 1,
    phaseX  = 0,
    phaseY  = 0,
    periodX = 1,
    periodY = 1,
    running = true,
    x,y;

context.beginPath();
render();

function render() {
  if (!running) {
    return;
  }
  x = width / 2  + ampX * Math.cos(periodX * angle - phaseX) * r;
  y = height / 2 + ampY * Math.cos(periodY * angle - phaseY) * r;
  context.lineTo(x,y);
  context.stroke();
  
  angle += 0.0001 * 1 / Math.max(periodX, periodY);
  requestAnimationFrame(render);
};

function toggle(){
  running = !running;
  render();
};

function dampX() {
  ampX = document.getElementById('amplitudeX').value;
};

function dampY() {
  ampY = document.getElementById('amplitudeY').value;
};

function dphaseX() {
  phaseX = document.getElementById('phaseX').value;
};

function dperiodX() {
  periodX = document.getElementById('periodX').value;
};

function dphaseY() {
  phaseY = document.getElementById('phaseY').value;
};

function dperiodY() {
  periodY = document.getElementById('periodY').value;
};

function reset(){
  context.clearRect(0,0,800,800);
  angle = 0;
  context.beginPath();
};
