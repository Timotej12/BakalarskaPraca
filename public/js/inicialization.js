
// js classes
let piano1_colorful = new Colorful_Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let piano1_default = new Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let piano2_colorful = new Colorful_Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let piano2_default = new Piano(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
let generate_tone = new Generate_Tone(['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'])
let generate_tone2 = new Generate_Tone(['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'])
let displays = new Piano_Display()
let candy = new Candy_Animation();
let star = new Stars_Animation();
let mid_icons_anim = new Middle_Icon_Animation(displays);
let hand_anim = new Hand_Animation();


//html ids
let container = document.getElementById('container');
let board1 = document.getElementById("board1");
let board2 = document.getElementById("board2");
let container_down = document.getElementById('container_down');
let container_middle = document.getElementById('container_middle');
let btn_back = document.getElementById('button_back');
let middle_icon = document.getElementById('middle_icons');



//buttons id
let button_thumbs_up = document.getElementById('thumbs_up');


//booleans atd
let button_game_one = false;
let score = 0;



//buttons-----------------------------------------------------
function button1() {
        displays.buttons_levels()
        piano1_colorful.create_piano();
        if(button_game_one){play_game_one_colorful(piano1_colorful, generate_tone);}
}

function button2() {
        displays.buttons_levels()
        piano1_default.create_piano();
        if(button_game_one){play_game_one_default(piano1_default,generate_tone);}

}

function button3() {
        displays.buttons_levels()
        piano2_colorful.create_piano();
        if(button_game_one){play_game_one_colorful(piano2_colorful, generate_tone2);}
}

function button4() {
        displays.buttons_levels()
        piano2_default.create_piano();
        if(button_game_one){play_game_one_default(piano2_default, generate_tone2);}
}
function button_back(){
    displays.button_back()
}
function game_one_button(){
    button_game_one = true;
    displays.button_game_one();
}



//-------------------------------------------------------------

//functions----------------------------------------------------
//Game generated tone------------------------------------------
function play_game_one_default(piano, generate_tone) {
  piano.add_empty_container_image();
  let play_game = new Play_Random_Genareted_Tone_Default(piano, generate_tone, displays, star, candy, mid_icons_anim, hand_anim);
  play_game.start_game();
}

function play_game_one_colorful(piano, generate_tone){
    piano.add_empty_container_image();
    let play_game = new Play_Random_Generated_Tone_Colorful(piano, generate_tone, displays, star, candy, mid_icons_anim, hand_anim);
    play_game.start_game();
}







