(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var o=t.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var a=o.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})(),t.p,t.p,window.getBookData=function(){var t=JSON.parse(localStorage.getItem("searchQuery"));$.ajax({method:"GET",url:"https://dapi.kakao.com/v3/search/book?target=title",data:{query:"".concat(t)},headers:{Authorization:"KakaoAK ".concat("37b97e7c16e1ed8a39ab8f1a96fc4360")},success:function(t){$.each(t.documents,(function(t,e){var o='<img class="book-thumbnail" src='.concat(e.thumbnail,' alt="/public/images/nothumbnail.svg"/>'),a='<div class="book-title" style="font-weight: bold; text-align: center;">'.concat(e.title,"</div>"),c='<div class="book-contents">'.concat(wrapText(e.contents),"...</div>");$("#books").append('\n                        <div class="book"\n                            style="width:45vw ;display: flex; flex-wrap:wrap; gap:3px ; align-items:center; flex-direction:column;"\n                            onclick="window.location.href=\''.concat(e.url,"';\">\n                        ").concat(o," ").concat(a," ").concat(c,"\n                        </div>"))}))},error:function(){alert("failed")}})},window.wrapText=function(t){return t.slice(0,50)},window.getBookData()})();