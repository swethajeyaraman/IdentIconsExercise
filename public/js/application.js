$(document).ready(function () {

    var md5 = function (value) {
        return CryptoJS.MD5(value).toString();
    }

    $(".dynamicInput").keyup(function () {
        var value = $(this).val(),
            hash = md5(value);
        $(".test").html(hash);

        $(".identShowDynamic").jdenticon(CryptoJS.MD5(hash).toString());

    });

    $(".staticInputBtn").click(function () {
        var value = $(".staticInput").val();
        hash = md5(value);
        $(".identShow").jdenticon(CryptoJS.MD5(hash).toString());

    })
});

