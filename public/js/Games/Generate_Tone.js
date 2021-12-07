class Generate_Tone{
    constructor(notes) {
        this.notes = notes
        this.note = undefined;
    }
    random_tone(){
        let index = Math.floor(Math.random() * this.notes.length)
        this.note = this.notes[index];
    }
    play_tone(note){
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        synth.triggerAttack(note, now);
        synth.triggerRelease(now + 0.25);
    }

}