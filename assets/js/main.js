$(window).on('load', function() {

    $('.level-bar-inner').each(function() {
    
        var itemWidth = $(this).data('level');
        
        $(this).animate({
            width: itemWidth
        }, 800);
        
    });

});

var _language = {

    en : {
        introBelowName              : "C++ and C# developer, sometimes Python too",
        title                       : "Borja Vazquez Developer Portfolio",
        contactHire                 : "Contact/Hire Me",
        aboutMeHeader               : "About me",
        aboutMe                     : "My name is Borja Vazquez and I'm a software engineer from Spain. My main area of working experience is in game development, programming mainly in C++ and C#. Programming is not just my job, it's my biggest passions and I love learning new things, even more if it's gamedev related, but I can adapt to everything. Besides, I love going skateboarding whenever I can.",
        latestProjectsHeader        : "Latest projects",
        safatorTitle                : "SaFaTor, terrible name but actually a really good falling sand simulator",
        safatorDescription1         : "For those who don't know what a falling sand simulator is, it is basically a program that simulates how certain particles or materials behave under certain circumstances and how they react with other materials or particles.",
        safatorDescription2         : "Some examples are: ",
        safatorDescription3         : "SaFaTor (standing for Sand Falling Simulator) is my version of a falling sand simulator, and it already has a lot of features, but I'm planning to make it one of the biggest simulators with the most features. This, along with my engine, are my little babies.",
        safatorDescription4         : " The code can be found on ",
        safatorDescription5         : " and also the executable to test on ",
        example1                    : "Example 1",
        example2                    : "Example 2",
        customGameTitle             : "Custom Game Engine",
        engineDescription1          : "During some time, and also for my Finale Degree Project, I've been developing a custom game engine that allows you to make games in 2D. Currently it doesn't have an UI for you to interact with it, but is a future feature. Currently features are:",
        engineDescription2          : "The plan is continously updating the project and somehow making a good tool for developing games. It's entirely made in C++. Code can be found ",
        engineList1                 : "Rendering of 2D shapes and textures.",
        engineList2                 : "Usage of scenes and layers to render.",
        engineList3                 : "Usage of an ECS.",
        engineList4                 : "Input from Keyboard and mouse.",
        engineList5                 : "Almost every event for the window.",
        engineList6                 : "Independent frame main game loop.",
        engineList7                 : "Easy to use API for rendering and for game implementation.",
        engineList8                 : "Among other cool features...",
        here                        : "here",
        upcoming                    : "Upcoming projects",
        cardGameTitle               : "Multiplayer card game for IOs and Android",
        cardGameDescription         : "I'm currently working with 2 artists to create an amazing card game that is meant to be played online with your friends on public or private matchs. Can't say much more for now, but for the beggining of September 2020 we will have a playable demo.",
        otherProjects               : "Other projects",
        otherProjectsDescription1   : "All of my other small, but cool work can be found on my",
        otherProjectsDescription2   : " . Among those projects we have: ",
        tetrisTitle                 : "Tetris",
        tetrisDescription           : "My own Tetris version I made in 4 or 5 days on my spare time. Probably I will rewrite it in C++ with my engine.",
        tetrisRepo                  : "Github repository",
        mineTitle                   : "Mine Sweeper",
        mineDescription             : "Another project I made some time ago in my spare time, but this one took about 1 - 2 days.",
        mineRepo                    : "Github repository",
        chessTitle                  : "Chess",
        chessDescription            : "Small version of chess, but actually playable. Not online, it needs to be played locally with someone else. Also took about 2 - 3 days to do.",
        chessRepo                   : "Github repository",
        consoleTitle                : "Custom Console",
        consoleDescription          : "This is a small console like project that allows you to make several operations. Documentation and usage on the github page. I'll use the idea of this console to make one similar for my engine.",
        consoleRepo                 : "Github repository",
        foodTitle                   : "Foodamental",
        foodDescription             : "This is an application for Android I and 2 more friends made for a college project. It allows you to search different recipes from some starting ingredients.",
        foodRepo                    : "Github repository",
        sssTitle                    : "Super Smash Shoot",
        sssDescription              : "This is an application I made for a subject in college. It's a online multiplayer Super Smash Bros 2D kind of version. The server is not really well structured as it was my first online app, but it is playable.",
        sssRepo                     : "Github repository",
        experienceTitle             : "Working experience",
        teacherTitle                : "Coding teacher - ",
        teacherTime                 : "(2017 - Present)",
        teacherDescription          : "Throughout these years I decided to teach other people how to code because I love it so much that I'd like make others people starting as easy as possible, and through this work I can do it. It also forced me to study new fields of programming as some of them had specific requirements to be taught.",
        nterTitle                   : "Backend developer at Nter - ",
        nterTime                    : "(2018 - 2019)",
        nterDescription             : "I worked there as part of my company practice at college. I worked with other people to make the backend and study of various applications.",
        soloTitle                   : "Working as solo game developer - ",
        soloTime                    : "(2016 - Present)",
        soloDescription             : "Sadly, I still haven't worked in a gamdev company, but I've been working for quite a few years now as a solo indie game developer, and I have experience on this field. ",
        basicTitle                  : "Basic information",
		age							: "23 years old",
        car                         : "Driving license",
        skillsTitle                 : "Technologies skills",
        skillsDescription           : "My main skills are C++ and C#, the two languages I've worked the most with. I can also work with Python and I have knowledge about AWS.",
        pro                         : "Professional",
        medium                      : "Medium",
        expert                      : "Expert",
        gameSkillsTitle             : "Gamedev skills",
        gameSkillsDescription       : "As a game developer I always like to discover new technologies and try them.",
        ownEngine                   : "My own engine",
        achievementsTitle           : "Achievements",
        achievement1                : "Winner of a videogame contest on YouTube",
        achievement2                : "Published coding book",
        achievement1Link            : "Link to the contest",
        achievement2Link            : "Link to the book",
        degreeTitle                 : "Degrees",
        degree                      : "BSc Computer Science",
        university                  : "University of La Rioja",
        languagesTitle              : "Languages",
        favSongsTitle               : "Favorite coding music",
        moreSpotify                 : "More on Spotify",
        icons                       : "Flag icons by ",
        template                    : ", template Xiaoying Riley",
        monsterTalesDescription1    : "My current job is in Tangelo Games, a company specialiced in mobile game development. My current project is monster tales, a match-3 single and multiplayer game, where you can play a story mode game or play against other people around the world.",
        monsterTalesDescription2    : "In this project, our team is small, and we all act as both backend and frontend engineers. We work with micro-servives, C#, Python and Unity as core technologies.",
        currentProjectId            : "Current Project",
        ordagoDescription1          : "Ordago is a mobile multiplayer card game where you can play a lot of spanish classic card games, such as chinchon, mus, presidente, escoba... You can play with your friends in groups or even private matches and also with people around the world!",
        ordagoDescription2          : "The game is still in development, but the progress is going really well!!",
        isometricTitleId            : "Isometric Strategy Game",
        isometricDescriptionId1     : "This is a Unity project I work on when I have free time (and don't want to work on my other projects). It is a turn based strategy game themed on computer components (the dinosaur is a placeholder). As you can see on the video, with the mouse you can get information about the floor tiles, you can choose some actions (hit, move, defend and ranged attack), you can skip turn, enemies will try to reach you and kill you.",
        isometricDescriptionId2     : "You have 3 points of energy each turn, you have to use them wisely, and if you run out of health points you die. The code can be found",
        isometricDescriptionId3     : "In this project I liked a lot that I managed to make a unique movement/actions system that is totally shared between the human and the AI, and the AI simulates the human actions with a State Machine.",
        isometricDescriptionId4     : "There is also a debugging console where you can write commands for, of course, debugging purposes.",
        gdelTitleId                 : "GDEL, my own scripting language with its Virtual Machine",
        gdelDescriptionId1          : "GDEL is one of my favorite and current projects. It's being developed in C++ for the VM. The project is not still finished but I work almost every day on it. It is not an easy project, as it requires a lot of research by my side, not only about how virtual machines and languages work in general, but also about how to do thins as optimal as possible in C++ and how memory works. This project is teaching me more than I could imagine.",
        gdelDescriptionId2          : "You can follow the development right ",
        gdelDescriptionId3          : "The aim for this project is to be able to use this language and virtual machine inside my future games and projects, and use it as a debugging tool or even for the users to mod things or use it inside the game.",
        gdelDescriptionId4          : "Once it is finished, I'm going to build an IDE for it so it is easier to use and debug."
    },

    es : {
        introBelowName              : "Desarrollador C++ y C#, algunas veces Python tambi??n",
        title                       : "Borja Vazquez Porfolio de desarrollador",
        contactHire                 : "Cont??ctame/Contr??tame",
        aboutMeHeader               : "Sobre m??",
        aboutMe                     : "Me llamo Borja V??zquez y soy un ingeniero inform??tico espa??ol. Mi area de experiencia principal es el desarrollo de videojuegos. Programo principalmente en C++ y C# si el motor gr??fico lo usa como lenguaje de scripting. Programar no es solo un trabajo para m??, es mi mayor hobby y me encanta aprender cosas nuevas siempre que puedo, y si est?? relacionado con programaci??n de videojuegos, a??n mejor, pero me adapto a casi todo. En mis tiempos libres, a parte de programar me encanta hacer skate con mis amigos.",
        latestProjectsHeader        : "??ltimos proyectos",
        safatorTitle                : "SaFaTor, nombre terrible, pero un buen falling sand simulator en realidad",
        safatorDescription1         : "Para los que no sepan qu?? es un falling sand simulator, es b??sicamente un programa que simula c??mo ciertas part??culas o materiales se comportan bajo ciertas circunstancias y c??mo reaccionan con otras part??culas o materiales.",
        safatorDescription2         : "Algunos ejemplos son: ",                            
        safatorDescription3         : "SaFaTor (que viene de Sand Falling Simulator) es mi versi??n de un falling sand simulator, y ahora mismo ya se pueden hacer varias cosas con ??l, pero mi plan es ampliarlo para convertirlo en uno de los que m??s funcionalidades ofrezca. Este proyecto junto con mi motor gr??fico, son mis beb??s.",
        safatorDescription4         : "El c??digo puede encontrarse en ",
        safatorDescription5         : " y tambi??n el ejecutable para probarlo en ",
        example1                    : "Ejemplo 1",
        example2                    : "Ejemplo 2",
        customGameTitle             : "Motor gr??fico propio",
        engineDescription1          : "Durante un tiempo y tambi??n para mi TFG, he estado desarrollando un motor gr??fico propio que permite crear juegos en 2D. Ahora mismo no tiene una interfaz gr??fica con la que interactuar, pero es algo que tendr?? en un futuro pr??ximo. Algunas de las caracter??sticas actuales son: ",
        engineDescription2          : "La idea es actualizar cada poco el motor y crear finalmente una herramienta con la que poder crear videojuegos. Est?? hecha completamente en C++. El c??digo puede encontrarse ",
        engineList1                 : "Renderizado 2D de formas geom??tricas y texturas.",
        engineList2                 : "Uso de escenas y capas para renderizar.",
        engineList3                 : "Uso de ECS.",
        engineList4                 : "Entrada de datos por teclado y rat??n.",
        engineList5                 : "Uso de pr??cticamente cualquier evento que la ventana necesite.",
        engineList6                 : "Bucle principal con independencia de frames.",
        engineList7                 : "Una API f??cil de usar tanto para el motor en general como para renderizar.",
        engineList8                 : "Entre otras funcionalidades...",
        here                        : "aqu??",
        upcoming                    : "Futuros proyectos",
        cardGameTitle               : "Juego multijugador de cartas para IOs y Android",
        cardGameDescription         : "Ahora mismo estoy trabajando con dos artistas para crear un fant??stico juego de cartas que se podr?? jugar con tus amigos en partidas privadas o p??blicas. No puedo decir mucho m??s ahora, pero para septiembre de 2020 habr?? una demo jugable.",
        otherProjects               : "Otros proyectos",
        otherProjectsDescription1   : "Todos mis otros trabajos se pueden ver en mi ",
        otherProjectsDescription2   : " . Entre estos proyectos tenemos: ",
        tetrisTitle                 : "Tetris",
        tetrisDescription           : "Mi propia versi??n del Tetris que hice en 4 o 5 d??as en mi tiempo libre. Lo reescribir?? en C++ en un futuro con mi motor.",
        tetrisRepo                  : "Repositorio de Github",
        mineTitle                   : "Busca Minas",
        mineDescription             : "Otro proyecto que hice durante mi tiempo libre, pero este cost?? solo un par de d??as.",
        mineRepo                    : "Repositorio de Github",
        chessTitle                  : "Ajedrez",
        chessDescription            : "Una peque??a, pero jugable versi??n del ajedrez. No es online, se necesita jugar localmente con alguien. Me llev?? unos 2 o 3 d??as.",
        chessRepo                   : "Repositorio de Github",
        consoleTitle                : "Consola Personalizada",
        consoleDescription          : "Este proyecto es una consola que te permite realizar diversas operaciones. La documentaci??n y uso se pueden encontrar en su p??gina de Github. En un futuro se pasar?? a C++ e integrar?? con el motor.",
        consoleRepo                 : "Repositorio de Github",
        foodTitle                   : "Foodamental",
        foodDescription             : "Esta es una aplicaci??n que hicimos 2 compa??eros y yo para la universidad. Te permite buscar recetas a partir de una serie de ingredientes.",
        foodRepo                    : "Repositorio de Github",
        sssTitle                    : "Super Smash Shoot",
        sssDescription              : "Este es un juego que hice para otra asignatura de la universidad. Es una especia de Super Smash Bros 2D online. La estructura del servidor no es la mejor, porque fue mi primera apliaci??n online, pero es jugable.",
        sssRepo                     : "Repositorio de Github",
        experienceTitle             : "Experiencia previa",
        teacherTitle                : "Profesor de programaci??n - ",
        teacherTime                 : "(2017 - Actualidad)",
        teacherDescription          : "Durante los a??os de la carrera decid?? empezar a dar clases de programaci??n, ya que al ser algo que me gusta tanto, quer??a hacer el comienzo de los nuevos programadores lo m??s f??cil posible. Tambi??n me oblig?? a estudiar nuevas ??reas porque cada uno ten??a necesidades espec??ficas.",
        nterTitle                   : "Desarrollador backend en Nter - ",
        nterTime                    : "(2018 - 2019)",
        nterDescription             : "Trabaj?? all?? como parte de mis pr??cticas en empresa. Hice, junto con otros compa??eros, el estudio y backend de varias aplicaciones.",
        soloTitle                   : "Trabajo como desarrollador indie de juegos - ",
        soloTime                    : "(2016 - Actualidad)",
        soloDescription             : "Tristemente, a??n no he podido trabajar en una empresa de desarrollo de juegos, pero llevo un tiempo estudiando y trabajando de manera independiente, por lo que tengo experiencia en este campo.",
        basicTitle                  : "Informaci??n b??sica",
		age							: "23 a??os",
        car                         : "Carnet de conducir",
        skillsTitle                 : "Conocimientos de tecnolog??as",
        skillsDescription           : "Mis dos puntos fuertes son C# y C++, los dos lenguajes con los que m??s he trabajado. Tambi??n se trabajar con Python y tengo conocimientos de AWS.",
        pro                         : "Profesional",
        medium                      : "Medio",
        expert                      : "Experto",
        gameSkillsTitle             : "Conocimientos de desarrollo de juegos.",
        gameSkillsDescription       : "Como desarrollador de juegos siempre me gusta descubrir y probar nuevas tecnolog??as.",
        ownEngine                   : "Mi motor",
        achievementsTitle           : "Logros",
        achievement1                : "Ganador de un concurso de videojuegos en YouTube",
        achievement2                : "Libro publicado sobre programaci??n",
        achievement1Link            : "Link al concurso",
        achievement2Link            : "Link al libro",
        degreeTitle                 : "Estudios",
        degree                      : "Grado en ingenier??a inform??tica",
        university                  : "Universidad de La Rioja",
        languagesTitle              : "Idiomas",
        favSongsTitle               : "M??sica favorita para programar",
        moreSpotify                 : "M??s en Spotify",
        icons                       : "Iconos de las banderas por ",
        template                    : ", plantilla por Xiaoying Riley",
        monsterTalesDescription1    : "Mi trabajo actual es en Tangelo Games, una empresa especializada en desarrollo de juegos para movil. Mi proyecto dentro de la empresa es Monster Tales, un match-3 con modo historia y multijador, en el que puedes jugar contra personas de todo el mundo.",
        monsterTalesDescription2    : "Nuestro equipo es peque??o, asi que todos trabajamos con ingenerios de backend y frontend, donde usamos tanto Unity, con C#, como un gran sistema de microservicios manejados tambien con C# y python.",
        currentProjectId            : "Proyecto actual",
        ordagoDescription1          : "Ordago es un juego de cartas para movil donde podras jugar a los clasicos de cartas espa??oles, como chinchon, mus, presidente, escoba... Puedes jugar con tus amigos en grupos y hasta en partidas privadas personalizadas, o con personas del resto del mundo.",
        ordagoDescription2          : "El juego aun esta en desarrollo, pero avanzando muy bien.",
        isometricTitleId            : "Juego de estrategia isometrico",
        isometricDescriptionId1     : "Este es un proyecto en Unity en el que trabajo cuando puedo sacar tiempo (y no estoy trabajando en otros). Es un juego de estrategia por turnos con tematica de ordenador (excepto el dinosaurio que esta de ejemplo). Como se ve en el video, con el raton podemos sacar info de los bloques del suelo, podemos elegir acciones (atacar, mover, defenderse y ataque de rango), pasar el turno. Los enemigos trataran de alcanzarte y acabar contigo.",
        isometricDescriptionId2     : "Tienes tres puntos de energia para acciones por turno, y si te quedas sin vida, mueres. El codigo puede accederse ",
        isometricDescriptionId3     : "Una cosa que he conseguido en este proyecto y que me gusta mucho es que el sistema de movimiento/acciones es totalmente compartido entre el jugador y la IA. La IA imita las acciones que haria un humano mediante una maquina de estados.",
        isometricDescriptionId4     : "Tambien cuenta con una consola de debugging que es, por supuesto, para facilitar las tareas de testeo. Podemos usar diversos comandos y se pueden meter mas segun necesidad.",
        gdelTitleId                 : "GDEL, mi lenguaje de scripting con su propia maquina virtual",
        gdelDescriptionId1          : "GDEL es mi proyecto favorito actual. La maquina virtual la estoy desarrollando enteramente en C++. Aun no esta terminado, pero trabajo en el casi todos los dias. No es un proyecto nada facil y requiere de mucha busqueda de informacion, no solo para saber como una maquina virtual funciona, si no por los conocimientos de como la memoria funciona internamente y de como hacer las cosas lo mas optimas posibles en C++. Este proyecto me esta ense??ando mas de lo que podria imaginar.",
        gdelDescriptionId2          : "Se puede seguir el desarrollo justamente  ",
        gdelDescriptionId3          : "El objetivo de este proyecto es poder usar este lenguaje dentro de mis futuros juegos y proyectos y usarlo como herramienta de desarrollo, para mods o incluso como lenguaje dentro del juego para que los usuarios lo usen.",
        gdelDescriptionId4          : "Una vez acabado creare un IDE para poder usarlo con mas facilidad."
    },

    pt : {
        introBelowName              : "Programador C++ e C#, as vezes Python tamb??m",
        title                       : "Borja Vazquez Porfolio do Desenvolvedor",
        contactHire                 : "Contata-me/Contrata-me",
        aboutMeHeader               : "Sobre mim",
        aboutMe                     : "Meu nome ?? Borja V??zquez e sou engenheiro inform??tico espanhol. Minha melhor ??rea ?? o desenvolvimento de videojogos. Eu programo principalmente em C++ e C# se o motor gr??fico o usa. Pra mim, a programa????o n??o ?? s?? um trabalho, ?? uma das minhas maiores paix??es. Adoro aprender coisas novas sempre que eu posso, se ?? relacionado com a programa????o de videojogos, ainda melhor; mas posso me adaptar pra aprender outras ??reas. No meu tempo livre eu gosto de ir andar de skate com meus amigos.",
        latestProjectsHeader        : "??ltimos projetos",
        safatorTitle                : "SaFaTor, um nome terr??vel, mas na realidade um bom falling sand simulator",
        safatorDescription1         : "Pra aqueles que n??o saibam o que ?? um falling sand simulator, ?? basicamente um programa que simula como certas part??culas ou materiais se comportam abaixo de certas situa????es e como reagem com outras part??culas ou materiais.", 
        safatorDescription2         : "Alguns exemplos s??o: ",
        safatorDescription3         : "SaFaTor (vem de Sand Falling Simulator) ?? a minha vers??o dum falling sand simulator, e agora ele j?? conta com muitas funcionalidades, mas meu plano ?? ampliar at?? ele virar um dos programas desse tipo com mais funcionalidades. Esse projeto junto com o motor gr??fico que t?? desenvolvendo, s??o meus beb??s.",
        safatorDescription4         : "O c??digo pode se achar em ",
        safatorDescription5         : " e o executable pode se testar em ",
        example1                    : "Exemplo 1",
        example2                    : "Exemplo 2",
        customGameTitle             : "Motor gr??fico propio",
        engineDescription1          : "Por um tempo e tamb??m pro meu TCC, levo desenvolvindo meu propio motor gr??fico que permite criar jogos em 2D. Agora n??o tem uma interface gr??fica pra voc?? interargir, mas ?? uma coisa que vai ter no futuro. Algumas das caracter??sticas atuales s??o: ",
        engineDescription2          : "A ideia ?? atualizar o motor pouco ao pouco e finalmente criar uma ferramenta com a que poder criar videjogos. T?? totalmente feita em C++. O c??digo pode se achar ",
        engineList1                 : "Renderiza????o de figuras geom??tricas e texturas.",
        engineList2                 : "Uso de cenas e camadas pra renderiza????o.",
        engineList3                 : "Entrada de dados por keyboard e mouse.",
        engineList4                 : "Uso de quase todos os eventos da janela.",
        engineList5                 : "Ciclo principal com independ??ncia dos frames.",
        engineList6                 : "Uso dum sistema de ECS.",
        engineList7                 : "Uma API f??cil de usar pro motor em geral e pra renderiza????o.",
        engineList8                 : "Al??m de outras funcionalidades legais...",
        here                        : "aqui",
        upcoming                    : "Projetos futuros",
        cardGameTitle               : "Jogo de cartas online pra IOs e Android",
        cardGameDescription         : "Agora t?? trabalhando com dois artistas pra criar um jogo de cartas online onde voc?? poder?? jogar em salas privadas ou p??blicas. N??o posso falar mais agora, mas pra setembro do 2020 teremos uma demo jog??vel.",                  
        otherProjects               : "Outros projetos",
        otherProjectsDescription1   : "Todos meus outros trabalhos podem se achar no meu ",
        otherProjectsDescription2   : " . Entre esses trabalhos temos: ",
        tetrisTitle                 : "Tetris",
        tetrisDescription           : "Minha vers??o do Tetris que eu fiz em 4 ou 5 dias no meu tempo livre. Num futuro vou mudar pro C++ e fazer com o meu motor.",
        tetrisRepo                  : "Reposit??rio do Github",
        mineTitle                   : "Campo Minado",
        mineDescription             : "Outro projeto que fiz no meu tempo livre, mas esse s?? tomou 1 ou 2 dias.",
        mineRepo                    : "Reposit??rio do Github",
        chessTitle                  : "Xadrez",
        chessDescription            : "Uma pequena, mas jogav??l vers??o do xadrez. N??o ?? online, tem que se jogar localmente com algu??m mais. Tomou uns 2 ou 3 dias.",
        chessRepo                   : "Reposit??rio do Github",
        consoleTitle                : "Terminal Personalizado",
        consoleDescription          : "O projeto ?? um terminal que permite usar v??rias fun????es. A documenta????o e manual de usa est??o no reposit??rio do Github. Num futuro vou mudar o c??digo pro C++ e vou integrar com o motor gr??fico.",
        consoleRepo                 : "Reposit??rio do Github",
        foodTitle                   : "Foodamental",
        foodDescription             : "?? um aplicativo que dois colegas e eu fizemos pra uma mat??ria da universidade. Deixa voc?? pesquisar receitas que contenham uma serie de ingredientes.",
        foodRepo                    : "Reposit??rio do Github",
        sssTitle                    : "Super Smash Shoot",
        sssDescription              : "?? um jogo que eu fiz pra outra mat??ria na universidade. ?? tipo Super Smash Bros, mas 2D e online. A estrutura do server n??o ?? a melhor porque foi o primeiro aplicativo que eu fiz online, mas ?? jog??vel.",
        sssRepo                     : "Reposit??rio do Github",
        experienceTitle             : "Trabalhos passados",
        teacherTitle                : "Maestro de programa????o - ",
        teacherTime                 : "(2017 - Presente)",
        teacherDescription          : "Enquanto estudava comcei dar aulas de programa????o porque como ?? uma coisa que eu amo, queria tentar fazer o come??o dos novos programadores o mais f??cil poss??vel. Tamb??m me obrigou estudar novas ??reas da programa????o porque os diferentes alunos tinham diferentes interesses.",
        nterTitle                   : "Desenvolvedor backend na Nter - ",
        nterTime                    : "(2018 - 2019)",
        nterDescription             : "Trabalhei al?? por as pr??ticas em empresa que temos que fazer na universidade. Junto com outros colegas, estudamos e desenvolvimos o backend de v??rios aplicativos.",
        soloTitle                   : "Trabalho como desenvolvedor indie de jogos - ",
        soloTime                    : "(2016 - Presente)",
        soloDescription             : "Tristemente, ainda n??o trabalhei numa empresa de videojogos, mas levo tempo estudando e trabalhando como desenvolvedor indie e tenho experi??ncia nessa ??rea.",
        basicTitle                  : "Informa????o essencial",
		age							: "23 anos",
        car                         : "Cartera de motorista",
        skillsTitle                 : "Conhecimentos das tecnolog??as",
        skillsDescription           : "Os linguagens de programa????o que mais controlo s??o C++ e C#, porque s??o os que mais tenho usado. Sei trabalhar tamb??m com Python e tenho conhecimentos de AWS.",
        pro                         : "Profissional",
        medium                      : "M??dio",
        expert                      : "Especialista",
        gameSkillsTitle             : "Conhecimentos pra desenvolver jogos",
        gameSkillsDescription       : "Como desenvolvedor de jogos sempre gosto de achar e testar novas tecnolog??as.",
        ownEngine                   : "Meu motor",
        achievementsTitle           : "Realiza????es",
        achievement1                : "Ganhador duma competi????o de videojogos em YouTube",
        achievement2                : "Livro de programa????o publicado",
        achievement1Link            : "Link pra competi????o",
        achievement2Link            : "Link pro livro",
        degreeTitle                 : "Estudos",
        degree                      : "Licenciatura em engenharia inform??tica",
        university                  : "Universidade de La Rioja",
        languagesTitle              : "L??nguas",
        favSongsTitle               : "M??sica pra programar",
        moreSpotify                 : "Mais no Spotify",
        icons                       : "??cones das bandeiras por ",
        template                    : ", est??ncil por Xiaoying Riley",
        monsterTalesDescription1    : "Meu atual emprego ?? em Tangelo Games, uma empresa que faz jogos de celular. Meu projeto na empresa ?? monster tales, um match-3 com historia e com modo multijogador, onde voc?? pode jogar contra pessoas de todo mundo.",
        monsterTalesDescription2    : "Nosso equipe ?? pequeno, da?? que todos trabalhamos como engenheiros backend e frontend. Trabalhamos com micro-servives, C#, Python e Unity como tecnologias principais.",
        currentProjectId            : "Projeto atual",
        ordagoDescription1          : "Ordago ?? um jogo de cartas para celular onde voc?? pode jogar os clasicos espanhois, como chinchon, mus, presidente, escoba... Pode jogar com os seus amigos em grupos ?? at?? em partidas privadas, ou com pessoas do resto do mundo.",
        ordagoDescription2          : "El juego aun esta en desarrollo, pero avanzando muy bien.",
        isometricTitleId            : "Jogo de estrategia isometrico",
        isometricDescriptionId1     : "Esse ?? um projeto no Unity que eu trabalho quando tenho tempo (e nao estou trabalhando em outros projetos). ?? um jogo de estrategia por turnos com tematica do computador (exceto o dinossauro que ?? um exemplo). Como esta no video, com o mouse podemos obter informa??ao dos blocos do chao, podemos escolher a??oes (atacar, mover, se defender y atacar de longe), mudar a vez. Os enemigos tentam pegar voce e acabar com voce.",
        isometricDescriptionId2     : "Voce tem 3 pontos de energia para a??oes por cada vez, e se ficar sem pontos de vida, voce morre. o codigo pode ser accesar ",
        isometricDescriptionId3     : "Nesse projeto consegui que o sistema de movimento e a??oes seja totalmente compartilhado entre o jogador e a IA. A IA usa uma maquina de estados para simular o input do jogador.",
        isometricDescriptionId4     : "Tem tambem uma consola para debugging que ??, obviamente, para fazer o debugging. Podemo se usar varios comandos e podem se adicionar tantos como precisar.",
        gdelTitleId                 : "GDEL, a minha linguagem de scripting com a sua propia maquina virtual",
        gdelDescriptionId1          : "GDEL ?? o meu atual projecto favorito. A maquina virtual esta sendo desenvolvida inteiramente em C++. Ainda nao esta terminada, mas eu trabalho nela quase todos os dias. Nao ?? um projeto facil porque precisa de muita pesquisa da minha parte, nao so na teoria das maquinas virtuais, mas tambem no funcionamento da memoria nesse nivel tao baixo e como fazer as coisas o mais eficente possivel em C++. Eu aprendi com esse projecto muito mais do que eu podia imaginar.",
        gdelDescriptionId2          : "O desenvolvimento pode se consultar  ",
        gdelDescriptionId3          : "O objetivo desse projeto ?? usar essa linguagem como ferramenta de debugging, para mods ou ate como linguagem dentro do jogo pros usuarios usarem.",
        gdelDescriptionId4          : "Quando terminar, vou criar um IDE pra linguagem."
    }

}

