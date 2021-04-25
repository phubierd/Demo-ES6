/************************** copy food từ v1 vào v2
 * làm theo cách phân rã lớp, v1 : chỉ có quản lý 1 món ăn
 * v2: có 2 món trở lên. ********************************************
 */


class DanhSachMonAn{
    constructor(){
        this.mangMonAn = []
    }

    themMonAn(mon){
        //es5 
        // this.mangMonAn.push(mon);

        //ES 6:
        //this.mangMonAn=[mon1,mon2,monMoi];
        this.mangMonAn=[...this.mangMonAn,mon]
    }

    timViTri(id){
        //findIndex (ES6) tra về inđẽ của phần tử thỏa điều kiện
        //đặt item or monAn đều dc

        //trả về đối tượng với điều kiện mã món == id
        let viTri = this.mangMonAn.findIndex((item)=>{
            return item.maMon == id;
        });
        console.log(viTri);
        return viTri;
    }

    xoaMa(id){
        let viTri = this.timViTri(id);
        this.mangMonAn.splice(viTri,1);
    }


    capNhatMon(id,mon){
        let viTri = this.timViTri(id);
        this.mangMonAn[viTri] = mon;
    }
}

export default DanhSachMonAn;