<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&&family=Roboto:wght@300&display=swap"
        rel="stylesheet">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/main.css">
    <title>Robust Design</title>
</head>

<body class="body">
    <?php echo "Hello World" ?>
    <?php include("dist/header.html") ?>
    
    <!-- <header class="header"> -->
        <!-- <div class="header__title">
            <span class="menu-btn" onclick="toggleNav()">&#9776</span>
            --- Robust Engineering ---
        </div>
        <div class="header__subtitle">
            Using Science, Statistics, and Critical Thinking to improve product design
            robustness
        </div> -->
    <!-- </header> -->
    
    
    <main id="myColumnLayout" class="column_layout">
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="index.html">Home</a>
            <a href="tools.html">Tools</a>
            <?php echo "Hello World" ?>
            <a href="Glossary.html">Glossary</a>
            <a href="#">???</a>
        </div>
        <div class="mainbody">
            <p class="disclaimer">
                Note: This site is a work in process and incomplete. If you
                are interested and would like to know more about it, please contact me
                at <a href="mailto:rbishop4561@outlook.com">rbishop4561@outlook.com</a>.
            </p>
            <p class="intro">
                Welcome to <span class="highlight">Robust Engineering</span> an online
                learning site intending to provide training for
                those working in product development and would like to improve
                product and/or process robustness. Product robustness here means the
                product will provide <span class="highlight">the intended functions,
                    in stated conditions, for the specified time, in the presence of noise</span>.
            </p>
            <br>
            <p class="intro">
                Some assumptions are made about the experience level of the
                organization and individuals doing the various
                engineering activities. Links to background informationto help close gaps are
                provided below <em>(click item to expand)</em>.
            </p>
            <details>
                <summary>
                    Prerequisites:
                </summary>
                <ul>
                    <li class="list">A basic understanding of <u><i>statistics</i></u> is essential -
                        a good summary can be found
                        <a target="_blank" href="https://www.w3schools.com/statistics/index.php">here</a>
                    </li>
                    <li class="list"></li>
                    <li class="list"></li>
                </ul>
            </details>
            <br>
            <p class="intro">
                Since there is likely significant variation in educational background and experience, some
                facility
                with a few engineering skills will be helpful. Links to prerequisite information are provided
                below for
                those needing .
            </p>
            <details>
                <summary>Assumptions and background:</summary>
                <ul>
                    <li class="list"></li>
                    <li class="list"></li>
                    <li class="list"></li>
                </ul>
            </details>
        </div>

        <button class="getstarted" onclick="window.location.href='start.html'">GO!</button>
    </main>
</body>

<footer>&copy; Copyright 2022</footer>

<script src="https://kit.fontawesome.com/6d2ea823d0.js"></script>
<script src="js/main.js"></script>