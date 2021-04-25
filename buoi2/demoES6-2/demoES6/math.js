let tinhTong2So = (num1,num2) => num1 + num2;
let tinhHieu2So = (num1,num2) => num1 - num2;


//C1: export default
// Public hàm trong file math để các file khác có thể thấy

// export default tinhTong2So;

//export nhieu ham
// export default {tinhTong2So,tinhHieu2So};



//C2: export
// export {tinhTong2So};

export{tinhTong2So,tinhHieu2So};