window.getName = () => {
  alert("로그인 성공");
  console.log("getName 실행");
  // const name = JSON.parse(jsonData);
  // const welcome = name + " 님 환영합니다"
  // alert(welcome)
};
// function getName(jsonData){
//     alert('로그인 성공')
//     console.log('jsonData =' , jsonData);
//     const name = JSON.parse(jsonData);
//     const welcome = name + " 님 환영합니다"
//     alert(welcome)
// }
window.sendEmail = () => {
  const name = $("#name").val();
  const email = $("#email").val();
  const userData = { name: name, email: email };
  // console.log("name");
  // console.log("email");
  console.log("name", name);
  console.log("email", email);
  try {
    window.webkit.messageHandlers.submitToiOS.postMessage(userData);
  } catch (err) {
    console.log("error");
  }
};
window.handleSearch = () => {
  let searchQuery = $("#search").val();
  localStorage.setItem("searchQuery", JSON.stringify(searchQuery));
  location.href = `../template/book.html`;
  $("#search").val("");
};
