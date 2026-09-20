let topZ = 10;

let currentLanguage = "es";

const translations = {

    es: {

        pageTitle:
            "Minetto.exe | Portafolio",


        /* ESCRITORIO */

        desktopComputer:
            "Mi PC",

        desktopProjects:
            "Proyectos",

        desktopSkills:
            "Habilidades",

        desktopContact:
            "Contacto",


        /* MENUS WINDOWS */

        file:
            "Archivo",

        edit:
            "Editar",

        view:
            "Ver",

        help:
            "Ayuda",

        search:
            "Buscar",

        message:
            "Mensaje",


        /* SOBRE MI */

        aboutIntro:
            'Estudiante de <strong>Ingeniería en Ciencia de Datos</strong> y Técnico en Computación.',

        aboutDescription:
            "Me interesa la tecnología, programación, análisis de datos, infraestructura y soporte IT.",

        currently:
            "Actualmente",

        currentlyStudy:
            "Estudiando Ingeniería en Ciencia de Datos.",

        currentlyProjects:
            "Desarrollando proyectos personales.",

        currentlyLearning:
            "Aprendiendo nuevas tecnologías.",

        currentlyJobs:
            "Buscando oportunidades dentro del área IT.",

        viewProjects:
            "Ver proyectos",

        viewCV:
            "Ver CV",

        contactMe:
            "Contactarme",


        /* PROYECTOS */

        projectsWindowTitle:
            "📁 C:\\Minetto\\Proyectos",

        myProjects:
            "Mis proyectos",

        inventoryTitle:
            "📦 Sistema de Inventario",

        inventoryDescription:
            "Sistema para administrar productos, stock, usuarios, remitos y movimientos de inventario.",

        database:
            "Base de datos",

        openProject:
            "Abrir proyecto",

        esportsTitle:
            "🎮 Torneo eSports UP",

        esportsDescription:
            "Planificación y organización de un torneo universitario interfacultades.",

        projectManagement:
            "Gestión de proyectos",

        planning:
            "Planificación",

        portfolioTitle:
            "🌐 Portafolio Windows 95",

        portfolioDescription:
            "Desarrollo de un portafolio web personal inspirado en la interfaz de Windows 95, diseñado para presentar mi perfil profesional, formación, habilidades y proyectos. El sitio combina una estética retro con una experiencia interactiva, aplicando conceptos de desarrollo frontend, diseño de interfaces y experiencia de usuario.",


        /* SKILLS */

        technicalSkills:
            "Habilidades técnicas",

        programming:
            "Programación",

        data:
            "Datos",

        databases:
            "Bases de Datos",

        technicalSupport:
            "Soporte Técnico",

        troubleshooting:
            "Resolución de problemas",

        networking:
            "Redes",

        helpDesk:
            "Mesa de ayuda",


        /* CV */

        cvIntro:
            "Estudiante de Ingeniería en Ciencia de Datos y Técnico en Computación.",

        education:
            "Educación",

        dataScienceEngineering:
            "Ingeniería en Ciencia de Datos",

        palermoDate:
            "Universidad de Palermo · Mar. 2026 – Actualidad",

        computerTechnician:
            "Técnico en Computación",

        krauseDate:
            "Escuela Técnica N.º 1 Otto Krause · Mar. 2019 – Dic. 2024",

        projects:
            "Proyectos",

        cvInventoryTitle:
            "Sistema de Gestión de Inventario – Depósito Escolar",

        cvInventoryDescription:
            "Gestión de productos, usuarios, stock y movimientos, con automatización de control de stock, trazabilidad y lectura e impresión de códigos de barras.",

        cvEsportsTitle:
            "Torneo eSports UP",

        cvEsportsDescription:
            "Planificación y organización de un torneo universitario interfacultades, incluyendo reglamento, logística, difusión, sponsors e inscripciones.",

        cvPortfolioTitle:
            "Portafolio Windows 95",

        cvPortfolioDescription:
            "Portafolio web personal inspirado en Windows 95, con ventanas interactivas, escritorio, menú Inicio y barra de tareas.",

        certifications:
            "Certificaciones y cursos",

        introDataScience:
            "Introducción a la Ciencia de Datos",

        leadership:
            "Liderazgo",

        technicalKnowledge:
            "Conocimientos técnicos",

        languages:
            "Idiomas",

        languageLevel:
            "Español nativo · Inglés avanzado",


        /* CONTACTO */

        newMessage:
            "📨 Nuevo mensaje",

        contact:
            "Contacto",

        contactDescription:
            "¿Querés contactarme? Podés encontrarme en:",


        /* MENU INICIO */

        aboutMe:
            "Sobre mí",

        start:
            "Inicio",

        shutdown:
            "Apagar...",


        /* BOTON IDIOMA */

        languageButtonTitle:
            "Cambiar idioma",

        desktopMinesweeper:
            "Buscaminas",

        minesweeperTitle:
            "💣 Buscaminas",

        minesLabel:
            "Minas",

        statusLabel:
            "Estado",

        minesweeperHelp:
            "Clic izquierdo: descubrir · Clic derecho: colocar bandera.",

        minesweeperPlaying:
            "Jugando",

        minesweeperWon:
            "¡Ganaste!",

        minesweeperLost:
            "Perdiste",

        minesweeperNewGame:
            "Nueva partida",

        minesweeperBoardLabel:
            "Tablero de Buscaminas",

        minesweeperHiddenCell:
            "Casilla oculta",

        minesweeperFlaggedCell:
            "Casilla marcada con bandera",

        minesweeperRevealedCell:
            "Casilla descubierta"

    },



    en: {

        pageTitle:
            "Minetto.exe | Portfolio",


        /* DESKTOP */

        desktopComputer:
            "My Computer",

        desktopProjects:
            "Projects",

        desktopSkills:
            "Skills",

        desktopContact:
            "Contact",


        /* WINDOWS MENUS */

        file:
            "File",

        edit:
            "Edit",

        view:
            "View",

        help:
            "Help",

        search:
            "Search",

        message:
            "Message",


        /* ABOUT */

        aboutIntro:
            'Data Science Engineering student and <strong>Computer Technician</strong>.',

        aboutDescription:
            "Interested in technology, programming, data analysis, IT infrastructure, and technical support.",

        currently:
            "Currently",

        currentlyStudy:
            "Studying Data Science Engineering.",

        currentlyProjects:
            "Developing personal projects.",

        currentlyLearning:
            "Learning new technologies.",

        currentlyJobs:
            "Looking for opportunities in the IT field.",

        viewProjects:
            "View projects",

        viewCV:
            "View CV",

        contactMe:
            "Contact me",


        /* PROJECTS */

        projectsWindowTitle:
            "📁 C:\\Minetto\\Projects",

        myProjects:
            "My projects",

        inventoryTitle:
            "📦 Inventory System",

        inventoryDescription:
            "System designed to manage products, stock, users, delivery notes, and inventory movements.",

        database:
            "Database",

        openProject:
            "Open project",

        esportsTitle:
            "🎮 UP eSports Tournament",

        esportsDescription:
            "Planning and organization of an interfaculty university eSports tournament.",

        projectManagement:
            "Project Management",

        planning:
            "Planning",

        portfolioTitle:
            "🌐 Windows 95 Portfolio",

        portfolioDescription:
            "Development of a personal web portfolio inspired by the Windows 95 interface, designed to showcase my professional profile, education, skills, and projects. The website combines a retro aesthetic with an interactive experience, applying concepts of frontend development, user interface design, and user experience.",


        /* SKILLS */

        technicalSkills:
            "Technical Skills",

        programming:
            "Programming",

        data:
            "Data",

        databases:
            "Databases",

        technicalSupport:
            "Technical Support",

        troubleshooting:
            "Troubleshooting",

        networking:
            "Networking",

        helpDesk:
            "Help Desk",


        /* CV */

        cvIntro:
            "Data Science Engineering student and Computer Technician.",

        education:
            "Education",

        dataScienceEngineering:
            "Data Science Engineering",

        palermoDate:
            "Universidad de Palermo · Mar. 2026 – Present",

        computerTechnician:
            "Computer Technician",

        krauseDate:
            "Escuela Técnica N.º 1 Otto Krause · Mar. 2019 – Dec. 2024",

        projects:
            "Projects",

        cvInventoryTitle:
            "Inventory Management System – School Warehouse",

        cvInventoryDescription:
            "Management of products, users, stock, and inventory movements, including automated stock control, traceability, barcode scanning, and barcode printing.",

        cvEsportsTitle:
            "UP eSports Tournament",

        cvEsportsDescription:
            "Planning and organization of an interfaculty university eSports tournament, including rules, logistics, promotion, sponsors, and registrations.",

        cvPortfolioTitle:
            "Windows 95 Portfolio",

        cvPortfolioDescription:
            "Personal web portfolio inspired by Windows 95, featuring interactive windows, a desktop environment, Start menu, and taskbar.",

        certifications:
            "Certifications and Courses",

        introDataScience:
            "Introduction to Data Science",

        leadership:
            "Leadership",

        technicalKnowledge:
            "Technical Skills",

        languages:
            "Languages",

        languageLevel:
            "Native Spanish · Advanced English",


        /* CONTACT */

        newMessage:
            "📨 New message",

        contact:
            "Contact",

        contactDescription:
            "Want to get in touch? You can find me at:",


        /* START MENU */

        aboutMe:
            "About me",

        start:
            "Start",

        shutdown:
            "Shut Down...",


        /* LANGUAGE */

        languageButtonTitle:
            "Change language",

        desktopMinesweeper:
        "Minesweeper",

        minesweeperTitle:
            "💣 Minesweeper",

        minesLabel:
            "Mines",

        statusLabel:
            "Status",

        minesweeperHelp:
            "Left click: reveal · Right click: place flag.",

        minesweeperPlaying:
            "Playing",

        minesweeperWon:
            "You won!",

        minesweeperLost:
            "You lost",

        minesweeperNewGame:
            "New game",

        minesweeperBoardLabel:
            "Minesweeper board",

        minesweeperHiddenCell:
            "Hidden cell",

        minesweeperFlaggedCell:
            "Flagged cell",

        minesweeperRevealedCell:
            "Revealed cell"

    }
};


