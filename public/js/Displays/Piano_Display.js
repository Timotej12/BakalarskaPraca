class Piano_Display{
    constructor() {
        this.container = document.getElementById('container');
        this.board1 = document.getElementById("board1");
        this.board2 = document.getElementById("board2");
        this.container_down = document.getElementById('container_down');
        this.container_middle = document.getElementById('container_middle');
        this.btn_arrow = document.getElementById('button_back');
        this.middle_icon = document.getElementById('middle_icons');
        this.stars = document.getElementById('stars');
        this.button_thumbs_up = document.getElementById('button_thumbs_up')


        this.volume_off = document.getElementById('volume_off');
        this.volume_up = document.getElementById('volume_up');
        this.volume_down = document.getElementById('volume_down');
        this.happy_emoji1 = document.getElementById('happy1');
        this.happy_emoji2 = document.getElementById('happy2');
        this.sad_emoji = document.getElementById('sad');
        this.tucniak_klavir = document.getElementById('tucniak_klavir');
        this.pes_klavir = document.getElementById('pes_klavir');
        this.nadoba = document.getElementById('nadoba');
    }
    buttons_levels(){
        this.btn_arrow.style.display = 'block';
        this.container.style.display = "none";
    }

    button_game_one(){

        this.board1.style.display = "none";
        this.board2.style.display = "block";
        this.btn_arrow.style.display = "block";
    }

    button_back(){
        var style_of_container = window.getComputedStyle(this.container);
        var style_of_board1 = window.getComputedStyle(this.board1);
        var style_of_board2 =  window.getComputedStyle(this.board2);
        if(style_of_container.display === "none"){
            this.display_piano_level_menu();
        }
        else if(style_of_container.display === 'block' && style_of_board2.display === 'block' && style_of_board1.display === 'none' ) {
            this.display_board1();
        }
        else if(style_of_container.display === 'block' && style_of_board2.display === 'none' && style_of_board1.display === 'block'){
                 window.location.replace("http://localhost:3000/");
        }
    }
    display_piano_level_menu(){
        this.middle_icon.style.display = 'none';
        this.btn_arrow.style.display = 'block';
        this.container_down.innerHTML = '';
        this.display_board2();
    }
    display_container(){
        this.container.style.display = 'block';
        this.container_down.innerHTML = '';
    }
    display_container_down(){
        this.container.style.display = 'block';
        this.container_down.innerHTML = '';
    }

    display_board1(){
        this.display_container();
        this.board1.style.display = 'block';
        this.board2.style.display = 'none';
        this.btn_arrow.style.display = 'block';
    }
    display_board2(){
        this.display_container();
        this.board1.style.display = 'none';
        this.board2.style.display = 'block';
    }
    display_klavir_tucniak(){
        this.tucniak_klavir.style.display = 'block';
    }
    close_klavir_tucniak(){
        this.tucniak_klavir.style.display = 'none';
    }

    display_klavir_pes(){
        this.pes_klavir.style.display = 'block';
    }
    close_klavir_pes(){
        this.pes_klavir.style.display = 'none';
    }

    random_display_pes_tucniak(){
        let random_number = Math.floor(Math.random() * 4);
        if (random_number < 2) displays.display_klavir_tucniak();
        else displays.display_klavir_pes();
    }
    display_middle_icons(){
        this.middle_icon.style.display = 'block';
    }

    close_middle_icons(){
        this.middle_icon.style.display = 'none';
    }

    display_random_happy_emoji(){
        let random_number = Math.floor(Math.random() * 4);
        if (random_number < 2) this.happy_emoji1.style.display = "block";
        else this.happy_emoji2.style.display = "block";
    }

    close_happy_emoji(){
        this.happy_emoji1.style.display = "none";
        this.happy_emoji2.style.display = "none";
    }

    display_sad_emoji(){
        this.sad_emoji.style.display = "block";
    }
    close_sad_emoji(){
        this.sad_emoji.style.display = "none";
    }
    close_images_after_game_one(){
        this.close_klavir_tucniak();
        this.close_klavir_pes();
        this.stars.innerHTML = '';
        this.middle_icon.style.display = 'none'
        this.volume_off.style.display = 'none';
        this.volume_up.style.display = 'none';
        this.volume_down.style.display = 'none';
    }

   set_sound_img_default(number_of_img){
        this.container_middle.style.display = 'block';
        if (number_of_img === 1) {
            this.volume_off.style.display = 'block';
            this.volume_up.style.display = 'none';
            this.volume_down.style.display = 'none';
        } else if (number_of_img === 2) {
            this.volume_down.style.display = 'block';
            this.volume_off.style.display = 'none';
            this.volume_up.style.display = 'none';
        } else if (number_of_img === 3) {
            this.volume_up.style.display = 'block';
            this.volume_down.style.display = 'none';
            this.volume_off.style.display = 'none';
        }
    }

    set_sound_img_colorful(tone, number_of_img){
        this.container_middle.style.display = 'block';
        this.find_out_volume_color(tone);
        this.set_sound_img_default(number_of_img);
    }
    find_out_volume_color(tone){
        if(tone === "C3"){
            this.set_volume_color('#00FFFF');
        }
        else if(tone === "D3"){
            this.set_volume_color('#000080');
        }
        else if(tone === "E3"){
            this.set_volume_color('#008000');
        }
        else if(tone === "F3"){
            this.set_volume_color('#808000');
        }
        else if(tone === "G3"){
            this.set_volume_color('#008080');
        }
        else if(tone === "A3"){
            this.set_volume_color('#0000FF');
        }
        else if(tone === "B3"){
            this.set_volume_color('#00FF00');
        }
        else if(tone === "C4"){
            this.set_volume_color('#800080');
        }
        else if(tone === "D4"){
            this.set_volume_color('#FF00FF');
        }
        else if(tone === "E4"){
            this.set_volume_color('#800000');
        }
        else if(tone === "F4"){
            this.set_volume_color('#FF0000');
        }
        else if(tone === "G4"){
            this.set_volume_color('#FFFF00');
        }
        else if(tone === "A4"){
            this.set_volume_color('#CCCC00');
        }
        else if(tone === "B4"){
            this.set_volume_color('#FF8000');
        }
        else if(tone === "C5"){
            this.set_volume_color('#f08080');
        }
    }
    set_volume_color(color){
        this.volume_off.style.color = color;
        this.volume_up.style.color = color;
        this.volume_down.style.color = color;
    }

    set_defalut_volume_color(){
        this.volume_off.style.color = 'black';
        this.volume_up.style.color = 'black';
        this.volume_down.style.color = 'black';
    }

}