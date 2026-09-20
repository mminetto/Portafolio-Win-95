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


    if (minesweeperBoard.length) {
        renderMinesweeperBoard();
        updateMinesweeperStatus();
    }

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

let MINESWEEPER_ROWS = 8;
let MINESWEEPER_COLS = 8;
let MINESWEEPER_MINES = 10;
let minesweeperBoard = [];
let minesweeperGameOver = false;
let minesweeperResult = null;
let minesweeperFirstMove = true;
let minesweeperFlags = 0;
let mineLevel = "beginner";
let mineMarks = true;
let mineSeconds = 0;
let mineInterval = null;
let mineStartedAt = 0;
const mineCopy = {
    es: { game: "Juego", new: "Nuevo", beginner: "Principiante", intermediate: "Intermedio", expert: "Experto", marks: "Marcas (?)", exit: "Salir", help: "Ayuda", instructions: "Descubre todas las casillas sin minas. Clic derecho o Mayús + clic: bandera, interrogación y sin marca. Doble clic en un número: abrir vecinos cuando tenga las banderas necesarias. F2: nueva partida." },
    en: { game: "Game", new: "New", beginner: "Beginner", intermediate: "Intermediate", expert: "Expert", marks: "Marks (?)", exit: "Exit", help: "Help", instructions: "Reveal every safe square. Right click or Shift + click: flag, question mark, clear. Double click a number to open its neighbors once the required flags are placed. F2: new game." }
};

