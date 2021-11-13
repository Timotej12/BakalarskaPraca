
// js classes
let created = false;
let piano1_colorful = new Colorful_Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let piano1_default = new Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let piano2_colorful = new Colorful_Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let piano2_default = new Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let generate_tone = new Generate_Tone(['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'])
let generate_tone2 = new Generate_Tone(['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'])

//html ids
let container = document.getElementById('container');
let board1 = document.getElementById("board1");
let board2 = document.getElementById("board2");
let container_down = document.getElementById('container_down');
let container_middle = document.getElementById('container_middle');
let btn_arrow = document.getElementById('btn5');
let middle_icon = document.getElementById('middle_icons');
let stars = document.getElementById('stars');


let volume_off = document.getElementById('volume_off');
let volume_up = document.getElementById('volume_up');
let volume_down = document.getElementById('volume_down');
let emoji_heart = document.getElementById('emoji_heart');
let emoji_sad = document.getElementById('emoji_sad');
let tucniak_klavir = document.getElementById('tucniak_klavir');
let pes_klavir = document.getElementById('pes_klavir');

//buttons id
let button_again = document.getElementById('button_again');
let button_close = document.getElementById('button_close');

//booleans atd
let button_arrow_active = false;
let button_game_one = false;



//buttons-----------------------------------------------------
function button1() {
    if(!created) {
        btn_arrow.style.display = 'block';
        container.style.display = "none";
        created = true;
        piano1_colorful.create_piano();
        if(button_game_one){play_game_one(piano1_colorful,0);}
    }
}

function button2() {
    if (!created) {
        btn_arrow.style.display = 'block';
        container.style.display = "none";
        created = true;
        piano1_default.create_piano();
        if(button_game_one){play_game_one(piano1_default,0);}

    }
}

function button3() {
    if (!created) {
        btn_arrow.style.display = 'block';
        container.style.display = "none";
        created = true;
        piano2_colorful.create_piano();
        if(button_game_one){play_game_one(piano2_colorful,0);}

    }
}

function button4() {
    if (!created) {
        btn_arrow.style.display = 'block';
        container.style.display = "none";
        created = true;
        piano2_default.create_piano();
        if(button_game_one){play_game_one(piano2_default,0);}
    }
}
function button5(){
    button_arrow_active = true;
    if( container.style.display === 'none') {
        piano_level_menu();
    }

    else if(container.style.display === 'block' && board2.style.display === 'block' ) {
        piano_game_menu();
    }
}
function game_one_button(){
    button_game_one = true;
   board1.style.display = "none";
   board2.style.display = "block";
   btn_arrow.style.display = "block";
}



//-------------------------------------------------------------

//functions----------------------------------------------------
//Game generated tone------------------------------------------
function play_game_one(piano, rounds_number) {
    middle_icon.style.display = 'none';
    let random_number = Math.floor(Math.random() * 4);
    if (random_number < 2) display_tucniak_klavir(true);
    else display_pes_klavir(true);
    button_arrow_active = false;
    let rounds = rounds_number;
    let number = 1;
    let interval =  setInterval(function (){
            if(number > 3) number = 1;
            set_sound_img(number, interval);
            number += 1;}
        , 500);
    loopgame();

    function loopgame(){
        if(button_arrow_active || rounds >= 5){
            close_img_and_interval(interval);
            return;
        }
        if(rounds === 0){
            set_timeout(piano, interval);
            rounds++;
            setTimeout(loopgame, 8500);
        }
        else{
            close_img_and_interval(interval);
            middle_icon.style.display = 'flex';
            button_again.onclick = function (){rounds = 0 ;play_game_one(piano, rounds)}
            button_close.onclick = function (){piano_level_menu();}
        }
    }
}
function set_timeout(piano, interval){
    if(button_arrow_active){
        close_img_and_interval(interval);
        return;
    }
    setTimeout( () => generate_random_tone(piano, interval), 3000);
}
function generate_random_tone(piano, interval){
    if(button_arrow_active){
        close_img_and_interval(interval);
        return;
    }
    generate_tone.random_tone();
    generate_tone.play_tone(generate_tone.note);
    console.log(generate_tone.note);
    setTimeout( () => compare_generated_and_clicked(generate_tone.note, piano, interval), 4000);
}

