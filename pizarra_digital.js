var canvas = document.getElementById('areaDibujo');
var papel = canvas.getContext('2d');

var teclas = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};
document.addEventListener('keydown', dibujarTeclado);

function dibujarTeclado(evento)
{
  var movimiento = 5;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(color, x, y, x - movimiento, y);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(color, x, y, x + movimiento, y);
      x = x + movimiento;
    break;
  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWidth = tamaño;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}

var presion = false;

document.addEventListener('mousedown', presionarMouse);
function presionarMouse(evento)
{
  presion = true;
  x = evento.offsetX;
  y = evento.offsetY;
}

document.addEventListener('mouseup', soltarMouse);
function soltarMouse(evento)
{
  presion = false;
  x = evento.offsetX;
  y = evento.offsetY;
}

document.addEventListener('mousemove', dibujarMouse);
function dibujarMouse(evento)
{
  if (presion)
  {
    dibujarLinea(color, x, y, evento.offsetX, evento.offsetY);
  }
  x = evento.offsetX;
  y = evento.offsetY;
}

var color_lapiz = document.getElementById('color_lapiz');
color_lapiz.addEventListener('change', colorLapiz);

var color = 'black';

function colorLapiz()
{
  color = color_lapiz.value;
}

var color_fondo = document.getElementById('color_fondo');
color_fondo.addEventListener('change', colorFondo);

color_fondo.value = '#FFFFFF';

function colorFondo()
{
  var fondo = color_fondo.value;
  canvas.style.backgroundColor = fondo;
}

var tamaño_lapiz = document.getElementById('tamaño_lapiz');
tamaño_lapiz.addEventListener('change', tamañoLapiz)

var tamaño = '3';

function tamañoLapiz()
{
  tamaño = tamaño_lapiz.value;
}

var tamaño_lienzo = document.getElementById('tamaño_lienzo');
tamaño_lienzo.addEventListener('change', tamañoLienzo);

function tamañoLienzo(evento) {
  if (tamaño_lienzo.value == 'defecto') {
    papel.canvas.width = 900;
    papel.canvas.height = 500;
  }
  if (tamaño_lienzo.value == 'pantalla') {
    papel.canvas.width = 1080;
    papel.canvas.height = 1920;
  }
  if (tamaño_lienzo.value == 'fb') {
    papel.canvas.width = 851;
    papel.canvas.height = 315;
  }
  if (tamaño_lienzo.value == '1:1') {
    papel.canvas.width = 1024;
    papel.canvas.height = 1024;
  }
  if (tamaño_lienzo.value == '4:3') {
    papel.canvas.width = 1024;
    papel.canvas.height = 768;
  }
  if (tamaño_lienzo.value == '3:2') {
    papel.canvas.width = 1200;
    papel.canvas.height = 800;
  }
  if (tamaño_lienzo.value == '16:9') {
    papel.canvas.width = 1280;
    papel.canvas.height = 720;
  }

  if (tamaño_lienzo.value == '5:4') {
    papel.canvas.width = 1280;
    papel.canvas.height = 1024;
  }

  if (tamaño_lienzo.value == 'personalizado') {
    
  }
}

var limpiar_lienzo = document.getElementById('limpiar_lienzo');
limpiar_lienzo.addEventListener('click', limpiarLienzo)

function limpiarLienzo()
{
  var bool = confirm('Seguro que desea limpiar todo?');
  if (bool)
  {
    papel.clearRect(0, 0, canvas.width, canvas.height);
    color = '#000000';
    color_lapiz.value = '#000000';
    color_fondo.value = '#FFFFFF';
    canvas.style.backgroundColor = '#FFFFFF';
    tamaño_lapiz.value = '3';
    tamaño = '3';
    alert('Se eliminó correctamente');
  }
}
