/**
 * 1. Khai báo biến
 * ES5: var , const
 * ES6: let, const
 */

const PI = 3.14;
// không đặt tên trùng
// const PI = 35214;
//Không gán lại
// PI = 3.141414;
// console.log(PI);

var age = 18;
//cho phép trùng (nhược điểm)
// var age = 20;
//cho phép gán lại giá trị
// age = 21;
console.log(age);

let newAge = 30;
// không cho phép đặt trùng tên
// let newAge = 40;
//cho phép gán lại giá trị
newAge = 50;
console.log(newAge);

/**Scope variable** */
// global & local

//Global :biến toàn cục (bien khai báo ngoài hàm), dùng bất kỳ nơi trong web
var ten = "Bé Heo";

//ES5
//function scope (local)
function tinhCanNang() {
    var weight = 100;
    console.log(ten);
    console.log("trong hàm: " + weight);
    if (weight >= 100) {
        var tuoi = 20;
        console.log("Cân năng: " + weight + ".Bạn hơi thừa cân 1 tí. Nên ăn uống đều độ hơn.");
    }

    console.log("Tuổi của bạn: " + tuoi);
}

tinhCanNang();
//Sai phạm vi
// console.log("ngòai hàm" + weight);

//ES6: Block Scope
function tinhCanNang2() {
    console.log("Thông báo hàm cân nặng 2");
    let weight = 100;
    console.log(ten);
    console.log("trong hàm: " + weight);
    if (weight >= 100) {
        //block scope
        //nếu let khai báo trong if, loop thì chỉ được sử dụng trong lẹnh if hoặc loop
        let tuoi = 20;
        console.log("Cân năng: " + weight + ".Bạn hơi thừa cân 1 tí. Nên ăn uống đều độ hơn.");
        console.log("Tuổi của bạn: " + tuoi);
    }

    // console.log("Tuổi của bạn: " + tuoi);
}
tinhCanNang2();

/*********Hoisting******** */
//Trình duyệt sẽ tự di chuyển dòng khai biến (var city) lệnh vị trí đầu file code
// Còn dòng gán giá trị vẫn ở vị trí code cũ (city = "Hoc CHi Minh")

//ES5

//C1:
//Bị ảnh hưởng Hoisting
//console.log(city); // undefined
// var city = "Hoc CHi Minh";

//C2
// var city;
// console.log(city);// undefined
// city = "Hoc CHi Minh";

// Do ảnh hưởng của hoisting nên dòng khai báo hàm sẽ di chuyển lên đầu file
// => giúp gọi hàm ở bất kỳ vị trí nào cũng được
// => Khó quản lý code

// hienThanhPho();
// function hienThanhPho(){
//     console.log(city);
// }
// hienThanhPho();

//ES6: loại bỏ Hoisting
// console.log(city);// thông báo rõ lý do lỗi (biến chưa được khởi tạo)
let city = "Ha Noi";

let city2;
// console.log(city2);//Undefined (lỗi khi không gán giá trị)
city2 = "Ha Noi"

/**
 * 2. Arrow function
 */
//2 cách khai báo hàm của ES5
//C1: declarations (khai bằng từ khóa function)
let fullName = "Nguyễn Thị Công Dân";

function hello() {
    console.log("Người tiếp theo" + fullName);
}
hello();
// C2: Expessions
let newHello = function () {
    console.log("newHello")
    console.log("Người tiếp theo" + fullName);
}
newHello();

// ES6
let newHello2 = () => {
    console.log("newHello2")
    console.log("Người tiếp theo" + fullName);
}
newHello2();

//Truyền tham số
let newHello3 = (name) => {
    console.log("newHello3")
    console.log("Người tiếp theo" + name);
}
newHello3("TRần BẢo Vệ");

//Rút gọn 1:Nếu chỉ có 1 tham số thì có thể bỏ dâu ()
let newHello4 = name => {
    console.log("newHello4")
    console.log("Người tiếp theo" + name);
}
newHello4("TRần Thị Lao Công");

//Rút gọn 2: Nếu chỉ có 1 lệnh return thì bỏ dau {} và lệnh "return"
// let newHello5 = name =>{    
//    return "Người tiếp theo"+ name;
// }

let newHello5 = name => "Người tiếp theo" + name;
console.log(newHello5("Nguyễn Thị Giáo Viên"));

/**Lỗi cú pháp** */

// let newHello6 = ()=>
// {    
//     console.log("Người tiếp theo"+ fullName);
// }
// newHello6();

//Ký hiệu "=>" phải nằm chung dòng với khai báo hàm
// let newHello6 = ()
// =>
// {    
//     console.log("Người tiếp theo"+ fullName);
// }
// newHello6();

/*****Ngữ cảnh(context) của con trỏ this******** */
let hocVien = {
    ten: "Nguyễn Thị Học Viên",
    lop: "BC07",
    layThongTin: function () {
        //this đại diện cho function đang chứa nó
        //layThongTin được tham chiếu từ đối tượng hocVien
        // => this là đối tượng hocVien
        console.log("Tên học viên: " + this.ten);
        console.log("Lớp: " + this.lop);
    }
}
hocVien.layThongTin();

