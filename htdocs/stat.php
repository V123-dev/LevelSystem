<?php
$mysqli = mysqli_connect('localhost', 'root', '111111', 'stat');
//요청된 데이터로 수정하기

$Math_value = (int)$_GET['Math'];
$Physics_value = (int)$_GET['Physics'];
$Biology_value = (int)$_GET['Biology'];
$Chemistry_value = (int)$_GET['Chemistry'];
$Korean_value = (int)$_GET['Korean'];
$Technology_value = (int)$_GET['Technology'];
$Health_value = (int)$_GET['Health'];

$sql = "UPDATE topic SET Math = Math + {$Math_value}, 
                        Physics = Physics + {$Physics_value}, 
                        Biology = Biology + {$Biology_value},
                        Chemistry = Chemistry + {$Chemistry_value},
                        Korean = Korean + {$Korean_value},
                        Technology = Technology + {$Technology_value},
                        Health = Health + {$Health_value}
                        ";
mysqli_query($mysqli, $sql);

//SELECT문으로 저장된 데이터 가져오기
$sql = "SELECT * FROM topic"; 
$result = mysqli_query($mysqli, $sql);

$row = mysqli_fetch_array($result);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style_for_stat.css" rel="stylesheet" type="text/css" />
    <title>Stat</title>
</head>
<body>
<p class="title_math">사고력(지능)</p>
<p class="title_physics">물리(상식)</p>
<p class="title_Biology">생명(상식)</p>
<p class="title_Chemistry">화학(상식))</p>
<p class="title_Korean">국어(사회적 지능)</p>
<p class="title_Technology">기술(테크 능력)</p>
<p class="title_Health">신체(체력))</p>
    <div class="control">
        <div class="stat_column">
            <img src="http://localhost/math.png" class="math">
            <p><?=$row['Math']?></p>
            <button class="w-btn-custom-neon2" type="button" id="Math">
                [ + ]
            </button>
        </div>
    </div>
    <br>
    <div class="control">
        <div class="stat_column">
            <img src="http://localhost/physics.png" class="physics">
            <p><?=$row['Physics']?></p>
            <button class="w-btn-custom-neon2" type="button" id="Physics">
                [ + ]
            </button>
        </div>
    </div>
    <br>
    <div class="control">
        <div class="stat_column">
            <img src="http://localhost/Biology.png" class="Biology">
            <p><?=$row['Biology']?></p>
            <button class="w-btn-custom-neon2" type="button" id="Biology">
                [ + ]
            </button>
        </div>
    </div>
    <br>
    <div class="control">
        <div class="stat_column">
            <img src="http://localhost/Chemistry.png" class="Chemistry">
            <p><?=$row['Chemistry']?></p>
            <button class="w-btn-custom-neon2" type="button" id="Chemistry">
                [ + ]
            </button>
        </div>
    </div>
    <br>
    <div class="control">
        <div class="stat_column">
            <img src="http://localhost/Korean.png" class="Korean">
            <p><?=$row['Korean']?></p>
            <button class="w-btn-custom-neon2" type="button" id="Korean">
                [ + ]
            </button>
        </div>
    </div>
    <br>
    <div class="control">
        <div class="stat_column">
            <img src="http://localhost/Technology.png" class="Technology">
            <p><?=$row['Technology']?></p>
            <button class="w-btn-custom-neon2" type="button" id="Technology">
                [ + ]
            </button>
        </div>
    </div>
    <br>
    <div class="control">
        <div class="stat_column">
            <img src="http://localhost/Health.png" class="Health">
            <p><?=$row['Health']?></p>
            <button class="w-btn-custom-neon2" type="button" id="Health">
                [ + ]
            </button>
        </div>
    </div>
    <br>
    <button class="w-btn-neon2" type="button" onclick="RedirectPage_to_Home()">
        Save
    </button>
    <br>
    <button class="w-btn-neon2" type="button" onclick="RedirectPage_to_real_Home()">
        Home
    </button>
    <br>
    <div class="stat_counter">
        <h1>Stats Available : [ 0 ]</h1>
    </div>
    <form action="http://localhost/stat.php" method="GET" id="frm">
    </form>
    <script src="stat_process.js"></script>
    <script src="controller_for_stat.js"></script>
</body>
</html>