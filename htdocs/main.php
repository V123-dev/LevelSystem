<?php
$mysqli = mysqli_connect('localhost', 'root', '111111', 'stat');
//SELECT문으로 저장된 데이터 가져오기
$sql = "SELECT * FROM topic"; 
$result = mysqli_query($mysqli, $sql);

$row = mysqli_fetch_array($result);

$total_stat = $row['Math'] + $row['Physics'] + $row['Biology'] + $row['Chemistry'] + $row['Korean'] + $row['Technology'] + $row['Health'];

//만약 존재한다면
if(isset($_GET['total_stat']))
{
    $res = $_GET['total_stat'];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style_for_main.css" rel="stylesheet" type="text/css" />
    <title>Level System</title>
</head>
<body>
    <div class="System_all_area">
        <div class="System_outline_area">
            <p>System</p>
        </div>
        <div class="system_inline_area" style="overflow: auto">
        
        </div>
    </div>

    <div class="Levelup_all_area">
        <div class="Levelup_outline_area">
            <p>Level up</p>
        </div>
        <div class="levelup_inline_area" style="overflow: auto">
        
        </div>
    </div>

    <div class="Complete_all_area">
        <div class="Complete_outline_area">
            <p>Complete</p>
        </div>
        <div class="Complete_inline_area" style="overflow: auto">
        
        </div>
    </div>

    

    <div class="information_window">
        <div class="Classes">
            <p id="cls">?</p>
            <p>[ <?=$res?> ]</p>
            <p>총 스탯</p>
        </div>
    </div>
    <div class="items">
        <button class="w-btn-outline w-btn-indigo-outline" type="button" onclick="RedirectPage_to_Basic_Ripperdac()">
            Super Ripperdac
        </button>

        <button class="w-btn-outline w-btn-indigo-outline" type="button" onclick="RedirectPage_to_Stat()">
            Stat
        </button>

        <button class="w-btn-outline w-btn-indigo-outline" type="button" onclick="Classess_Click_Me()">
            Classes
        </button>
    </div>

    <div class="items2">
        <button class="w-btn-outline w-btn-indigo-outline" type="button" onclick="RedirectPage_to_Ripperdac()">
            Basic Ripperdac
        </button>

        <button class="w-btn-outline w-btn-indigo-outline" type="button" onclick="History_Click_Me()">
            History
        </button>

        <button class="w-btn-outline w-btn-indigo-outline" type="button" onclick="Reset_me()">
            Reset
        </button>
    </div>
    <p class="hide" id="unique"><?=$res?></p>

    <form action="http://localhost/main.php" method="GET" class="hide">
        <input name="total_stat" value=<?=$total_stat?>>
    </form>
    <script src="link_manager.js"></script>
    <script src="controller_for_main.js"></script>
    <script src="controller_stat_manager.js"></script>
    <script src="controller_stat_manager_defer.js"></script>
</body>
</html>