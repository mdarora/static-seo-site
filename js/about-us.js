$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    stagePadding:10,
	    dots:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            nav:true
	        },
	        575:{
	            items:2,
	            nav:true
	        },
	        768:{
	            items:3,
	            nav:true
	        },
	        992:{
	            items:4,
	            nav:true,
	            loop:true
	        }
	    }
	});
  $(".owl-prev").empty();
  $(".owl-prev").append(`<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z"/>
			<path d="M306.208,131.125c-4.167-4.167-10.917-4.167-15.083,0L173.792,248.458c-4.167,4.167-4.167,10.917,0,15.083
				l117.333,117.333c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125c4.167-4.167,4.167-10.917,0-15.083
				L196.417,256l109.792-109.792C310.375,142.042,310.375,135.292,306.208,131.125z"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`);

  $(".owl-next").empty();
  $(".owl-next").append(`<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z"/>
			<path d="M220.875,131.125c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083L315.583,256L205.792,365.792
				c-4.167,4.167-4.167,10.917,0,15.083c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l117.333-117.333
				c4.167-4.167,4.167-10.917,0-15.083L220.875,131.125z"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`);
});


document.addEventListener("scroll", ()=>{

	let b1 = document.getElementById("b1");
	let b1Bound = b1.getBoundingClientRect();
	if(b1Bound.top < window.innerHeight && b1Bound.bottom > 0){
	   b1.classList.add("slide-anim-1");
	};

	let b2 = document.getElementById("b2");
	let b2Bound = b2.getBoundingClientRect();
	if(b2Bound.top < window.innerHeight && b2Bound.bottom > 0){
	    b2.classList.add("slide-anim-2");
	 };

	let b3 = document.getElementById("b3");
	let b3Bound = b3.getBoundingClientRect();
	if(b3Bound.top < window.innerHeight && b3Bound.bottom > 0){
	    b3.classList.add("slide-anim-3");
	};

	let b4 = document.getElementById("b4");
	let b4Bound = b4.getBoundingClientRect();
	if(b4Bound.top < window.innerHeight && b4Bound.bottom > 0){
	    b4.classList.add("slide-anim-4");
	};

});
/*
document.addEventListener("scroll",function(){

  let b1 = document.getElementById("b1");
  let b1Bound = b1.getBoundingClientRect();
  if(b1Bound.top < window.innerHeight && b1Bound.bottom > 0){
    b1.classList.add("slide-anim-1");
  };
  let b2 = document.getElementById("b2");
  let b2Bound = b2.getBoundingClientRect();
  if(b2Bound.top < window.innerHeight && b2Bound.bottom > 0){
    b2.classList.add("slide-anim-2");
  }
  let b3 = document.getElementById("b3");
  let b3Bound = b3.getBoundingClientRect();
  if(b3Bound.top < window.innerHeight && b3Bound.bottom > 0){
    b3.classList.add("slide-anim-3");
  }
  let b4 = document.getElementById("b4");
  let b4Bound = b4.getBoundingClientRect();
  if(b4Bound.top < window.innerHeight && b4Bound.bottom > 0){
    b4.classList.add("slide-anim-4");
  }


)};
*/