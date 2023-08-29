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