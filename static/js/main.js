console.log("hello world!")

//for copy success
$(document).ready(function () {
    $('#successful').hide();
});

//to copy to clipboard
function copy_function() {
    var copyText = document.getElementById("suggest");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    console.log(copyText);
    $('#successful').show().delay(5000).hide(0);;
}


$(document).ready(function () {

    $('#suggest').on('keyup', function (event) {

        var text = $.trim($(this).val());
        var name = $.trim($('#name').val());
        var base_url = '/api/suggest?word=' + text;
        var information = {
            data: {
                word: text,
            },
            type: 'GET',
            url: base_url,
        }
        if (text) {
            $.ajax(information).done(function (data) {

                for (var i = 0; i < 8; i++) {
                    $('#' + i.toString()).val($.trim((i + 1).toString() + "." + data['word'][i]));
                }

            })
        }

    })

})


