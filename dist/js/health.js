(()=>{"use strict";var e,o={229:e=>{e.exports=JSON.parse('{"msg":"성공","body":{"grcMemberInfo":{},"memberAge":"34","authToken":"54dceae7dd9c645bee26a6b279967c51c67c9624d1091f8dabb773960312d00db3acd00f4df63e975197282386643ae0e7a9287f10","expiredDate":"","weeklyRanking":"1","memberName":"메디플러스","memberProfileImageUrl":"https://devapi.secondwind.co.kr:443/swind/api/member/profile/202208/1660179246349_f351ac05-9211-4dbe-8725-52cc960607cd.jpeg","memberStatus":"1201","listSvcPackage":[{"menuCode":"4502"},{"menuCode":"4503"},{"menuCode":"4504"},{"menuCode":"4505"},{"menuCode":"4506"},{"menuCode":"4507"},{"menuCode":"4508"},{"menuCode":"4509"},{"menuCode":"4521"}],"dhcMemberId":"","joinDate":"20200401","stableHeartbeat":"75","subscriptionInfo":{"infoComment":"","subscriptionOsCd":"1303","orderId":"","expiresDate":"","subscriptionCancelDate":"","subscriptionStartDate":"2020-04-01 00:18:41","memberSubscriptionStateCd":"9605","serviceUseYn":"Y"},"memberWeight":"77","memberId":"mpsdev","genomeKitId":"","diseaseTypeCode":"3801","memberBirth":"19880307","newTermsYn":"N","goalHeartbeat":"137.0","memberSexMf":"F","memberHeight":"183","hospitalPk":"","memberTodayPoint":"25","listHospital":[{"patientNo":"a123","hospitalPk":"7","patientNoType":"AD02","hospitalName":"메디플러스솔루션병원"}],"memberMobile":"02011110000","himdUserYn":"N","memberPoint":"121475"},"status":"200"}')}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var i=t[e]={exports:{}};return o[e](i,i.exports,n),i.exports}e=n(229),n(229).login,window.getUserInfo=function(){console.log(e),$.ajax({method:"GET",url:"../json/login2.json",success:function(e){console.log("login 데이터입니다",e),200===e.status&&console.log("로그인 성공"),alert("로그인 성공!")},error:function(){alert("회원 정보를 다시 확인해주세요!")}})},getUserInfo(),window.getJson=function(){$.ajax({method:"GET",url:"../json/health.json",success:function(e){var o=e.documents;console.log(o),$.each(o,(function(e,o){var t='<img class="book-thumbnail" src='.concat(o.thumbnail,' alt="/public/images/nothumbnail.svg"/>'),n='<div class="book-title" style="font-weight: bold; text-align: center;">'.concat(o.title,"</div>"),a='<div class="book-contents">'.concat(o.contents,"...</div>");$("#health").append('\n                        <div class="book"\n                            style="width:45vw ;display: flex; flex-wrap:wrap; gap:3px ; align-items:center; flex-direction:column;"\n                            onclick="window.location.href=\''.concat(o.url,"';\">\n                        ").concat(t," ").concat(n," ").concat(a,"\n                        </div>"))}))},error:function(){alert("데이터를 불러올 수 없습니다.")}})},getJson(),console.log("health 페이지 입니다. ")})();