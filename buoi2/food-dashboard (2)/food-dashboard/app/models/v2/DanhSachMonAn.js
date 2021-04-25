class DanhSachMonAn{
    constructor(){
        this.mangMonAn = [];
    }
    themMonAn(monMoi){
        // ES5:
        // this.mangMonAn.push(mon);
        //ES6:Spead operater
        // this.mangMonAn = [mon1,mon2,monMoi];
        this.mangMonAn = [...this.mangMonAn,monMoi];
    }
}

export default DanhSachMonAn;