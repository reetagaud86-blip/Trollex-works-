
const title = document.getElementById("mainTitle");



function changeCategory(category){

    title.innerText = category;

}



function openVideo(video, card){


    // Remove glow from all cards

    document.querySelectorAll(".card")
    .forEach(c=>{
        c.classList.remove("active");
    });



    // Add glow only to clicked card

    card.classList.add("active");



    let popup = document.getElementById("videoPopup");

    let player = document.getElementById("player");



    player.src = video;


    popup.style.display="flex";


    player.play();


}



function closeVideo(){


    let popup=document.getElementById("videoPopup");

    let player=document.getElementById("player");


    player.pause();

    player.src="";


    popup.style.display="none";


}
