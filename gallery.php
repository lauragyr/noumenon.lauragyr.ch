
A Very Simple PHP file that searches the current directory for jpg, png and gif files and puts it in a HTML <img> tag.

<?php
$format = '<img src="[FILE]"> [FILE]<br>';

chdir(dirname(__FILE__));

$files = glob("*.{jpeg,jpg,png,gif}", GLOB_BRACE);

foreach ($files as $file) {
    if (is_file($file)) {
        echo str_replace('[FILE]', htmlspecialchars($file), $format);
    }
}
?>