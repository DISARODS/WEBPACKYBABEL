const app = document.getElementById('app');
import './style.scss';

// ----------------------------------html ----------------------------------------------
app.innerHTML = `
<header>
        <div class="navbar">
            <div class="title">
            <h1>snap</h1> 
            </div>
            <div class="menus hide-mobile" id="menu-container">
                <div class="menu-dropdown hide-mobile">Features<img src="/src/images/icon-arrow-down.png" alt="">
                    <div class="dropdown-content hide-mobile">
                            <a href="#">
                                <img src="/src/images/icon-todo.png" alt="Icono" class="icon">
                                Todo List
                            </a>
                            <a href="#">
                                <img src="/src/images/icon-calendar.png" alt="Icono" class="icon">
                                Calendar
                            </a>
                            <a href="#">
                                <img src="/src/images/icon-reminders.png" alt="Icono" class="icon">
                                Reminders
                            </a>
                            <a href="#">
                                <img src="/src/images/icon-planning.png" alt="Icono" class="icon">
                                Planning
                            </a>
                    </div>
                </div>

                <div class="menu-dropdown hide-mobile">Company<img src="/src/images/icon-arrow-down.png" alt="">
                    <div class="dropdown-content hide-mobile">
                            <a href="#">
                                Todo List
                            </a>
                            <a href="#">
                                Calendar
                            </a>
                            <a href="#">
                                Blog
                            </a>
                    </div>
                </div> 
                <div class="menu-dropdown hide-mobile">Careers<img src="/src/images/icon-arrow-down.png" alt="">
                    <div class="dropdown-content hide-mobile">
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                        <a href="#">Option 4</a>
                    </div>
                </div>
                <div class="menu-dropdown hide-mobile">About<img src="/src/images/icon-arrow-down.png" alt="">
                    <div class="dropdown-content hide-mobile">
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                        <a href="#">Option 4</a>
                    </div>
                </div>
            </div>

            <div class="log-reg hide-mobile">
                <button class="login">Login</button>
                <button class="register">Register</button>
            </div>

            <button type="button" id="hamburger" class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

</header>

<div id="mobile-menu-container">
    <nav>
            <div class="navbar">
                <div class="menus" id="menu-container">
                    <div class="menu-dropdown">Features<img src="/src/images/icon-arrow-down.png" alt="">
                        <div class="dropdown-content">
                                <a href="#">
                                    <img src="/src/images/icon-todo.png" alt="Icono" class="icon">
                                    Todo List
                                </a>
                                <a href="#">
                                    <img src="/src/images/icon-calendar.png" alt="Icono" class="icon">
                                    Calendar
                                </a>
                                <a href="#">
                                    <img src="/src/images/icon-reminders.png" alt="Icono" class="icon">
                                    Reminders
                                </a>
                                <a href="#">
                                    <img src="/src/images/icon-planning.png" alt="Icono" class="icon">
                                    Planning
                                </a>
                        </div>
                    </div>
        
                    <div class="menu-dropdown">Company<img src="/src/images/icon-arrow-down.png" alt="">
                        <div class="dropdown-content">
                                <a href="#">
                                    Todo List
                                </a>
                                <a href="#">
                                    Calendar
                                </a>
                                <a href="#">
                                    Blog
                                </a>
                        </div>
                    </div> 
                    <div class="menu-dropdown">Careers<img src="/src/images/icon-arrow-down.png" alt="">
                        <div class="dropdown-content">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                            <a href="#">Option 4</a>
                        </div>
                    </div>
                    <div class="menu-dropdown">About<img src="/src/images/icon-arrow-down.png" alt="">
                        <div class="dropdown-content">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                            <a href="#">Option 4</a>
                        </div>
                    </div>
                </div>
                <div class="log-reg">
                    <button class="login">Login</button>
                    <button class="register">Register</button>
                </div>
            </div>
        </div>
    </nav>    
</div>

<body>
    <div class="main-content">

        <div class="left">
            <div class="title">
                <h1>Make</h1>
                <h1>remote work</h1>
            </div>
            <div class="text">
                <p>Get your team sync, no matter your location. Stream line processes, create team rituals, and watch producitvity soar</p>
            </div>
            <div class="button-learn">
                <button>Lear more</button>

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

// ------------------------- codigo de menu desplegable -------------------------
const dropdowns = document.querySelectorAll('.menu-dropdown');

dropdowns.forEach(dropdown => {
  const dropdownContent = dropdown.querySelector('.dropdown-content');
  dropdown.addEventListener('mouseover', () => {
    dropdownContent.style.display = 'block';
  });
  dropdown.addEventListener('mouseout', () => {
    dropdownContent.style.display = 'none';
  });
});
// ------------------------- codigo de menu hamburguesa -------------------------
// JavaScript

const hamburgerBtn = document.getElementById("hamburger");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
hamburgerBtn.addEventListener("click", function() {
    mobileMenuContainer.style.display = mobileMenuContainer.style.display === "block" ? "none" : "block";
});


// ------------------------- test -------------------------

const hamburgerBtn2 = document.querySelector('.hamburger');
const mobileMenuContainer2 = document.getElementById('mobile-menu-container');

hamburgerBtn2.addEventListener('click', function() {
  mobileMenuContainer2.classList.toggle('show');
  hamburgerBtn.classList.toggle('active');
});

const checkmark = "Terminado"
console.log(checkmark);