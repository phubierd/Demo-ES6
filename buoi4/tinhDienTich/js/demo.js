class Father {
    constructor(name, age) {
        //thuộc tính
        this.name = name;
        this.age = age;
    }

    showInfo() {
        //phương thức của lớp đối tượng
        console.log("thông tin cha: " + this.name + " - " + this.age)
    }
}

let father = new Father("cha",30)
father.showInfo();



class Child extends Father{
    constructor(name,age,edu){
        //thuộc tính
        super(name,age)
        this.edu = edu;
    }

    //phương thức overriding
    //để ghi đè phương thức của class cha thì tạo 1 phương thức trùng tên trong class con
    showInfo(){
        console.log(`thong tin của con: ${this.name} - ${this.age} - ${this.edu}`)
    }
}
let child = new Child("con",15,"cấp 2");
child.showInfo();