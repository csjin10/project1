$(function(){
    $('#info> h3:nth-of-type(1)').click(function(){
        $('.infoBox1').show();
        $('.infoBox2').hide();
        $('.infoBox3').hide();
    });

    $('#info> h3:nth-of-type(2)').click(function(){
        $('.infoBox2').show();
        $('.infoBox1').hide();
        $('.infoBox3').hide();
    });

    $('#info> h3:nth-of-type(3)').click(function(){
        $('.infoBox3').show();
        $('.infoBox1').hide();
        $('.infoBox2').hide();
    });
});