function translate() {}

if (window.location.hash) {
    if(window.location.hash === "#es") {
        toSpanish();
    } else if(window.location.hash === "#en") {
        toEnglish();
    } else if(window.location.hash === "#pt") {
        toPortuguese();
    }
}

function toSpanish() {
    introBelowNameId.textContent            = _language.es.introBelowName;
    titleId.textContent                     = _language.es.title;
    contactHireId.textContent               = _language.es.contactHire;
    aboutMeHeaderId.textContent             = _language.es.aboutMeHeader;
    aboutMeId.textContent                   = _language.es.aboutMe;
    latestProjectsHeaderId.textContent      = _language.es.latestProjectsHeader;
    safatorTitleId.textContent              = _language.es.safatorTitle;
    safatorDescriptionId1.textContent       = _language.es.safatorDescription1;
    safatorDescriptionId2.textContent       = _language.es.safatorDescription2;
    safatorDescriptionId3.textContent       = _language.es.safatorDescription3;
    safatorDescriptionId4.textContent       = _language.es.safatorDescription4;
    safatorDescriptionId5.textContent       = _language.es.safatorDescription5;
    exampleId1.textContent                  = _language.es.example1;
    exampleId2.textContent                  = _language.es.example2;

    customGameTitleId.textContent           = _language.es.customGameTitle;
    engineDescriptionId1.textContent        = _language.es.engineDescription1;
    engineDescriptionId2.textContent        = _language.es.engineDescription2;
    engineListId1.textContent               = _language.es.engineList1;
    engineListId2.textContent               = _language.es.engineList2;
    engineListId3.textContent               = _language.es.engineList3;
    engineListId4.textContent               = _language.es.engineList4;
    engineListId5.textContent               = _language.es.engineList5;
    engineListId6.textContent               = _language.es.engineList6;
    engineListId7.textContent               = _language.es.engineList7;
    engineListId8.textContent               = _language.es.engineList8;
    hereId.textContent                      = _language.es.here;

    upcomingId.textContent                  = _language.es.upcoming;
    cardGameTitleId.textContent             = _language.es.cardGameTitle;

    otherProjectsId.textContent             = _language.es.otherProjects;
    otherProjectsDescriptionId1.textContent = _language.es.otherProjectsDescription1;
    otherProjectsDescriptionId2.textContent = _language.es.otherProjectsDescription2;

    tetrisTitleId.textContent               = _language.es.tetrisTitle;
    tetrisDescriptionId.textContent         = _language.es.tetrisDescription;
    tetrisRepoId.textContent                = _language.es.tetrisRepo;

    mineTitleId.textContent                 = _language.es.mineTitle;
    mineDescriptionId.textContent           = _language.es.mineDescription;
    mineRepoId.textContent                  = _language.es.mineRepo;

    chessTitleId.textContent                = _language.es.chessTitle;
    chessDescriptionId.textContent          = _language.es.chessDescription;
    chessRepoId.textContent                 = _language.es.chessRepo;

    consoleTitleId.textContent              = _language.es.consoleTitle;
    consoleDescriptionId.textContent        = _language.es.consoleDescription;
    consoleRepoId.textContent               = _language.es.consoleRepo;

    foodTitleId.textContent                 = _language.es.foodTitle;
    foodDescriptionId.textContent           = _language.es.foodDescription;
    foodRepoId.textContent                  = _language.es.foodRepo;

    sssTitleId.textContent                  = _language.es.sssTitle;
    sssDescriptionId.textContent            = _language.es.sssDescription;
    sssRepoId.textContent                   = _language.es.sssRepo;

    experienceTitleId.textContent           = _language.es.experienceTitle;

    teacherTitleId.textContent              = _language.es.teacherTitle;
    teacherTimeId.textContent               = _language.es.teacherTime;
    teacherDescriptionId.textContent        = _language.es.teacherDescription;

    nterTitleId.textContent                 = _language.es.nterTitle;
    nterTimeId.textContent                  = _language.es.nterTime;
    nterDescriptionId.textContent           = _language.es.nterDescription;

    soloTitleId.textContent                 = _language.es.soloTitle;
    soloTimeId.textContent                  = _language.es.soloTime;
    soloDescriptionId.textContent           = _language.es.soloDescription;

    basicTitleId.textContent                = _language.es.basicTitle;
	ageId.textContent                       = _language.es.age;
    carId.textContent                       = _language.es.car;

    skillsTitleId.textContent               = _language.es.skillsTitle;
    skillsDescriptionId.textContent         = _language.es.skillsDescription;

    isometricTitleId.textContent            = _language.es.isometricTitleId;
    isometricDescriptionId1.textContent       = _language.es.isometricDescriptionId1;
    isometricDescriptionId2.textContent       = _language.es.isometricDescriptionId2;
    isometricDescriptionId3.textContent       = _language.es.isometricDescriptionId3;
    isometricDescriptionId4.textContent       = _language.es.isometricDescriptionId4;

    gdelTitleId.textContent                 = _language.es.gdelTitleId;
    gdelDescriptionId1.textContent            = _language.es.gdelDescriptionId1;
    gdelDescriptionId2.textContent            = _language.es.gdelDescriptionId2;
    gdelDescriptionId3.textContent            = _language.es.gdelDescriptionId3;
    gdelDescriptionId4.textContent            = _language.es.gdelDescriptionId4;

    var _classes = document.getElementsByClassName("proId");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = _language.es.pro;

    _classes = document.getElementsByClassName("expertId");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = _language.es.expert;

    _classes = document.getElementsByClassName("mediumId");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = _language.es.medium;

    _classes = document.getElementsByClassName("newLabel");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = "Nuevo";

    gameSkillsTitleId.textContent           = _language.es.gameSkillsTitle;
    gameSkillsDescriptionId.textContent     = _language.es.gameSkillsDescription;
    ownEngineId.textContent                 = _language.es.ownEngine;

    achievementsTitleId.textContent         = _language.es.achievementsTitle;
    achievement1Id.textContent              = _language.es.achievement1;
    achievement2Id.textContent              = _language.es.achievement2;
    achievementLink1Id.textContent          = _language.es.achievement1Link;
    achievementLink2Id.textContent          = _language.es.achievement2Link;

    degreeTitleId.textContent               = _language.es.degreeTitle;
    degreeId.textContent                    = _language.es.degree;
    universityId.textContent                = _language.es.university;
    languagesTitleId.textContent            = _language.es.languagesTitle;

    favSongsTitleId.textContent             = _language.es.favSongsTitle;
    moreSpotifyId.textContent               = _language.es.moreSpotify;

    iconsId.textContent                     = _language.es.icons;
    templateId.textContent                  = _language.es.template;

    monsterTalesDescription1.textContent    = _language.es.monsterTalesDescription1;
    monsterTalesDescription2.textContent    = _language.es.monsterTalesDescription2;

    currentProjectId.textContent            = _language.es.currentProjectId;

    ordagoDescription1.textContent          = _language.es.ordagoDescription1;
    ordagoDescription2.textContent          = _language.es.ordagoDescription1;
}

