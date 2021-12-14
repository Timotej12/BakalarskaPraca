class Generate_Tone{
    constructor(notes) {
        this.notes = notes
        this.note = undefined;
        this.generated_tones = [];
    }
    random_tone(){
        if(this.notes.length  === this.generated_tones.length + 4){
            this.generated_tones = [];
        }
        let index = Math.floor(Math.random() * this.notes.length)
        this.note = this.notes[index];
        if(this.generated_tones.includes(this.note)){
            this.random_tone()
        }
    }
    play_tone(note){
        if(note) {
            const synth = new Tone.Synth().toDestination();
            const now = Tone.now();
            synth.triggerAttack(note, now);
            synth.triggerRelease(now + 0.25);
        }
        else {
            alert("Nepodarilo sa vygenerovat ton")
        }
    }
}