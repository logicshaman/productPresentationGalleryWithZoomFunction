// productPresentatuonGallery v1.0 | October (5||15) 2020 | Author: Eulr Masauding
function prdctPrsnttonGlry_E(){

	// ---------------------------------------------------
	// ---------------------------------------------------
	// ---------------------------------------------------
	// NOTES:
	// 1.) Make the images equal in size from each other. Or at least the "WIDTH".
	// 2.) Change the value of variable "maxHeightModalStagedImage" according to the desired maxheight. This affects the modal responsiveness. 520px is the default height because most laptop has 768px window-height minus the "browser search-bar", "browser tab bar", "browser bookmark bar"and "its modal thumbnail-div height".
	// 3.) make the modal thumbnail square, example: 90x90. change the varible "modalThumbHeightWidth" and "modalThumbDivPadding".
	// ---------------------------------------------------
	// ---------------------------------------------------
	// ---------------------------------------------------


	// Gallery assets and variables (Edit this vars accordingly)
	var imgLctn = "asset/img/", // treat this link as if on the html file
		imgThumbs = [
			"img1-thumb.jpg",
			"label-img.jpg",
			"img3-thumb.jpg",
			"img4-thumb.jpg",
			"img5-thumb.jpg"
		],
		imgOptimum = [
			"img1-optimum.jpg",
			"label-img.jpg",
			"img3-optimum.jpg",
			"img4-optimum.jpg",
			"img5-optimum.jpg"
		],
		maxHeightModalStagedImage = 520, // 520px (Editable)
		modalThumbHeightWidth = 60,
		modalThumbDivPaddingTop = 9,
		modalThumbDivPaddingBottom = 9,
		defaultMinimumWindowHeight = 280, // Because the smallest mobile window-view is 280px (base on google-chrome's dev tool)
		defaultMaxMainImgHeight = 695,
		defaultHeightStgImgWhnAtVrySmlSz = 234, //defalut actual image at 280px by variable defaultMinimumWindowHeight
		defaultMxWthMainImg = 900,
		mnSzOfNxtNdPrvBtnOnMdlStgdImg = "", //minimum Size Of Next And Previous Button On Modal-Staged Image
		mxSzOfNxtNdPrvBtnOnMdlStgdImg = ""; //maximum Size Of Next And Previous Button On Modal-Staged Image



	// Import Plugin
	/*! ResponsiveHelp (modified version) | Aug 20, 2019 | MIT | Author: Eulr A. Masauding | https://github.com/logicshaman/ResponsiveHelp */
	function responsiveHelp_H(e,n,a){var W=e||500,Q=n||1200,_=a||"rem";jQuery.fn.RcssH=function(e,n){for(var a=window.innerHeight,s=0;s<e.length;s++)for(var r=e[s][1].length,t=0;t<r;t++){var i,h,l=e[s][1][t].length,o=e[s][1][t][l-1];h=1===r?i=!0:0===t?!(i=!0):t===r-1?!(i=!1):i=!1;var g=o.minRange||W,c=o.maxRange||Q;if(i?h||(l=e[s][1][t+1].length,c=o.maxRange||e[s][1][t+1][l-1].minRange||Q):(l=e[s][1][t-1].length,g=o.minRange||e[s][1][t-1][l-1].maxRange||W),(g<=a||a<=g&&i)&&(a<=c||c<=a&&h)&&("string"==typeof e[s][1][t][0]&&this.css(e[s][0],e[s][1][t][0]),"number"==typeof e[s][1][t][0])){for(var f=e[s][1][t].length,p=0;p<f;p++)"object"==typeof e[s][1][t][p]&&f--;var v,R=f/2,m=e[s][1][t][f]||{},u=[],y=m.scale||_,j=m.scaleTB,x=m.scaleRL,H=m.scaleT,b=m.scaleB;1==R&&(v=[y]),2==R&&(v=[j||y,x||y]),3==R&&(v=[H||j||y,x||y,b||j||y]),4==R&&(v=[H||j||y,m.scaleR||x||y,b||j||y,m.scaleL||x||y]);for(p=0;p<=R-1;p++){var w=e[s][1][t][p],B=e[s][1][t][p+R],L=c<=a,T=(B-w)/(c-g),d=a-g;a<=g?u.push(w+v[p]):L?u.push(B+v[p]):u.push(w+T*d+v[p])}this.css(e[s][0],u.join(" "))}}return n?"off"===n?this.parent():this.parents(n):this}}function responsiveHelp_W(e,n,a){var W=e||500,Q=n||1200,_=a||"rem";jQuery.fn.RcssW=function(e,n){for(var a=window.innerWidth,s=0;s<e.length;s++)for(var r=e[s][1].length,t=0;t<r;t++){var i,h,l=e[s][1][t].length,o=e[s][1][t][l-1];h=1===r?i=!0:0===t?!(i=!0):t===r-1?!(i=!1):i=!1;var g=o.minRange||W,c=o.maxRange||Q;if(i?h||(l=e[s][1][t+1].length,c=o.maxRange||e[s][1][t+1][l-1].minRange||Q):(l=e[s][1][t-1].length,g=o.minRange||e[s][1][t-1][l-1].maxRange||W),(g<=a||a<=g&&i)&&(a<=c||c<=a&&h)&&("string"==typeof e[s][1][t][0]&&this.css(e[s][0],e[s][1][t][0]),"number"==typeof e[s][1][t][0])){for(var f=e[s][1][t].length,p=0;p<f;p++)"object"==typeof e[s][1][t][p]&&f--;var v,R=f/2,m=e[s][1][t][f]||{},u=[],y=m.scale||_,j=m.scaleTB,x=m.scaleRL,H=m.scaleT,b=m.scaleB;1==R&&(v=[y]),2==R&&(v=[j||y,x||y]),3==R&&(v=[H||j||y,x||y,b||j||y]),4==R&&(v=[H||j||y,m.scaleR||x||y,b||j||y,m.scaleL||x||y]);for(p=0;p<=R-1;p++){var w=e[s][1][t][p],B=e[s][1][t][p+R],L=c<=a,T=(B-w)/(c-g),d=a-g;a<=g?u.push(w+v[p]):L?u.push(B+v[p]):u.push(w+T*d+v[p])}this.css(e[s][0],u.join(" "))}}return n?"off"===n?this.parent():this.parents(n):this}}

	// Important plugin vars (don't edit this if you don't edit all its var calls)
	var thumbNums = imgThumbs.length,
		optimumImgNums = imgOptimum.length,
		e_actualSize = document.getElementsByClassName("e_actualSize")[0],
		e_thumbs = document.getElementsByClassName("e_thumbs")[0],
		e_actualSize_jQ = $(".e_actualSize"),
		e_thumbs_jQ = $(".e_thumbs"),
		onModalStagedE = document.getElementsByClassName('productGalleryParentMODALdiv')[0],
		onModalStagedE_jQ = $(".productGalleryParentMODALdiv"),
		onModalStagedPrimwCont_jQ = $(".productGalleryParentMODALdiv .galleryPrimeContainer"),
		onModalStagedIntCont_jQ = $(".productGalleryParentMODALdiv .glryIntlCntnr"),
		onModalStagedImg = onModalStagedE.getElementsByClassName('e_actualSize')[0],
		onModalStagedImg_jQ = $(".productGalleryParentMODALdiv .e_actualSize"),
		onModalStagedImgThumb = onModalStagedE.getElementsByClassName('e_thumbs')[0],
		onModalStagedImgThumb_jQ = $(".productGalleryParentMODALdiv .e_thumbs"),
		onModalStagedImgControls_jQ = $(".productGalleryParentMODALdiv .controls"),
		defaultMinimumWindowWidth = defaultMinimumWindowHeight,
		TMSH = maxHeightModalStagedImage+modalThumbHeightWidth+modalThumbDivPaddingBottom+modalThumbDivPaddingTop;
	// Important plugin arrays (don't edit this if you don't edit all its array calls)
	e_actualSizeGreatestHeight=[];
	e_actualSizeGreatestHeightVar=[];
	// function e_actualSizeGreatestHeightVar() {
	// }
	e_actualSizeGreatestWidth=[];
	e_actualSizeGreatestWidthVar=[];
	var e_actlSzGrtstWdthVr_C=e_actualSizeGreatestWidthVar[0],
		e_actlSzGrtstHgtVr_C=e_actualSizeGreatestHeightVar[0];


	




	// Some instructions
	if (optimumImgNums==0)console.log("No optimum images are indicated");
	if (thumbNums==0)console.log("No thumb images are indicated");
	if (optimumImgNums!==thumbNums){console.log("The number of thumb-images are not equal to the optimum-size-images")}
	if ((optimumImgNums==0)&&(thumbNums==0)){console.log("No thumbs-images and optimum-size-images are indicated")}

	// Initial populate
	for (var i = optimumImgNums - 1; i >= 0; i--) {
		//populate images
		function activateBydefault(){if((i+1)==1){return "active"}else{return ""}}
		e_actualSize_jQ.prepend("<div class='"+activateBydefault()+" otimumImg_div_"+(i+1)+"'><img class='optimumImg"+(i+1)+"' src="+imgLctn+imgOptimum[i]+">");
		e_thumbs_jQ.prepend("<div class='"+activateBydefault()+" thumbImg_div_"+(i+1)+"'><img class='thumbImg"+(i+1)+"' src="+imgLctn+imgThumbs[i]+"></div>");
	}


	
	

	// Dynamic thumb select
	var imgGlryClassLength = onModalStagedImgThumb_jQ.find(">div:nth-child(2)")[0].firstChild.className.length,
		numsOfThumbs = onModalStagedImgThumb_jQ.find(">div").length,
		numsOfThumbsToString = numsOfThumbs.toString(),
		glryIntlCntnr_jQ = $(".glryIntlCntnr");
	glryIntlCntnr_jQ.find("[class*='thumbImg_div_']").click(function() {
		if($(this).hasClass("active"))return;
		glryIntlCntnr_jQ.find("[class*='thumbImg_div_']").removeClass("active");
		var theThis = $(this)[0].firstChild.className,
			targetOptimumImg = theThis.split("")[(imgGlryClassLength-1)];
		$("."+theThis+"").parent("div").addClass("active");
		e_actualSize_jQ.find("> div").removeClass("active");
		e_actualSize_jQ.find(".otimumImg_div_"+targetOptimumImg+"").addClass("active");
	});


	// open modal
	e_actualSize_jQ.find(">div").click(function(){
		if(onModalStagedE.classList.add("modalActivated"))return;
		if(onModalStagedE.classList.contains("haveBeenOpened")){
			// dfgjh56e6rtmfhg();
			// dynamicWidthHight();
		}else{
			onModalStagedE.classList.add("haveBeenOpened");
		}
	});

	// function dfgjh56e6rtmfhg() {
	// 	for (var i = optimumImgNums - 1; i >= 0; i--) {
	// 		//(This is "DUBLICATE" code because sometimes it fails to push the values at initial attempt)
	// 		img = new Image();
	// 		img.src = onModalStagedImg_jQ.find("img.optimumImg"+(i+1)+"")[0].currentSrc;
	// 		e_actualSizeGreatestHeight.push(img.height);
	// 		e_actualSizeGreatestWidth.push(img.width);
	// 	}
	// 	var imgNativeH = e_actualSizeGreatestHeight.sort(function(a, b){return a - b;}),
	// 		imgNativeW = e_actualSizeGreatestWidth.sort(function(a, b){return a - b;});
	// 	console.log(imgNativeH);
	// 	console.log(imgNativeW);
	// 	e_actualSizeGreatestHeightVar.push(imgNativeH[(imgNativeH.length)-1]);
	// 	e_actualSizeGreatestWidthVar.push(imgNativeW[(imgNativeW.length)-1]);
	// 	console.log(e_actualSizeGreatestHeightVar[0]+" "+e_actualSizeGreatestWidthVar[0]);

	// }dfgjh56e6rtmfhg();
	


	



	// //dynamic width and height
	responsiveHelp_H(defaultMinimumWindowHeight, TMSH,"px");
	responsiveHelp_W(defaultMinimumWindowWidth, defaultMxWthMainImg,"px");
	
	function WndwHgtWthChr() {
		var WH = window.innerHeight,
			WW = window.innerWidth;
		
		onModalStagedE.classList.remove("WW_x_m");
		onModalStagedE.classList.remove("WH_x_m");
		if(WW<=defaultMxWthMainImg){onModalStagedE.classList.add("WW_x_m")}
		if(WH<=TMSH){onModalStagedE.classList.add("WH_x_m")}

		onModalStagedE.classList.remove("WndwHght_Grtr");
		onModalStagedE.classList.remove("WW_Grtr");
		if (WH>WW){
			onModalStagedE.classList.add("WndwHght_Grtr");



			onModalStagedImgControls_jQ.find("> div").RcssW([
				["max-width",[
					[20,35]
				]],
				["width",[
					[20,35]
				]],
				["border-width",[[2,4]]],
				["border-radius",[[7,15]]],
				["padding",[[2,4,1, 4,6,2]]]
			]);
			onModalStagedImg_jQ.find(">div").RcssW([
				["height",[
					[220,maxHeightModalStagedImage]
				]]
			]);

		}else{
			onModalStagedE.classList.add("WndwWth_Grtr");



			onModalStagedImgControls_jQ.find("> div").RcssH([
				["max-width",[
					[25,35]
				]],
				["width",[
					[25,35]
				]],
				["border-width",[[2,4]]],
				["border-radius",[[7,15]]],
				["padding",[[3,5,1, 4,6,2]]]
			]);
			onModalStagedImg_jQ.find(">div").RcssH([
				["height",[
					[220,maxHeightModalStagedImage]
				]]
			]);

			onModalStagedPrimwCont_jQ.RcssH([
				["width",[
					[375,defaultMxWthMainImg]
				]]
			]);
			onModalStagedImgThumb_jQ.RcssH([
				["padding-top",[[6,9]]],
				["padding-bottom",[[6,9]]]
			]);
			onModalStagedImgThumb_jQ.find("> div").RcssH([
				["max-width",[[45,65]]]
			]);

			onModalStagedImg_jQ.find(".btns").RcssH([
				["width",[[50,100]]]
			]);
			onModalStagedImg_jQ.find(".nextButton").RcssH([
				["margin-left",[[-50,-100]]]
			]);
			onModalStagedImg_jQ.find(".backButton").RcssH([
				["margin-right",[[-50,-100]]]
			]);
		}

		

		

	}WndwHgtWthChr();
	$(".productGalleryParentMODALdiv");
	window.addEventListener('resize',function(){
		clearTimeout(window.resizingHasStoped);window.resizingHasStoped=setTimeout(function(){
			WndwHgtWthChr();
		},250)
	});


	// console.log($(".productGalleryParentdiv .e_actualSize > div").outerHeight);

	// hover zoom effect
	function imageZoom(imgID, resultID) {
		var img, lens, result, cx, cy;
		// img = document.getElementById(imgID);
		img = document.getElementById(imgID).getElementsByClassName("active")[0].firstChild;
		// console.log(document.getElementById(imgID).getElementsByClassName("active")[0].firstChild.width);
		// console.log(document.getElementById(imgID).getElementsByClassName("active")[0].firstChild.naturalWidth);


		result = document.getElementById(resultID);
		// result = document.getElementById(resultID).getElementsByClassName("active")[0];

		lens = document.createElement("DIV");
		lens.setAttribute("class", "img-zoom-lens");

		img.parentElement.insertBefore(lens, img);

		/* Calculate the ratio between result DIV and lens: */
		cx = result.offsetWidth / lens.offsetWidth;
		cy = result.offsetHeight / lens.offsetHeight;
		// console.log(result.offsetWidth+" | "+lens.offsetWidth+" | "+cx);
		// console.log(result.offsetHeight+" | "+lens.offsetHeight+" | "+cy);

		/* Set background properties for the result DIV */
		// console.log(img.src);
		// result.style.backgroundImage = "url('" + img.currentSrc + "')";
		result.style.backgroundImage = "url('" + img.src + "')";
		// result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
		// result.style.backgroundSize = img.naturalWidth + "px " + (img.height * cy) + "px";
		
		// /* Execute a function when someone moves the cursor over the image, or the lens: */
		lens.addEventListener("mousemove", moveLens);
		img.addEventListener("mousemove", moveLens);

		// /* And also for touch screens: */
		lens.addEventListener("touchmove", moveLens);
		img.addEventListener("touchmove", moveLens);
		function moveLens(e) {
			var pos, x, y;

			 // Prevent any other actions that may occur when moving over the image 
			e.preventDefault();

			/* Get the cursor's x and y positions: */
			pos = getCursorPos(e);

			/* Calculate the position of the lens: */
			x = pos.x - (lens.offsetWidth / 2);
			y = pos.y - (lens.offsetHeight / 2);
			// console.log(lens.offsetWidth);
			// console.log("pos: "+pos.x+" | "+pos.y);

			// /* Prevent the lens from being positioned outside the image: */
			// if (x > img.width - lens.offsetWidth){
			// 	x = img.width - lens.offsetWidth;
			// }
			// if (x < 0){
			// 	x = 0;
			// }
			// if (y > img.height - lens.offsetHeight){
			// 	y = img.height - lens.offsetHeight;
			// }
			// if (y < 0){
			// 	y = 0;
			// }
			if (x > img.naturalWidth - lens.offsetWidth) {x = img.naturalWidth - lens.offsetWidth;}
			if (x < 0) {x = 0;}
			if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
			if (y < 0) {y = 0;}

			/* Set the position of the lens: */
			lens.style.left = x + "px";
			lens.style.top = y + "px";

			/* Display what the lens "sees": */
			// result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
			result.style.backgroundPosition = "-" + x + "px -" + y + "px";
			// console.log((x * cx)+" | "+(y * cy));
			console.log(x+" | "+y);
			// console.log(cx+" | "+cy);
			// result.style.backgroundPosition = "-" + img.naturalWidth + "px -" + img.naturalHeight + "px";
			// result.style.backgroundPosition = "-" + 900 + "px -" + 520 + "px";
		}
		function getCursorPos(e) {
			var a, x = 0, y = 0;
			e = e || window.event;

			/* Get the x and y positions of the image: */
			a = img.getBoundingClientRect();

			/* Calculate the cursor's x and y coordinates, relative to the image: */
			x = e.pageX - a.left;
			y = e.pageY - a.top;

			/* Consider any page scrolling: */
			x = x - window.pageXOffset;
			y = y - window.pageYOffset;
			// console.log(x+" | "+y)
			return {x : x, y : y};
		}
	}
	// call and assign targets
	imageZoom("myimage", "myresult");


	// close modal
	function modalCloser_450386kdi(){onModalStagedE.classList.remove("modalActivated")}
	onModalStagedImg.onmouseover = function(){this.classList.add("hovered")}
	onModalStagedImg.onmouseout = function(){this.classList.remove("hovered")}
	onModalStagedImgThumb.onmouseover = function(){this.classList.add("hovered")};
	onModalStagedImgThumb.onmouseout = function(){this.classList.remove("hovered")};
	onModalStagedE.addEventListener("click",function(){
		if(onModalStagedImg.classList.contains("hovered")||onModalStagedImgThumb.classList.contains("hovered")){
			return
		}else{
			modalCloser_450386kdi()
		};
	});

	// next and previous img
	function firstAndLastDeterminant() {
		return onModalStagedImgThumb.getElementsByClassName("active")[0].firstChild.className.split("")[(imgGlryClassLength-1)];
	}
	function RemoveToReplaceImg() {
		e_actualSize_jQ.find("[class*='otimumImg_div_']").removeClass("active");
		e_thumbs_jQ.find("[class*='thumbImg_div_']").removeClass("active");
	}
	// next img
	onModalStagedE.getElementsByClassName("nextButton")[0].addEventListener("click",function(){
		FALD_ValueRetainer=parseInt(firstAndLastDeterminant());
		RemoveToReplaceImg();
		if (FALD_ValueRetainer!==numsOfThumbs){
			e_actualSize_jQ.find(".otimumImg_div_"+(FALD_ValueRetainer+1)+"").addClass("active");
			e_thumbs_jQ.find(".thumbImg_div_"+(FALD_ValueRetainer+1)+"").addClass("active");
		}else{
			e_actualSize_jQ.find(".otimumImg_div_1").addClass("active");
			e_thumbs_jQ.find(".thumbImg_div_1").addClass("active");
		}
	});
	// previous img
	onModalStagedE.getElementsByClassName("backButton")[0].addEventListener("click",function(){
		FALD_ValueRetainer=parseInt(firstAndLastDeterminant());
		RemoveToReplaceImg();
		if(FALD_ValueRetainer!==1){
			e_actualSize_jQ.find(".otimumImg_div_"+(FALD_ValueRetainer-1)+"").addClass("active");
			e_thumbs_jQ.find(".thumbImg_div_"+(FALD_ValueRetainer-1)+"").addClass("active");
		}else{
			e_actualSize_jQ.find(".otimumImg_div_"+numsOfThumbsToString+"").addClass("active");
			e_thumbs_jQ.find(".thumbImg_div_"+numsOfThumbsToString+"").addClass("active");
		}
	});

	
}prdctPrsnttonGlry_E();