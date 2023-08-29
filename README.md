# Level System(Guide)
---
#### 이 글에서는 (Level System)을 커스텀 머이징 하는 방법에 대해 다룹니다.
## <수정 가능한 기능 목록>
* Stat
* Reset Button
* Classes
---

# [Stat]
![image](https://github.com/V123-dev/LevelSystem/assets/119611067/19661c94-dda6-4455-9661-14847042b3f3)
### 여러분들은 위와 같은 스탯 정보들을 자신이 원하는 스탯 인터페이스로 추가 또는 변경할 수 있습니다.
<br/>
<br/>

```css
<div class="control">
        <div class="stat_column">
            <img src="[img]" class="[Field_Name]">
            <p><?=$row[Field_Name]?></p>
            <button class="w-btn-custom-neon2" type="button" id="[Field_Name]">
                [ + ]
            </button>
        </div>
    </div>
```
### (stat.php)에서 각 스탯 창의 객체들은 HTML에서 위와 같은 구조를 가집니다. 이미지와 여러가지 제어를 위한 정보를 담고 있습니다. 
<br/>
<br/>

```css
<p class="title_math">사고력(지능)</p>
<p class="title_physics">물리(상식)</p>
<p class="title_Biology">생명(상식)</p>
<p class="title_Chemistry">화학(상식))</p>
<p class="title_Korean">국어(사회적 지능)</p>
<p class="title_Technology">기술(테크 능력)</p>
<p class="title_Health">신체(체력))</p>
```
### 만약 맨 오른쪽에 어떤 스탯 정보인지를 출력해줘야 한다면 위와 같은 코드를 필드 개수만큼 추가하면 됩니다. 그러나 위 코드는 (style_for_stat.css)파일에서 따로 제어를 해줘야 합니다. (!주의!)이러한 구조를 추가한다면 (stat_process.js)파일을 추가적으로 수정해야 합니다.
<br/>
<br/>

```css
//math data url에 넘기기
    temp = localStorage.getItem('P');
    data_shape = document.createElement('input');

    data_shape.setAttribute('name', 'Physics');
    data_shape.setAttribute('value', temp);
    form_parent.appendChild(data_shape);
```
### (stat.php)에서 요청 양식(Requests Form)을 구성할 수 있도록 DOM객체를 Form하위 태그에 삽입하는 코드를 추가하고, 데이터베이스(DB)에서 가져올 수 있는 이름으로 (피아 식별)값을 문자열(String)형태와 찍어놓은 스탯 값(LocalStroge)을 넘깁니다. 여기서 끝이 아닙니다! (controller_for_stat.js)에서도 몇 가지를 수정해야 합니다.
<br/>
<br/>

```css
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
//localStorage.setItem([Name], 0);
//localStorage.setItem([Name], 0);
//localStorage.setItem([Name], 0);
//...

//스탯 개수
var stat_count = (Temp_Array.length - System_Blocking_Count);
let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
let counter7 = 0;
//let counter8 = 0;
//let counter9 = 0;
//let counter10 = 0;
//...
```
### 여러분들이 스탯 창 하나를 추가할 때마다 위와 같이 (스탯 개수)구간에서 변수를 새로 선언하고 (초기 코드)구간에서 새로운 스탯 변수(LocalStroge)값을 만들어야 합니다.
<br/>
<br/>

```css
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
```
### 그 다음, 똑같은 파일에서 조금만 내려가면 조건문 관련 로직이 나올 겁니다. 해당 부분도 아까 (stat.php)에서 추가했던 속성 값을 기반으로 조건문을 완성 해줘야 합니다. 이것은 위와 같은 예제 코드를 참고해서 조건문을 추가하면 됩니다.
<br/>
<br/>

```css
MariaDB [stat]> desc topic;
+------------+---------+------+-----+---------+-------+
| Field      | Type    | Null | Key | Default | Extra |
+------------+---------+------+-----+---------+-------+
| Math       | int(11) | NO   |     | NULL    |       |
| Physics    | int(11) | NO   |     | NULL    |       |
| Biology    | int(11) | NO   |     | NULL    |       |
| Chemistry  | int(11) | NO   |     | NULL    |       |
| Korean     | int(11) | NO   |     | NULL    |       |
| Technology | int(11) | NO   |     | NULL    |       |
| Health     | int(11) | NO   |     | NULL    |       |
+------------+---------+------+-----+---------+-------+
7 rows in set (0.004 sec)
```
### 하지만 데이터 베이스(DB)가 구축되어 있지 않는다면, 정상적으로 값을 가져오기 힘들 겁니다. 데이터베이스(DB)를 사용자 정의로 Field 이름과 Field 개수에 맞게 테이블을 구조화 시키길 바랍니다.

---

# [Reset Button]
### Reset Button을 누르면, 자신의 스탯 총합 개수에 맞게 프로필과 계급이 설정됩니다. 이러한 프로필 사진과 계급을 수정하고 싶다면 (controller_stat_manager_defer.js)파일을 수정해야 합니다.
```css
    //p태그에 저장된 총합 스탯 정보 가져오기
    var temp_data = document.querySelector("#unique");
    var come_true = false;
    if(temp_data.innerText == '')
    {
        come_true = true;
    }
    else
    {
        come_true = false;
    }
    var stat_value = Number(temp_data.innerText);
    console.log(stat_value);

    var cls_name = document.querySelector("#cls");
    var controll_div = document.querySelector(".information_window");

    if(stat_value >= 1500)
    {
        //전설적인 용병(Legend V)
        cls_name.innerText = "Legend V";
        controll_div.style.backgroundImage = "url('http://localhost/Real_V.png')";
    }
    else if(stat_value >= 700)
    {
        //최고의 용병(V)
        cls_name.innerText = "V";
        controll_div.style.backgroundImage = "url('http://localhost/Legend_V.png')";
    }
    else if(stat_value >= 350)
    {
        //픽서(Fixer)
        cls_name.innerText = "Fixer";
        controll_div.style.backgroundImage = "url('http://localhost/Fixer.png')";
    }
    else if(stat_value >= 100)
    {
        //용병(Mercenary)
        cls_name.innerText = "Mercenary";
        controll_div.style.backgroundImage = "url('http://localhost/mmm.png')";
    }
    else if(stat_value >= 50)
    {
        //부랑아(Gutterchild)
        cls_name.innerText = "Gutterchild";
        controll_div.style.backgroundImage = "url('http://localhost/brang.png')";
        
    }
    else if(stat_value >= 0 && come_true === false)
    {
        //노마드(Nomard)
        cls_name.innerText = "Nomard";
        controll_div.style.backgroundImage = "url('http://localhost/V.png')";

    }
    else
    {
         //???(NULL)
         cls_name.innerText = "?";
         controll_div.style.backgroundImage = "url('http://localhost/q.png')";
    }
```
### 해당 코드는 현재 서비스에서 쓰이는 로직 구문이기 때문에, 따로 정의하고 싶을 경우 위 코드를 참고하면서 수정하길 바랍니다.

---

# [Classes]
![image](https://github.com/V123-dev/LevelSystem/assets/119611067/a4d451b7-9f52-4d1d-b1ae-2b7d0bfd6994)
### 자신만의 계급명을 정하고 싶을 수 있습니다. 그것에 대한 정보는 (Classes.html)에 담고 있으며, 수정 가능합니다.
```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style_for_classes.css" rel="stylesheet" type="text/css" />
    <title>Document</title>
</head>
<body>
    <div>
        <img src="http://localhost/V.png">
        <p>요구 스탯 : [ 0 ]</p>
        <p>계급명    : 노마드(Nomard)</p>
    </div>
    
    <div>
        <img src="http://localhost/brang.png" width="175">
        <p>요구 스탯 : [ 50 ]</p>
        <p>계급명    : 부랑아(Gutterchild)</p>
    </div>
    
    <div>
        <img src="http://localhost/mmm.png">
        <p>요구 스탯 : [ 100 ]</p>
        <p>계급명    : 용병(Mercenary)</p>
    </div>
    
    <div>
        <img src="http://localhost/Fixer.png">
        <p>요구 스탯 : [ 350 ]</p>
        <p>계급명    : 픽서(Fixer)</p>
    </div>
    
    <div>
        <img src="http://localhost/Legend_V.png">
        <p>요구 스탯 : [ 700 ]</p>
        <p>계급명    : 최고의 용병(V)</p>
    </div>
    
    <div>
        <img src="http://localhost/Real_V.png">
        <p>요구 스탯 : [ 1500 ]</p>
        <p>계급명    : 전설적인 용병(Legend V)</p>
    </div>
    <br>
    <button class="w-btn-neon2" type="button" onclick="RedirectPage_to_Home()">
        Home
    </button>
    <script src="link_manager.js"></script>
</body>
</html>
```
### HTML파일을 위와 같이 구조화 되어 있으며, 추가적인 스타일 수정은 (style_for_classes.css)에서 수정해야 합니다.
