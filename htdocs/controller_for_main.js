Complete_Array = [];
localStorage.setItem('Complete_Array', JSON.stringify(Complete_Array));
Complete_Count = 0;
System_Count = 0;
localStorage.setItem('System_Blocking_Count', 0);

//추가시킬 div객체 정보 가져오기
let div_parent = document.querySelector(".system_inline_area");
let div_parent2 = document.querySelector(".levelup_inline_area");

//localStorage데이터 반복문으로 가져오기
var Temp_Array = JSON.parse(localStorage.getItem('System_Array')); //[객체 정보1, 객체 정보2, 객체 정보3...]
var Temp_Array2 = JSON.parse(localStorage.getItem('Levelup_Array')); //[객체 정보1, 객체 정보2, 객체 정보3...]

System_Count = Temp_Array.length;
Levelup_Count = Temp_Array2.length;

for(let i = 0; i < Temp_Array2.length; i++){
    if(Temp_Array2[i] === null)
    {
        continue;
    }
     //데이터 추가될 때마다 css적용 
     let data_shape = document.createElement('button');
     data_shape.setAttribute('value' , Temp_Array2[i].CountValue);
     data_shape.setAttribute('draggable' , 'true');
     data_shape.setAttribute('toggled' , 'false');
     data_shape.innerText = Temp_Array2[i].TaskName;

    //<button value="[index_value]" toggled="false">TaskName</button>
    div_parent2.appendChild(data_shape);
    div_parent2.appendChild(document.createElement('br'));

    //만약 드레그를 시작했다면
    data_shape.addEventListener('dragstart', (e) =>{
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    });
    
    //드레그를 끝냈다면
    data_shape.addEventListener('dragend', (e) =>{
        e.target.classList.remove('hide');
    });

    function CommonHandleToggle(event){
        //System Div&Complete Div객체 정보 가져오기
        let div_system_parent = document.querySelector(".levelup_inline_area");
        let div_complete_parent = document.querySelector(".Complete_inline_area");
        //속성값(value)로 index값을 통해 객체 정보 가져오기
        const index_Value = Number(event.target.getAttribute('value'));
         
        //만약 System 버튼에서 눌렸다면
        if(event.target.getAttribute('toggled') === "false")
        {
            //버튼 숨기기
            event.target.classList.add('hide');
 
            //새로운 배열 Complete_Array에 들어갈 index값 저장
            var Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
            Temp_Array[index_Value].CountValue = Complete_Count;
            localStorage.setItem('Levelup_Array',JSON.stringify(Temp_Array));
            /*Complete_Array[index_Value].CountValue = Complete_Count;*/
             
            Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
            Temp_Array[index_Value].Toggled = true;
            localStorage.setItem('Levelup_Array',JSON.stringify(Temp_Array));
            /*Complete_Array[index_Value].Toggled = true;*/
 
             /*
             localStorage.setItem(index_value.toString(),  JSON.stringify([
                  System_Array[index_Value].CountValue,
                  System_Array[index_Value].TaskName,
                  System_Array[index_Value].FieldName,
                   System_Array[index_Value].Toggled
             ]));
             */
 
            //데이터 추가될 때마다 css적용 
            let data_shape = document.createElement('button');
            data_shape.setAttribute('value' , Complete_Count);
            data_shape.setAttribute('draggable' , 'true');
            data_shape.setAttribute('toggled' , 'true');
 
            Complete_Count++;
            //이벤트 등록
            data_shape.addEventListener("click", CommonHandleToggle);
 
 
            //Complete div자식 노드에 추가
            Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
            data_shape.innerText = Temp_Array[index_Value].TaskName;
            div_complete_parent.appendChild(data_shape);
            div_complete_parent.appendChild(document.createElement('br'));
 
            //새로운 배열 Complete_Array에 데이터 추가하기
            Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            Temp_Array.push(JSON.parse(localStorage.getItem('Levelup_Array'))[index_Value]);
            localStorage.setItem('Complete_Array',JSON.stringify(Temp_Array));
            /*Complete_Array.push(System_Array[index_Value]);*/
 
            //기존 배열 System_Array에 있는 데이터 삭제하기
            Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
            Temp_Array[index_Value] = null;
            localStorage.setItem('Levelup_Array',JSON.stringify(Temp_Array));
 
            event.target.remove();
             
        }
         //만약 Complete 버튼에서 눌렸다면
        else
        {   
             //버튼 숨기기
            event.target.classList.add('hide');
             //새로운 배열 System_Array에 들어갈 index값 저장
            var Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            Temp_Array[index_Value].CountValue = System_Count;
            localStorage.setItem('Complete_Array',JSON.stringify(Temp_Array));
            /*System_Array[index_Value].CountValue = Delete_Count;*/
            
            Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            Temp_Array[index_Value].Toggled = false;
            localStorage.setItem('Complete_Array',JSON.stringify(Temp_Array));
            /*System_Array[index_Value].Toggled = true;*/
        
            //데이터 추가될 때마다 css적용 
            let data_shape = document.createElement('button');
            data_shape.setAttribute('value' , Levelup_Count);
            data_shape.setAttribute('draggable' , 'true');
            data_shape.setAttribute('toggled' , 'false');
            Levelup_Count++;
             //이벤트 등록
            data_shape.addEventListener("click", CommonHandleToggle);
 
             //System div자식 노드에 추가
            Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            data_shape.innerText = Temp_Array[index_Value].TaskName;
            div_system_parent.appendChild(data_shape);
            div_system_parent.appendChild(document.createElement('br'));
 
             //새로운 배열 Delete_Array에 데이터 추가하기
            Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
            Temp_Array.push(JSON.parse(localStorage.getItem('Complete_Array'))[index_Value]);
            localStorage.setItem('Levelup_Array',JSON.stringify(Temp_Array));
             /*Delete_Array.push(System_Array[index_Value]);*/
 
              //새로운 배열 Delete_Array에 있는 데이터 삭제하기
            Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            Temp_Array[index_Value] = null;
            localStorage.setItem('Complete_Array',JSON.stringify(Temp_Array));
            /*Delete_Array[index_Value] = null;*/
 
            event.target.remove();
        }
    }
    
    //버튼 객체에 대한 이벤트 등록
    data_shape.addEventListener("click", CommonHandleToggle);


}

