import { Shape } from '../js/shape.js';

export class Square extends Shape {
    constructor(name, width, height, color, canhVuong) {
        //copy thuộc tính của cha
        super(name, width, height, color);
        //thuộc tính riêng
        this.canhVuong = canhVuong;
    }


    //ghi đè phương thức calcArea của cha để tạo công thức tính diện tích riêng cho hình vuông
    calcArea() {
        this.area = Math.pow(this.canhVuong, 2);
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

