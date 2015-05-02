$(document).ready(function () {

    //Calculate the hash value
    var md5 = function (value) {
        return CryptoJS.MD5(value).toString();
    }

    //Generate the identicon on key up event
    $(".dynamicInput").keyup(function () {
        var value = $(this).val(),
            hash = md5(value);
        $(".test").html(hash);

        $(".identShowDynamic").jdenticon(CryptoJS.MD5(hash).toString());

    });

    //Generate the identicon on click of Generate Button
    $(".staticInputBtn").click(function () {
        var value = $(".staticInput").val();
        hash = md5(value);
        $(".identShow").jdenticon(CryptoJS.MD5(hash).toString());

    })
});