function toEnglish() {
    introBelowNameId.textContent            = _language.en.introBelowName;
    titleId.textContent                     = _language.en.title;
    contactHireId.textContent               = _language.en.contactHire;
    aboutMeHeaderId.textContent             = _language.en.aboutMeHeader;
    aboutMeId.textContent                   = _language.en.aboutMe;
    latestProjectsHeaderId.textContent      = _language.en.latestProjectsHeader;
    safatorTitleId.textContent              = _language.en.safatorTitle;
    safatorDescriptionId1.textContent       = _language.en.safatorDescription1;
    safatorDescriptionId2.textContent       = _language.en.safatorDescription2;
    safatorDescriptionId3.textContent       = _language.en.safatorDescription3;
    safatorDescriptionId4.textContent       = _language.en.safatorDescription4;
    safatorDescriptionId5.textContent       = _language.en.safatorDescription5;
    exampleId1.textContent                  = _language.en.example1;
    exampleId2.textContent                  = _language.en.example2;

    customGameTitleId.textContent           = _language.en.customGameTitle;
    engineDescriptionId1.textContent        = _language.en.engineDescription1;
    engineDescriptionId2.textContent        = _language.en.engineDescription2;
    engineListId1.textContent               = _language.en.engineList1;
    engineListId2.textContent               = _language.en.engineList2;
    engineListId3.textContent               = _language.en.engineList3;
    engineListId4.textContent               = _language.en.engineList4;
    engineListId5.textContent               = _language.en.engineList5;
    engineListId6.textContent               = _language.en.engineList6;
    engineListId7.textContent               = _language.en.engineList7;
    engineListId8.textContent               = _language.en.engineList8;
    hereId.textContent                      = _language.en.here;

    upcomingId.textContent                  = _language.en.upcoming;
    cardGameTitleId.textContent             = _language.en.cardGameTitle;

    otherProjectsId.textContent             = _language.en.otherProjects;
    otherProjectsDescriptionId1.textContent = _language.en.otherProjectsDescription1;
    otherProjectsDescriptionId2.textContent = _language.en.otherProjectsDescription2;

    tetrisTitleId.textContent               = _language.es.tetrisTitle;
    tetrisDescriptionId.textContent         = _language.es.tetrisDescription;
    tetrisRepoId.textContent                = _language.es.tetrisRepo;

    mineTitleId.textContent                 = _language.en.mineTitle;
    mineDescriptionId.textContent           = _language.en.mineDescription;
    mineRepoId.textContent                  = _language.en.mineRepo;

    chessTitleId.textContent                = _language.en.chessTitle;
    chessDescriptionId.textContent          = _language.en.chessDescription;
    chessRepoId.textContent                 = _language.en.chessRepo;

    consoleTitleId.textContent              = _language.en.consoleTitle;
    consoleDescriptionId.textContent        = _language.en.consoleDescription;
    consoleRepoId.textContent               = _language.en.consoleRepo;

    foodTitleId.textContent                 = _language.en.foodTitle;
    foodDescriptionId.textContent           = _language.en.foodDescription;
    foodRepoId.textContent                  = _language.en.foodRepo;

    sssTitleId.textContent                  = _language.en.sssTitle;
    sssDescriptionId.textContent            = _language.en.sssDescription;
    sssRepoId.textContent                   = _language.en.sssRepo;

    experienceTitleId.textContent           = _language.en.experienceTitle;

    teacherTitleId.textContent              = _language.en.teacherTitle;
    teacherTimeId.textContent               = _language.en.teacherTime;
    teacherDescriptionId.textContent        = _language.en.teacherDescription;

    nterTitleId.textContent                 = _language.en.nterTitle;
    nterTimeId.textContent                  = _language.en.nterTime;
    nterDescriptionId.textContent           = _language.en.nterDescription;

    soloTitleId.textContent                 = _language.en.soloTitle;
    soloTimeId.textContent                  = _language.en.soloTime;
    soloDescriptionId.textContent           = _language.en.soloDescription;

    basicTitleId.textContent                = _language.en.basicTitle;
	ageId.textContent                       = _language.en.age;
    carId.textContent                       = _language.en.car;

    skillsTitleId.textContent               = _language.en.skillsTitle;
    skillsDescriptionId.textContent         = _language.en.skillsDescription;

    isometricTitleId.textContent            = _language.en.isometricTitleId;
    isometricDescriptionId1.textContent       = _language.en.isometricDescriptionId1;
    isometricDescriptionId2.textContent       = _language.en.isometricDescriptionId2;
    isometricDescriptionId3.textContent       = _language.en.isometricDescriptionId3;
    isometricDescriptionId4.textContent       = _language.en.isometricDescriptionId4;

    gdelTitleId.textContent                 = _language.en.gdelTitleId;
    gdelDescriptionId1.textContent            = _language.en.gdelDescriptionId1;
    gdelDescriptionId2.textContent            = _language.en.gdelDescriptionId2;
    gdelDescriptionId3.textContent            = _language.en.gdelDescriptionId3;
    gdelDescriptionId4.textContent            = _language.en.gdelDescriptionId4;

    var _classes = document.getElementsByClassName("proId");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = _language.en.pro;

    _classes = document.getElementsByClassName("expertId");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = _language.en.expert;

    _classes = document.getElementsByClassName("mediumId");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = _language.en.medium;

    _classes = document.getElementsByClassName("newLabel");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = "New";

    gameSkillsTitleId.textContent           = _language.en.gameSkillsTitle;
    gameSkillsDescriptionId.textContent     = _language.en.gameSkillsDescription;
    ownEngineId.textContent                 = _language.en.ownEngine;

    achievementsTitleId.textContent         = _language.en.achievementsTitle;
    achievement1Id.textContent              = _language.en.achievement1;
    achievement2Id.textContent              = _language.en.achievement2;
    achievementLink1Id.textContent          = _language.en.achievement1Link;
    achievementLink2Id.textContent          = _language.en.achievement2Link;

    degreeTitleId.textContent               = _language.en.degreeTitle;
    degreeId.textContent                    = _language.en.degree;
    universityId.textContent                = _language.en.university;
    languagesTitleId.textContent            = _language.en.languagesTitle;

    favSongsTitleId.textContent             = _language.en.favSongsTitle;
    moreSpotifyId.textContent               = _language.en.moreSpotify;

    iconsId.textContent                     = _language.en.icons;
    templateId.textContent                  = _language.en.template;

    monsterTalesDescription1.textContent    = _language.en.monsterTalesDescription1;
    monsterTalesDescription2.textContent    = _language.en.monsterTalesDescription2;

    currentProjectId.textContent            = _language.en.currentProjectId;

    ordagoDescription1.textContent          = _language.en.ordagoDescription1;
    ordagoDescription2.textContent          = _language.en.ordagoDescription1;
}