for(let i = 0; i < Temp_Array.length; i++){
    //데이터 추가될 때마다 css적용 
    let data_shape = document.createElement('button');
    data_shape.setAttribute('value' , Temp_Array[i].CountValue);
    data_shape.setAttribute('draggable' , 'true');
    data_shape.setAttribute('toggled' , 'false');
    data_shape.innerText = Temp_Array[i].TaskName;
    
    //<button value="[index_value]" toggled="false">TaskName</button>
    div_parent.appendChild(data_shape);
    div_parent.appendChild(document.createElement('br'));

    //만약 드레그를 시작했다면
    data_shape.addEventListener('dragstart', (e) =>{
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    });
    
    //드레그를 끝냈다면
    data_shape.addEventListener('dragend', (e) =>{
        e.target.classList.remove('hide');
    });

    function CommonHandleToggle(event){
        //System Div&Complete Div객체 정보 가져오기
        let div_system_parent = document.querySelector(".system_inline_area");
        let div_complete_parent = document.querySelector(".Complete_inline_area");
        let temp = 0;
        //속성값(value)로 index값을 통해 객체 정보 가져오기
        const index_Value = Number(event.target.getAttribute('value'));
         
        //만약 System 버튼에서 눌렸다면
        if(event.target.getAttribute('toggled') === "false")
        {
            //버튼 숨기기
            event.target.classList.add('hide');
 
            //새로운 배열 Complete_Array에 들어갈 index값 저장
            var Temp_Array = JSON.parse(localStorage.getItem('System_Array'));
            Temp_Array[index_Value].CountValue = Complete_Count;
            localStorage.setItem('System_Array',JSON.stringify(Temp_Array));
            /*Complete_Array[index_Value].CountValue = Complete_Count;*/
             
            Temp_Array = JSON.parse(localStorage.getItem('System_Array'));
            Temp_Array[index_Value].Toggled = true;
            localStorage.setItem('System_Array',JSON.stringify(Temp_Array));
            /*Complete_Array[index_Value].Toggled = true;*/
 
             /*
             localStorage.setItem(index_value.toString(),  JSON.stringify([
                  System_Array[index_Value].CountValue,
                  System_Array[index_Value].TaskName,
                  System_Array[index_Value].FieldName,
                   System_Array[index_Value].Toggled
             ]));
             */
 
            //데이터 추가될 때마다 css적용 
            let data_shape = document.createElement('button');
            data_shape.setAttribute('value' , Complete_Count);
            data_shape.setAttribute('draggable' , 'true');
            data_shape.setAttribute('toggled' , 'true');
 
            Complete_Count++;
            //이벤트 등록
            data_shape.addEventListener("click", CommonHandleToggle);
 
 
            //Complete div자식 노드에 추가
            Temp_Array = JSON.parse(localStorage.getItem('System_Array'));
            data_shape.innerText = Temp_Array[index_Value].TaskName;
            div_complete_parent.appendChild(data_shape);
            div_complete_parent.appendChild(document.createElement('br'));
 
            //새로운 배열 Complete_Array에 데이터 추가하기
            Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            Temp_Array.push(JSON.parse(localStorage.getItem('System_Array'))[index_Value]);
            localStorage.setItem('Complete_Array',JSON.stringify(Temp_Array));
            /*Complete_Array.push(System_Array[index_Value]);*/
            
             //System이 Stat카운팅 되지 않도록 하기
             temp = localStorage.getItem('System_Blocking_Count');
             localStorage.setItem('System_Blocking_Count', Number(temp) + 1);

            //기존 배열 System_Array에 있는 데이터 삭제하기
            Temp_Array = JSON.parse(localStorage.getItem('System_Array'));
            Temp_Array[index_Value] = null;
            localStorage.setItem('System_Array',JSON.stringify(Temp_Array));
 
            event.target.remove();
             
        }
         //만약 Complete 버튼에서 눌렸다면
        else
        {   
             //버튼 숨기기
            event.target.classList.add('hide');
             //새로운 배열 System_Array에 들어갈 index값 저장
            var Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            Temp_Array[index_Value].CountValue = System_Count;
            localStorage.setItem('Complete_Array',JSON.stringify(Temp_Array));
            /*System_Array[index_Value].CountValue = Delete_Count;*/
            
            Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            Temp_Array[index_Value].Toggled = false;
            localStorage.setItem('Complete_Array',JSON.stringify(Temp_Array));
            /*System_Array[index_Value].Toggled = true;*/
        
            //데이터 추가될 때마다 css적용 
            let data_shape = document.createElement('button');
            data_shape.setAttribute('value' , System_Count);
            data_shape.setAttribute('draggable' , 'true');
            data_shape.setAttribute('toggled' , 'false');
            System_Count++;
             //이벤트 등록
            data_shape.addEventListener("click", CommonHandleToggle);
 
             //System div자식 노드에 추가
            Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            data_shape.innerText = Temp_Array[index_Value].TaskName;
            div_system_parent.appendChild(data_shape);
            div_system_parent.appendChild(document.createElement('br'));
 
             //새로운 배열 Delete_Array에 데이터 추가하기
            Temp_Array = JSON.parse(localStorage.getItem('System_Array'));
            Temp_Array.push(JSON.parse(localStorage.getItem('Complete_Array'))[index_Value]);
            localStorage.setItem('System_Array',JSON.stringify(Temp_Array));
             /*Delete_Array.push(System_Array[index_Value]);*/
 
              //새로운 배열 Delete_Array에 있는 데이터 삭제하기
            Temp_Array = JSON.parse(localStorage.getItem('Complete_Array'));
            Temp_Array[index_Value] = null;
            localStorage.setItem('Complete_Array',JSON.stringify(Temp_Array));
            /*Delete_Array[index_Value] = null;*/
 
            event.target.remove();
        }
    }
    
    //버튼 객체에 대한 이벤트 등록
    data_shape.addEventListener("click", CommonHandleToggle);
}
