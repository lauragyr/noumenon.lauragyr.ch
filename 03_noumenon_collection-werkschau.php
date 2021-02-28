<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="shortcut icon" type="image/png" href="assets/favicon.png" />
    <title>noumenon.lauragyr.ch // werkschau hslu</title>

    <link rel="stylesheet" href="css/noumenon.css">
</head>

<body>
    <div class="header">
        <ul>
            <li><a class="header-link" href="index.html">about</a></li>
            <li><a class="header-link" href="noumenon_creator.html">create</a></li>
            <li><a class="header-link" href="noumenon_explanation.html">explanation</a></li>
            <li><a class="header-link" id="active" href="00_noumenon_collection-overview.html">collection</a></li>
            <li><a class="header-link" href="contact.html">contact</a></li>
        </ul>
    </div>

    <div class="beta">
        <a href="beta.html">beta version</a>
    </div>
    <div class="impressum">
        <a href="impressum.html">Impressum</a>
    </div>

    <div class="container column">
        <div class="title">
            <a id="icon-box" href="00_noumenon_collection-overview.html">
                <svg width="50px" height="30px" viewBox="0 0 30 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <g transform="translate(-8.000000, -6.000000)" fill-rule="nonzero">
                <polygon id="svg" points="15.41 17.09 10.83 12.5 15.41 7.91 14 6.5 8 12.5 14 18.5"></polygon>
                </g>
            </svg>
            </a>
            <h2>werkschau hochschule luzern</h2>
        </div>
        <div class="noumenon">
            <?php
                $file = "./noumenon/werkschau-images/images.txt";
                $array = explode("\n", file_get_contents($file));
                $randomSelection = array_rand($array, 33);
                foreach ($randomSelection as $key => $value)
                {
                    /*echo '<h2>'.$key.' and '.$value.'</h2>';*/
                    echo '<img src="./noumenon/werkschau-images/'.$value.'" alt="">';
                }
            ?>
 
        </div>

    </div>
    <div id="totop">
      <a href="#top"></a>
    </div>
</body>

</html>