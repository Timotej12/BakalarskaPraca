class Stars_Animation{
    constructor() {
        this.stars = document.getElementById('stars');
    }
    add_stars(){
        this.stars.style.display = 'block';
        for (var i = 0; i < 10; i++) {
            var img = new Image();
            img.src = "../obrazky/hviezda.png";
            img.setAttribute('id', 'hviezda' + i);
            img.style.width = '30px';
            img.style.height = '30px';
            this.stars.appendChild(img);
        }
    }

    animate_stars(){
        this.add_stars();
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
}