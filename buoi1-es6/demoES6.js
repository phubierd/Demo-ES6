/**
 *1. khai bao bien
 */
const PI = 3.14;

//không đặt trùng tên
//const PI = 3.13213213;
//không gán lại
//console.log(PI)

var age = 19;
//cho phép trùng (nhược điểm)
//var age = 20;
//cho phép gán lại giá trị

console.log(age);


let newAge = 30;
//không cho phép đặt trùng tên
//let newAge=40;
newAge = 50;
console.log(newAge);




/** scope variable */
// global & local

//global : biến toàn cục (biến khai báo ngoài hàm), dùng bất kỳ mọi nơi trong web
var ten = "PhuCT dau file";

//ES5 : 
//function scope (local)
function tinhCanNang() {
    var weight = 100;
    console.log(weight);
    console.log(ten);
    if (weight >= 100) {
        var tuoi = 20;
        console.log("can nang: " + weight);
    }

    console.log("tuoi cua ban: " + tuoi)
}
tinhCanNang();

//sai pham vi
//console.log("ngoai ham" + ten);


//ES6
function tinhCanNang2() {
    console.log("thong bao ham can nang 2")
    let weight = 100;
    console.log(weight);
    console.log(ten);
    if (weight >= 100) {
        //block scope
        //neu let khai báo trong if, loop (vòng lặp) thì chỉ dc sử dụng trong lệnh if , loop
        let tuoi = 20;
        console.log("can nang: " + weight);
        console.log("tuoi cua ban: " + tuoi)
    }

    // console.log("tuoi cua ban: " + tuoi)
}
tinhCanNang2();


/*******   Hoisting********** */
//trình duyệt sẽ tự di chuyển dòng khai báo biến(var city) lên vị trí đầu file code
//còn dòng gán giá trị vẫn ở vị trí code cũ (city = "Ho Chi Minh");

//es5 
//undefined & null là 1 kiểu giá trị trong JS

//Cach 1:
//bị ảnh hưởng hoisting
// console.log(city);  //undefined
// var city = "Ho Chi Minh";


//Cach 2:
// var city;
// console.log(city);    //undefined
// city = "Ho Chi Minh";


//do ảnh hưởng của hoisting nên dòng khai báo hàm sẽ di chuyển lên đầu file
// => giúp gọi hàm ở bất kỳ vị trí nào cũng dc
// => nhược điểm: khó quản lý code

// hienThanhPho();
// function hienThanhPho(){
//     // console.log(city);

// }
// hienThanhPho();



//es6:loại bỏ hoisting
// console.log(city2); //thông báo rõ lý do lỗi (biến chưa dc tạo)
//demoES6.js:105 Uncaught ReferenceError: Cannot access 'city2' before initialization
let city2 = "Ha Noi";

let city3;
console.log(city3); //undefined (lỗi khi không gán giá trị)
city3 = "Ha Noi3";




/**
 *  2. Arrow Function*/
// 2 cách khai báo hàm của ES5: 

/**Cách 1:
 * declarations function (khai báo bằng từ khóa function)
 */
let fullName = "PhuCT"
function hello() {
    console.log("Nguoi tiep theo " + fullName);
}
hello();


/**
 * Cách 2: expressions
 */
let newHello = function () {
    console.log("newHello")
    console.log("Nguoi tiep theo " + fullName)
}
newHello();


//ES6
let newHello2 = () => {
    console.log("newHello2")
    console.log("Nguoi tiep theo " + fullName)
}
newHello2();


//truyền tham số
let newHello3 = (name) => {
    console.log("newHello3")
    console.log("Nguoi tiep theo " + name)
}
newHello3("Tran Bao Ve");


//rút gọn 1: nếu chỉ có 1 tham số thì có thể bỏ dấu ()  =>(name)
let newHello4 = name => {
    console.log("newHello4")
    console.log("Nguoi tiep theo " + name)
}
newHello4("Tran Thi Lao Cong");

//rut gọn 2:
let newHello5 = name => {
    // console.log("newHello5")
    return "Nguoi tiep theo " + name;
}
console.log(newHello5("nguyen thi giao vien"));

//nếu chỉ có 1 lệnh return thì bỏ dấu {} & lệnh "return"
// let newHello5 = name => "nguoi tiep theo" +name;
// console.log(newHello5("nguyen thi giao vien"));





/**
 * Lỗi cú pháp
 */
let newHello6 = () => {
    console.log("nguoi tiep theo " + fullName);
}
newHello6();


//ký hiệu "=>" phải nằm chung dòng với khai báo hàm
// let newHello6 = ()            Uncaught SyntaxError: Unexpected token '=>' 
// =>
// {
//     console.log("nguoi tiep theo " + fullName);
// }
// newHello6();



/** ******** ngữ cảnh(context) của con trỏ this******** */
let hocVien = {
    ten: "PhuCT",
    lop: "BC07",
    layThongTin: function () {
        //this đại diện cho function đang chứa nó
        //layThongTin được tham chiếu từ đối tượng hocVien
        //=> this là đối tượng hocVien
        console.log("ten hoc vien: " + this.ten);
        console.log("lop: " + this.lop)
    }
}
hocVien.layThongTin();



