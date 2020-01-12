include_once 'game.php'

$id = $_POST('id');
$position = $_POST('position');

if(isset($position)){

    play($id, $position);

}


return json_encode(state($id));