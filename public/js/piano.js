class Piano{
    constructor(notes) {
        this.notes = notes;
        this.root = "";
        this.played_tone = undefined;

    }
    create_piano(){
        let note_counter = 0;
        const div_container = document.getElementById('container_down');
        if(this.notes.length < 10){
            div_container.style.left = '70%';
        }
        else{
            div_container.style.left = '50%';
        }
        for(let i = 0; i < this.notes.length; i++){
            const note = this.notes[i];
            this.root = document.createElement("div");
            this.root.classList.add('whitenote');
            let text_white_note = document.createElement("h5");
            text_white_note.classList.add('text_white_note');
            text_white_note.innerHTML = note;
            this.root.appendChild(text_white_note);

            if(note_counter < 7)   {this.root.setAttribute('data-note',note + 3); text_white_note.innerHTML = note + '3';}
            if (note_counter >= 7 && note_counter < 14) {this.root.setAttribute('data-note',note + 4); text_white_note.innerHTML = note + '4'; }
            if (note_counter >=  14) {this.root.setAttribute('data-note',note + 5); text_white_note.innerHTML = note + '5'; }
            note_counter += 1;

            this.root.addEventListener("mousedown", this.noteDown.bind(this , this.root.getAttribute("data-note")));
            div_container.appendChild(this.root);

            if((note !== 'E' && note !== 'B') && i + 1 < this.notes.length){
                var counter = i + 1;
                let text_black_note = document.createElement("h5");
                text_black_note.classList.add('text_black_note');
                text_black_note.innerHTML = '#' + note;
                this.root = document.createElement("div");
                this.root.classList.add('blacknote');

                this.root.appendChild(text_black_note);
                this.root.setAttribute('data-note',note + '#' + 4);
                this.root.addEventListener("mousedown", this.noteDown.bind(this , this.root.getAttribute("data-note")));


                if(counter < 3 ){
                    this.root.style.right = 'calc(1200px - (' + counter + '* 80px) - 10px)';
                }
                else {
                    this.root.style.right = 'calc(1200px - (' + counter + '* 78.5px) - 10px)';
                }
                div_container.appendChild(this.root)
            }
        }
    }
    noteDown(root) {
        let synth = new Tone.PolySynth().toDestination();
        this.played_tone = root;
        synth.triggerAttackRelease(root, "8n");
        event.stopPropagation();
    }
    return_played_tone(){
        return this.played_tone;
    }
    add_empty_container_image(){
        var img = new Image();
        img.src = "../obrazky/nadoba.png";
        img.setAttribute('id', 'nadoba');
        img.setAttribute('class', 'nadoba');
        container_down.appendChild(img);
    }
    change_img_container(number){
        var img = document.getElementById('nadoba');
        if(number === 0)  img.src = "../obrazky/nadoba.png"
        else img.src = "../obrazky/nadoba" + number + ".png"

    }
}

class Colorful_Piano extends Piano{
    constructor(notes) {
        super(notes);
    }
    create_piano() {
        let note_counter = 0;
        const div_container = document.getElementById('container_down');
        if(this.notes.length < 10){
            div_container.style.left = '70%';
        }
        else{
            div_container.style.left = '50%';
        }
        for(let i = 0; i < this.notes.length; i++){
            const note = this.notes[i];
            this.root = document.createElement("div");
            this.root.classList.add('whitenote' + i);
            let text_white_note = document.createElement("h5");
            text_white_note.classList.add('text_white_note');
            text_white_note.innerHTML = note;
            this.root.appendChild(text_white_note);

            if(note_counter < 7)   {this.root.setAttribute('data-note',note + 3); text_white_note.innerHTML = note + '3';}
            if (note_counter >= 7 && note_counter < 14) {this.root.setAttribute('data-note',note + 4); text_white_note.innerHTML = note + '4'; }
            if (note_counter >=  14) {this.root.setAttribute('data-note',note + 5); text_white_note.innerHTML = note + '5'; }
            note_counter += 1;

            this.root.addEventListener("mousedown", this.noteDown.bind(this , this.root.getAttribute("data-note")));
            div_container.appendChild(this.root);

            if((note !== 'E' && note !== 'B') && i + 1 < this.notes.length){
                var counter = i + 1;
                let text_black_note = document.createElement("h5");
                text_black_note.classList.add('text_black_note');
                text_black_note.innerHTML = '#' + note;
                this.root = document.createElement("div");
                this.root.classList.add('blacknote');

                this.root.appendChild(text_black_note);
                this.root.setAttribute('data-note',note + '#' + 4);
                this.root.addEventListener("mousedown", this.noteDown.bind(this , this.root.getAttribute("data-note")));


                if(counter < 3 ){
                    this.root.style.right = 'calc(1200px - (' + counter + '* 80px) - 10px)';
                }
                else {
                    this.root.style.right = 'calc(1200px - (' + counter + '* 78.5px) - 10px)';
                }
                div_container.appendChild(this.root)
            }
        }
    }
    noteDown(root) {
        super.noteDown(root);
    }
    return_played_tone() {
        return super.return_played_tone();
    }
    add_empty_container_image() {
        super.add_empty_container_image();
    }

    change_img_container(number) {
        super.change_img_container(number);
    }
}