let hocVien2 = {
    ten: "PhuCT2",
    lop: "BC07",
    danhSachDiem: [9, 7, 8],
    layThongTin: function () {
        /**this.danhSachDiem : => hocVien2 */
        /** closure function : function đươc khởi tạo trong function khác */
        // /** call back function : function nhận tham số từ function khác */=> cái này nhắc bài cũ ( thực tế hàm dưới là closure func)
        this.danhSachDiem.map(function (diem) {
            /**this là function(diem)(function ẩn danh) nó trực thuộc của window */
            console.log("ten hoc vien: " + this.ten + " lop: " + this.lop + " có điểm: " + diem);
            console.log("lop: " + this.lop)
        });




    }
}
hocVien2.layThongTin();

//sửa bằng cách của ES5 :
//cách 1: tạo biến tạm _bind
let hocVien3 = {
    ten: "PhuCT3",
    lop: "BC07",
    danhSachDiem: [9, 7, 8],
    layThongTin: function () {
        let _bind = this;

        this.danhSachDiem.map(function (diem) {

            console.log("ten hoc vien: " + _bind.ten + " lop: " + _bind.lop + " có điểm: " + diem);
            // console.log("lop: " + this.lop)
        });
    }
}
hocVien3.layThongTin();


//cách 2: dùng hàm bind();
let hocVien4 = {
    ten: "PhuCT4",
    lop: "BC07",
    danhSachDiem: [9, 7, 8],
    layThongTin: function () {

        this.danhSachDiem.map(function (diem) {

            console.log("ten hoc vien: " + this.ten + " lop: " + this.lop + " có điểm: " + diem);
            // console.log("lop: " + this.lop)
        }.bind(this));
    }
}
hocVien4.layThongTin();


//sửa bằng ES6:
let hocVien5 = {
    ten: "PhuCT5",
    lop: "BC07",
    danhSachDiem: [9, 7, 8],
    //phương thức
    //arrow func ko dùng cho phương thức
    layThongTin: function () {

        this.danhSachDiem.map((diem) => {
            // arrow func k có ngữ cảnh, nên khoogn thay đổi this
            console.log("ten hoc vien5: " + this.ten + " lop: " + this.lop + " có điểm: " + diem);
        });
    },
}
hocVien5.layThongTin();




/**
 * 3. default parameter
 */

let hienThongTin = (fullName = "PhuCT (Default Parameter)", age = 27) => {
    console.log("tên: " + fullName + "\ntuổi: " + age)
}
hienThongTin();
// => nếu ko truyền giá trị vào () thì nó tự lấy giá trị mặc định (dòng 294), nếu 294 ko có thì truyền giá trị undefined
hienThongTin("truyen tham so", 12);



/**
 * 4. Rest para
 * chuyển từng giá trị thành mảng
 */

//dùng do trường hợp ko biet chính xác số lượng tham số vào thì gõ ...
let theZoo = (...animals) => {
    animals.map((animal) => {
        console.log(animal);
    });
}
theZoo('🐶', '🐩', '🐺', '🐱', '🐗');




/**
 * 5. speard Parameter
 * chuyển mảng thành từng phần tử (ngược với rest)
 */

/**
 * tham trị ( truyền giá trị)
 * number
 * string
 * boolean
 * 
 * Tham chiếu:(truyền địa chỉ của ô nhớ)
 * mảng
 * object
 * function
 */
// let khoHCM = ["Iphone","SamSung","Xiaomi"];
// let khoHN = khoHCM;   => xài kiểu này thì push 1 sp cho HN thì HCM cũng có

let khoHCM = ["Iphone", "SamSung", "Xiaomi"];
//...khoHCM lấy từng phần tử của khoHCM và push vào kho HN
let khoHN = [...khoHCM];

khoHN.push("Vsmart");

console.log("khoHCM")
console.table(khoHCM);
console.log("khoHN")
console.table(khoHN);



let hv1 = {
    fullName: "hv",
    age: 18,
}
// let hv2 = {
//     fullName: "hv",
//     age: 18,
//     gender :"M",
// }

let hv2 = {
    ...hv1,
    gender :"M",
}
console.table(hv1);
console.table(hv2);


/**
 * 6.Destructuring
 * truy xuất thuộc tính
 */
let pet = {
    nickName: "hoang thuong",
    age1: 1,

}

//es5
// let nickName = pet.nickName;
// console.log(nickName);

let{nickName,age1} = pet;
console.log(nickName,age);

let{nickName: n,age1: a} = pet;
console.log(n,a);

/**
 * Object Literal
 * tùy chỉnh tên thuộc tính
 */
let nickName2 = "Bé Na";
// let pet2 = {
//     nickName : nickName2,

// }

//nếu tên thuộc tính trùng tên tham số thì  khỏi cần khai báo gán giá trị
let pet2 = {
    nickName2,
}
let {nickName2: n2} = pet2;
console.log(n2);


//tùy chỉnh tên thuộc tính
let tenThuocTinh = "fullname";
let pet3 = {
    [tenThuocTinh]:"pet 3",
}
let {fullname: full} = pet3;
console.log(full);


/**
 * For in, for of
 */
let phone = ["Iphone","SamSung","Xiaomi"];
// for (let i = 0; i<phone,length; i++){

// }

for (let index in phone){
    //duyệt theo index
    console.log(phone[index]);
}

// lấy giá trị thôi thì dùng for of
for (let value of phone){
    //duyệt theo index
    console.log(value);
}

let dsPhone = phone.forEach((value,index)=>{
    //ko return dc mảng
    return value;
});
console.log(dsPhone);

let dsPhone2 = phone.map((value,index)=>{
    //return dc mảng
    //lệnh return trong map k có tác dụng dừng hàm
    return value;
});
console.log(dsPhone2);