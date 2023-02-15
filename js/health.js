// import health from "../json/health.json" assert { type: "json" };
//
// window.getJson = () => {
//   console.log(health);
//   const data = health.documents;
//   $.each(data, function (index, item) {
//     // 데이터 =item
//     const thumbnail = `<img class="book-thumbnail" src=${item.thumbnail} alt="/public/images/nothumbnail.svg"/>`;
//     const title = `<div class="book-title" style="font-weight: bold; text-align: center;">${item.title}</div>`;
//     const book_contents = `<div class="book-contents">${item.contents}...</div>`;
//     $("#health").append(`
//                         <div class="book"
//                             style="width:45vw ;display: flex; flex-wrap:wrap; gap:3px ; align-items:center; flex-direction:column;"
//                             onclick="window.location.href='${item.url}';">
//                         ${thumbnail} ${title} ${book_contents}
//                         </div>`); //
//   });
// };
//
// getJson();

window.getUserInfo = () => {
  $.ajax({
    method: "POST",
    crossOrigin: true,
    url: "https://devapi.secondwind.co.kr:443//api/v1/auth/login",
    headers: {
      svcInfo:
        "KY2Fbb0LWAWB54JDX1A/UlvQ8sIxSltNkXUum3GQYFL2VTGb2CBpJ3kNnCRG8EdtqjVed1CP+esBBC9dkWFvrNOGAmE5zjsVvr0lV2MvGnE=",
      "Content-Type": "application/json",
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
