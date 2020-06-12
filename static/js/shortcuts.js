console.log("Hello keybinding")

$(document).ready(function () {
    var index = 0;
    $(document).bind('keypress', function (event) {
        var text = $.trim($('#suggest').val());
        var suggestion = '';
        
        if (event.ctrlKey && event.shiftKey && event.which == 3) {
            suggestion = $('#0').val().slice(2);
            console.log("is it comming here plz baa111111")
            // clean_suggestion = suggestion.slice(2);
            remove_str = text.substring(text.lastIndexOf(" "))
            remaining_str = text.replace(remove_str,'');
            $('#suggest').val(remaining_str+" "+suggestion+" ");
        }

        if (event.ctrlKey && event.shiftKey && event.which == 4) {
            console.log("is it comming here plz baa")
            suggestion = $('#1').val().slice(2);
            remove_str = text.substring(text.lastIndexOf(" "))
            remaining_str = text.replace(remove_str,'');
            
            console.log("suggession="+suggestion)
            console.log("removing string = "+remove_str)
            console.log("remaining_string="+remaining_str)

            $('#suggest').val(remaining_str+" "+suggestion+" ");
        }

        if (event.ctrlKey && event.shiftKey && event.which == 5) {
            suggestion = $('#2').val().slice(2);
            remove_str = text.substring(text.lastIndexOf(" "))
            remaining_str = text.replace(remove_str,'');
            $('#suggest').val(remaining_str+" "+suggestion+" ");
        }

        if (event.ctrlKey && event.shiftKey && event.which == 30) {
            suggestion = $('#3').val().slice(2);
            remove_str = text.substring(text.lastIndexOf(" "))
            remaining_str = text.replace(remove_str,'');
            $('#suggest').val(remaining_str+" "+suggestion+" ");
        }

        if (event.ctrlKey && event.shiftKey && event.which == 6) {
            suggestion = $('#4').val().slice(2);
            remove_str = text.substring(text.lastIndexOf(" "))
            remaining_str = text.replace(remove_str,'');
            $('#suggest').val(remaining_str+" "+suggestion+" ");
        }
        
        if (event.ctrlKey && event.shiftKey && event.which == 10) {
            suggestion = $('#5').val().slice(2);
            remove_str = text.substring(text.lastIndexOf(" "))
            remaining_str = text.replace(remove_str,'');
            $('#suggest').val(remaining_str+" "+suggestion+" ");
        }
    });

})