function toPortuguese() {
    introBelowNameId.textContent            = _language.pt.introBelowName;
    titleId.textContent                     = _language.pt.title;
    contactHireId.textContent               = _language.pt.contactHire;
    aboutMeHeaderId.textContent             = _language.pt.aboutMeHeader;
    aboutMeId.textContent                   = _language.pt.aboutMe;
    latestProjectsHeaderId.textContent      = _language.pt.latestProjectsHeader;
    safatorTitleId.textContent              = _language.pt.safatorTitle;
    safatorDescriptionId1.textContent       = _language.pt.safatorDescription1;
    safatorDescriptionId2.textContent       = _language.pt.safatorDescription2;
    safatorDescriptionId3.textContent       = _language.pt.safatorDescription3;
    safatorDescriptionId4.textContent       = _language.pt.safatorDescription4;
    safatorDescriptionId5.textContent       = _language.pt.safatorDescription5;
    exampleId1.textContent                  = _language.pt.example1;
    exampleId2.textContent                  = _language.pt.example2;

    customGameTitleId.textContent           = _language.pt.customGameTitle;
    engineDescriptionId1.textContent        = _language.pt.engineDescription1;
    engineDescriptionId2.textContent        = _language.pt.engineDescription2;
    engineListId1.textContent               = _language.pt.engineList1;
    engineListId2.textContent               = _language.pt.engineList2;
    engineListId3.textContent               = _language.pt.engineList3;
    engineListId4.textContent               = _language.pt.engineList4;
    engineListId5.textContent               = _language.pt.engineList5;
    engineListId6.textContent               = _language.pt.engineList6;
    engineListId7.textContent               = _language.pt.engineList7;
    engineListId8.textContent               = _language.pt.engineList8;
    hereId.textContent                      = _language.pt.here;

    upcomingId.textContent                  = _language.pt.upcoming;
    cardGameTitleId.textContent             = _language.pt.cardGameTitle;

    otherProjectsId.textContent             = _language.pt.otherProjects;
    otherProjectsDescriptionId1.textContent = _language.pt.otherProjectsDescription1;
    otherProjectsDescriptionId2.textContent = _language.pt.otherProjectsDescription2;

    tetrisTitleId.textContent               = _language.es.tetrisTitle;
    tetrisDescriptionId.textContent         = _language.es.tetrisDescription;
    tetrisRepoId.textContent                = _language.es.tetrisRepo;

    mineTitleId.textContent                 = _language.pt.mineTitle;
    mineDescriptionId.textContent           = _language.pt.mineDescription;
    mineRepoId.textContent                  = _language.pt.mineRepo;

    chessTitleId.textContent                = _language.pt.chessTitle;
    chessDescriptionId.textContent          = _language.pt.chessDescription;
    chessRepoId.textContent                 = _language.pt.chessRepo;

    consoleTitleId.textContent               = _language.pt.consoleTitle;
    consoleDescriptionId.textContent        = _language.pt.consoleDescription;
    consoleRepoId.textContent               = _language.pt.consoleRepo;

    foodTitleId.textContent                 = _language.pt.foodTitle;
    foodDescriptionId.textContent           = _language.pt.foodDescription;
    foodRepoId.textContent                  = _language.pt.foodRepo;

    sssTitleId.textContent                  = _language.pt.sssTitle;
    sssDescriptionId.textContent            = _language.pt.sssDescription;
    sssRepoId.textContent                   = _language.pt.sssRepo;

    experienceTitleId.textContent           = _language.pt.experienceTitle;

    teacherTitleId.textContent              = _language.pt.teacherTitle;
    teacherTimeId.textContent               = _language.pt.teacherTime;
    teacherDescriptionId.textContent        = _language.pt.teacherDescription;

    nterTitleId.textContent                 = _language.pt.nterTitle;
    nterTimeId.textContent                  = _language.pt.nterTime;
    nterDescriptionId.textContent           = _language.pt.nterDescription;

    soloTitleId.textContent                 = _language.pt.soloTitle;
    soloTimeId.textContent                  = _language.pt.soloTime;
    soloDescriptionId.textContent           = _language.pt.soloDescription;

    basicTitleId.textContent                = _language.pt.basicTitle;
	ageId.textContent                       = _language.pt.age;
    carId.textContent                       = _language.pt.car;

    skillsTitleId.textContent               = _language.pt.skillsTitle;
    skillsDescriptionId.textContent         = _language.pt.skillsDescription;

    isometricTitleId.textContent            = _language.pt.isometricTitleId;
    isometricDescriptionId1.textContent       = _language.pt.isometricDescriptionId1;
    isometricDescriptionId2.textContent       = _language.pt.isometricDescriptionId2;
    isometricDescriptionId3.textContent       = _language.pt.isometricDescriptionId3;
    isometricDescriptionId4.textContent       = _language.pt.isometricDescriptionId4;

    gdelTitleId.textContent                 = _language.pt.gdelTitleId;
    gdelDescriptionId1.textContent            = _language.pt.gdelDescriptionId1;
    gdelDescriptionId2.textContent            = _language.pt.gdelDescriptionId2;
    gdelDescriptionId3.textContent            = _language.pt.gdelDescriptionId3;
    gdelDescriptionId4.textContent            = _language.pt.gdelDescriptionId4;

    var _classes = document.getElementsByClassName("proId");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = _language.pt.pro;

    _classes = document.getElementsByClassName("expertId");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = _language.pt.expert;

    _classes = document.getElementsByClassName("mediumId");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = _language.pt.medium;

    _classes = document.getElementsByClassName("newLabel");
    for (var i = 0; i < _classes.length; i++)
    _classes[i].innerHTML = "Novo";

    gameSkillsTitleId.textContent           = _language.pt.gameSkillsTitle;
    gameSkillsDescriptionId.textContent     = _language.pt.gameSkillsDescription;
    ownEngineId.textContent                 = _language.pt.ownEngine;

    achievementsTitleId.textContent         = _language.pt.achievementsTitle;
    achievement1Id.textContent              = _language.pt.achievement1;
    achievement2Id.textContent              = _language.pt.achievement2;
    achievementLink1Id.textContent          = _language.pt.achievement1Link;
    achievementLink2Id.textContent          = _language.pt.achievement2Link;

    degreeTitleId.textContent               = _language.pt.degreeTitle;
    degreeId.textContent                    = _language.pt.degree;
    universityId.textContent                = _language.pt.university;
    languagesTitleId.textContent            = _language.pt.languagesTitle;

    favSongsTitleId.textContent             = _language.pt.favSongsTitle;
    moreSpotifyId.textContent               = _language.pt.moreSpotify;

    iconsId.textContent                     = _language.pt.icons;
    templateId.textContent                  = _language.pt.template;

    monsterTalesDescription1.textContent    = _language.pt.monsterTalesDescription1;
    monsterTalesDescription2.textContent    = _language.pt.monsterTalesDescription2;

    currentProjectId.textContent            = _language.pt.currentProjectId;

    ordagoDescription1.textContent          = _language.pt.ordagoDescription1;
    ordagoDescription2.textContent          = _language.pt.ordagoDescription1;
} 


jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "https://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // will request the API via https
	    // default: false
	    // valid values: false, true
	    ssl: true,
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='items'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>'
        
        }
    );



});