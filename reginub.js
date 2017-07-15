var socketioCDN = document.createElement('script');
socketioCDN.type = 'text/javascript';
socketioCDN.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js';
document.body.appendChild(socketioCDN);

var currentUsername = document.body.innerHTML;
currentUsername = currentUsername.substring(currentUsername.indexOf("<span class=\"username\">")+23,currentUsername.length);
currentUsername = currentUsername.substring(0,currentUsername.indexOf("</span>"));

var MC_div1 = document.createElement("div");
Object.assign(MC_div1.style,{position:"absolute",width: "32px", height: "32px", opacity: "0.9", background: "#000", backgroundImage: "url('https://marioscode.github.io/LordNub32x32Dark.png')", cursor: "pointer"});
document.body.appendChild(MC_div1);
//document.getElementById("app-mount").appendChild(MC_div1);
//document.body.innerHTML += '<div id="MC_div1" style="position:absolute;width:32px;height:32px;opacity:0.9;z-index:100;background:#000;background-image:url(\'https://marioscode.github.io/LordNub32x32plus.png\')"></div>';

/*
var script = document.createElement('script');script.type = 'text/javascript';script.src = 'https://marioscode.github.io/reginub.js';document.body.appendChild(script);
*/