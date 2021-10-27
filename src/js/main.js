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
    $('div').eq(1).fadeToggle(800);

});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);

});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>
`
);
// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Body elgwelgwelgewlgewlg legw lw lwegl wlgel we lw elweg'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Data save');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('yhewrwerr');
                }
            ]
        ]
    }
}));


$().get('https://jsonplaceholder.typicode.com/posts/1')
.then(res => console.log(res));