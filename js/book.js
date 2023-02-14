import "../css/book.css";

window.getBookData = () => {
  const receivedQuery = JSON.parse(localStorage.getItem("searchQuery"));
  const REST_API_KEY = "37b97e7c16e1ed8a39ab8f1a96fc4360";
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: `${receivedQuery}`,
    },
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`,
    },
    success: function (data) {
      // console.log(data)
      $.each(data.documents, function (index, item) {
        // 데이터 =item
        const thumbnail = `<img class="book-thumbnail" src=${item.thumbnail} alt="/public/images/nothumbnail.svg"/>`;
        const title = `<div class="book-title" style="font-weight: bold; text-align: center;">${item.title}</div>`;
        const book_contents = `<div class="book-contents">${wrapText(
          item.contents
        )}...</div>`;
        $("#books").append(`
                        <div class="book"
                            style="width:45vw ;display: flex; flex-wrap:wrap; gap:3px ; align-items:center; flex-direction:column;"
                            onclick="window.location.href='${item.url}';">
                        ${thumbnail} ${title} ${book_contents}
                        </div>`); //
      });
    },
    error: function () {
      alert("failed");
    },
  });
};

window.wrapText = (text) => {
  return text.slice(0, 50);
};

window.getBookData();
