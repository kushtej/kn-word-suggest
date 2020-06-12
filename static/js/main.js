console.log("hello world!")

//for copy success
$(document).ready(function() {
    $('#successful').hide();
});


$(document).ready(function () {
    //for translation
    //var word_url = '/api/suggest?word=';
    $('#suggest').on('keyup', function (event) {

        // if (event.which == 12) {
            

            var text = $.trim($(this).val());
            console.log("first text"+$(this).val())
            var name = $.trim($('#name').val());
            var base_url = '/api/suggest?word=' + text;
            var information = {
                data: {
                    word: text,
                },
                type: 'GET',
                url: base_url,
            }
            if (text) 
            {
                $.ajax(information).done(function (data) {
                    // var predict_information = 
                    // {
                    //     type: 'GET',
                    //     url: word_url + data['word'],
                    // };
                    //send_request(predict_information);

                    //$('#name').val(name + " " + $.trim(data['word']));
                    //$('#name').val(name);
                    //console.log($.trim(data['word'][0]));
                    // "cat1234".slice(3);

                    $('#0').val($.trim("1."+data['word'][0])); 
                    $('#1').val($.trim("2."+data['word'][1])); 
                    $('#2').val($.trim("3."+data['word'][2]));
                    $('#3').val($.trim("4."+data['word'][3]));
                    $('#4').val($.trim("5."+data['word'][4]));
                    $('#5').val($.trim("6."+data['word'][5]));
                    $('#6').val($.trim("7."+data['word'][6]));
                    $('#7').val($.trim("8."+data['word'][7]));

                })
            }
        //}
    })

    //modular function with the above 2
    // function send_request(information) {
    //     $.ajax(information).done(function (data) {
    //         if (data) 
    //         {
    //             console.log(data.result);
    //             for (var i = 0; i < data.result.length; i++) 
    //             {
    //                 $('#' + i.toString()).text(data.result[i]);
    //             }
    //         }
    //         else 
    //         {
    //             console.log("May be something went wrong");
    //         }
    //     });
    // }
})