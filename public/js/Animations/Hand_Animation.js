class Hand_Animation{
    constructor() {
    }
    add_hand(generate_tone){
        let container_down = document.getElementById('container_down');
        if(container_down){
            var img = new Image();
            img.src = "../obrazky/hand.png";
            img.setAttribute('id', 'hand');
            img.style.position = 'absolute';
            img.style.zIndex = "1000";
            img.style.width = '120px';
            img.style.height = '120px';
            img.style.left = this.get_location_x(generate_tone) + "px";
            img.style.bottom = this.get_location_y(generate_tone) + "px"
            container_down.appendChild(img);
        }
    }

    get_location_y(generate_tone){
        let container_down = document.getElementById('container_down');
        let children = container_down.children;
        for(var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.getAttribute('data-note') === generate_tone) {
                let y = child.getBoundingClientRect().height / 4
                return y
            }
        }
    }

    get_location_x(generate_tone){
        let container_down = document.getElementById('container_down');
        let children = container_down.children;
        for(var i = 0; i < children.length; i++){
            var child = children[i];
            if(child.getAttribute('data-note') === generate_tone) {
                let num = child.getBoundingClientRect().width
                let index = this.get_number_of_tone(generate_tone)
                if(index === 0){
                    return num;
                }
                else {
                    return num * index;
                }
            }
        }
    }

    get_number_of_tone(tone){
        if(tone === "C3"){
            return 0;
        }
        else if(tone === "D3"){
            return 1;
        }
        else if(tone === "E3"){
            return 2;
        }
        else if(tone === "F3"){
            return 3;
        }
        else if(tone === "G3"){
            return 4;
        }
        else if(tone === "A3"){
            return 5;
        }
        else if(tone === "B3"){
            return 6;
        }
        else if(tone === "C4"){
            return 7;
        }
        else if(tone === "D4"){
            return 8;
        }
        else if(tone === "E4"){
            return 9;
        }
        else if(tone === "F4"){
            return 10;
        }
        else if(tone === "G4"){
            return 11;
        }
        else if(tone === "A4"){
            return 12;
        }
        else if(tone === "B4"){
            return 13;
        }
        else if(tone === "C5"){
            return 14;
        }
    }



    remove_hand(){
        let hand = document.getElementById('hand');
        if(hand) {
            hand.parentNode.removeChild(hand);
        }
    }
    animate_hand(generate_tone){
        this.add_hand(generate_tone);

        let hand = document.getElementById('hand').animate(
            [
                // keyframes
                { transform: 'scale(1)', offset: 0, opacity: 1},
                { transform: 'scale(0.9)', opacity: 0.9},
                { transform: 'scale(0.8)', opacity: 0.9},
                { transform: 'scale(0.9)', opacity: 0.9},
                { transform: 'scale(0.8)', opacity: 0.9},
                { transform: 'scale(0.9)', opacity: 0.9},
                { transform: 'scale(0.8)', opacity: 0.9},
                { transform: 'scale(0.9)', opacity: 0.9},
                { transform: 'scale(0.8)', opacity: 0.9}
            ], {
                // timing options
                duration: 3000,
                iterations: 1
            }
        )
        hand.play();
        hand.finished.then(() => {this.remove_hand()})
    }
}