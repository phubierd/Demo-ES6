class Food {
    //phương thức khởi tạo
    constructor(maMon,tenMon,loai,gia,phanTram,tinhTrang,hinhAnh,moTa){
        this.maMon = maMon;
        this.tenMon = tenMon;
        this.loai = loai;
        this.gia = gia;
        this.phanTram = phanTram;
        this.giaSauKM = 0;
        this.tinhTrang = tinhTrang;
        this.hinhAnh = hinhAnh;
        this.moTa = moTa;
    }

    tinhGiaKM(){
        this.giaSauKM = this.gia * (100 - this.phanTram)/100; 
    }
}

export default Food;