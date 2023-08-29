const Add_Btn_Obeject = document.querySelector(".w-btn-neon2");

Levelup_Array = [];
localStorage.setItem('Levelup_Array', JSON.stringify(Levelup_Array));
Delete_Array = [];
localStorage.setItem('Delete_Array', JSON.stringify(Delete_Array));
Levelup_Count = 0;
Delete_Count = 0;

function Data_Parsing()
{
    const Input_Object = document.querySelectorAll("input");
    let div_parent = document.querySelector(".system_inline_area");
    //데이터 가져오기
    Task_Name_Text = Input_Object[0].value; //Task_Name
    Field_Name_Text = Input_Object[1].value; //Field_Name
    
    //객체 생성
    /*
        <System Object>
        1. TaskName
        2. FieldName
        3. CountValue
        4. Toggled
    */
    let System_Object = {
        "TaskName" : Task_Name_Text,
        "FieldName" : Field_Name_Text,
        "CountValue" : Levelup_Count,
        "Toggled" : false 
    }

    //데이터 추가될 때마다 css적용 
    let data_shape = document.createElement('button');
    data_shape.setAttribute('value' , Levelup_Count);
    data_shape.setAttribute('draggable' , 'true');
    data_shape.setAttribute('toggled' , 'false');

    data_shape.innerText = System_Object.TaskName;

    //<button value="[index_value]" toggled="false">TaskName</button>
    div_parent.appendChild(data_shape);
    div_parent.appendChild(document.createElement('br'));
    
        //index값 저장
        Levelup_Count++

    //데이터 추가
    var Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array')); //[1, 2, 3]
    Temp_Array.push(System_Object);
    localStorage.setItem('Levelup_Array',JSON.stringify(Temp_Array));
    /*System_Array.push(System_Object);*/

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
    
    function CommonHandleToggle(event)
    {
        //Delete Div&System Div객체 정보 가져오기
        let div_delete_parent = document.querySelector(".levelup_inline_area");
        let div_system_parent = document.querySelector(".system_inline_area");

        //속성값(value)로 index값을 통해 객체 정보 가져오기
        const index_Value = Number(event.target.getAttribute('value'));

        //만약 System 버튼에서 눌렸다면
        if(event.target.getAttribute('toggled') === "false")
        {
            //버튼 숨기기
            event.target.classList.add('hide');

             //새로운 배열 Delete_Array에 들어갈 index값 저장
             var Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
             Temp_Array[index_Value].CountValue = Delete_Count;
            localStorage.setItem('Levelup_Array',JSON.stringify(Temp_Array));
            /*System_Array[index_Value].CountValue = Delete_Count;*/
            
            Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
            Temp_Array[index_Value].Toggled = true;
            localStorage.setItem('Levelup_Array',JSON.stringify(Temp_Array));
            /*System_Array[index_Value].Toggled = true;*/

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
            data_shape.setAttribute('value' , Delete_Count);
            data_shape.setAttribute('draggable' , 'true');
            data_shape.setAttribute('toggled' , 'true');

            Delete_Count++;
            //이벤트 등록
            data_shape.addEventListener("click", CommonHandleToggle);


            //Delete div자식 노드에 추가
            Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
            data_shape.innerText = Temp_Array[index_Value].TaskName;
            div_delete_parent.appendChild(data_shape);
            div_delete_parent.appendChild(document.createElement('br'));

            //새로운 배열 Delete_Array에 데이터 추가하기
            Temp_Array = JSON.parse(localStorage.getItem('Delete_Array'));
            Temp_Array.push(JSON.parse(localStorage.getItem('Levelup_Array'))[index_Value]);
            localStorage.setItem('Delete_Array',JSON.stringify(Temp_Array));
            /*Delete_Array.push(System_Array[index_Value]);*/

            //기존 배열 System_Array에 있는 데이터 삭제하기
            Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
            Temp_Array[index_Value] = null;
            localStorage.setItem('Levelup_Array',JSON.stringify(Temp_Array));

            event.target.remove();
            
        }
        //만약 Delete버튼에서 눌렸다면
        else
        {   
            //버튼 숨기기
            event.target.classList.add('hide');

            //새로운 배열 Delete_Array에 들어갈 index값 저장
            var Temp_Array = JSON.parse(localStorage.getItem('Delete_Array'));
            Temp_Array[index_Value].CountValue = Levelup_Count;
           localStorage.setItem('Delete_Array',JSON.stringify(Temp_Array));
           /*System_Array[index_Value].CountValue = Delete_Count;*/
           
           Temp_Array = JSON.parse(localStorage.getItem('Delete_Array'));
           Temp_Array[index_Value].Toggled = false;
           localStorage.setItem('Delete_Array',JSON.stringify(Temp_Array));
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
            Temp_Array = JSON.parse(localStorage.getItem('Delete_Array'));
            data_shape.innerText = Temp_Array[index_Value].TaskName;
            div_system_parent.appendChild(data_shape);
            div_system_parent.appendChild(document.createElement('br'));

            //새로운 배열 Delete_Array에 데이터 추가하기
            Temp_Array = JSON.parse(localStorage.getItem('Levelup_Array'));
            Temp_Array.push(JSON.parse(localStorage.getItem('Delete_Array'))[index_Value]);
            localStorage.setItem('Levelup_Array',JSON.stringify(Temp_Array));
            /*Delete_Array.push(System_Array[index_Value]);*/

             //새로운 배열 Delete_Array에 있는 데이터 삭제하기
             Temp_Array = JSON.parse(localStorage.getItem('Delete_Array'));
             Temp_Array[index_Value] = null;
             localStorage.setItem('Delete_Array',JSON.stringify(Temp_Array));
            /*Delete_Array[index_Value] = null;*/

            event.target.remove();
        }
    }

    //버튼 객체에 대한 이벤트 등록
    data_shape.addEventListener("click", CommonHandleToggle);

    
}

Add_Btn_Obeject.addEventListener("click", Data_Parsing);

//실시간으로 1초마다 현재 System_Array의 배열 상황을 localStroage에 저장