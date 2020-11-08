let formSection = document.getElementById('formSection');
let send = document.getElementById('send');
send.onclick = function(){
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
   
    let postInfo = new XMLHttpRequest();
    postInfo.open('GET', `https://api.telegram.org/bot1218523418:AAGGKPtHNVS_dlZmAIOYBZE5a7qaD4hu8HI/sendMessage?text= Name: ${name}%0APhone: ${phone}%0AMessage: ${message}&chat_id=-429912679`, false);
    postInfo.send();
}
