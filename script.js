var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");

var head0 = document.getElementById("head0");
var head1 = document.getElementById("head1");
var head2 = document.getElementById("head2");

var time = 0;
var frame = 0;

function clear()
{
    ctx.fillStyle = '#0f0';
    ctx.fillRect(0, 0, 640, 480);
}

function clamp(x, y, z)
{
  if (x < y)return y;
  else if (x > z)return z;
  else return x;
}

function update()
{
    clear();
    time += 1 / 60;
    var x = (Math.sin(time / 4) + 1) * 40;
    frame = (Math.floor(time * 2) / 2) % 8;
    if(frame == 0)ctx.drawImage(head0, 0, x);
    if(frame == 1)ctx.drawImage(head1, 0, x);
    if(frame >= 2)ctx.drawImage(head2, 0, x);
}

setInterval(update, 1 / 60);
