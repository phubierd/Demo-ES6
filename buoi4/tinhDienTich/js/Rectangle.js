import { Shape } from './shape.js';

export class Rectangle extends Shape {
    constructor(chieuRong, chieuDai, ...pros) {
        //Rest parameter
        super(...pros);
        this.chieuRong = chieuRong;
        this.chieuDai = chieuDai;
    }

    calcArea() {
        this.area = this.chieuDai * this.chieuRong;

    }

    draw() {
        document.querySelector("#main").innerHTML = `
        <div style="width:${this.width}px;height:${this.height}px;background-color:${this.color};">
            <p>${this.name}</p>
            <p>${this.area}</p>
        
            </div>
    `;
    }
}