// //es5 
// function Student (name,age){
//     this.name = name;
//     this.age = age;
// }

// var st = new Student("ten",18);



//es6
//khai bao = tu khoa CLASS
class Student {
    //hàm/phương thức khởi tạo class
    //được gọi khi tạo 1 thể hiện của class
    //có 2 loại : có tham số & ko có tham số
    //ko có return

    //thuộc tính
    constructor(name,age){
        this.name= name;
        this.age = age;
    }

    //phương thức:
    showInfo(){
        console.log("name: "+ this.name + " Age: " + this.age);
    }
}
export default Student;