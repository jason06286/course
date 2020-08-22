const token='41gSRV92b2mpXiDBb7ulDKRpk4KUE9bChnnIKgMPExVhza4ovF7ubibWvPB5'
let url = "https://challenge.thef2e.com/api/thef2e2019/stage6/";
let getUrl='https://challenge.thef2e.com/api/thef2e2019/stage6/rooms'
let roomUrl='https://challenge.thef2e.com/api/thef2e2019/stage6/room/'
const roomData=[]
const roomSingleData=[]
const roomShow=document.querySelector('.room')

/* 取得 API資料 */
getData()
function getData(){
    let check=window.location.pathname.split("/");
    console.log(check)
    if (check[3]!='room.html') {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        axios.get(getUrl)
            .then((res) => {
            roomData.push(...res.data.items )
            indexRender()
            })
            .catch(err => { console.log("error") })
    }else if(check[3] ==='room.html'){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        axios.get(`${roomUrl}${location.search.split("?")[1]}`)
            .then((res) => {
            console.log(...res.data.room)
            roomSingleData.push(...res.data.room)
            roomRender()
            offerService()
            })
            .catch(err => { console.log("error") })
    }}
    
/* 渲染畫面 */
function indexRender(){
    roomData.forEach(item => {  
        console.log(item)
        let str=`<li class="col-12 col-md-4 mb-5">
        <div class="card">
            <div class="card-header text-center">${item.name}</div>
            <a  href="./room.html?${item.id}">
            <div class="card-body bg-cover h-m" style="background-image: url(${item.imageUrl});"> </div>
            </a>
            <div class="card-footer d-flex justify-content-between">
            <span>平日價格：${item.normalDayPrice}</span>
            <span>假日價格：${item.holidayPrice}</span>
            </div>
        </div>
    </li>`
    roomShow.innerHTML+=str
});
}

function roomRender(res) {
    let room=document.querySelector('.roomDetail')
    roomSingleData.forEach(function (item) {
        let str=`<div class="row no-gutters">
    <div class="col-8 bg-cover" style="background-image: url(${item.imageUrl[0]});"></div>
    <div class="col-4">
        <div class="bg-cover h-m" style="background-image: url(${item.imageUrl[1]});"></div>
        <div class="bg-cover h-m" style="background-image: url(${item.imageUrl[2]});"></div>
    </div>
</div>
<h2 class="mb-5"></h2>
<div class="px-5">
    <p>房客人數限制 : ${item.descriptionShort.GuestMin}~${item.descriptionShort.GuestMax} 人</p>
    <p>床型 :${item.descriptionShort.Bed[0]}</p>
    <p class="mb-5">衛浴數量 :${item.descriptionShort["Private-Bath"]}</p>
    <p>${item.description}</p>
    <div class="d-flex justify-content-between">
        <div>
            <h3>Check In</h3>
            <p>${item.checkInAndOut.checkInEarly}~${item.checkInAndOut.checkInLate}</p>
        </div>
        <div>
            <h3>Check Out</h3>
            <p>${item.checkInAndOut.checkOut}</p>
        </div>
    </div>        
</div>
</div>`
    room.innerHTML=str
    })
}

function offerService(){
    let offer=document.querySelectorAll('.offer')
    let offerList = document.querySelectorAll(".offer p")
    let service = roomSingleData[0].amenities;
    offerList.forEach((item, index) => {
        if(service[item.textContent] == true){
            offer[index].classList.add("active");
        }else{
            offer[index].classList.remove("active");
        }
    });
};
    