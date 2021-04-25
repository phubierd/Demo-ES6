export class Shape {
    constructor(name, width, height, color) {
        //thuộc tính chung
        this.name = name;
        this.width = width;
        this.height = height;
        this.color = color;
        this.area;
    }
    //phương thức chung:
    calcArea() {
        this.area = 0;

    }

    draw() {
        document.querySelector("#main").innerHTML = `
        <div class="alert alert-primary">Chưa có diện tích</div>
        `;
    }
}

// nếu có 1 class thì export trực tiếp luôn
// export default Shape;