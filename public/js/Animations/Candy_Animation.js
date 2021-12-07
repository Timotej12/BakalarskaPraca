class Candy_Animation{
    constructor() {
        this.container_middle = document.getElementById('container_middle')
        this.score = 0;
    }

    add_candy(){
       let nadoba = document.getElementById('nadoba');
        if(nadoba !== null) {
            let x = nadoba.getBoundingClientRect().x;
            let img = new Image();
            img.src = "../obrazky/candy.png";
            img.style.left = x + 'px';
            img.setAttribute('id', 'candy');
            img.setAttribute('class', 'candy');
            this.container_middle.appendChild(img);
        }
    }
    remove_candy(score){
        let candy = document.getElementById('candy');
        candy.parentNode.removeChild(candy);
        this.score++;
        this.change_img_container(score);
    }

    animate_candy(score) {
        this.add_candy();
        let candy = document.getElementById('candy');
        if (candy !== null) {
            let x =  document.getElementById('candy').animate(
                [
                    // keyframes
                    {transform: 'translateY(0px)'},
                    {transform: 'translateY(500px)'}
                ], {
                    // timing options
                    duration: 1500,
                    iterations: 1
                }
            )

            x.play();
            x.finished.then(() => {this.remove_candy(score)});
        }
    }
    change_img_container(number){
        var img = document.getElementById('nadoba');
        if(img !== null) {
            if (number === 0) img.src = "../obrazky/nadoba.png";
            else img.src = "../obrazky/nadoba" + number + ".png";
        }
    }
}