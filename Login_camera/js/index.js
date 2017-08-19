(function(){
    $('.ui-button2').addClass('--new');
    $('#js-btn2').html("");
    $('#js-btn3').html("");
    $('.bound').addClass('noneactive');
})();

$('.select__label').click(function() {
    $('.select__label').removeClass('select__label--active');
    $(this).addClass('select__label--active');
});
$('#js-usr-new').click(function() {
    $('.wrap, .pointer, .ui-button, .ui-elem-pass, .ui-elem-rpass').removeClass('--rtn --rst').addClass('--new');
    $('.ui-button2').removeClass('--new');
    $('.bound').removeClass('noneactive');
    $('#js-btn2').html("Start");
    $('#js-btn3').html("Stop");
    $('#js-btn').html("Sign Up");
    $('#video').removeClass('noneactive');
});
$('#js-usr-rtn').click(function() {
    $('.wrap, .pointer, .ui-button, .ui-elem-pass, .ui-elem-rpass').removeClass('--new --rst').addClass('--rtn');
    $('.ui-button2').addClass('--new');
    $('.bound').addClass('noneactive');
    $('#js-btn2').html("");
    $('#js-btn3').html("");
    $('#js-btn').html("Sign In");
    $('#video').addClass('noneactive');
});
$('#js-usr-rst').click(function() {
    $('.wrap, .pointer, .ui-button, .ui-elem-pass, .ui-elem-rpass').removeClass('--rtn --new').addClass('--rst');
    $('.ui-button2').addClass('--new');
    $('.bound').addClass('noneactive');
    $('#js-btn2').html("");
    $('#js-btn3').html("");
    $('#js-btn').html("Reset Password");
    $('#video').addClass('noneactive');
});

var video = document.getElementById("video");

var videoStream;
var URL = window.URL || window.webkitURL || window.mozURL || window.oURL || window.msURL;

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.oGetUserMedia ||
    navigator.msGetUserMedia;

function start() {
    navigator.getUserMedia({ audio: true, video: true }, function(stream) {
        videoStream = stream;
        video.src = URL.createObjectURL(stream);
    }, function(err) {
        console(err);
    });
}

function stop() {
    video.pause();
    if( typeof (videoStream) !== 'undefined' ) {
        videoStream.stop();
    }
}

$('#js-btn2').click(function(evt){
    start();
});
$('#js-btn3').click(function(evt){
    stop();
});
