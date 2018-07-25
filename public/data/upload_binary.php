<?

function decode($s){
	$out = "";
	$c = 0;
	while ($c < strlen($s) - 1)
	{
    $out = $out.chr(base_convert($s[$c].$s[$c + 1], 16, 10));
	  $c = $c + 2;
	}
	return $out;
}

$fn = $_POST['FN'];
$path = $_POST['PATH'];
$data = $_POST['DATA'];

$path_parts = pathinfo($fn);
$ext = $path_parts['extension'];

if (strpos($path, '..') === FALSE && substr($path, 0, 1) !== '/') {
	if ($ext === 'jpg' || $ext === 'json' || $ext === 'png') {
		$filename = $path.$fn;
		$file = fopen($filename, "w+");
		fwrite($file, decode($data));
	}
}

?>
