var i = 0;
var txt = 'best seo company at your location';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
setTimeout(typeWriter, 200);

$(()=>{
  function animOpacity(){
    $("#your-company").animate({
      opacity: "1",
    },2500);
    $("#compet-1").animate({
      opacity: "1",
    },1000);
    $("#compet-2").animate({
      opacity: "1",
    },2000);
    $("#cntnt").animate({
      opacity: "1",
    },1200);
    $(".with-o-us").animate({
      opacity: "1",
    },2500);
  }
  setTimeout(animOpacity, 2400);

  function moveUp(){
    $("#your-company").addClass("you-1");
    $(".with-o-us").addClass("changed");
    $("#compet-2").addClass("c2-1");
  }
  setTimeout(moveUp, 3200);

  function moveTop(){
    $("#your-company").addClass("you-2");
    $(".with-o-us").addClass("changed-again");
    $("#compet-1").addClass("c1-1");
  }
  setTimeout(moveTop, 6000);

  function lastChange(){
    $(".changed-again").text("WITH US");
    $(".changed-again").addClass("last-change");
  };
  setTimeout(lastChange, 7500);

/*
  $(".dp-1").click(function(){
    $("#")
  });

  $(".dp-2").click(function(){
    $(".c-img").empty();
    var dp1Clone = $(this).clone();
    $(".c-img").append(dp1Clone);
    dp1Clone.removeClass("dp-2");
  });

  $(".dp-3").click(function(){
    $(".c-img").empty();
    var dp1Clone = $(this).clone();
    $(".c-img").append(dp1Clone);
    dp1Clone.removeClass("dp-3");
  });

  $(".dp-4").click(function(){
    $(".c-img").empty();
    var dp1Clone = $(this).clone();
    $(".c-img").append(dp1Clone);
    dp1Clone.removeClass("dp-4");
  });

  $(".dp-5").click(function(){
    $(".c-img").empty();
    var dp1Clone = $(this).clone();
    $(".c-img").append(dp1Clone);
    dp1Clone.removeClass("dp-5");
  });
  */
});



const dp1 = document.getElementsByClassName("dp-1")[0];
const dp2 = document.getElementsByClassName("dp-2")[0];
const dp3 = document.getElementsByClassName("dp-3")[0];
const dp4 = document.getElementsByClassName("dp-4")[0];
const dp5 = document.getElementsByClassName("dp-5")[0];

const cf1 = document.getElementById("cf-1");
const cf2 = document.getElementById("cf-2");
const cf3 = document.getElementById("cf-3");
const cf4 = document.getElementById("cf-4");
const cf5 = document.getElementById("cf-5");




dp1.addEventListener("click" , ()=>{
  cf1.style.display = "block";
  cf2.style.display = "none";
  cf3.style.display = "none";
  cf4.style.display = "none";
  cf5.style.display = "none";
});

dp2.addEventListener("click" , ()=>{
  cf2.style.display = "block";
  cf1.style.display = "none";
  cf3.style.display = "none";
  cf4.style.display = "none";
  cf5.style.display = "none";
});

dp3.addEventListener("click" , ()=>{
  cf3.style.display = "block";
  cf1.style.display = "none";
  cf2.style.display = "none";
  cf4.style.display = "none";
  cf5.style.display = "none";
});

dp4.addEventListener("click" , ()=>{
  cf4.style.display = "block";
  cf1.style.display = "none";
  cf3.style.display = "none";
  cf2.style.display = "none";
  cf5.style.display = "none";
});

dp5.addEventListener("click" , ()=>{
  cf5.style.display = "block";
  cf1.style.display = "none";
  cf3.style.display = "none";
  cf4.style.display = "none";
  cf2.style.display = "none";
});

// **************************************************************************