/* abrir ventana */

function openWindow(id) {

    const win =
        document.getElementById(id);


    win.classList.add("active");

    win.style.display =
        "block";


    topZ++;

    win.style.zIndex =
        topZ;


    document
        .getElementById("startMenu")
        .classList
        .remove("open");


        if (
        minesweeperBoard.length > 0
    ) {

        renderMinesweeperBoard();

        updateMinesweeperStatus();

    }   

    updateTaskbar();
}


/* cerrar ventana */

function closeWindow(id) {

    const win =
        document.getElementById(id);


    win.classList.remove("active");

    win.style.display =
        "";


    updateTaskbar();
}


/* minimizar */

function minimizeWindow(id) {

    const win =
        document.getElementById(id);


    win.style.display =
        "none";


    updateTaskbar();
}


/* =========================
   MENU INICIO
========================= */

function toggleStart() {

    document
        .getElementById("startMenu")
        .classList
        .toggle("open");
}


/* =========================
   BARRA DE TAREAS
========================= */

function updateTaskbar() {

    const taskbar =
        document.getElementById(
            "taskItems"
        );


    taskbar.innerHTML =
        "";


    document
        .querySelectorAll(
            ".window.active"
        )
        .forEach(win => {


            const button =
                document.createElement(
                    "div"
                );


            button.className =
                "task-item";


            button.innerText =
                win
                    .querySelector(
                        ".window-title"
                    )
                    .innerText;


            button.onclick =
                () => {


                    win.style.display =
                        "block";


                    topZ++;


                    win.style.zIndex =
                        topZ;

                };


            taskbar.appendChild(
                button
            );

        });
}


