var mc_socketioCDN = document.createElement('script');
mc_socketioCDN.type = 'text/javascript';
mc_socketioCDN.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js';
document.body.appendChild(mc_socketioCDN);

var mc_currentUsername = document.body.innerHTML;
mc_currentUsername = mc_currentUsername.substring(mc_currentUsername.indexOf("<span class=\"username\">")+23,mc_currentUsername.length);
mc_currentUsername = mc_currentUsername.substring(0,mc_currentUsername.indexOf("</span>"));


//preload images
var mc_img_LordNub32x32Dark = new Image();
mc_img_LordNub32x32Dark.src = 'https://marioscode.github.io/LordNub32x32Dark.png';
var mc_img_LordNub32x32Light = new Image();
mc_img_LordNub32x32Light.src = 'https://marioscode.github.io/LordNub32x32Light.png';

var mc_div1 = document.createElement("div");
Object.assign(mc_div1.style,{position: "absolute", bottom: "0px", width: "32px", height: "32px", opacity: "0.9", background: "#000", backgroundImage: "url('https://marioscode.github.io/LordNub32x32Dark.png')", cursor: "pointer", display: "inline"});
mc_div1.onmouseover = function(){
	mc_div1.style.backgroundImage = "url('https://marioscode.github.io/LordNub32x32Light.png')";
};
mc_div1.onmouseout = function(){
	mc_div1.style.backgroundImage = "url('https://marioscode.github.io/LordNub32x32Dark.png')";
};
document.body.appendChild(mc_div1);
/*
var script = document.createElement('script');script.type = 'text/javascript';script.src = 'https://marioscode.github.io/reginub.js';document.body.appendChild(script);
*/