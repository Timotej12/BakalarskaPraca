class Piano_Display{
    constructor() {
        this.container = document.getElementById('container');
        this.board1 = document.getElementById("board1");
        this.board2 = document.getElementById("board2");
        this.container_down = document.getElementById('container_down');
        this.container_middle = document.getElementById('container_middle');
        this.btn_arrow = document.getElementById('btn5');
        this.middle_icon = document.getElementById('middle_icons');
        this.stars = document.getElementById('stars');


        this.volume_off = document.getElementById('volume_off');
        this.volume_up = document.getElementById('volume_up');
        this.volume_down = document.getElementById('volume_down');
        this.emoji_heart = document.getElementById('emoji_heart');
        this.emoji_sad = document.getElementById('emoji_sad');
        this.tucniak_klavir = document.getElementById('tucniak_klavir');
        this.pes_klavir = document.getElementById('pes_klavir');
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
    display_piano_level_menu(){
        this.middle_icon.style.display = 'none';
        this.btn_arrow.style.display = 'block';
        this.container_down.innerHTML = '';
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

    display_emoji_heart(){
        this.emoji_heart.style.display = 'block';
    }
    close_emoji_heart(){
        this.emoji_heart.style.display = 'none';
    }
    display_emoji_sad(){
        this.emoji_sad.style.display = 'block';
    }
    close_emoji_sad(){
        this.emoji_sad.style.display = 'none';
    }
    close_images_after_game_one(){
        this.stars.innerHTML = '';
        this.middle_icon.style.display = 'none'
        this.volume_off.style.display = 'none';
        this.volume_up.style.display = 'none';
        this.volume_down.style.display = 'none';
    }

   set_sound_img(number_of_img){
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
}