/* =========================
   RELOJ
========================= */

function updateClock() {

    const now =
        new Date();


    document
        .getElementById("clock")
        .innerText =

        now.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );
}


updateClock();


setInterval(
    updateClock,
    1000
);


/* =========================
   APLICAR IDIOMA
========================= */

function applyLanguage(language) {

    currentLanguage =
        language;


    const dictionary =
        translations[language];


    /* IDIOMA HTML */

    document
        .documentElement
        .lang =
        language;


    /* TITULO PAGINA */

    document.title =
        dictionary.pageTitle;


    /* TEXTOS NORMALES */

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {


            const key =
                element.dataset.i18n;


            if (
                dictionary[key] !==
                undefined
            ) {

                element.textContent =
                    dictionary[key];

            }

        });


    /* TEXTOS QUE CONTIENEN HTML */

    document
        .querySelectorAll(
            "[data-i18n-html]"
        )
        .forEach(element => {


            const key =
                element.dataset.i18nHtml;


            if (
                dictionary[key] !==
                undefined
            ) {

                element.innerHTML =
                    dictionary[key];

            }

        });


    /* BOTON ES / EN */

    const languageButton =
        document.getElementById(
            "languageButton"
        );


    languageButton.title =
        dictionary
            .languageButtonTitle;


    languageButton.setAttribute(
        "aria-label",
        dictionary
            .languageButtonTitle
    );


    /* ACTUALIZAR NOMBRES
       EN BARRA DE TAREAS */

    updateTaskbar();
}


