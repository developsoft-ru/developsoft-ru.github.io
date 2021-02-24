function include(el,url,to) {
        var element = document.createElement(el);
        element.src = url;
        document.getElementsByTagName(to)[0].appendChild(element);
    }
	
include('script','js/head.js','head');

window.onload = function(){ 
	include('script','js/body_end.js','body');  
}







   



   