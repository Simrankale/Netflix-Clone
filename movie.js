let liked = false;
let added = false;

function toggleLike(){

const btn = document.querySelector(".like-btn");

if(!liked){

btn.style.background="#e50914";
btn.innerHTML='<span class="material-icons">thumb_up</span>Liked';

liked=true;

}

else{

btn.style.background="#444";
btn.innerHTML='<span class="material-icons">thumb_up</span>Like';

liked=false;

}

}

function toggleList(){

const btn=document.querySelector(".list-btn");

if(!added){

btn.style.background="#e50914";
btn.innerHTML='<span class="material-icons">check</span>Added';

added=true;

}

else{

btn.style.background="#444";
btn.innerHTML='<span class="material-icons">add</span>My List';

added=false;

}

}