var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");
var time = 0;

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
    var frame = (Math.floor(time * 2) / 2) % 8;
    frame = clamp(frame, 0, 2);
    if(frame == 0)ctx.drawImage("./images/head_0.png", 0, x);
    if(frame == 1)ctx.drawImage("./images/head_1.png", 0, x);
    if(frame == 2)ctx.drawImage("./images/head_2.png", 0, x);
}

setInterval(update, 1 / 60);
