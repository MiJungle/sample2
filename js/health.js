const loginURL = `../json/login2.json`;
import login1 from "../json/login1.json";
const { login } = require("../json/login1.json");

window.getUserInfo = () => {
  console.log(login1);
  $.ajax({
    method: "GET",
    url: loginURL,
    success: function (data) {
      console.log("login 데이터입니다", data);
      if (data.status === 200) console.log("로그인 성공");
      alert("로그인 성공!");
    },
    error: function () {
      alert("회원 정보를 다시 확인해주세요!");
    },
  });
};
getUserInfo();

const jsonURL = "../json/health.json";

window.getJson = () => {
  $.ajax({
    method: "GET",
    url: jsonURL,
    success: function (data) {
      const books = data.documents;
      console.log(books);
      $.each(books, function (index, item) {
        // 데이터 =item
        const thumbnail = `<img class="book-thumbnail" src=${item.thumbnail} alt="/public/images/nothumbnail.svg"/>`;
        const title = `<div class="book-title" style="font-weight: bold; text-align: center;">${item.title}</div>`;
        const book_contents = `<div class="book-contents">${item.contents}...</div>`;
        $("#health").append(`
                        <div class="book"
                            style="width:45vw ;display: flex; flex-wrap:wrap; gap:3px ; align-items:center; flex-direction:column;"
                            onclick="window.location.href='${item.url}';">
                        ${thumbnail} ${title} ${book_contents}
                        </div>`); //
      });
    },
    error: function () {
      alert("데이터를 불러올 수 없습니다.");
    },
  });
  //바로 import 사용시
  // console.log(JSON.parse(health));
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
};

getJson();
console.log("health 페이지 입니다. ");

// const getUserInfo = () => {
//   $.ajax({
//     method: "POST",
//     url: URL,
//     headers: {
//       svcInfo:
//         "KY2Fbb0LWAWB54JDX1A/UlvQ8sIxSltNkXUum3GQYFL2VTGb2CBpJ3kNnCRG8EdtqjVed1CP+esBBC9dkWFvrNOGAmE5zjsVvr0lV2MvGnE=",
//     },
//     data: {
//       memberId: "mpsdev",
//       memberPw: "qaz123!@",
//       pushToken: "",
//     },
//     success: function (data) {
//       console.log("api", data);
//     },
//     error: function () {
//       alert("failed");
//     },
//   });
// };

// json file
