<?php
    $directory = './';
    $images = preg_grep('~.(jpeg|jpg|png)$~', scandir($directory));

    $myfile = fopen("images.txt", "a") or die("Unable to open file!");
    foreach ($images as $key => $value)
    {
        fwrite($myfile, $value . "\r\n");
    }
    fclose($myfile);
    echo '<h1>Added all images to images.txt</h1>';
?>