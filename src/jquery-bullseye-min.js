!function($){"use strict";var t={fadeEffect:!0,effectTime:.5},i=$(window),e=function(t,i){var e=document.createElement("img"),s;t.data("bullseyeImage")?(t.html('<img src="'+t.data("bullseyeImage")+'">'),s=t.data("bullseyeImage")):(s=t.find("img").first().attr("src"),t.data("bullseyeImage",s)),i.fadeEffect&&t.find("img").first().css({opacity:0}),e.src=s,e.onload=function(){n(t,i)}},n=function(t,i){var e=t.find("img").first(),n={position:"relative",overflow:"hidden"},o={position:"absolute",top:0,right:0,bottom:0,left:0,margin:"auto",width:"100%",height:"auto"},a={start:{opacity:1,"-webkit-transition":"opacity "+i.effectTime+"s ease-in-out","-moz-transition":"opacity "+i.effectTime+"s ease-in-out","-o-transition":"opacity "+i.effectTime+"s ease-in-out",transition:"opacity "+i.effectTime+"s ease-in-out"},end:{opacity:"","-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}};t.css(n),e.css(o),s(t),i.fadeEffect&&e.css(a.start).on("transitionend",function(){$(this).css(a.end)})},s=function(t){var i=t.find("img").first(),e=t.innerHeight(),n,s;n=i.height(),e>n?(s=e/n,i.css({"-webkit-transform":"scale("+s+")","-moz-transform":"scale("+s+")","-o-transform":"scale("+s+")",transform:"scale("+s+")"})):i.css({"-webkit-transform":"","-moz-transform":"","-o-transform":"",transform:""})},o=function(t,n){e(t,n),i.on("resize",function(){s(t)})};$.fn.bullseye=function(i){var e=$.extend({},t,i);return this.each(function(){var t=$(this);o(t,e)})}}(window.jQuery);
//# sourceMappingURL=./jquery-bullseye-min.js.map