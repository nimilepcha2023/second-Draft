
/*------------Modal 1--------------*/

//get the modal

let modal = document.querySelector("#myModal")

//get the icon that opens the modal
let modalclick = document.querySelector("#modal-click")

//get the <span> element that close the modal
let closeBtn =document.querySelector(".close")

//add event 'click' that open the modal
modalclick.addEventListener('click',function(){
    modal.style.display= "block";
})

//get the <span> (x), it close the modal
    closeBtn.addEventListener('click',function(event){
        modal.style.display ="none";

})



/*------------Modal 2--------------*/

let modal2 = document.querySelector("#secondmodel")
let createBtn = document.querySelector("#createbtn")
let exitBtn =document.querySelector(".exit")

createBtn.addEventListener('click', function(){
    modal2.style.display = "block";
    modal.style.display= "none";
})
    exitBtn.addEventListener('click',function(event){
        modal2.style.display ="none";
   
})


/*------------Modal 3--------------*/

let modal3 = document.querySelector("#thirdmodal")
let faceBookClick = document.querySelector("#fbclick")
let crossBtn =document.querySelector(".cross")

faceBookClick.addEventListener('click',function(){
    modal3.style.display= "block";
    
})
    crossBtn.addEventListener('click',function(event){
        modal3.style.display ="none";

})

/*------------Modal 4--------------*/
let modal4 = document.querySelector("#fourthmodal")
let instaClick = document.querySelector("#igclick")
let stopBtn =document.querySelector(".stop")

instaClick.addEventListener('click',function(){
    modal4.style.display= "block";
    
})
    stopBtn.addEventListener('click',function(event){
        modal4.style.display ="none";

})




