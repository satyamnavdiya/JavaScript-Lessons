let abc = document.querySelector('#abc')

window.addEventListener("mousemove", function(dets){
    // console.log(dets);

    // console.log(dets.clientX, dets.clientY);

    abc.style.top = dets.clientY + "px";
    abc.style.left = dets.clientX + "px";

    
})