import Food from '../../models/v2/Food.js';
import FoodList from '../../models/v2/DanhSachMonAn.js';


const ds = new FoodList();

const getELE = id => document.getElementById(id);

/******hàm hiển thị***** */

const hienThi = (mang) => {
    let tbody = getELE("tbodyFood");
    let content = "";
    mang.map((mon) => {
        content += `
        <tr>
            <td>${mon.maMon}</td>  
            <td>${mon.tenMon}</td>  
            <td>${mon.loai == "loai1" ? "Chay" : "Mặn"}</td>  
            <td>${mon.gia}</td>
            <td>${mon.phanTram}%</td>
            <td>${mon.giaSauKM}</td>
            <td>${mon.tinhTrang == "1" ? "Còn" : "Hết"}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaMonAn('${mon.maMon}')">Xóa</button>
                <button class="btn btn-info" onclick="xemChiTiet('${mon.maMon}')">Info</button>
            </td>
        </tr>
        `
    });

    tbody.innerHTML = content;
}


const setLocalStorage = (mang) => {
    localStorage.setItem("DSMA", JSON.stringify(mang))
};

const getLocalStorage = () => {
    if (localStorage.getItem("DSMA") != null) {
        ds.mangMonAn = JSON.parse(localStorage.getItem("DSMA"));
        hienThi(ds.mangMonAn);
    }
}

getLocalStorage();




getELE("btnThemMon").addEventListener("click", () => {
    let maMon = getELE("foodID").value;
    let tenMon = getELE("tenMon").value;
    let loaiMon = getELE("loai").value;
    let gia = getELE("giaMon").value;
    let phanTram = getELE("khuyenMai").value;
    let tinhTrang = getELE("tinhTrang").value;
    let hinhAnh = getELE("hinhMon").files[0].name;
    let moTa = getELE("moTa").value;

    const mon = new Food(maMon, tenMon, loaiMon, parseFloat(gia), parseInt(phanTram), tinhTrang, hinhAnh, moTa);
    mon.tinhGiaKM();

    console.log(mon);
    ds.themMonAn(mon);
    console.log(ds.mangMonAn);

    hienThi(ds.mangMonAn);
    setLocalStorage(ds.mangMonAn);
})

const xoaMonAn = (id) => {
    console.log(id);
    ds.xoaMa(id);
    setLocalStorage(ds.mangMonAn);
    // gọi thằng getlocal storage hay func hiển thị đều được
    getLocalStorage();
}
//ES 6 ko gọi trực tiếp hàm ở dòng 23 dc
// => phải đẩy thằng func vào biến toàn cục mới xài dc
//giúp html có thể gọi tới hàm xóa món an
window.xoaMonAn = xoaMonAn;



const xemChiTiet = (id) => {
    // console.log(id);

    //show modal form (tren web getbs phần .modal show)
    $('#exampleModal').modal('show')

    //reset form (bổ sung cho update button, vì nếu add dòng này khúc update ko hiện thực đc vì nó click vào button thẻ cha)
    getELE("foodForm").reset();


    let viTri = ds.timViTri(id);
    let mon = ds.mangMonAn[viTri];

    //NOTE ****** : Đặt mon.maMon theo file đối tượng food (food.js)
    getELE("foodID").value = mon.maMon;
    getELE("tenMon").value = mon.tenMon;
    getELE("loai").value = mon.loai;
    getELE("giaMon").value = mon.gia;
    getELE("khuyenMai").value = mon.phanTram;
    getELE("tinhTrang").value = mon.tinhTrang;
    // getELE("hinhMon").value = mon.hinhAnh;
    //nếu xài vậy thì ko lấy dc info, nên xài trick hiển thị tên hình, nếu muốn hiện hình thì xài thẻ img + src
    getELE("linkHinh").innerHTML = mon.hinhAnh;
    getELE("moTa").value = mon.moTa;

}
window.xemChiTiet = xemChiTiet;


getELE("btnCapNhat").addEventListener("click", () => {

    let maMon = getELE("foodID").value;
    let tenMon = getELE("tenMon").value;
    let loaiMon = getELE("loai").value;
    let gia = getELE("giaMon").value;
    let phanTram = getELE("khuyenMai").value;
    let tinhTrang = getELE("tinhTrang").value;

    //*******************/////*************8/*********? */ */ */
    let hinhAnh = "";
    if (getELE("hinhMon").files.length != 0) {
        hinhAnh = getELE("hinhMon").files[0].name;
    } else {
        hinhAnh = getELE("linkHinh").innerHTML;
    }
    // let hinhAnh = getELE("hinhMon").files;

    console.log(hinhAnh); //length hiển thị là 0

    let moTa = getELE("moTa").value;

    const mon = new Food(maMon, tenMon, loaiMon, parseFloat(gia), parseInt(phanTram), tinhTrang, hinhAnh, moTa);
    mon.tinhGiaKM();
    ds.capNhatMon(maMon, mon);
    setLocalStorage(ds.mangMonAn);
    getLocalStorage();

})


//lọc  danh sách
getELE("selLoai").addEventListener("change", () => {
    let type = getELE("selLoai").value;

    let mangLuaChon = [];
    if (type == "all") {
        mangLuaChon = ds.mangMonAn;
    } else {
        mangLuaChon = ds.mangMonAn.filter((item) => {
            return item.loai == type;
        })
        //NOTE*****" item.loai phai đặt giống bên food.js (đặt sai là thua)" */
    }
    console.log(mangLuaChon);
    hienThi(mangLuaChon);

})