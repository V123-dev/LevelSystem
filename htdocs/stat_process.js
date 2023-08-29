function RedirectPage_to_Home()  {
    Complete_Array = [];
    localStorage.setItem('Complete_Array', JSON.stringify(Complete_Array));
    var temp = localStorage.getItem('M');
    //form객체 정보 가져오기
    var form_parent = document.querySelector("form");
    let data_shape = document.createElement('input');

    //math data url에 넘기기
    data_shape.setAttribute('name', 'Math');
    data_shape.setAttribute('value', temp);
    form_parent.appendChild(data_shape);

    //math data url에 넘기기
    temp = localStorage.getItem('P');
    data_shape = document.createElement('input');

    data_shape.setAttribute('name', 'Physics');
    data_shape.setAttribute('value', temp);
    form_parent.appendChild(data_shape);

    //math data url에 넘기기
    temp = localStorage.getItem('B');
    data_shape = document.createElement('input');

    data_shape.setAttribute('name', 'Biology');
    data_shape.setAttribute('value', temp);
    form_parent.appendChild(data_shape);

    //math data url에 넘기기
    temp = localStorage.getItem('C');
    data_shape = document.createElement('input');

    data_shape.setAttribute('name', 'Chemistry');
    data_shape.setAttribute('value', temp);
    form_parent.appendChild(data_shape);

    //math data url에 넘기기
    temp = localStorage.getItem('K');
    data_shape = document.createElement('input');

    data_shape.setAttribute('name', 'Korean');
    data_shape.setAttribute('value', temp);
    form_parent.appendChild(data_shape);

    //math data url에 넘기기
    temp = localStorage.getItem('T');
    data_shape = document.createElement('input');

    data_shape.setAttribute('name', 'Technology');
    data_shape.setAttribute('value', temp);
    form_parent.appendChild(data_shape);

    //math data url에 넘기기
    temp = localStorage.getItem('H');
    data_shape = document.createElement('input');

    data_shape.setAttribute('name', 'Health');
    data_shape.setAttribute('value', temp);
    form_parent.appendChild(data_shape);
    
    form_parent.submit();
    //window.location.href = 'http://localhost/main.html';
}

function RedirectPage_to_real_Home(){
    window.location.href = 'http://localhost/main.php';
}