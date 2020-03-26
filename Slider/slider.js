class Slider {
    constructor(slides) {
        this.slides = slides
        this.counter = 0
    }
    slide() {
        if (this.counter < this.slides.length - 1) {
            this.slides[this.counter].style.opacity = 0;
            this.slides[this.counter + 1].style.opacity = 1;
            this.counter++
        } else {
            this.slides[0].style.opacity = 1;
            this.slides[this.slides.length - 1].style.opacity = 0;
            this.counter = 0
        }
        setTimeout(() => {
            this.slide()
        }, 3000)
    }
}

const slides = document.querySelectorAll('.slider__image');
const slider = new Slider(slides)

window.onload = () => {
    setTimeout(() => {
        slider.slide()
    }, 3000)
}