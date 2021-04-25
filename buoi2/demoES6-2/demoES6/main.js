// ES5
// console.log(tinhTong2So(5,4));
// console.log(tinhHieu2So(5,4));

//ES6
//C1: import của export default
// có thể đặt tên mật danh khác với tên hàm
// tinhTong: mật danh của hàm tinhTong2So
// import tinhTong from './math.js';
// console.log(tinhTong(5,4));

// import hamTinh from './math.js';

// console.log(hamTinh.tinhTong2So(5,4));
// console.log(hamTinh.tinhHieu2So(5,4));


//C2: export
//1 ham
// import {tinhTong2So} from './math.js';
// console.log(tinhTong2So(5,4));


//nhieu ham
// import {tinhTong2So,tinhHieu2So} from './math.js';
// console.log(tinhTong2So(5,4));
// console.log(tinhHieu2So(5,4));

import * as hamTinh from './math.js';
import SinhVien from './Student.js';

console.log(hamTinh.tinhTong2So(5,4));
console.log(hamTinh.tinhHieu2So(5,4));

let sv = new SinhVien("Hoc Vien", 20);
sv.showInfo();