/*초기 코드*/
var Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
var System_Blocking_Count = Number(localStorage.getItem('System_Blocking_Count'));
localStorage.setItem('M', 0);
localStorage.setItem('P', 0);
localStorage.setItem('B', 0);
localStorage.setItem('C', 0);
localStorage.setItem('K', 0);
localStorage.setItem('T', 0);
localStorage.setItem('H', 0);

//스탯 개수
var stat_count = (Temp_Array.length - System_Blocking_Count);
let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
let counter7 = 0;

//객체 정보 가져오기
var div_parent = document.querySelector(".stat_counter");
var h1_dom_object = document.querySelector(".stat_counter h1");

//기존 객체 삭제하기
h1_dom_object.remove();

//데이터 추가될 때마다 css적용 
let data_shape = document.createElement('h1');
data_shape.innerText = "Stats Available : [ " + stat_count.toString() + " ]";
div_parent.appendChild(data_shape);

//모든 버튼 정보 가져오기
var Btns = document.querySelectorAll(".stat_column button");
var Btns_in_p = document.querySelectorAll(".stat_column p");

//p태그에 적용시킬 문자 서버에서 가져오기


//모든 버튼에 대해 이벤트 등록하기
for(let i = 0; i < Btns.length; i++)
{
    function BtnManagement(event){
        var temp = 0;
        var ts = 0;
        //현재 어떤 스탯의 버튼을 눌렀는지 체크히기
        if(event.target.id === "Math" && stat_count !== 0)
        {
            stat_count--;
            //Text추가 
            data_shape.innerText = "Stats Available : [ " + stat_count.toString() + " ]";
            temp = localStorage.getItem('M');
            localStorage.setItem('M', Number(temp) + 1);
            //Text추가(서버쪽 데아터 + 클라이언트쪽 데이터)
            //0 + 1
            //1
            //1 + 1
            //2
            //----------
            //0 + 1 => 1
            //1 + (1 + 1) => 3
            //1 + (1) => 2 
            ts = Number(Btns_in_p[0].innerText) + (Number(localStorage.getItem('M') - counter));
            Btns_in_p[0].innerText = ts.toString(); 
            //변수 업데이트
            counter++;
        }
        else if(event.target.id === "Physics" && stat_count !== 0)
        {
            stat_count--;
            data_shape.innerText = "Stats Available : [ " + stat_count.toString() + " ]";
            temp = localStorage.getItem('P');
            localStorage.setItem('P', Number(temp) + 1);
            ts = Number(Btns_in_p[1].innerText) + (Number(localStorage.getItem('P')) - counter2);
            Btns_in_p[1].innerText = ts.toString(); 
            counter2++;
        }
        else if(event.target.id === "Biology" && stat_count !== 0)
        {
            stat_count--;
            data_shape.innerText = "Stats Available : [ " + stat_count.toString() + " ]";
            temp = localStorage.getItem('B');
            localStorage.setItem('B', Number(temp) + 1);
            ts = Number(Btns_in_p[2].innerText) + (Number(localStorage.getItem('B')) - counter3);
            Btns_in_p[2].innerText = ts.toString();  
            counter3++;
        }
        else if(event.target.id === "Chemistry" && stat_count !== 0)
        {
            stat_count--;
            data_shape.innerText = "Stats Available : [ " + stat_count.toString() + " ]";
            temp = localStorage.getItem('C');
            localStorage.setItem('C', Number(temp) + 1);
            ts = Number(Btns_in_p[3].innerText) + (Number(localStorage.getItem('C')) - counter4);
            Btns_in_p[3].innerText = ts.toString();  
            counter4++;
        }
        else if(event.target.id === "Korean" && stat_count !== 0)
        {
            stat_count--;
            data_shape.innerText = "Stats Available : [ " + stat_count.toString() + " ]";
            temp = localStorage.getItem('K');
            localStorage.setItem('K', Number(temp) + 1);
            ts = Number(Btns_in_p[4].innerText) + (Number(localStorage.getItem('K')) - counter5);
            Btns_in_p[4].innerText = ts.toString(); 
            counter5++;
        }
        else if(event.target.id === "Technology" && stat_count !== 0)
        {
            stat_count--;
            data_shape.innerText = "Stats Available : [ " + stat_count.toString() + " ]";
            temp = localStorage.getItem('T');
            localStorage.setItem('T', Number(temp) + 1);
            ts = Number(Btns_in_p[5].innerText) + (Number(localStorage.getItem('T')) - counter6);
            Btns_in_p[5].innerText = ts.toString(); 
            counter6++;
        }
        //health
        else
        {
            if(stat_count !== 0)
            {
                stat_count--;
                data_shape.innerText = "Stats Available : [ " + stat_count.toString() + " ]";
                temp = localStorage.getItem('H');
                localStorage.setItem('H', Number(temp) + 1);
                ts = Number(Btns_in_p[6].innerText) + (Number(localStorage.getItem('H')) - counter7);
                Btns_in_p[6].innerText = ts.toString(); 
                counter7++;
            }
        }
    }
    Btns[i].addEventListener("click", BtnManagement);
}
