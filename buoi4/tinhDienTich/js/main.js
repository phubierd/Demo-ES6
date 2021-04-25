import {Shape} from '../js/shape.js';
import {Square} from './square.js';
import {Rectangle} from './Rectangle.js';
import {Circle} from './Circle.js';
const shape = new Shape();
//khi chưa tính diện tích thì hiện thông báo mặc định
shape.draw();



//HINH VUONG

document.getElementById("areaSquare").onclick = () =>{
    let canh = parseInt(document.getElementById("side").value);
    let width = document.getElementById("squareX").value;
    let height = document.getElementById("squareY").value;
    let color = document.getElementById("squareColor").value;

    const square = new Square("Square",width,height,color,canh);
    square.calcArea();
    square.draw();
}



// HINH CHỮ NHẬT;
document.getElementById("areaRec").onclick = () =>{
    let chieuRong = parseInt(document.getElementById("recW").value);
    let chieuDai = parseInt(document.getElementById("recL").value); 
    let width = parseInt(document.getElementById("recX").value); 
    let height = parseInt(document.getElementById("recY").value);
    let color = document.getElementById("recColor").value;

    let rec = new Rectangle(chieuRong,chieuDai,"Hinh Chu Nhat",width,height,color);
    rec.calcArea();
    rec.draw();
}


//hinh tron
document.getElementById("areaCircle").onclick = () =>{
    let radius = document.getElementById("radius").value;
    let width = parseInt(document.getElementById("cirX").value); 
    let height = parseInt(document.getElementById("cirY").value);
    let color = document.getElementById("cirColor").value;

    let cir = new Circle(radius,"Hinh Tron",width,height,color)
    cir.calcArea();
    cir.draw();
}