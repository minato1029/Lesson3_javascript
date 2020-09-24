$(function () {
    $('#btn').on('click', function(){
        $.ajax({
                url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + $('#zipcode').val(),
            dataType : 'jsonp',
        }).done(function(data) {
            if (data.results) {
                setAddress(data.results[0]);
                console.log(data);
            } else {
                alert('該当するデータが見つかりませんでした。');
            }
        }).fail(function(data) {
            alert('通信に失敗しました');
        });
    });
    function setAddress(data) {
        $('#perfecture').val(data.address1);
        $('#city').val(data.address2);
        $('#address').val(data.address3);
    }
});
