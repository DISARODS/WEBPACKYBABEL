const app = document.getElementById('app');

app.innerHTML = `
<header>
    <div class="navbar">
        <div class="title">SNAP</div>
        <div class="menus">
            <div class="menu1">Features</div>
            <div class="menu2">Company</div>
            <div class="menu3">Careers</div>
            <div class="menu4">About</div>
        </div>
        <div class="log-reg">
            <button class="login">Login</button>
            <button class="register">Register</button>
        </div>
    </div>
</header>
<body>
    <div class="'main-content">
        <div class="left">
            <div class="title"></div>
            <div class="text"></div>
            <div class="button-learn">
                <button></button>
            </div>
            <div class="socios">
                <img src="/src/images/client-databiz.png" alt="databiz" >
                <img src="/src/images/client-audiophile.png" alt="audipphile" >
                <img src="/src/images/client-meet.png" alt="meet" >
                <img src="/src/images/client-maker.png" alt="maker" >
            </div>
        </div>
        <div class="right">
            <img src="/src/images/image-hero-desktop.png" alt="">
        </div>
    </div>
</body>
`;


console.log('Hello, world!');