function compare_generated_and_clicked(note, piano, interval){
    close_img_and_interval(interval);
    if(piano.return_played_tone() !== undefined){
        if(piano.return_played_tone() === note){
            display_emoji_heart(true);
            animate_stars();
            setTimeout(function (){display_emoji_heart(false)}, 1500);
        }
        else {
            display_emoji_sad(true);
            setTimeout(function (){ display_emoji_sad(false);}, 1500);
        }
    }
    else {
        display_emoji_sad(true);
        setTimeout(function (){ display_emoji_sad(false);}, 1500);
    }
}
function display_emoji_heart(display){
    if(display){
        emoji_heart.style.display = 'block';
    }
    else {
        emoji_heart.style.display = 'none';
    }
}

function display_emoji_sad(display){
    if(display){
        emoji_sad.style.display = 'block';
    }
    else {
        emoji_sad.style.display = 'none';
    }
}
function set_sound_img(number_of_img, interval){
    if(button_arrow_active){
        close_img_and_interval(interval);
        return;
    }
   container_middle.style.display = 'block';
    if (number_of_img === 1) {
        volume_off.style.display = 'block';
        volume_up.style.display = 'none';
        volume_down.style.display = 'none';
    } else if (number_of_img === 2) {
        volume_down.style.display = 'block';
        volume_off.style.display = 'none';
        volume_up.style.display = 'none';
    } else if (number_of_img === 3) {
        volume_up.style.display = 'block';
        volume_down.style.display = 'none';
        volume_off.style.display = 'none';
    }
}
function close_img_and_interval(interval){
    display_tucniak_klavir(false);
    display_pes_klavir(false);
    clearInterval(interval);
    interval = null;
    stars.innerHTML = '';
    middle_icon.style.display = 'none'
    volume_off.style.display = 'none';
    volume_up.style.display = 'none';
    volume_down.style.display = 'none';
}
function display_middle_container(){
    container_middle.style.display = 'block';
}
function display_container(){
    created = false;
    container.style.display = 'block';
    container_down.innerHTML = '';
}
function display_board1(){
    display_container();
    board1.style.display = 'block';
    board2.style.display = 'none';
    btn_arrow.style.display = 'block';
    created = false;
}
function display_board2(){
    display_container();
    board1.style.display = 'none';
    board2.style.display = 'block';
}

function display_tucniak_klavir(display){
    if(display){
        tucniak_klavir.style.display = 'block';
    }
    else {
        tucniak_klavir.style.display = 'none';
    }
}
function display_pes_klavir(display){
    if(display){
        pes_klavir.style.display = 'block';
    }
    else {
        pes_klavir.style.display = 'none';
    }
}

function piano_level_menu(){
    close_img_and_interval();
    middle_icon.style.display = 'none';
    btn_arrow.style.display = 'block';
    document.getElementById('container_down').innerHTML = "";
    created = false;
    display_board2();
}
function piano_game_menu(){
    display_board1();
}

function add_stars(){
    for (var i = 0; i < 10; i++) {
        var img = new Image();
        img.src = "../obrazky/hviezda.png"
        img.setAttribute('id', 'hviezda')
        img.style.width = '30px';
        img.style.height = '30px';
        stars.appendChild(img)
    }
}

function set_stars(){
    stars.style.display = 'block';
    const winWidth =  stars.offsetWidth;
    const winHeight = stars.offsetHeight;

    for (let i= 0; i < stars.children.length; i++ ) {
        var thisStar = stars.children[i];
        let randomTop = getRandomNumber(0, winHeight);
        let randomLeft = getRandomNumber(0, winWidth);
        thisStar.style.top = randomTop +"px";
        thisStar.style.left = randomLeft +"px";
    }
}
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function animate_stars(){
    add_stars();
    set_stars()
    stars.onanimationend = () => { stars.innerHTML = '';}
    stars.animate(
        [
            // keyframes
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-300px)' }
        ], {
            // timing options
            duration: 1000,
            iterations: 1
        }
    )
}