// Small SVG sprites use integer coordinates so they remain sharp at native size.
function mineSvg(body, width = 13, height = 13) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" aria-hidden="true">${body}</svg>`;
}
function mineSprite(kind) {
    if (kind === "flag") return mineSvg('<path fill="#f00" d="M3 1h6v6H7V6H5V5H3z"/><path d="M8 6h1v4h3v2H2v-2h6z"/>');
    return mineSvg('<path d="M6 0h1v3h2V2h2v2H9v1h2v1h2v1h-2v2H9v2H7v2H6v-2H4V9H2V7H0V6h2V4h2V2h1v1h1z"/><path fill="white" d="M4 4h2v2H4z"/>' + (kind === "wrong" ? '<path stroke="red" stroke-width="2" d="m1 1 11 11M12 1 1 12"/>' : ''));
}
function mineFace(state = minesweeperResult) {
    const eyes = state === "lost" ? '<path stroke="black" d="m4 5 3 3m0-3-3 3m7-3 3 3m0-3-3 3"/>' : state === "won" ? '<path d="M3 5h12v2h-1v2h-4V7H8v2H4V7H3z"/>' : '<path d="M5 5h2v3H5zm6 0h2v3h-2z"/>';
    const mouth = state === "pressed" ? '<path d="M7 10h4v5H7z"/>' : state === "lost" ? '<path d="M5 13h2v-1h4v1h2v1h-2v-1H7v1H5z"/>' : '<path d="M4 10h1v2h2v1h4v-1h2v-2h1v3h-2v1H6v-1H4z"/>';
    document.getElementById("minesweeperReset").innerHTML = mineSvg('<path d="M5 0h8v1h3v3h1v2h1v6h-1v3h-3v2H5v-1H2v-3H1V5h1V2h3z"/><path fill="#ff0" d="M5 1h8v1h2v3h1v8h-3v3H5v-1H3v-3H2V5h1V3h2z"/>' + eyes + mouth, 18, 18);
}
function mineDisplay(id, value) {
    const digits = value < 0 ? '-' + String(Math.min(99, -value)).padStart(2, '0') : String(Math.min(999, value)).padStart(3, '0');
    const masks = {0: 'abcdef', 1: 'bc', 2: 'abdeg', 3: 'abcdg', 4: 'bcfg', 5: 'acdfg', 6: 'acdefg', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg', '-': 'g'};
    const segments = {a: '2,1 10,1 8,3 4,3', b: '10,2 10,9 8,8 8,4', c: '10,11 10,18 8,16 8,12', d: '2,19 10,19 8,17 4,17', e: '1,11 3,12 3,16 1,18', f: '1,2 3,4 3,8 1,9', g: '2,10 4,9 8,9 10,10 8,11 4,11'};
    const display = document.getElementById(id);
    display.innerHTML = [...digits].map(digit => mineSvg(Object.entries(segments).map(([key, points]) => `<polygon fill="${masks[digit].includes(key) ? '#ff0000' : '#300000'}" points="${points}"/>`).join(''), 12, 21)).join('');
    display.setAttribute('aria-label', `${value} ${id === 'mineTimer' ? (currentLanguage === 'en' ? 'seconds' : 'segundos') : (currentLanguage === 'en' ? 'mines' : 'minas')}`);
}
function createMinesweeper() {
    clearInterval(mineInterval);
    mineInterval = null;
    mineSeconds = 0;
    minesweeperGameOver = false;
    minesweeperResult = null;
    minesweeperFirstMove = true;
    minesweeperFlags = 0;
    minesweeperBoard = Array.from({length: MINESWEEPER_ROWS * MINESWEEPER_COLS}, () => ({mine: false, revealed: false, flagged: false, question: false, adjacent: 0, exploded: false}));
    document.getElementById('minesweeper').style.width = `${MINESWEEPER_COLS * 16 + 36}px`;
    renderMinesweeperBoard();
    updateMinesweeperStatus();
}
function getNeighbors(index) {
    const result = [], row = Math.floor(index / MINESWEEPER_COLS), col = index % MINESWEEPER_COLS;
    for (let y = -1; y <= 1; y++) for (let x = -1; x <= 1; x++) {
        if ((x || y) && row+y >= 0 && row+y < MINESWEEPER_ROWS && col+x >= 0 && col+x < MINESWEEPER_COLS) result.push((row+y)*MINESWEEPER_COLS+col+x);
    }
    return result;
}
function placeMines(excludedIndex) {
    const candidates = minesweeperBoard.map((_, i) => i).filter(i => i !== excludedIndex);
    for (let i = 0; i < MINESWEEPER_MINES; i++) {
        const pick = i + Math.floor(Math.random() * (candidates.length - i));
        [candidates[i], candidates[pick]] = [candidates[pick], candidates[i]];
        minesweeperBoard[candidates[i]].mine = true;
    }
    minesweeperBoard.forEach((cell, i) => cell.adjacent = getNeighbors(i).filter(n => minesweeperBoard[n].mine).length);
}
function renderMinesweeperBoard() {
    const board = document.getElementById('minesweeperBoard');
    const focused = board.contains(document.activeElement) ? document.activeElement.dataset.index : null;
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${MINESWEEPER_COLS}, 16px)`;
    board.setAttribute('aria-label', translations[currentLanguage].minesweeperBoardLabel);
    board.setAttribute('aria-rowcount', MINESWEEPER_ROWS);
    board.setAttribute('aria-colcount', MINESWEEPER_COLS);
    const colors = ['', '#00f', '#008000', '#f00', '#000080', '#800000', '#008080', '#000', '#808080'];
    const patterns = ['', '00100/01100/00100/00100/00100/00100/01110', '01110/11011/00011/00110/01100/11000/11111', '11110/00011/00011/01110/00011/00011/11110', '00011/00111/01111/11011/11111/00011/00011', '11111/11000/11000/11110/00011/00011/11110', '01110/11000/11000/11110/11011/11011/01110', '11111/00011/00110/00110/01100/01100/01100', '01110/11011/11011/01110/11011/11011/01110'];
    minesweeperBoard.forEach((cell, index) => {
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'mine-cell'; button.dataset.index = index;
        button.setAttribute('role', 'gridcell');
        const wrong = minesweeperResult === 'lost' && cell.flagged && !cell.mine;
        if (cell.revealed || wrong) button.classList.add('revealed');
        if (cell.exploded) button.classList.add('exploded');
        if (wrong) button.innerHTML = mineSprite('wrong');
        else if (cell.flagged) { button.innerHTML = mineSprite('flag'); button.classList.add('flagged'); }
        else if (cell.revealed && cell.mine) button.innerHTML = mineSprite('mine');
        else if (cell.revealed && cell.adjacent) {
            button.innerHTML = mineSvg(patterns[cell.adjacent].split('/').map((row, y) => [...row].map((pixel,x) => pixel === '1' ? `<rect x="${x*2+1}" y="${y*2}" width="2" height="2" fill="${colors[cell.adjacent]}"/>` : '').join('')).join(''), 12, 14);
        } else if (cell.question && !cell.revealed) button.textContent = '?';
        const dict = translations[currentLanguage];
        button.setAttribute('aria-label', `${Math.floor(index/MINESWEEPER_COLS)+1}, ${index%MINESWEEPER_COLS+1}: ${cell.flagged ? dict.minesweeperFlaggedCell : cell.revealed ? cell.mine ? (currentLanguage === 'en' ? 'Mine' : 'Mina') : `${dict.minesweeperRevealedCell} ${cell.adjacent}` : dict.minesweeperHiddenCell}${cell.question && !cell.revealed ? ' ?' : ''}`);
        button.addEventListener('click', event => event.shiftKey ? toggleMinesweeperFlag(index) : revealMinesweeperCell(index));
        button.addEventListener('contextmenu', event => { event.preventDefault(); toggleMinesweeperFlag(index); });
        button.addEventListener('dblclick', () => chordMinesweeper(index));
        button.addEventListener('pointerdown', event => { if (!minesweeperGameOver && event.button === 0) mineFace('pressed'); });
        button.addEventListener('keydown', event => {
            const offsets = {ArrowLeft: -1, ArrowRight: 1, ArrowUp: -MINESWEEPER_COLS, ArrowDown: MINESWEEPER_COLS};
            if (event.key in offsets) { event.preventDefault(); board.children[Math.max(0, Math.min(minesweeperBoard.length-1, index+offsets[event.key]))].focus(); }
            if (event.key.toLowerCase() === 'f') { event.preventDefault(); toggleMinesweeperFlag(index); }
        });
        board.appendChild(button);
    });
    if (focused !== null) board.children[focused]?.focus({preventScroll: true});
}
function floodReveal(index) {
    const stack = [index];
    while (stack.length) {
        const i = stack.pop(), cell = minesweeperBoard[i];
        if (cell.revealed || cell.flagged || cell.mine) continue;
        cell.revealed = true; cell.question = false;
        if (!cell.adjacent) stack.push(...getNeighbors(i));
    }
}
function revealMinesweeperCell(index) {
    const cell = minesweeperBoard[index];
    if (minesweeperGameOver || cell.revealed || cell.flagged) return;
    if (minesweeperFirstMove) {
        placeMines(index); minesweeperFirstMove = false; mineStartedAt = Date.now();
        mineInterval = setInterval(() => { mineSeconds = Math.min(999, Math.floor((Date.now()-mineStartedAt)/1000)); mineDisplay('mineTimer', mineSeconds); }, 250);
    }
    if (cell.mine) {
        cell.exploded = true; minesweeperGameOver = true; minesweeperResult = 'lost';
        minesweeperBoard.forEach(c => { if (c.mine && !c.flagged) c.revealed = true; });
    } else { floodReveal(index); checkMinesweeperWin(); }
    renderMinesweeperBoard(); updateMinesweeperStatus();
}
function chordMinesweeper(index) {
    const cell = minesweeperBoard[index], neighbors = getNeighbors(index);
    if (minesweeperGameOver || !cell.revealed || !cell.adjacent || neighbors.filter(i => minesweeperBoard[i].flagged).length !== cell.adjacent) return;
    neighbors.forEach(i => { if (!minesweeperGameOver) revealMinesweeperCell(i); });
}
function toggleMinesweeperFlag(index) {
    const cell = minesweeperBoard[index];
    if (minesweeperGameOver || cell.revealed) return;
    if (cell.flagged) { cell.flagged = false; cell.question = mineMarks; minesweeperFlags--; }
    else if (cell.question) cell.question = false;
    else { cell.flagged = true; minesweeperFlags++; }
    renderMinesweeperBoard(); updateMinesweeperStatus();
}
function checkMinesweeperWin() {
    if (minesweeperBoard.every(cell => cell.mine || cell.revealed)) {
        minesweeperGameOver = true; minesweeperResult = 'won';
        minesweeperBoard.forEach(cell => { if (cell.mine) { cell.flagged = true; cell.question = false; } });
        minesweeperFlags = MINESWEEPER_MINES;
    }
}
function updateMinesweeperStatus() {
    if (minesweeperGameOver) { clearInterval(mineInterval); mineInterval = null; }
    mineDisplay('mineCounter', MINESWEEPER_MINES-minesweeperFlags); mineDisplay('mineTimer', mineSeconds); mineFace();
    const dict = translations[currentLanguage];
    document.querySelector('#minesweeper .window-title').innerHTML = mineSprite('mine') + (currentLanguage === 'en' ? 'Minesweeper' : 'Buscaminas');
    document.getElementById('minesweeperStatus').textContent = minesweeperResult === 'won' ? dict.minesweeperWon : minesweeperResult === 'lost' ? dict.minesweeperLost : dict.minesweeperPlaying;
    const reset = document.getElementById('minesweeperReset');
    reset.title = dict.minesweeperNewGame; reset.setAttribute('aria-label', dict.minesweeperNewGame);
    document.querySelectorAll('[data-mine-text]').forEach(el => el.textContent = (mineCopy[currentLanguage] || mineCopy.es)[el.dataset.mineText]);
    document.querySelectorAll('[data-mine-level]').forEach(el => el.setAttribute('aria-checked', el.dataset.mineLevel === mineLevel));
    document.querySelector('[data-mine-action="marks"]').setAttribute('aria-checked', mineMarks);
}
document.getElementById('minesweeperReset').addEventListener('click', createMinesweeper);
document.addEventListener('pointerup', () => mineFace());
document.addEventListener('pointercancel', () => mineFace());
document.querySelectorAll('#minesweeper details').forEach(menu => menu.addEventListener('toggle', () => {
    if (menu.open) document.querySelectorAll('#minesweeper details').forEach(other => { if (other !== menu) other.open = false; });
}));
document.addEventListener('pointerdown', event => {
    if (!event.target.closest('#minesweeper .mine-menu')) document.querySelectorAll('#minesweeper details').forEach(menu => menu.open = false);
});
document.querySelectorAll('[data-mine-level], [data-mine-action]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.mineLevel) {
        mineLevel = button.dataset.mineLevel;
        [MINESWEEPER_ROWS, MINESWEEPER_COLS, MINESWEEPER_MINES] = {beginner: [8,8,10], intermediate: [16,16,40], expert: [16,30,99]}[mineLevel];
        createMinesweeper();
    } else if (button.dataset.mineAction === 'new') createMinesweeper();
    else if (button.dataset.mineAction === 'exit') closeWindow('minesweeper');
    else { mineMarks = !mineMarks; if (!mineMarks) minesweeperBoard.forEach(cell => cell.question = false); renderMinesweeperBoard(); updateMinesweeperStatus(); }
    document.getElementById('mineGameMenu').open = false;
}));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') document.querySelectorAll('#minesweeper details').forEach(menu => menu.open = false);
    if (event.key === 'F2' && document.getElementById('minesweeper').classList.contains('active')) { event.preventDefault(); createMinesweeper(); }
});


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