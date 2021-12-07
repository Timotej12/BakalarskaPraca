class Play_Random_Genareted_Tone_Default{
    constructor(piano, generate_tone, display, stars, candy, mid_animation, hand_anim) {
        this.piano = piano;
        this.score = 0;
        this.rounds = 0;
        this.generate_tone = generate_tone;
        this.displays = display;
        this.stars = stars;
        this.candy = candy;
        this.interval = undefined;
        this.interval2 = undefined;
        this.interval3 = undefined;


        this.note = undefined;
        this.play_note_again = false;

        this.mid_animation = mid_animation;
        this.btn_back_active = false;

        this.hand_anim = hand_anim;
        this.thumbs_up = document.getElementById('thumbs_up');
        this.btn_back = document.getElementById('button_back');
        this.btn_back.onclick = () => {display.button_back(); this.close_img_and_interval(this.interval); this.btn_back_active = true;  displays.set_defalut_volume_color();};


    }

    start_game(){
        if(this.btn_back_active) {
            this.close_img_and_interval(this.interval);
        }
        else {
            this.generate_tone.random_tone();
            displays.close_middle_icons();
            let index_of_image = 1;
            this.interval = setInterval(function () {
                    if (index_of_image > 3) index_of_image = 1;
                    displays.set_sound_img_default(index_of_image);
                    index_of_image += 1;
                }
                , 500);
            if (score > 8 || this.rounds > 10) {
                this.end_game(this.interval)
                this.close_interval(this.interval)
                displays.display_piano_level_menu()
            }
            this.rounds++;
            if(this.rounds <= 1) {
                this.displays.random_display_pes_tucniak();
                setTimeout(() => this.play_generated_tone(this.interval), 3000);
            }
            else {
                this.displays.random_display_pes_tucniak();
                setTimeout(() => this.play_generated_tone(this.interval), 500);
            }
        }
    }



    play_generated_tone(interval){
        if(this.btn_back_active) {
            this.close_img_and_interval(interval)
        }
        else {
            if(this.play_note_again){
                this.generate_tone.play_tone(this.note);
                console.log(this.note);
                this.interval2 = setInterval(() =>{
                    if(this.piano.played_tone === undefined){
                        this.hand_anim.animate_hand(generate_tone.note)
                    }
                    else {
                        this.hand_anim.remove_hand()
                        this.close_interval(this.interval3)
                    }
                }, 6000);
                this.interval3 = setInterval(() =>{
                    if(this.piano.played_tone !== undefined){
                        this.compare_generated_and_played_tone(this.piano.played_tone, this.generate_tone.note, interval);
                        this.close_interval(this.interval2);
                        this.close_interval(this.interval3);
                        this.hand_anim.remove_hand();
                    }
                }, 500);
            }
            else {
                this.play_note_again = false;
                this.generate_tone.play_tone(this.generate_tone.note);
                console.log(this.generate_tone.note);
                this.interval2 = setInterval(() =>{
                    if(this.piano.played_tone === undefined){
                        this.hand_anim.animate_hand(generate_tone.note)
                    }
                    else {
                        this.hand_anim.remove_hand()
                        this.close_interval(this.interval3)
                    }
                }, 6000);
                this.interval3 = setInterval(() =>{
                    if(this.piano.played_tone !== undefined){
                        this.compare_generated_and_played_tone(this.piano.played_tone, this.generate_tone.note, interval);
                        this.close_interval(this.interval2);
                        this.close_interval(this.interval3);
                        this.hand_anim.remove_hand();
                    }
                }, 500);
            }
        }
    }

    compare_generated_and_played_tone(played, generated, interval){
        if(this.btn_back_active) {
            this.close_img_and_interval(interval)
        }
        else {
            this.close_img_and_interval(interval)
            if (played === generated) {
                this.won_round();
            } else {
                this.lost_round();
            }
            this.piano.note = undefined;
            setTimeout(() => this.play_again(interval), 1500);
        }
    }

    won_round(){
        this.piano.played_tone = undefined;
        if(this.btn_back_active) {
            this.close_img_and_interval(this.interval)
        }
        else {
            this.play_note_again = false;
            this.score++;
            this.displays.display_emoji_heart();
            this.stars.animate_stars();
            this.candy.animate_candy(this.score);
            setTimeout(() => this.displays.close_emoji_heart(), 1500);
            this.piano.played_tone = undefined;
        }
    }

    lost_round(){
        this.piano.played_tone = undefined;
        if(this.btn_back_active) {
            this.close_img_and_interval(this.interval)
        }
        else {
            this.note = generate_tone.note;
            this.play_note_again = true;
            this.displays.display_emoji_sad();
            setTimeout(() => this.displays.close_emoji_sad(), 1500);
            this.piano.played_tone = undefined;
        }
    }
    play_again(interval){
        if(this.score < 9 && this.rounds < 20) {
            displays.set_defalut_volume_color();
            if (this.btn_back_active) {
                this.close_img_and_interval(interval)
            } else {
                this.close_img_and_interval(interval)
                displays.display_middle_icons();
                this.thumbs_up.onclick = () => {
                    this.mid_animation.animate_middle_icons();
                    setTimeout(() => this.start_game(), 2000)
                };
            }
        }
        else {
            this.close_img_and_interval(interval)
            displays.display_piano_level_menu()
        }
    }

    end_game(interval){
        this.close_img_and_interval(interval);
        this.close_interval(this.interval3);
        this.close_interval(this.interval2);
    }


    close_img_and_interval(interval) {
        this.close_interval(this.interval3);
        this.close_interval(this.interval2);
        displays.set_defalut_volume_color();
        if(this.interval !== undefined) {
            displays.close_middle_icons();
            clearInterval(interval);
            interval = null;
            this.displays.close_images_after_game_one()
        }
        else {
            this.score = 0;
            this.rounds = 0;
            displays.close_middle_icons();
            this.displays.close_images_after_game_one()
        }
    }

    close_interval(interval){
        clearInterval(interval);
        interval = null;
    }
}



