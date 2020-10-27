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
			"label-thumb.png",
			"img3-thumb.jpg",
			"img4-thumb.jpg",
			"img5-thumb.jpg"
		],
		imgOptimum = [
			"img1-optimum.jpg",
			"label-img.png",
			"img3-optimum.jpg",
			"img4-optimum.jpg",
			"img5-optimum.jpg"
		],
		imgToZoomH = 221, // height of the image that can be zoomed
		imgToZoomW = 384, // width of the image that can be zoomed
		zoomImgResult_H = 362, // height of the image thaW can be zoomed
		zoomImgResult_W = 614, // width of the image that can be zoomed
		resultImageSize = {width: 910, height: "auto"},
		zoomLense_H = zoomImgResult_H/7,
		zoomLense_W = zoomImgResult_H/7, // to make the lense rectangle "zoomImgResult_W"
		zoomLenseShapeCircle = true, // turn this "on" or "off" by applying value "true" and false;
		maxHeightModalStagedImage = 520, // 520px (Editable)
		modalThumbHeightWidth = 60,
		modalThumbDivPaddingTop = 9,
		modalThumbDivPaddingBottom = 9,
		defaultMinimumWindowHeight = 280, // Because the smallest mobile window-view is 280px (base on google-chrome's dev tool)
		defaultMaxMainImgHeight = 695,
		defaultHeightStgImgWhnAtVrySmlSz = 234, //defalut actual image at 280px by variable defaultMinimumWindowHeight
		defaultMxWthMainImg = 900,
		prvntZmEfctOnThsWth = 650, // Prevent the zooming on this window width
		prvntZmEfctOnThsHgt = 610,
		mnSzOfNxtNdPrvBtnOnMdlStgdImg = "", //minimum Size Of Next And Previous Button On Modal-Staged Image
		mxSzOfNxtNdPrvBtnOnMdlStgdImg = ""; //maximum Size Of Next And Previous Button On Modal-Staged Image


	// Important vars (don't edit this if you don't edit all its var calls)
	var thumbNums = imgThumbs.length,
		optimumImgNums = imgOptimum.length,
		prdctGlryPrntdv = document.getElementsByClassName("productGalleryParentdiv")[0],
		e_actlSze_wP = prdctGlryPrntdv.getElementsByClassName("e_actualSize")[0],
		imagesToZoom = document.getElementById("ImagesToZoom"),
		imagesToZoom_jQ = $("#ImagesToZoom"),
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
		TMSH = maxHeightModalStagedImage+modalThumbHeightWidth+modalThumbDivPaddingBottom+modalThumbDivPaddingTop,
		ImagesToZoom = document.getElementById("ImagesToZoom"),
		otimumImg_div_Z = ImagesToZoom.getElementsByClassName("otimumImg_div_Z"),
		zoomResult = document.getElementById("zoomResult"),
		zoomResult_jQ = $("#zoomResult");
	// Important arrays (don't edit this if you don't edit all its array calls)
	theWindowWidth=[];
	theWindowHeight=[];
	e_actualSizeGreatestHeight=[];
	e_actualSizeGreatestHeightVar=[];
	e_actualSizeGreatestWidth=[];
	e_actualSizeGreatestWidthVar=[];
	var e_actlSzGrtstWdthVr_C=e_actualSizeGreatestWidthVar[0],
		e_actlSzGrtstHgtVr_C=e_actualSizeGreatestHeightVar[0];

	// pushing for the window listener
	theWindowWidth[0] = window.innerWidth;
	theWindowHeight[0] = window.innerHeight;

	// Some instructions/info on the console
	if (optimumImgNums==0)console.log("No optimum images are indicated");
	if (thumbNums==0)console.log("No thumb images are indicated");
	if (optimumImgNums!==thumbNums){console.log("The number of thumb-images are not equal to the optimum-size-images")}
	if ((optimumImgNums==0)&&(thumbNums==0)){console.log("No thumbs-images and optimum-size-images are indicated")}

	// Import Plugin
	/*! ResponsiveHelp (modified version) | Copyright August 20,2019 Eulr A. Masauding | licensed under MIT | https://github.com/logicshaman/ResponsiveHelp */
	function responsiveHelp_H(e,n,a){var W=e||500,Q=n||1200,_=a||"rem";jQuery.fn.RcssH=function(e,n){for(var a=window.innerHeight,s=0;s<e.length;s++)for(var r=e[s][1].length,t=0;t<r;t++){var i,h,l=e[s][1][t].length,o=e[s][1][t][l-1];h=1===r?i=!0:0===t?!(i=!0):t===r-1?!(i=!1):i=!1;var g=o.minRange||W,c=o.maxRange||Q;if(i?h||(l=e[s][1][t+1].length,c=o.maxRange||e[s][1][t+1][l-1].minRange||Q):(l=e[s][1][t-1].length,g=o.minRange||e[s][1][t-1][l-1].maxRange||W),(g<=a||a<=g&&i)&&(a<=c||c<=a&&h)&&("string"==typeof e[s][1][t][0]&&this.css(e[s][0],e[s][1][t][0]),"number"==typeof e[s][1][t][0])){for(var f=e[s][1][t].length,p=0;p<f;p++)"object"==typeof e[s][1][t][p]&&f--;var v,R=f/2,m=e[s][1][t][f]||{},u=[],y=m.scale||_,j=m.scaleTB,x=m.scaleRL,H=m.scaleT,b=m.scaleB;1==R&&(v=[y]),2==R&&(v=[j||y,x||y]),3==R&&(v=[H||j||y,x||y,b||j||y]),4==R&&(v=[H||j||y,m.scaleR||x||y,b||j||y,m.scaleL||x||y]);for(p=0;p<=R-1;p++){var w=e[s][1][t][p],B=e[s][1][t][p+R],L=c<=a,T=(B-w)/(c-g),d=a-g;a<=g?u.push(w+v[p]):L?u.push(B+v[p]):u.push(w+T*d+v[p])}this.css(e[s][0],u.join(" "))}}return n?"off"===n?this.parent():this.parents(n):this}}function responsiveHelp_W(e,n,a){var W=e||500,Q=n||1200,_=a||"rem";jQuery.fn.RcssW=function(e,n){for(var a=window.innerWidth,s=0;s<e.length;s++)for(var r=e[s][1].length,t=0;t<r;t++){var i,h,l=e[s][1][t].length,o=e[s][1][t][l-1];h=1===r?i=!0:0===t?!(i=!0):t===r-1?!(i=!1):i=!1;var g=o.minRange||W,c=o.maxRange||Q;if(i?h||(l=e[s][1][t+1].length,c=o.maxRange||e[s][1][t+1][l-1].minRange||Q):(l=e[s][1][t-1].length,g=o.minRange||e[s][1][t-1][l-1].maxRange||W),(g<=a||a<=g&&i)&&(a<=c||c<=a&&h)&&("string"==typeof e[s][1][t][0]&&this.css(e[s][0],e[s][1][t][0]),"number"==typeof e[s][1][t][0])){for(var f=e[s][1][t].length,p=0;p<f;p++)"object"==typeof e[s][1][t][p]&&f--;var v,R=f/2,m=e[s][1][t][f]||{},u=[],y=m.scale||_,j=m.scaleTB,x=m.scaleRL,H=m.scaleT,b=m.scaleB;1==R&&(v=[y]),2==R&&(v=[j||y,x||y]),3==R&&(v=[H||j||y,x||y,b||j||y]),4==R&&(v=[H||j||y,m.scaleR||x||y,b||j||y,m.scaleL||x||y]);for(p=0;p<=R-1;p++){var w=e[s][1][t][p],B=e[s][1][t][p+R],L=c<=a,T=(B-w)/(c-g),d=a-g;a<=g?u.push(w+v[p]):L?u.push(B+v[p]):u.push(w+T*d+v[p])}this.css(e[s][0],u.join(" "))}}return n?"off"===n?this.parent():this.parents(n):this}}

	// Import Plugin
	/*! hoverIntent v1.10.1 // 2019.10.05 // jQuery v1.7.0+ | http://briancherne.github.io/jquery-hoverIntent/ | Copyright 2007-2019 Brian Cherne */
	!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof module&&module.exports?module.exports=factory(require("jquery")):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function($){"use strict";function track(ev){cX=ev.pageX,cY=ev.pageY}var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});function handleHover(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){!function(ev,$el,s,out){var data=$el.data("hoverIntent");data&&delete data[s.id],out.apply($el[0],[ev])}(ev,$el,state,cfg.out)},cfg.timeout)}}return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});

	// Initial populate
	for (var i = optimumImgNums - 1; i >= 0; i--) {
		//populate images
		function activateBydefault(){if((i+1)==1){return "active"}else{return ""}}
		e_actualSize_jQ.prepend("<div class='z "+activateBydefault()+" otimumImg_div_Z otimumImg_div_"+(i+1)+"'><img class='optmmImg optimumImg"+(i+1)+"' src="+imgLctn+imgOptimum[i]+">");
		e_thumbs_jQ.prepend("<div class='"+activateBydefault()+" thumbImg_div_"+(i+1)+"'><img class='thumbImg"+(i+1)+"' src="+imgLctn+imgThumbs[i]+"></div>");
		zoomResult_jQ.prepend("<div class='zmRslt "+activateBydefault()+" zResult"+(i+1)+"'></div>");
	}

	imgToZoomForWithL=[];
	lensForZooming=[];
	whareZoomResultAre=[];
	for (var i = 0; i < optimumImgNums; i++) {
		// function activateBydefault(){if((i+1)==1){return "active"}else{return ""}}
		imgToZoomForWithL[i] = ImagesToZoom.getElementsByClassName("otimumImg_div_Z")[i].firstChild;
		whareZoomResultAre[i] = document.getElementById("zoomResult").getElementsByClassName("zmRslt")[i];
		lensForZooming[i] = document.createElement("DIV");
		lensForZooming[i].setAttribute("class", "imgZmLns img-zoom-lens"+(i+1));
		imgToZoomForWithL[i].parentElement.insertBefore(lensForZooming[i], imgToZoomForWithL[i]);

		whareZoomResultAre[i].style.backgroundImage = "url("+imgToZoomForWithL[i].src+")"; // Set background properties for the result DIV
		
		// Execute a function when someone moves the cursor over the image, or the lens:
		lensForZooming[i].addEventListener("mousemove", moveLens);
		imgToZoomForWithL[i].addEventListener("mousemove", moveLens);

		// And also for touch screens:
		lensForZooming[i].addEventListener("touchmove", moveLens);
		imgToZoomForWithL[i].addEventListener("touchmove", moveLens);
	}

	// dependent vars on the generated vars by loop
	var imagesToZoomToActiveElmnt = imagesToZoom.getElementsByClassName("active")[0],
		// imgZmLns = imagesToZoomToActiveElmnt.getElementsByClassName("imgZmLns")[0],
		// thImgTrgtTZm = imagesToZoomToActiveElmnt.getElementsByClassName("optmmImg")[0],
		// thImgTrgtTZm_jQ = imagesToZoom_jQ.find(".active").find("img"),
		thImgTrgtTZm_jQ = imagesToZoom_jQ.find(".active").find("img")[0],
		zoomResultTarget = zoomResult.getElementsByClassName("active")[0],
		zoomResultTarget_jQ = zoomResult_jQ.find("active");

	$(".otimumImg_div_Z").hoverIntent(
		function(){
			if(theWindowWidth[0]<=prvntZmEfctOnThsWth||theWindowHeight[0]<=prvntZmEfctOnThsHgt){return};
			for (var i = 0; i < optimumImgNums; i++) {
				document.getElementById("ImagesToZoom").getElementsByClassName("otimumImg_div_Z")[i].getElementsByClassName("imgZmLns")[0].style.opacity=1;
			}
			// $("#ImagesToZoom .otimumImg_div_Z .imgZmLns")
			zoomResult.classList.remove("not_visible");
			(function() {
				int=1;
				var sInt=setInterval(function(){
					if(int>=50){
						zoomResult.style.opacity=1;
						clearTimeout(sInt);
					};
					int++;
				}, 1);
			})();
		},
		function() {
			if(theWindowWidth[0]<=prvntZmEfctOnThsWth||theWindowHeight[0]<=prvntZmEfctOnThsHgt){return};
			for (var i = 0; i < optimumImgNums; i++) {
				document.getElementById("ImagesToZoom").getElementsByClassName("otimumImg_div_Z")[i].getElementsByClassName("imgZmLns")[0].style.opacity=0;
			}
			zoomResult.style.opacity=0;
			(function() {
				int=1;
				var sInt=setInterval(function(){
					if(int>=70){
						zoomResult.classList.add("not_visible");
						clearTimeout(sInt);
					};
					int++;
				}, 1);
			})();
		}
	);

	// 
	$("#ImagesToZoom").find(".imgZmLns").css({
		"width": zoomLense_W,
		"height": zoomLense_H
	});
	if(zoomLenseShapeCircle){$(".imgZmLns").css("border-radius","500px")}

	function moveLens(e) {
		var pos, x, y;

		e.preventDefault(); // Prevent any other actions that may occur when moving over the image 
		pos = getCursorPos(e); //Get the cursor's x and y positions:
		y = pos.y;
		x = pos.x;

		// Calculate the position of the lens:
		v = pos.y - (zoomLense_H / 2);
		w = pos.x - (zoomLense_W / 2);
		// Prevent the lens from being positioned outside the image: 
		if (w > imgToZoomW - zoomLense_W) {w = imgToZoomW - zoomLense_W;}
		if (w < 0) {w = 0;}
		if (v > imgToZoomH - zoomLense_H) {v = imgToZoomH - zoomLense_H;}
		if (v < 0) {v = 0;}
		// Set the position of the lens:
		ImagesToZoom.getElementsByClassName("active")[0].querySelectorAll('div')[0].style.top = v + "px";
		ImagesToZoom.getElementsByClassName("active")[0].querySelectorAll('div')[0].style.left = w + "px";

		// Display what the lens "sees". EDIT THE VALUES ACCORDINGLY
		 zoomResult.getElementsByClassName("active")[0].style.backgroundPosition = "-"+(x*0.77)+"px -"+(y*0.725)+"px";
	}
	function getCursorPos(e) {
		var a, x = 0, y = 0;
		e = e || window.event;

		// Get the x and y positions of the image:
		a = ImagesToZoom.getElementsByClassName("active")[0].querySelectorAll('img')[0].getBoundingClientRect();

		// Calculate the cursor's x and y coordinates, relative to the image:
		x = e.pageX - a.left;
		y = e.pageY - a.top;

		// Consider any page scrolling:
		x = x - window.pageXOffset;
		y = y - window.pageYOffset;
		return {x : x, y : y};
	}

	// static css
	for (var i = 0; i < optimumImgNums; i++) {
		e_actlSze_wP.getElementsByClassName("otimumImg_div_Z")[i].style.height=imgToZoomH+"px";
		e_actlSze_wP.getElementsByClassName("otimumImg_div_Z")[i].style.width=imgToZoomW+"px";
	}
	$("#zoomResult").find("div").css({
		"height": zoomImgResult_H+"px",
		"width": zoomImgResult_W+"px",
		"backgroundSize": resultImageSize.width+"px"
	});

	console.log(theWindowWidth[0]);

	// dynamic width and height
	responsiveHelp_H(defaultMinimumWindowHeight, TMSH,"px");
	responsiveHelp_W(defaultMinimumWindowWidth, defaultMxWthMainImg,"px");
	
	function WndwHgtWthChr() {
		var WH = window.innerHeight,
			WW = window.innerWidth;

		// theWindowWidth[0] = window.innerWidth;

		theWindowWidth[0] = window.innerWidth;
		theWindowHeight[0] = window.innerHeight;
		console.log(theWindowWidth[0]);
		// console.log(theWindowWidth[0]);


		
		
		onModalStagedE.classList.remove("WW_x_m");
		onModalStagedE.classList.remove("WH_x_m");
		if(WW<=defaultMxWthMainImg){onModalStagedE.classList.add("WW_x_m")}
		if(WH<=TMSH){onModalStagedE.classList.add("WH_x_m")}

		onModalStagedE.classList.remove("WndwHght_Grtr");
		onModalStagedE.classList.remove("WW_Grtr");
		if (WH>WW){
			onModalStagedE.classList.add("WndwHght_Grtr");

			$(".productGalleryParentMODALdiv").RcssW([
				["paddingLeft",[[0,10,{minRange:650}]]],
				["paddingRight",[[0,10,{minRange:650}]]]
			]);

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
					[280,maxHeightModalStagedImage,{minRange:500}]
				]]
			]);

			onModalStagedPrimwCont_jQ.RcssW([
				["maxWidth",[
					[375,defaultMxWthMainImg]
				]]
			]);

			onModalStagedImgThumb_jQ.find("> div").RcssW([
				["max-width",[[45,65,{minRange:560}]]]
			]);

			onModalStagedImgThumb_jQ.RcssW([
				["padding-top",[[9,12,{minRange:650}]]],
				["padding-bottom",[[4,9,{minRange:650}]]]
			]);

			onModalStagedImg_jQ.find(".btns").RcssW([
				["width",[[50,100]]]
			]);
			onModalStagedImg_jQ.find(".nextButton").RcssW([
				["margin-left",[[-50,-100]]]
			]);
			onModalStagedImg_jQ.find(".backButton").RcssW([
				["margin-right",[[-50,-100]]]
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

			onModalStagedPrimwCont_jQ.RcssH([
				["maxWidth",[
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

			onModalStagedImg_jQ.find(">div").RcssH([
				["height",[
					[220,maxHeightModalStagedImage]
				]]
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

	

	// open modal
	e_actualSize_jQ.find(">div").click(function(){
		if(onModalStagedE.classList.add("modalActivated"))return;
		if(onModalStagedE.classList.contains("haveBeenOpened")){
		}else{
			onModalStagedE.classList.add("haveBeenOpened");
		}
	});
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

	// Dynamic thumb select
	var imgGlryClassLength = onModalStagedImgThumb_jQ.find(">div:nth-child(2)")[0].firstChild.className.length,
		numsOfThumbs = onModalStagedImgThumb_jQ.find(">div").length,
		numsOfThumbsToString = numsOfThumbs.toString(),
		glryIntlCntnr_jQ = $(".glryIntlCntnr");
	glryIntlCntnr_jQ.find("[class*='thumbImg_div_']").click(function() {
		if($(this).hasClass("active"))return;
		var theThis = $(this)[0].firstChild.className,
			targetOptimumImg = theThis.split("")[(imgGlryClassLength-1)];
		
		glryIntlCntnr_jQ.find("[class*='thumbImg_div_']").removeClass("active");
		$("."+theThis+"").parent("div").addClass("active");
		
		e_actualSize_jQ.find("> div").removeClass("active");
		e_actualSize_jQ.find(".otimumImg_div_"+targetOptimumImg+"").addClass("active");

		zoomResult_jQ.find("div").removeClass("active");
		zoomResult_jQ.find(".zResult"+targetOptimumImg+"").addClass("active");
	});
	// next and previous img
	function firstAndLastDeterminant() {
		return onModalStagedImgThumb.getElementsByClassName("active")[0].firstChild.className.split("")[(imgGlryClassLength-1)];
	}
	function RemoveToReplaceImg() {
		e_actualSize_jQ.find("[class*='otimumImg_div_']").removeClass("active");
		e_thumbs_jQ.find("[class*='thumbImg_div_']").removeClass("active");
		zoomResult_jQ.find("div").removeClass("active");
	}
	// next img
	function NextImg() {
	 	FALD_ValueRetainer=parseInt(firstAndLastDeterminant());
		RemoveToReplaceImg();
		if (FALD_ValueRetainer!==numsOfThumbs){
			e_actualSize_jQ.find(".otimumImg_div_"+(FALD_ValueRetainer+1)+"").addClass("active");
			e_thumbs_jQ.find(".thumbImg_div_"+(FALD_ValueRetainer+1)+"").addClass("active");
			zoomResult_jQ.find(".zResult"+(FALD_ValueRetainer+1)+"").addClass("active");
		}else{
			e_actualSize_jQ.find(".otimumImg_div_1").addClass("active");
			e_thumbs_jQ.find(".thumbImg_div_1").addClass("active");
			zoomResult_jQ.find(".zResult1").addClass("active");
		}
	}
	onModalStagedE.getElementsByClassName("nextButton")[0].addEventListener("click",function(){PreviousImg()});
	// previous img
	function PreviousImg(){
		FALD_ValueRetainer=parseInt(firstAndLastDeterminant());
		RemoveToReplaceImg();
		if(FALD_ValueRetainer!==1){
			e_actualSize_jQ.find(".otimumImg_div_"+(FALD_ValueRetainer-1)+"").addClass("active");
			e_thumbs_jQ.find(".thumbImg_div_"+(FALD_ValueRetainer-1)+"").addClass("active");
			zoomResult_jQ.find(".zResult"+(FALD_ValueRetainer-1)+"").addClass("active");
		}else{
			e_actualSize_jQ.find(".otimumImg_div_"+numsOfThumbsToString+"").addClass("active");
			e_thumbs_jQ.find(".thumbImg_div_"+numsOfThumbsToString+"").addClass("active");
			zoomResult_jQ.find(".zResult"+numsOfThumbsToString+"").addClass("active");
		}
	}
	onModalStagedE.getElementsByClassName("backButton")[0].addEventListener("click",function(){PreviousImg();});
	// $(document).keyup(function(e) {if (e.key === "Escape") {modalCloser_450386kdi()}});
	// $(document).keyup(function(e) {if (e.keyCode == '37') {PreviousImg()}});
	// $(document).keyup(function(e) {if (e.keyCode == '39') {NextImg()}});

	document.body.addEventListener('keyup', function(e) {
		if (e.key === "Escape") {modalCloser_450386kdi()}
		if (e.keyCode == '37') {PreviousImg()}
		if (e.keyCode == '39') {NextImg()}
	});



	
}prdctPrsnttonGlry_E();