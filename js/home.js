function resizeMe()
 {
	var preferredHeight = 768;  
	var displayHeight = $(window).height();
	var percentage = displayHeight / preferredHeight;
	var newFontSize = Math.floor(fontsize * percentage) - 1;
	$("body").css("font-size", newFontSize);
 }
$(function() {
    $(window).bind('resize', function()
    {
        resizeMe();
        }).trigger('resize');
    });