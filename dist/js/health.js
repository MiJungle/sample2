window.getJson=function(){},window.getUserInfo=function(){$.ajax({method:"POST",mode:"cors",crossOrigin:!0,url:"https://devapi.secondwind.co.kr:443//api/v1/auth/login",headers:{svcInfo:"KY2Fbb0LWAWB54JDX1A/UlvQ8sIxSltNkXUum3GQYFL2VTGb2CBpJ3kNnCRG8EdtqjVed1CP+esBBC9dkWFvrNOGAmE5zjsVvr0lV2MvGnE="},data:{memberId:"mpsdev",memberPw:"qaz123!@",pushToken:""},success:function(e){console.log("api",e)},error:function(){alert("failed")}})},getUserInfo();