let hocVien2 = {
    ten: "Nguyễn Thị Học Viên",
    lop: "BC07",
    danhSachDiem: [9, 7, 8],
    layThongTin: function () {
        // this.danhSachDiem => hocVien2
        // closure function: function được khởi tạo trong function khác
        this.danhSachDiem.map(function (diem) {
            //This là  function(diem) (thuộc window)
            console.log("Tên học viên: " + this.ten + ".Lớp: " + this.lop + ".Có điểm: " + diem);
        });
    }
}
hocVien2.layThongTin();

//Sửa bằng cách của ES5
// C1: tạo biến tạm _bind
//C2: dùng hàm bind()
let hocVien3 = {
    ten: "Nguyễn Thị Học Viên",
    lop: "BC07",
    danhSachDiem: [9, 7, 8],
    layThongTin: function () {
        // C1
        // let _bind = this;

        // this.danhSachDiem.map(function(diem){

        //     console.log("Tên học viên: "+_bind.ten + ".Lớp: "+_bind.lop + ".Có điểm: "+ diem);            
        // });    

        // C2      
        this.danhSachDiem.map(function (diem) {
            console.log("Tên học viên: " + this.ten + ".Lớp: " + this.lop + ".Có điểm: " + diem);
        }.bind(this));

    }
}
hocVien3.layThongTin();

//Sửa bằng ES6
let hocVien4 = {
    ten: "Nguyễn Thị Học Viên",
    lop: "BC07",
    danhSachDiem: [9, 7, 8],
    //Phương thức
    //arrow function không dùng cho phương thức
    layThongTin: function () {
        //arrow function không có ngữ cảnh, nên không thay đổi this
        this.danhSachDiem.map((diem) => {
            console.log("Tên học viên 4: " + this.ten + ".Lớp: " + this.lop + ".Có điểm: " + diem);
        });
    }
}
hocVien4.layThongTin();

/**
 * 3. Default parameter
 */

let hienThongTin = (fullName = "Học Viên", age = 18) => {
    console.log("Tên: " + fullName + "\n Tuổi: " + age);
}

hienThongTin();
hienThongTin("Học Viên 2", 20);

/**
 * 4. Rest Para
 * Chuyển từng giá trị thành mảng
 * Dùng trong trường hợp không biết chính xác số lượng tham số
 */

let theZoo = (...animals) => {
    animals.map((aminal) => {
        console.log(aminal);
    });
}
theZoo('🐱', '🐼', '🐒');

/**
 * 5. Speard Para
 * Ngược với Rest, chuyển mảng thành từng phần tử
 * 
 */

/**
 * Tham trị (Truyền giá trị)
 * number
 * string
 * boolean
 * 
 * Tham chiếu: (Truyền địa chỉ của ô nhớ)
 * Mảng
 * Object
 * Function
 */
// let khoHCM = ["Iphone","SamSung","Xiaomi"];
// let khoHN = khoHCM;

// khoHN.push("VSmart");


let khoHCM = ["Iphone", "SamSung", "Xiaomi"];
//...khoHCM: lấy từng phần tử của khoHCM và push vào khoHN
let khoHN = [...khoHCM];
khoHN.push("VSmart");

console.log("HCM");
console.table(khoHCM);

console.log("HN");
console.table(khoHN);

let hv1 = {
    fullname: "hv",
    age: 18
}
// let hv2 = {
//     fullname:"hv",
//     age:18,
//     gender:"M"
// }
let hv2 = {
    ...hv1,
    gender: "M"
}
console.log(hv1);
console.log(hv2);

/**
 * 6. Destructuring
 * Truy xuất thuộc tính
 */

let pet = {
    nickName:"Hoàng Thượng",
    age1: 1
}

// let nickName = pet.nickName;
// console.log(nickName);

let {nickName,age1} = pet;
console.log(nickName,age1);

let {nickName: n,age1: a} = pet;
console.log(n,a);

/**
 * Object Literal
 * Tùy chỉnh tên thuộc tính
 */
let nickName2 = "Bé Na"
// let pet2 = {
//     nickName2:nickName2
// }
//Nếu tên thuộc tính trùng tên tham số thì không cần khai báo gán giá trị
let pet2 = {
    nickName2
}
let {nickName2: n2} = pet2;
console.log(n2);

//Tùy chỉnh tên thuộc tính
let tenThuocTinh = "fullname";
let pet3 = {
    [tenThuocTinh]:"pet 3"
}
let {fullname: full} = pet3;
console.log(full);

/**
 * For in, For of
 */

let phone = ["Iphone", "SamSung", "Xiaomi"];

// for(let i =0; i < phone.length; i++){

// }

for (let index in phone){
    //duyệt theo index
    console.log(phone[index]);
}

for (let value of phone){
    //duyệt theo giá trị
    console.log(value);
}

let dsPhone = phone.forEach((value,index)=>{
    //Không return được mảng
    return value;
});

console.log(dsPhone);

let dsPhone2 = phone.map((value,index)=>{
    //return được mảng
    //lệnh return không có tác dụng dừng hàm
    return value;
});

console.log(dsPhone2);

