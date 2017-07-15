var socketioCDN = document.createElement('script');
socketioCDN.type = 'text/javascript';
socketioCDN.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js';
document.body.appendChild(socketioCDN);

var currentUsername = document.body.innerHTML;
currentUsername = currentUsername.substring(currentUsername.indexOf("<span class=\"username\">")+23,currentUsername.length);
currentUsername = currentUsername.substring(0,currentUsername.indexOf("</span>"));

var MC_div1 = document.createElement("div");
Object.assign(MC_div1.style,{position: "absolute", top: "0px", width: "32px", height: "32px", opacity: "0.9", background: "#000", backgroundImage: "url('https://marioscode.github.io/LordNub32x32Dark.png')", cursor: "pointer", display: "inline"});
MC_div1.onmouseover = function(){
	MC_div1.style.backgroundImage = "url('https://marioscode.github.io/LordNub32x32Light.png')";
};
MC_div1.onmouseout = function(){
	MC_div1.style.backgroundImage = "url('https://marioscode.github.io/LordNub32x32Dark.png')";
};
document.body.appendChild(MC_div1);
/*
var script = document.createElement('script');script.type = 'text/javascript';script.src = 'https://marioscode.github.io/reginub.js';document.body.appendChild(script);
*/