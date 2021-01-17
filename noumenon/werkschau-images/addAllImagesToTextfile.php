<?php
    $directory = './';
    $scanned_directory = glob('*.{jpeg,gif,png}', GLOB_BRACE);

    $myfile = fopen("images.txt", "a") or die("Unable to open file!");
    foreach ($scanned_directory as $key => $value)
    {
        fwrite($myfile, $value . "\r\n");
    }
    fclose($myfile);
    echo '<h1>Added all images to images.txt</h1>';
?>