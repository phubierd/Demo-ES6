import GlassesList from './glassesList.js';
const list = new GlassesList();

list.addArrayGlasses();

const getELE = id => document.getElementById(id);

//hiển thị danh sách kính bên trái
const hienThiDS = () => {
    let rowELE = getELE("vglassesList");
    console.log(rowELE)
    console.log(list.arrayGlasses)
    let content = "";
    list.arrayGlasses.map((item) => {
        content += `
            <div class="col-4">
                <img src="${item.src}" class="img-fluid" onclick="tryOn('${item.id}')">
            </div>
        `;
    });
    rowELE.innerHTML = content;
}
hienThiDS();

//đeo kính vào
const tryOn = (id) => {
    let glSelected;
    //tìm kính dc chọn
    for (let value of list.arrayGlasses) {
        if (value.id == id) {
            console.log(value);
            glSelected = value;
        }
    }

    document.querySelector("#avatar").innerHTML = `
        <img src="${glSelected.virtualImg}" id="glasses"/>
    `;

    document.querySelector("#glassesInfo").innerHTML = `
        <h5>${glSelected.name} - ${glSelected.brand} (${glSelected.color})</h5>
        <p class="card-text"> 
            <span class="btn btn-danger btn-sm mr-2">$${glSelected.price}</span>
            <span class="text-success">Stocking</span>
        </p>
        <p class="card-text"> 
            ${glSelected.description}
        </p>
    `;

    //cho hiện dòng này lên UI
    document.querySelector("#glassesInfo").style.display="block"


}
window.tryOn = tryOn;

const removeGlasses = (status) => {
    if (status){
        //dòng 37
        document.getElementById("glasses").style.display = "block";
    }else{
        document.getElementById("glasses").style.display = "none";
    }
}
window.removeGlasses = removeGlasses;