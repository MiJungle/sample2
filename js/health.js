// import health from "../json/health.json" assert { type: "json" };

window.getJson = () => {
  // console.log(JSON.parse(health));
  // let obj = JSON.parse(health);
  // const data = health.documents;
  // $.each(data, function (index, key, value, item) {
  //   // 데이터 =item
  //   console.log(key, value);
  //   const thumbnail = `<img class="book-thumbnail" src=${item.thumbnail} alt="/public/images/nothumbnail.svg"/>`;
  //   const title = `<div class="book-title" style="font-weight: bold; text-align: center;">${item.title}</div>`;
  //   const book_contents = `<div class="book-contents">${item.contents}...</div>`;
  //   $("#health").append(`
  //                       <div class="book"
  //                           style="width:45vw ;display: flex; flex-wrap:wrap; gap:3px ; align-items:center; flex-direction:column;"
  //                           onclick="window.location.href='${item.url}';">
  //                       ${thumbnail} ${title} ${book_contents}
  //                       </div>`); //
  // });
};

// getJson();
console.log("health 페이지 입니다. ");
const getUserInfo = () => {
  $.ajax({
    method: "POST",
    mode: "cors",
    crossOrigin: true,
    url: "https://devapi.secondwind.co.kr:443//api/v1/auth/login",
    headers: {
      svcInfo:
        "KY2Fbb0LWAWB54JDX1A/UlvQ8sIxSltNkXUum3GQYFL2VTGb2CBpJ3kNnCRG8EdtqjVed1CP+esBBC9dkWFvrNOGAmE5zjsVvr0lV2MvGnE=",
    },
    data: {
      memberId: "mpsdev",
      memberPw: "qaz123!@",
      pushToken: "",
    },
    success: function (data) {
      console.log("api", data);
    },
    error: function () {
      alert("failed");
    },
  });
};

getUserInfo();

// let response = await fetch(
//   "https://devapi.secondwind.co.kr:443//api/v1/auth/login",
//   {
//     method: "POST",
//     headers: {
//       svcInfo:
//         "KY2Fbb0LWAWB54JDX1A/UlvQ8sIxSltNkXUum3GQYFL2VTGb2CBpJ3kNnCRG8EdtqjVed1CP+esBBC9dkWFvrNOGAmE5zjsVvr0lV2MvGnE=",
//       "Content-Type": "application/json",
//       "User-Agent": "PostmanRuntime/7.30.0",
//       Accept: "*/*",
//       "Cache-Control": "no-cache",
//       "Postman-Token": "25251012-2f23-4ba0-b062-eced48d2320a",
//       Host: "devapi.secondwind.co.kr:443",
//       "Accept-Encoding": "gzip, deflate, br",
//       Connection: "keep-alive",
//       "Content-Length": "69",
//     },
//     body: {
//       memberId: "mpsdev",
//       memberPw: "qaz123!@",
//       pushToken: "",
//     },
//   }
// );

// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       svcInfo:
//         "KY2Fbb0LWAWB54JDX1A/UlvQ8sIxSltNkXUum3GQYFL2VTGb2CBpJ3kNnCRG8EdtqjVed1CP+esBBC9dkWFvrNOGAmE5zjsVvr0lV2MvGnE=",
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }
//
// postData("https://devapi.secondwind.co.kr:443//api/v1/auth/login", {
//   memberId: "mpsdev",
//   memberPw: "qaz123!@",
//   pushToken: "",
// }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });
