import Food from '../../models/v2/Food.js';
import FoodList from '../../models/v2/DanhSachMonAn.js';

const ds = new FoodList();

const getELE = id =>document.getElementById(id);

const setLocalStorage = (mang) =>{
    localStorage.setItem("DSMA",JSON.stringify(mang));
}
const getLocaStorage = ()=>{
    if(localStorage.getItem("DSMA") != null){
        ds.mangMonAn= JSON.parse(localStorage.getItem("DSMA"));
        hienThi(ds.mangMonAn);
    }    
}

const hienThi = (mang)=>{
    let tbody = getELE("tbodyFood");
    let content = "";
    
    mang.map((mon)=>{
        content += `
            <tr>
             <td>${mon.maMon}</td>
             <td>${mon.tenMon}</td>
             <td>${mon.loai == "loai1" ? "Chay" : "Mặn"}</td>
             <td>${mon.gia}</td>
             <td>${mon.phanTram} %</td>
             <td>${mon.giaSauKM}</td>
             <td>${mon.tinhTrang == "1" ? "Còn" : "Hết"}</td>
            </tr>
        `
    });

    tbody.innerHTML = content;

}


getELE("btnThemMon").addEventListener("click",()=>{
    let maMon = getELE("foodID").value;
    let tenMon = getELE("tenMon").value;
    let loai = getELE("loai").value;
    let gia = getELE("giaMon").value;
    let phanTram = getELE("khuyenMai").value;
    let tinhTrang = getELE("tinhTrang").value;
    let hinhAnh = getELE("hinhMon").files[0].name;
    let moTa = getELE("moTa").value;

    const mon = new Food(maMon,tenMon,loai, parseFloat(gia),parseInt(phanTram),tinhTrang,hinhAnh,moTa);
    mon.tinhGiaKM();
    console.log(mon);

    ds.themMonAn(mon);
    console.log(ds.mangMonAn);

    hienThi(ds.mangMonAn);

});