/* CAMBIAR IDIOMA */

function toggleLanguage() {

    if (
        currentLanguage ===
        "es"
    ) {

        applyLanguage("en");

    } else {

        applyLanguage("es");

    }
}


/* MENSAJE APAGADO */

function shutdownMessage() {

    if (
        currentLanguage ===
        "es"
    ) {

        alert(
            "Ahora es seguro apagar su computadora."
        );

    } else {

        alert(
            "It is now safe to turn off your computer."
        );

    }
}

/* =========================
   BUSCAMINAS
========================= */

const MINESWEEPER_ROWS = 9;

const MINESWEEPER_COLS = 9;

const MINESWEEPER_MINES = 10;


let minesweeperBoard = [];

let minesweeperGameOver = false;

let minesweeperResult = null;

let minesweeperFirstMove = true;

let minesweeperFlags = 0;


/* =========================
   CREAR PARTIDA
========================= */

function createMinesweeper() {

    minesweeperBoard = [];

    minesweeperGameOver = false;

    minesweeperResult = null;

    minesweeperFirstMove = true;

    minesweeperFlags = 0;


    const totalCells =
        MINESWEEPER_ROWS *
        MINESWEEPER_COLS;


    for (
        let i = 0;
        i < totalCells;
        i++
    ) {

        minesweeperBoard.push({

            mine: false,

            revealed: false,

            flagged: false,

            adjacent: 0

        });

    }


    renderMinesweeperBoard();

    updateMinesweeperStatus();
}


/* =========================
   COLOCAR MINAS
========================= */

function placeMines(excludedIndex) {

    let placed = 0;


    while (
        placed <
        MINESWEEPER_MINES
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                minesweeperBoard.length
            );


        if (
            randomIndex ===
            excludedIndex
        ) {
            continue;
        }


        if (
            minesweeperBoard[
                randomIndex
            ].mine
        ) {
            continue;
        }


        minesweeperBoard[
            randomIndex
        ].mine = true;


        placed++;

    }


    calculateAdjacentMines();
}


/* =========================
   MINAS VECINAS
========================= */

function calculateAdjacentMines() {

    minesweeperBoard
        .forEach(
            (
                cell,
                index
            ) => {

                if (
                    cell.mine
                ) {

                    cell.adjacent =
                        0;

                    return;
                }


                const neighbors =
                    getNeighbors(
                        index
                    );


                cell.adjacent =
                    neighbors.filter(
                        neighborIndex =>

                            minesweeperBoard[
                                neighborIndex
                            ].mine

                    ).length;

            }
        );
}


/* =========================
   OBTENER VECINOS
========================= */

function getNeighbors(index) {

    const neighbors = [];


    const row =
        Math.floor(
            index /
            MINESWEEPER_COLS
        );


    const col =
        index %
        MINESWEEPER_COLS;


    for (
        let rowOffset = -1;
        rowOffset <= 1;
        rowOffset++
    ) {

        for (
            let colOffset = -1;
            colOffset <= 1;
            colOffset++
        ) {

            if (
                rowOffset === 0 &&
                colOffset === 0
            ) {
                continue;
            }


            const newRow =
                row +
                rowOffset;


            const newCol =
                col +
                colOffset;


            if (
                newRow >= 0 &&
                newRow <
                MINESWEEPER_ROWS &&
                newCol >= 0 &&
                newCol <
                MINESWEEPER_COLS
            ) {

                neighbors.push(

                    newRow *
                    MINESWEEPER_COLS +
                    newCol

                );

            }

        }

    }


    return neighbors;
}


/* =========================
   MOSTRAR TABLERO
========================= */

