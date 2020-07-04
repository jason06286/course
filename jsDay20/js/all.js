let heightDom=document.querySelector('.height');
let weightDom=document.querySelector('.weight');
let listDom=document.querySelector('.list');
let btnDom=document.querySelector('.btn');
let btnOutlineDom=document.querySelector('.btn-outline');
let modalDom=document.querySelector('.modal');
let modalTimes=document.querySelector('.modal-times');
let modalBmi=document.querySelector('.modal-bmi');
let clearDom=document.querySelector('.clear');
let averageDom=document.querySelector('.average');
let data=[];
const BMIData = {
	overThin: {
		class: "blue",
		statusText: "體重過輕"
	},
	normal: {
		class: "green",
		statusText: "正常"
	},
	overWeight: {
		class: "yellow",
		statusText: "過重"
	},
	slightObesit: {
		class: "orange",
		statusText: "輕度肥胖"
	},
	mildObesity: {
		class: "pink",
		statusText: "中度肥胖"
	},
	extremeeObesity: {
		class: "red",
		statusText: "重度肥胖"
	}
};
//計算BMI
function caculate() {
    let height= heightDom.value
    let weight=weightDom.value
    let bmi=Math.floor(100*weight/Math.pow(height/100,2))/100
    if(bmi>0){
        if(bmi<18.5){
            addData('overThin',bmi)
        }else if(bmi<24){
            addData('normal',bmi)
        }else if(bmi<27){
            addData('overWeight',bmi)
        }else if(bmi<30){
            addData('slightObesit',bmi)
        }else if(bmi<35){
            addData('mildObesity',bmi)
        }else{
            addData('extremeeObesity',bmi)
        }
    }else{
        alert('請輸入正確資料')
    }  
}
//把資料加入到data
function addData(status,bmi) {
    data.push(
        {
            height:heightDom.value,
            weight:weightDom.value,
            bmi:bmi,
            status:`${BMIData[status].statusText}`,
            class:`${BMIData[status].class}`
        }
    )
    
}
//渲染畫面
function render() {
    let str=''
data.forEach(item => {
    str += `
		<li class="${item.class}">
            <h3>${item.status}</h3>
            <p>BMI <span>${item.bmi}</span></p>
            <p>height: <span>${item.height}cm</span></p>
            <p>weight: <span>${item.weight}kg</span></p>
        </li>
		`;
});
listDom.innerHTML=str;   
}
// modal 渲染畫面
function modalRender() {
    let bmiTotal=0
    let len=data.length
    data.forEach(item => {
        bmiTotal+=item.bmi; 
    });
    modalTimes.textContent=len;
    modalBmi.textContent=bmiTotal/len;
    
}
//確認監聽事件
btnDom.addEventListener('click',function () {
    caculate();;
    render();
    heightDom.value=[];
    weightDom.value=[];
})
//全部清除監聽事件
btnOutlineDom.addEventListener('click',function () {
    data=[];
    render();
})
//監聽開關modal
averageDom.addEventListener('click',function(){
    let classDom=document.createAttribute('class');
    classDom.value='modal d-block';
    modalDom.setAttributeNode(classDom);
    modalRender();
})

clearDom.addEventListener('click',function(){
    let classDom=document.createAttribute('class');
    classDom.value='modal d-none';
    modalDom.setAttributeNode(classDom); 
})