$(function () {
   $('#btn').on('click', function () {
       $.ajax({
           url:  "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
           dataType: 'jsonp',
       }).done(function (data) {
            // console.log(data);
           if (data.results) {

           } else {
               alert("該当するデータが見つかりませんでした");
           }
       }).fail(function (data) {
           alert("通信に失敗しました")
       });
   });
});
