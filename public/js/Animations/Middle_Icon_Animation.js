class Middle_Icon_Animation{
    constructor(display) {
        this.displays = display;

    }

    animate_middle_icons(){
        let icon = document.getElementById('middle_icons').animate(
            [
                // keyframes
                { transform: 'scale(1)', offset: 0, opacity: 1},
                { transform: 'scale(0.9)', opacity: 0.9, background: 'lightblue'},
                { transform: 'scale(0.8)', opacity: 0.8, background: 'lightblue'},
                { transform: 'scale(0.7)', opacity: 0.7, background: 'lightblue'},
                { transform: 'scale(0.6)', opacity: 0.6, background: 'lightblue'},
                { transform: 'scale(0.5)', opacity: 0.5, background: 'lightblue'},
                { transform: 'scale(0.4)', opacity: 0.4, background: 'lightblue'},
                { transform: 'scale(0.3)', opacity: 0.3, background: 'lightblue'},
                { transform: 'scale(0.2)', opacity: 0.2, background: 'lightblue'},
                { transform: 'scale(0.1)', opacity: 0.1, background: 'lightblue'},
                { transform: 'scale(0.0)', opacity: 0.0, background: 'lightblue'}
            ], {
                // timing options
                duration: 2000,
                iterations: 1
            }
        )

        icon.play();
        icon.finished.then(() => {this.displays.close_middle_icons();});

    }
}