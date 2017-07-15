var socketioCDN = document.createElement('script');
socketioCDN.type = 'text/javascript';
socketioCDN.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js';
document.body.appendChild(socketioCDN);

var MC_div1 = document.createElement('div');
MC_div1.style.position = "absolute";
MC_div1.style.width = "32px";
MC_div1.style.height = "32px";
MC_div1.style.opacity = "0.9";
MC_div1.style.background = "#000";
MC_div1.style.backgroundImage = "url('https://marioscode.github.io/LordNub32x32plus.png')";
document.getElementById("app-mount").appendChild(MC_div1);
//document.body.innerHTML += '<div id="MC_div1" style="position:absolute;width:32px;height:32px;opacity:0.9;z-index:100;background:#000;background-image:url(\'https://marioscode.github.io/LordNub32x32plus.png\')"></div>';

/*
var script = document.createElement('script');script.type = 'text/javascript';script.src = 'https://marioscode.github.io/reginub.js';document.body.appendChild(script);
*/