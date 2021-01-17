<?php
$imgName = strtotime("now") . '.png';
echo $imgName;
// receive base64 data
$imgdata = $_POST['data'];
$imgdata = str_replace('data:image/png;base64,', '', $imgdata);
$imgdata = str_replace(' ', '+', $imgdata);
$data = base64_decode($imgdata);
$success = file_put_contents($imgName, $data);

$myfile = fopen("images.txt", "a") or die("Unable to open file!");
fwrite($myfile, $imgName . "\r\n");
fclose($myfile);

echo $success;
?>