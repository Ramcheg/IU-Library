import './lib/lib';


// $('button').click(function() {
//     $('div').eq(2).toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// function sayHello() {
//     console.log('hello');
// }

// console.log($('button').html('hello'));

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findmer'));
// console.log($('.more').eq(0).siblings());
// $('.findme').fadeOut(18000);

$('#first').on('click', () => {
    $('div').eq(1).fadeOut(800);

});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeOut(800);

});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeOut(800);
});