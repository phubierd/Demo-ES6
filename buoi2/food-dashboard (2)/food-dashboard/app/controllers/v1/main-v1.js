import food from '../../models/v1/Food.js';

/****Hàm rút gọn cú pháp****** */
// const getELE = (id)=>{
//     return document.getElementById(id);
// }
const getELE = id =>document.getElementById(id);

/*****Hàm hiển thị******* */
const hienThiMonAn = (mon)=>{

    getELE("imgMonAn").src = "../../assets/img/" + mon.hinhAnh;
    getELE("spMa").innerHTML = mon.maMon;
    getELE("spTenMon").innerHTML = mon.tenMon;

    let loaiMon = "";
    if(mon.loai == "loai1"){
        loaiMon = "Chay";
    }else{
        loaiMon = "Mặn";
    }
    // getELE("spLoaiMon").innerHTML = loaiMon;
    getELE("spLoaiMon").innerHTML = mon.loai == "loai1" ? "Chay" : "Mặn";

    getELE("spKM").innerHTML = mon.phanTram + "%";
    getELE("spGiaKM").innerHTML = mon.giaSauKM;
    getELE("spTT").innerHTML = mon.tinhTrang == "1" ? "Còn" : "Hết";
    getELE("pMoTa").innerHTML = mon.moTa;
    getELE("spGia").innerHTML = mon.gia;

}

/*****Hàm thêm món ăn**** */
getELE("btnThemMon").addEventListener("click",()=>{
    let maMon = getELE("foodID").value;
    let tenMon = getELE("tenMon").value;
    let loai = getELE("loai").value;
    let gia = getELE("giaMon").value;
    let phanTram = getELE("khuyenMai").value;
    let tinhTrang = getELE("tinhTrang").value;
    let hinhAnh = getELE("hinhMon").files[0].name;
    let moTa = getELE("moTa").value;

    // console.log(maMon,tenMon,loai,gia,phanTram,tinhTrang,hinhAnh,moTa);

    const mon = new food(maMon,tenMon,loai, parseFloat(gia),parseInt(phanTram),tinhTrang,hinhAnh,moTa);
    mon.tinhGiaKM();

    // console.log(mon);

    hienThiMonAn(mon);

    

});