function renderMinesweeperBoard() {

    const board =
        document.getElementById(
            "minesweeperBoard"
        );


    if (!board) {
        return;
    }


    board.innerHTML = "";


    const dictionary =
        translations[
            currentLanguage
        ];


    board.setAttribute(
        "aria-label",
        dictionary
            .minesweeperBoardLabel
    );


    minesweeperBoard
        .forEach(
            (
                cell,
                index
            ) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "mine-cell";


                button.dataset.index =
                    index;


                button.setAttribute(
                    "role",
                    "gridcell"
                );


                /* DESCUBIERTA */

                if (
                    cell.revealed
                ) {

                    button.classList.add(
                        "revealed"
                    );


                    if (
                        cell.mine
                    ) {

                        button.textContent =
                            "💣";


                        button.classList.add(
                            "mine"
                        );

                    } else if (
                        cell.adjacent > 0
                    ) {

                        button.textContent =
                            cell.adjacent;


                        button.classList.add(
                            "number-" +
                            cell.adjacent
                        );

                    }


                    button.setAttribute(
                        "aria-label",

                        dictionary
                            .minesweeperRevealedCell

                    );

                }


                /* BANDERA */

                else if (
                    cell.flagged
                ) {

                    button.textContent =
                        "🚩";


                    button.setAttribute(
                        "aria-label",

                        dictionary
                            .minesweeperFlaggedCell

                    );

                }


                /* OCULTA */

                else {

                    button.setAttribute(
                        "aria-label",

                        dictionary
                            .minesweeperHiddenCell

                    );

                }


                /* CLICK IZQUIERDO */

                button.addEventListener(
                    "click",
                    event => {

                        if (
                            event.shiftKey
                        ) {

                            toggleMinesweeperFlag(
                                index
                            );

                            return;
                        }


                        revealMinesweeperCell(
                            index
                        );

                    }
                );


                /* CLICK DERECHO */

                button.addEventListener(
                    "contextmenu",
                    event => {

                        event.preventDefault();


                        toggleMinesweeperFlag(
                            index
                        );

                    }
                );


                board.appendChild(
                    button
                );

            }
        );
}


/* =========================
   DESCUBRIR CASILLA
========================= */

function revealMinesweeperCell(index) {

    if (
        minesweeperGameOver
    ) {
        return;
    }


    const cell =
        minesweeperBoard[
            index
        ];


    if (
        cell.revealed ||
        cell.flagged
    ) {
        return;
    }


    /* PRIMER CLICK NUNCA ES MINA */

    if (
        minesweeperFirstMove
    ) {

        placeMines(
            index
        );


        minesweeperFirstMove =
            false;

    }


    /* PISAR MINA */

    if (
        cell.mine
    ) {

        cell.revealed =
            true;


        minesweeperGameOver =
            true;


        minesweeperResult =
            "lost";


        revealAllMines();


        renderMinesweeperBoard();

        updateMinesweeperStatus();


        return;
    }


    floodReveal(
        index
    );


    checkMinesweeperWin();


    renderMinesweeperBoard();

    updateMinesweeperStatus();
}


/* =========================
   ABRIR CASILLAS VACIAS
========================= */

function floodReveal(startIndex) {

    const stack =
        [startIndex];


    const visited =
        new Set();


    while (
        stack.length > 0
    ) {

        const index =
            stack.pop();


        if (
            visited.has(
                index
            )
        ) {
            continue;
        }


        visited.add(
            index
        );


        const cell =
            minesweeperBoard[
                index
            ];


        if (
            cell.mine ||
            cell.flagged
        ) {
            continue;
        }


        cell.revealed =
            true;


        if (
            cell.adjacent === 0
        ) {

            const neighbors =
                getNeighbors(
                    index
                );


            neighbors.forEach(
                neighborIndex => {

                    const neighbor =
                        minesweeperBoard[
                            neighborIndex
                        ];


                    if (
                        !neighbor.revealed &&
                        !neighbor.mine &&
                        !neighbor.flagged
                    ) {

                        stack.push(
                            neighborIndex
                        );

                    }

                }
            );

        }

    }
}


/* =========================
   BANDERAS
========================= */

function toggleMinesweeperFlag(index) {

    if (
        minesweeperGameOver
    ) {
        return;
    }


    const cell =
        minesweeperBoard[
            index
        ];


    if (
        cell.revealed
    ) {
        return;
    }


    if (
        cell.flagged
    ) {

        cell.flagged =
            false;


        minesweeperFlags--;

    } else {

        if (
            minesweeperFlags >=
            MINESWEEPER_MINES
        ) {
            return;
        }


        cell.flagged =
            true;


        minesweeperFlags++;

    }


    renderMinesweeperBoard();

    updateMinesweeperStatus();
}


