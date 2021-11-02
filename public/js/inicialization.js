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
let game_one = document.getElementById('game_one');
let volume_off = document.getElementById('volume_off');
let volume_up = document.getElementById('volume_up');
let volume_down = document.getElementById('volume_down');
let emoji_heart = document.getElementById('emoji_heart');
let emoji_sad = document.getElementById('emoji_sad');

//booleans atd
let button_arrow_active = false;
let button_repeat_action = false;
let button_game_one = false;


//buttons-----------------------------------------------------
function button1() {
    if(!created) {
        console.log("pica")
        btn_arrow.style.display = 'block';
        container.style.display = "none";
        created = true;
        piano1_colorful.create_piano();
        if(button_game_one){play_game_one(piano1_colorful);}
    }
}

function button2() {
    if (!created) {
        console.log("huba")
        btn_arrow.style.display = 'block';
        container.style.display = "none";
        created = true;
        piano1_default.create_piano();
        if(button_game_one){play_game_one(piano1_default);}

    }
}

function button3() {
    if (!created) {
        btn_arrow.style.display = 'block';
        container.style.display = "none";
        created = true;
        piano2_colorful.create_piano();
        if(button_game_one){play_game_one(piano2_colorful);}

    }
}

function button4() {
    if (!created) {
        btn_arrow.style.display = 'block';
        container.style.display = "none";
        created = true;
        piano2_default.create_piano();
        if(button_game_one){play_game_one(piano2_default);}
    }
}
function button5(){
    button_arrow_active = true;
    if( container.style.display === 'none') {
        container.style.display = "block"
        board2.style.display = "block";
        btn_arrow.style.display = 'block';
        document.getElementById('container_down').innerHTML = "";
        created = false;
    }
    else if(container.style.display === 'block' && board2.style.display === 'block' ) {
        board2.style.display = 'none';
        btn_arrow.style.display = 'block';
        board1.style.display = 'block';
        created = false;
    }
    else if(container.style.display === 'block' && board2.style.display === 'block' && board1.style.display === 'none') {
        board2.style.display = 'none';
        board1.style.display = 'block';
        created = false;
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
function play_game_one(piano){
    button_arrow_active = false;
    let rounds = 0;
    let number = 1;
    let interval =  setInterval(function (){
            if(number > 3) number = 1;
            set_sound_img(number, interval);
            number += 1;}
        , 500);
    loopgame();
    function loopgame(){
        console.log("Pica huba rit")
        if(button_arrow_active || rounds >= 5){
            close_img_and_interval(interval);
            return;
        }
        set_timeout(piano, interval);
        rounds++;
        if(rounds < 6){
            setTimeout(loopgame, 7000);
        }
    }
}
function set_timeout(piano, interval){
    if(button_arrow_active){
        close_img_and_interval(interval);
        return;
    }
    setTimeout( () => generate_random_tone(piano, interval), 2000);
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
    if(button_arrow_active){
        close_img_and_interval(interval);
        return;
    }
    if(piano.return_played_tone() !== undefined){
        if(piano.return_played_tone() === note){
            display_emoji_heart(true);
            setTimeout(function (){display_emoji_heart(false)}, 2000);
        }
        else {
            display_emoji_sad(true);
            setTimeout(function (){ display_emoji_sad(false);}, 2000);
        }
    }
    else {
        display_emoji_sad(true);
        setTimeout(function (){ display_emoji_sad(false);}, 2000);
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
    clearInterval(interval);
    interval = null;
    volume_off.style.display = 'none';
    volume_up.style.display = 'none';
    volume_down.style.display = 'none';
}






