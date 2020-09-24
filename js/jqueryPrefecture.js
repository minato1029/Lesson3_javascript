$(function () {
    $('#btn').on('click', function () {
        $.ajax({
            url : 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + $('#zipcode').val(),
            dataType : 'jsonp',
        }).done( function (data) {
            if (data.results) {
                console.log(data.results[0])
                setAddress(data)
            }else {
                alert("該当するデータが見つかりませんでした");
            }
        }).fail( function (data) {
            alert("通信に失敗しました");
        });
    });
    function setAddress(data) {
        $('#prefecture').val(data.results[0].address1);
        $('#city').val(data.results[0].address2);
        $('#address').val(data.results[0].address3);
    }
});