class Play_Random_Generated_Tone_Colorful extends Play_Random_Genareted_Tone_Default{
    constructor(piano, generate_tone, display, stars, candy, mid_animation) {
        super(piano, generate_tone, display, stars, candy, mid_animation);
    }
    start_game() {
        if(this.btn_back_active) {
            this.close_img_and_interval(this.interval)
        }
        else {
            this.generate_tone.random_tone();
            let note = this.generate_tone.note;
            displays.close_middle_icons();
            let index_of_image = 1;
            if(this.play_note_again){
                note = this.note;
            }
            this.interval = setInterval(function () {
                    if (index_of_image > 3) index_of_image = 1;
                    displays.set_sound_img_colorful(note,index_of_image);
                    index_of_image += 1;
                }
                , 500);
            if (score > 9 || this.rounds > 10) {
                this.end_game(this.interval)
            }
            this.rounds++;
            if(this.rounds <= 1) {
                this.displays.random_display_pes_tucniak();
                setTimeout(() => this.play_generated_tone(this.interval), 3000);
            }
            else {
                this.displays.random_display_pes_tucniak();
                setTimeout(() => this.play_generated_tone(this.interval), 500);
            }
        }
    }


    play_generated_tone(interval) {
        super.play_generated_tone(interval);
    }
    compare_generated_and_played_tone(played, generated, interval) {
        super.compare_generated_and_played_tone(played, generated, interval);
    }
    won_round() {
        super.won_round();
    }
    lost_round() {
        super.lost_round();
    }
    close_img_and_interval(interval) {
        super.close_img_and_interval(interval);
    }
    play_again(interval) {
        super.play_again(interval);
    }
    end_game(interval) {
        super.end_game(interval);
    }
}



/*
play_generated_tone(interval){
    if(this.btn_back_active) {
        this.close_img_and_interval(interval)
    }
    else {
        if(this.play_note_again){
            this.generate_tone.play_tone(this.note);
            console.log(this.note);
            if(this.piano.return_played_tone() !== undefined){
                this.compare_generated_and_played_tone(this.piano.played_tone, this.note, interval);
            }
            else{
                setTimeout(() => this.compare_generated_and_played_tone(this.piano.played_tone, this.note, interval), 4000);
            }
        }
        else {
            this.play_note_again = false;
            this.generate_tone.play_tone(this.generate_tone.note);
            console.log(this.generate_tone.note);
            if(this.piano.return_played_tone() !== undefined){
                this.compare_generated_and_played_tone(this.piano.played_tone, this.generate_tone.note, interval);
            }
            else{
                setTimeout(() => this.compare_generated_and_played_tone(this.piano.played_tone, this.generate_tone.note, interval), 4000);
            }
        }

    }
}

 */

