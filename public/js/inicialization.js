
// js classes
let created = false;
let piano1_colorful = new Colorful_Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let piano1_default = new Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let piano2_colorful = new Colorful_Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let piano2_default = new Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let generate_tone = new Generate_Tone(['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'])
let generate_tone2 = new Generate_Tone(['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'])
let displays = new Piano_Display();

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
let button_thumbs_up = document.getElementById('thumbs_up');


//booleans atd
let button_arrow_active = false;
let button_game_one = false;
let score = 0;


const rockets = [];
const particles = [];



//buttons-----------------------------------------------------
function button1() {
    if(!created) {
        displays.buttons_levels()
        created = true;
        piano1_colorful.create_piano();
        if(button_game_one){play_game_one(piano1_colorful,0);add_empty_container_image();}
    }
}

function button2() {
    if (!created) {
        displays.buttons_levels()
        created = true;
        piano1_default.create_piano();
        if(button_game_one){play_game_one(piano1_default,0); add_empty_container_image();}

    }
}

function button3() {
    if (!created) {
        displays.buttons_levels()
        created = true;
        piano2_colorful.create_piano();
        if(button_game_one){play_game_one(piano2_colorful,0); add_empty_container_image();}

    }
}

function button4() {
    if (!created) {
        displays.buttons_levels()
        created = true;
        piano2_default.create_piano();
        if(button_game_one){play_game_one(piano2_default,0); add_empty_container_image();}
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
    displays.button_game_one();
}



//-------------------------------------------------------------

//functions----------------------------------------------------
//Game generated tone------------------------------------------
function play_game_one(piano, rounds_number) {
    middle_icon.style.display = 'none';
    let random_number = Math.floor(Math.random() * 4);
    if (random_number < 2) displays.display_klavir_tucniak();
    else displays.display_klavir_pes();
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
        if(button_arrow_active || rounds >= 5 || score > 8){
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
            middle_icon.style.display = 'block';
            button_thumbs_up.onclick = function (){rounds = 0 ;play_game_one(piano, rounds)}

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
            score++;
            displays.display_emoji_heart();
            animate_stars();
            animate_candy();
            setTimeout(function (){displays.close_emoji_heart()}, 1500);
            piano.played_tone = undefined;
        }
        else {
            displays.display_emoji_sad();
            setTimeout(function (){ displays.close_emoji_sad()}, 1500);
        }
    }
    else {
        displays.display_emoji_sad();
        setTimeout(function (){ displays.close_emoji_sad()}, 1500);
    }
}

function set_sound_img(number_of_img, interval){
    if(button_arrow_active){
        close_img_and_interval(interval);
        return;
    }
    displays.set_sound_img(number_of_img);
}
function close_img_and_interval(interval){
    displays.close_klavir_tucniak();
    displays.close_klavir_pes();
    clearInterval(interval);
    interval = null;
   displays.close_images_after_game_one()

}

function add_empty_container_image(){
    var img = new Image();
    img.src = "../obrazky/nadoba.png";
    img.setAttribute('id', 'nadoba');
    img.setAttribute('class', 'nadoba');
    container_down.appendChild(img);
}

function change_img_container(number){
    var img = document.getElementById('nadoba');
    if(number === 0)  img.src = "../obrazky/nadoba.png"
    else img.src = "../obrazky/nadoba" + number + ".png"

}

function piano_level_menu(){
    close_img_and_interval();
    middle_icon.style.display = 'none';
    btn_arrow.style.display = 'block';
    document.getElementById('container_down').innerHTML = "";
    created = false;
    displays.display_board2();
}

function piano_game_menu(){
    displays.display_board1();
}

function add_stars(){
    stars.style.display = 'block';
    var y = container_down.getBoundingClientRect().y;
    for (var i = 0; i < 10; i++) {
        var img = new Image();
        img.src = "../obrazky/hviezda.png";
        img.setAttribute('id', 'hviezda' + i);
        img.style.width = '30px';
        img.style.height = '30px';
        stars.appendChild(img);
    }
}



function animate_stars(){
    add_stars();
    for(let i = 0; i < 10; i++){
        var star = document.getElementById('hviezda' + i)
        let cislo = Math.floor(Math.random() * (500 - 100 + 1) + 500);

        star.animate(
            [
                // keyframes
                { transform: 'translateY(0px)'},
                { transform: 'translateY('+ (-cislo)+'px)' }

            ], {
                // timing options
                duration: 2000,
                iterations: 1
            }
        )

    }
}
function add_candy(){
    var nadoba = document.getElementById('nadoba')
    var x = nadoba.getBoundingClientRect().x;
    var img = new Image();
    img.src = "../obrazky/candy.png";
    img.style.left = x + 'px';
    img.setAttribute('id', 'candy');
    img.setAttribute('class', 'candy');
    container_middle.appendChild(img);
}
function remove_candy(){
    let candy = document.getElementById('candy');
    candy.parentNode.removeChild(candy);
    change_img_container(score);
}

function animate_candy(){
    add_candy();

    let candy = document.getElementById('candy').animate(
        [
            // keyframes
            { transform: 'translateY(0px)' },
            { transform: 'translateY(500px)' }
        ], {
            // timing options
            duration: 1500,
            iterations: 1
        }
    )

    candy.play();
    candy.finished.then(remove_candy);
}






