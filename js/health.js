const loginURL = `../json/login2.json`;
// import login1 from "../json/login1.json" assert { type: "json" };
// const { login } = require("../json/login1.json");
import "../css/health.css";
import "../img/magnifying-glass.svg";
import "../img/person.svg";

window.postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      svcInfo:
        "KY2Fbb0LWAWB54JDX1A/UlvQ8sIxSltNkXUum3GQYFL2VTGb2CBpJ3kNnCRG8EdtqjVed1CP+esBBC9dkWFvrNOGAmE5zjsVvr0lV2MvGnE=",
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
// "https://devapi.secondwind.co.kr:443//api/v1/auth/login"
postData(`/api/v1/auth/login`, {
  memberId: "mpsdev",
  memberPw: "qaz123!@",
  pushToken: "",
}).then((data) => {
  console.log("login api 호출", data);
});

// window.callGetJson = () => {
//   console.log("callGetJson");
//   $.getJSON("../json/health.json", function (data) {
//     var items = [];
//     $.each(data.documents[0], function (key, val) {
//       console.log(key, val);
//       items.push("<li id='" + key + "'>" + val + "</li>");
//     });
//
//     $("<ul/>", {
//       class: "my-new-list",
//       html: items.join(""),
//     }).appendTo("#health");
//   });
// };

window.getUserInfo = () => {
  // console.log(login1); //json 아예 import 해서 사용하는 방법
  $.ajax({
    method: "GET",
    url: loginURL,
    success: function (data) {
      console.log("login 데이터입니다", data);
      if (data.status === "200") {
        $("#health").append(
          `<div class="greeting">
                <div class="name">${data.body.memberName}</div>
                <div>님 환영합니다!</div>
           </div>`
        );
        alert("로그인 성공!");
      }
    },
    error: function () {
      alert("회원 정보를 다시 확인해주세요!");
    },
  });
};

const jsonURL = "../json/health.json";

window.getJson = () => {
  $.ajax({
    method: "GET",
    url: jsonURL,
    success: function (data) {
      const books = data.documents;
      console.log(books);
      $("#health").after(
        "<div class='sub-title'><img src='../img/magnifying-glass.svg' style='width:30px; height:20px;' alt='logo'/>책 검색 결과</div><div id='book-container'></div>"
      );
      $.each(books, function (index, item) {
        const thumbnail = `<img class="book-thumbnail" src=${item.thumbnail} alt="/public/images/nothumbnail.svg"/>`;
        const title = `<div class="book-title" style="font-weight: bold;">${wrapText(
          item.title
        )}</div>`;
        const content = `<div class="book-content">내용: ${wrapText(
          item.contents
        )}...</div>`;
        const price = `<div class="book-price">가격: ${item.price}</div>`;
        const publisher = `<div class="publisher">출판사: ${item.publisher}</div>`;
        $(
          "#book-container"
        ).append(`<div class="book" onclick="navigate(${item.url});">
                       ${title} ${publisher} ${price} ${content}
                         </div>`); //
      });
    },
    error: function () {
      alert("데이터를 불러올 수 없습니다.");
    },
  });
};

window.wrapText = (text) => {
  return text.slice(0, 20);
};

// const getUserInfo = () => {

$.ajax({
  method: "POST",
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
// };

// json file

window.getAllMembers = () => {
  console.log("실행");
  $.ajax({
    url: "../json/login3.json",
    method: "GET",
    success: function (data) {
      $("#health").after("<table id='mytable'></table>");
      $("#mytable").before(
        "<div class='sub-title'> <img src='../img/person.svg' alt='logo' style='width:30px; height:20px;';/>회원 조회 결과</div>"
      );
      $("#mytable").append("<thead class='thead'></thead>");
      $.each(data.members[0], function (key, value) {
        $(".thead").append($("<th>").text(key));
      });
      $.each(data.members, function (index, member) {
        $("<tr>")
          .append(
            $("<td>").text(member.memberBirth),
            $("<td>").text(member.memberHeight),
            $("<td>").text(member.memberWeight),
            $("<td>").text(member.memberAge)
          )
          .appendTo("#mytable");
      });
    },
    error: function (err) {
      console.log("오류남");
      alert(err);
    },
  });
};

window.health = async () => {
  getUserInfo();
  await getJson();
  await getAllMembers();
};

health();