/* =========================
   MOSTRAR TODAS LAS MINAS
========================= */

function revealAllMines() {

    minesweeperBoard
        .forEach(
            cell => {

                if (
                    cell.mine
                ) {

                    cell.revealed =
                        true;

                }

            }
        );
}


/* =========================
   COMPROBAR VICTORIA
========================= */

function checkMinesweeperWin() {

    const safeCells =
        minesweeperBoard.filter(
            cell =>
                !cell.mine
        );


    const allSafeRevealed =
        safeCells.every(
            cell =>
                cell.revealed
        );


    if (
        allSafeRevealed
    ) {

        minesweeperGameOver =
            true;


        minesweeperResult =
            "won";


        minesweeperBoard
            .forEach(
                cell => {

                    if (
                        cell.mine
                    ) {

                        cell.flagged =
                            true;

                    }

                }
            );


        minesweeperFlags =
            MINESWEEPER_MINES;

    }
}


/* =========================
   ACTUALIZAR PANEL
========================= */

function updateMinesweeperStatus() {

    const counter =
        document.getElementById(
            "mineCounter"
        );


    const status =
        document.getElementById(
            "minesweeperStatus"
        );


    const resetButton =
        document.getElementById(
            "minesweeperReset"
        );


    if (
        !counter ||
        !status ||
        !resetButton
    ) {
        return;
    }


    const dictionary =
        translations[
            currentLanguage
        ];


    counter.textContent =
        MINESWEEPER_MINES -
        minesweeperFlags;


    if (
        minesweeperResult ===
        "won"
    ) {

        status.textContent =
            dictionary
                .minesweeperWon;


        resetButton.textContent =
            "😎";

    } else if (
        minesweeperResult ===
        "lost"
    ) {

        status.textContent =
            dictionary
                .minesweeperLost;


        resetButton.textContent =
            "😵";

    } else {

        status.textContent =
            dictionary
                .minesweeperPlaying;


        resetButton.textContent =
            "🙂";

    }


    resetButton.title =
        dictionary
            .minesweeperNewGame;


    resetButton.setAttribute(
        "aria-label",

        dictionary
            .minesweeperNewGame
    );
}


/* =========================
   BOTON REINICIAR
========================= */

const minesweeperReset =
    document.getElementById(
        "minesweeperReset"
    );


if (
    minesweeperReset
) {

    minesweeperReset
        .addEventListener(
            "click",
            createMinesweeper
        );

}


/* VENTANAS ARRASTRABLES */

document
    .querySelectorAll(
        ".window"
    )
    .forEach(win => {


        const header =
            win.querySelector(
                ".window-header"
            );


        let offsetX;

        let offsetY;

        let dragging =
            false;


        /* PRESIONAR */

        header
            .addEventListener(
                "mousedown",
                e => {


                    dragging =
                        true;


                    offsetX =
                        e.clientX -
                        win.offsetLeft;


                    offsetY =
                        e.clientY -
                        win.offsetTop;


                    topZ++;


                    win.style.zIndex =
                        topZ;

                }
            );


        /* MOVER */

        document
            .addEventListener(
                "mousemove",
                e => {


                    if (
                        !dragging
                    ) {
                        return;
                    }


                    win.style.left =
                        e.clientX -
                        offsetX +
                        "px";


                    win.style.top =
                        e.clientY -
                        offsetY +
                        "px";

                }
            );


        /* SOLTAR */

        document
            .addEventListener(
                "mouseup",
                () => {


                    dragging =
                        false;

                }
            );

    });


/* 
   CERRAR MENU INICIO
   AL HACER CLICK AFUERA */

document
    .addEventListener(
        "mousedown",
        event => {


            const startMenu =
                document.getElementById(
                    "startMenu"
                );


            const startButton =
                document.querySelector(
                    ".start-button"
                );


            if (
                startMenu.classList
                    .contains("open") &&

                !startMenu.contains(
                    event.target
                ) &&

                !startButton.contains(
                    event.target
                )
            ) {

                startMenu
                    .classList
                    .remove("open");

            }

        }
    );



createMinesweeper();

applyLanguage("es");

openWindow("about");