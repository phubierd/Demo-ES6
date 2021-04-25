import {Shape} from './shape.js';

export class Circle extends Shape{
    constructor(r,...pros){
        super(...pros);
        this.radius = r;
        this.pi = 3.14;

    }

    calcArea(){
        this.area = this.pi * Math.pow(this.radius,2);
    }
    draw() {
        document.querySelector("#main").innerHTML = `
        <div style="width:${this.width}px;height:${this.height}px;background-color:${this.color};border-radius:50%;">
            <p>${this.name}</p>
            <p>${this.area}</p>
        
            </div>
    `;
    }

}