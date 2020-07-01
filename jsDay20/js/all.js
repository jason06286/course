let heightDom=document.querySelector('.height');
let weightDom=document.querySelector('.weight');
let listDom=document.querySelector('.list');
let btnDom=document.querySelector('.btn');
let btnOutlineDom=document.querySelector('.btn-outline');
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
function addData(status, bmi) {
    data.push({
        height:heightDom.value,
        weight:weightDom.value,
        bmi:bmi,
        status:`${BMIData[status].statusText}`,
        class:`${BMIData[status].class}`
    })
}

function caculate() {
    let height=heightDom.value
    let weight=weightDom.value
    let bmi=Math.floor(100*weight/Math.pow(height/100,2))/100
    if (bmi>0){
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
    console.log(bmi);
    console.log(addData('overThin',bmi));
}


function render() {
	let str = "";
	data.forEach(function (item) {
		str += `z
		<li class="${item.class}">
            <h3>${item.status}</h3>
            <p>BMI <span>${item.bmi}</span></p>
            <p>height: <span>${item.height}cm</span></p>
            <p>weight: <span>${item.weight}kg</span></p>
        </li>
		`;
	});
	listDom.innerHTML = str;
}
btnDom.addEventListener('click',function(){
    caculate();
    addData();
    render()
})
