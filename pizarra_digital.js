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

function colorFondo()
{
  fondo = color_fondo.value;
  var areaDibujo = document.getElementById("areaDibujo");
  areaDibujo.style.backgroundColor = fondo;
}

var tamaño_lapiz = document.getElementById('tamaño_lapiz');
tamaño_lapiz.addEventListener('change', tamañoLapiz)

var tamaño = 1;

function tamañoLapiz()
{
  tamaño = tamaño_lapiz.value;
}

var limpiar_lienzo = document.getElementById('limpiar_lienzo');
limpiar_lienzo.addEventListener('click', limpiarLienzo)

function limpiarLienzo(evento)
{
  var bool = confirm('Seguro que desea limpiar todo?');
  if (bool)
  {
    papel.clearRect(0, 0, canvas.width, canvas.height);
    alert('Se eliminó correctamente');
  }
}
