<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="shortcut icon" type="image/png" href="assets/favicon.png" />
    <title>noumenon.lauragyr.ch // online</title>

    <link rel="stylesheet" href="libraries/hamburgers.min.css">
    <link rel="stylesheet" href="css/noumenon.css">
</head>

<body>
<nav class="header">
        <ul id="menu-links">
            <li id="menubar">
                <a href="#" onclick="toggleMenu()">
                    <button id="hamburgerButton" class="hamburger hamburger--elastic" type="button">
                    <span class="hamburger-box">
                      <span class="hamburger-inner">
                      </span>
                    </span>
                  </button>
                </a>
            </li>

            <div id="nav">
                <li><a class="header-link" href="index.html">about</a></li>
                <li><a class="header-link" href="noumenon_creator.html">create</a></li>
                <li><a class="header-link" href="noumenon_explanation.html">explanation</a></li>
                <li><a class="header-link" id="active" href="00_noumenon_collection-overview.html">collection</a></li>
                <li><a class="header-link" href="contact.html">contact</a></li>
            </div>
        </ul>
    </nav>

    <div class="beta">
        <a href="beta.html">beta version</a>
    </div>
    <div class="impressum">
        <a href="impressum.html">Impressum</a>
    </div>

    <div class="container column">
        <div class="title">
        <a id="icon-box" href="00_noumenon_collection-overview.html">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="backButton">
                <path d="M5 12H19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 7L5 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 17L5 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </a>
            <h2>online</h2>
        </div>

        <div class="noumenon">
           <!--<div class="info">
                <h3>Sorry, this folder is empty for now. There must be a problem with the server.</h3>
            </div>-->
            <?php
                    $file = "./noumenon/online/images.txt";
                    $array = explode("\n", file_get_contents($file));
                    array_reverse($array, false);
                    foreach ($array as $key => $value)
                    {
                        /*echo '<h2>'.$key.' and '.$value.'</h2>';*/
                        echo '<img src="./noumenon/online/'.$value.'" alt="">';
                    }
                ?>
        </div>

    </div>

    <script src="js/functions.js"></script>
</body>

</html>