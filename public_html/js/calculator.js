var prev_button = null;
var prev_time = 0;
jQuery(document).ready(function() {
    jQuery("#phone").find("button").mouseup(function(event) {
        var button_pressed = $(event.currentTarget).data("value");
        var current_time = (new Date()).getTime();
        if (button_pressed === prev_button)
        {
            sameButtonClick(prev_time, current_time);
        }
        jQuery("#result").val(t9(jQuery("#result").val(), button_pressed));

        prev_button = button_pressed;
        prev_time = current_time;
    });
});
function t9(text, button_pressed) {
    // Write your code here
    text = text + button_pressed;
    return text;
}

function sameButtonClick(prevTime, currentTime)
{
    if (currentTime > (prevTime + 1000))
    {
        // repeat value
        prevTime = currentTime;
        console.log('late');
    }
    else
    {
        // next value
        console.log('early');
    }
}