document.addEventListener("scroll",function(){

  let boxes = document.getElementById("boxes");
  let boxBound = boxes.getBoundingClientRect();
  if(boxBound.top < window.innerHeight && boxBound.bottom > 0){
    boxes.classList.add("anim-bootom-up");
  }

  let whyUSt1 = document.getElementById("why-us-t-1");
  let wt1Bound = whyUSt1.getBoundingClientRect();
  if(wt1Bound.top < window.innerHeight && wt1Bound.bottom > 0){
    whyUSt1.classList.add("anim-bootom-up");
  }

  let whybestT = document.getElementById("why-best-t");
  let wbt1Bound = whybestT.getBoundingClientRect();
  if(wbt1Bound.top < window.innerHeight && wbt1Bound.bottom > 0){
    whybestT.classList.add("anim-bootom-up");
  }

  let whybestImg = document.getElementById("why-best-img");
  let wbImgBound = whybestImg.getBoundingClientRect();
  if(wbImgBound.top < window.innerHeight && wbImgBound.bottom > 0){
    whybestImg.classList.add("anim-bootom-up");
  }

  let wbParas = document.getElementById("wb-paras");
  let wbParasBound = wbParas.getBoundingClientRect();
  if(wbParasBound.top < window.innerHeight && wbParasBound.bottom > 0){
    wbParas.classList.add("anim-bootom-up");
  }

  let osT1 = document.getElementById("our-service-t1");
  let ost1Bound = osT1.getBoundingClientRect();
  if(ost1Bound.top < window.innerHeight && ost1Bound.bottom > 0){
    osT1.classList.add("anim-bootom-up");
  }

  let rapid = document.getElementById("rapid");
  let rapidBound = rapid.getBoundingClientRect();
  if(rapidBound.top < window.innerHeight && rapidBound.bottom > 0){
    rapid.classList.add("anim-bootom-up");
  }

  let scintific = document.getElementById("scintific");
  let scintificBound = scintific.getBoundingClientRect();
  if(scintificBound.top < window.innerHeight && scintificBound.bottom > 0){
    scintific.classList.add("anim-bootom-up");
  }

  let revenue = document.getElementById("revenue");
  let revenueBound = revenue.getBoundingClientRect();
  if(revenueBound.top < window.innerHeight && revenueBound.bottom > 0){
    revenue.classList.add("anim-bootom-up");
  }

  let sb1 = document.getElementById("sb-1");
  let sb1Bound = sb1.getBoundingClientRect();
  if(sb1Bound.top < window.innerHeight && sb1Bound.bottom > 0){
    sb1.classList.add("anim-bootom-up");
  }

  let sb2 = document.getElementById("sb-2");
  let sb2Bound = sb2.getBoundingClientRect();
  if(sb2Bound.top < window.innerHeight && sb2Bound.bottom > 0){
    sb2.classList.add("anim-bootom-up");
  }
/*
  let sb3 = document.getElementById("sb-3");
  let sb3Bound = sb3.getBoundingClientRect();
  if(sb3Bound.top < window.innerHeight && sb3Bound.bottom > 0){
    sb3.classList.add("anim-bootom-up");
  }

  let sb4 = document.getElementById("sb-4");
  let sb4Bound = sb1.getBoundingClientRect();
  if(sb4Bound.top < window.innerHeight && sb4Bound.bottom > 0){
    sb4.classList.add("anim-bootom-up");
  }
   */

  let qouteTxt = document.getElementById("qoute-txt");
  let qouteTxtBound = qouteTxt.getBoundingClientRect();
  if(qouteTxtBound.top < window.innerHeight && qouteTxtBound.bottom > 0){
    qouteTxt.classList.add("anim-bootom-up");
  }

  let qouteForm = document.getElementById("qoute-form");
  let qouteFormBound = qouteForm.getBoundingClientRect();
  if(qouteFormBound.top < window.innerHeight && qouteFormBound.bottom > 0){
    qouteForm.classList.add("anim-bootom-up");
  }

  let portTxt = document.getElementById("portfolio-txt");
  let portTxtBound = portTxt.getBoundingClientRect();
  if(portTxtBound.top < window.innerHeight && portTxtBound.bottom > 0){
    portTxt.classList.add("anim-bootom-up");
  }

  let portImg = document.getElementById("port-img");
  let portImgBound = portImg.getBoundingClientRect();
  if(portImgBound.top < window.innerHeight && portImgBound.bottom > 0){
    portImg.classList.add("anim-bootom-up");
  }

  let brands = document.getElementById("brands");
  let brandsBound = brands.getBoundingClientRect();
  if(brandsBound.top < window.innerHeight && brandsBound.bottom > 0){
    brands.classList.add("anim-bootom-up");
  }

  let tstTxt = document.getElementById("tst-txt");
  let tstTxtBound = tstTxt.getBoundingClientRect();
  if(tstTxtBound.top < window.innerHeight && tstTxtBound.bottom > 0){
    tstTxt.classList.add("anim-bootom-up");
  }

  let clients1 = document.getElementById("clients-1");
  let clients1Bound = clients1.getBoundingClientRect();
  if(clients1Bound.top < window.innerHeight && clients1Bound.bottom > 0){
    clients1.classList.add("anim-bootom-up");
  }

  let clients2 = document.getElementById("clients-2");
  let clients2Bound = clients2.getBoundingClientRect();
  if(clients2Bound.top < window.innerHeight && clients2Bound.bottom > 0){
    clients2.classList.add("anim-bootom-up");
  }

  let quotTxt = document.getElementById("quot-txt");
  let quotTxtBound = quotTxt.getBoundingClientRect();
  if(quotTxtBound.top < window.innerHeight && quotTxtBound.bottom > 0){
    quotTxt.classList.add("anim-bootom-up");
  }

  let qoutForm = document.getElementById("qout-form");
  let qoutFormBound = qoutForm.getBoundingClientRect();
  if(qoutFormBound.top < window.innerHeight && qoutFormBound.bottom > 0){
    qoutForm.classList.add("anim-bootom-up");
  }
  

});


// ***************************************************************************