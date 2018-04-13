var mario = document.getElementById('mario');
var juodas = document.getElementById('juodas');

mario.pos = {};
mario.pos.top = 0;
mario.pos.right = 0;

mario.judetiAukstyn = function() {
    mario.pos.top -= 104;
    if (mario.pos.top < 0) {
        mario.pos.top = 0;
    }
    mario.style.top = mario.pos.top + "px";
    checkCollide()
}

mario.judetiKaire = function() {
    mario.pos.right += 104;
    if(mario.pos.right > 728) {
        mario.pos.right = 728;
    }
    mario.style.right = mario.pos.right + "px";
    checkCollide()
};


mario.judetiDesine = function() {
    mario.pos.right -= 104;
    if(mario.pos.right <0) {
        mario.pos.right = 0;
    }
    mario.style.right = mario.pos.right + "px";
    checkCollide()
};


mario.judetiZemyn = function() {
    mario.pos.top += 104;
    if(mario.pos.top > 480) {
        mario.pos.top = 0;
    }
    mario.style.top = mario.pos.top + "px";
    checkCollide()
};


document.onkeyup = function(e) {
    if(e.keyCode == 37) {
        mario.judetiKaire();
    }

    if(e.keyCode == 38) {
        mario.judetiAukstyn();
    }

    if(e.keyCode == 39) {
        mario.judetiDesine();
    }

    if(e.keyCode == 40) {
        mario.judetiZemyn();
    }
};

var checkCollide = function( ) {
    $black = $('.black');
    $mario = $('#mario');

    var mo = $mario.offset();

    $black.each(function() {
        var bo = $(this).offset();
        bo.top = Math.floor(bo.top);

        if (mo.top === bo.top && mo.left === bo.left) {

            setTimeout(function() {
                mario.pos.top = 0;
                mario.pos.right = 0;
                mario.style.top = mario.pos.top + "px";
                mario.style.right = mario.pos.right + "px";
            }, 200)
        }

    })

    $mushroom = $('#mushroom');

    var mush = $mushroom.offset();
    mush.top = Math.floor(mush.top - 1);


    if (mush.top === mo.top && mush.left === mo.left) {
        console.log('ant grybo');
    }


    // // Div 1 data
    // var d1_offset             = $div1.offset();
    // var d1_height             = $div1.outerHeight( true );
    // var d1_width              = $div1.outerWidth( true );
    // var d1_distance_from_top  = d1_offset.top + d1_height;
    // var d1_distance_from_left = d1_offset.left + d1_width;
    //
    // // Div 2 data
    // var d2_offset             = $div2.offset();
    // var d2_height             = $div2.outerHeight( true );
    // var d2_width              = $div2.outerWidth( true );
    // var d2_distance_from_top  = d2_offset.top + d2_height;
    // var d2_distance_from_left = d2_offset.left + d2_width;
    //
    // var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );
    //
    // return ! not_colliding;
};
