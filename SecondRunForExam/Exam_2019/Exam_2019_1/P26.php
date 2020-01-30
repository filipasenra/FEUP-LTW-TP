include_once "game.php"

$id = $POST['id'];
$position = $POST['position'];

if(!isset($id)){
    exit(-1);
}



if(isset($position)){

    play($id, $position);

}

$state = state($id);

echo json_encode($state);
