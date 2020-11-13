
const category = [
    //category[0]
    {
        name : 'Strategy',
        style : 'tag is-danger ml-2',
    },
    //category[1]
    {
        name : 'Action',
        style : 'tag is-primary ml-2',
    },
    //category[2]
    {
        name : 'Rogue-like',
        style : 'tag is-link ml-2',
    },
    //category[3]
    {
        name : 'MMORPG',
        style : 'tag is-black ml-2',
    },
    //category[4]
    {
        name : 'RPG',
        style : 'tag is-success ml-2',
    },
    //category[5]
    {
        name : 'Beat them all',
        style : 'tag is-info ml-2',
    },
    //category[6]
    {
        name : 'FPS',
        style : 'tag is-warning ml-2',
    },
    //category[7]
    {
        name : 'Battle Royale',
        style : 'tag is-white ml-2',
    },
    //category[8]
    {
        name : 'Open World',
        style : 'tag is-dark ml-2',
    },
];

const collection = [
    // AOM
    {
        img: './images/Age.png',
        title: 'Age of Mythology',
        developer: 'Ensemble Studios and edited by Microsoft',
        tag: [category[0]],
        link: 'https://store.steampowered.com/app/266840/Age_of_Mythology_Extended_Edition/',
        description: "It is a real-time strategy video game. It is a derivative of the Age of Empires series, from which it takes many gameplay elements.Everything happens in a universe inspired by mythology(Greek / Roman, Nordic and Egyptian).There is a campaign mode where the goal is to complete the game 's scenario missions. There is also a map creator mode and a multiplayer mode where the goal is to develop one 's civilisation faster than that of one 's opponents in order to annihilate them."
    },
    // Isaac
    {
        img: './images/Isaac.png',
        title: 'The Binding of Isaac Afterbirth+',
        developer: 'Edmund McMillen and Florian Himsl',
        tag: [category[1], category[2]],
        link: 'https://store.steampowered.com/app/570660/The_Binding_of_Isaac_Afterbirth/',
        description: "The Binding of Isaac is a rogue-like 2D action-adventure game seen from above. The player plays as Isaac, or one of the six other playable characters, and must explore a series of dungeons with rectangular rooms, which will sometimes be locked with mechanisms or locks, or sometimes camouflaged by a wall, requiring a bomb to get through. The characters embodied by the player fight by throwing their tears in the four directions of space: up, down, left and right. Many objects can change the way the tears behave while changing the character's appearance."
    },
    // The Elder Scrolls Online
    {
        img: './images/The Elder Scrolls online.png',
        title: 'The Elder Scrolls Online',
        developer: 'ZeniMax Online Studios and edited by Bethesda Softworks',
        tag: [category[3]],
        link: 'https://store.steampowered.com/app/306130/The_Elder_Scrolls_Online/',
        description: "The game proposes to evolve on the continent of Tamriel. The action takes place a millennium before the events of the previous title in the series, Skyrim, when the daedritic prince Molag Bal brings evil to all of Tamriel and establishes himself as the main antagonist. The story of the game focuses on the War of the Alliances. It is possible to join one of the nine races divided among the three factions vying for control of Tamriel."
    },
    // WOW
    {
        img: './images/World of Warcraft.png',
        title: 'World of Warcraft',
        developer: 'Blizzard Entertainement',
        tag: [category[3]],
        link: 'https://worldofwarcraft.com/en-gb/',
        description: "The game takes place in the imaginary world of Azeroth. The player chooses his character from eight, ten or twelve available races divided into two factions: the Alliance and the Horde. Thus, if the Alliance allows the player to embody a Human, a Dwarf, a Gnome or a Night Elf, on the Horde side it will be an Orc, a Troll, a Tauren (a kind of minotaur) or a Undead. The Alliance and the Horde are opposed to each other in a merciless war."
    },
    // Pokemon
    {
        img: './images/Pokémon Epée et bouclier.png',
        title: 'Pokemon Sword and Shield',
        developer: 'Game Freak and edited by Nintendo',
        tag: [category[4]],
        link: 'https://swordshield.pokemon.com/en-gb/',
        description: "Sword and Shield take place in the Galar region, a large, narrow expanse of land and one of many regions in the Pokémon world. The region itself is inspired by Great Britain, with its many landmarks resembling places such as the Houses of Parliament and the Cerne Abbas Giant.Similar to many previous entries in the Pokémon franchise, players embark on a journey across the region to become the strongest trainer, fighting eight powerful trainers called Gym Leaders and eventually the region's Champion."
    },
    // Neon Abyss
    {
        img: './images/Neon Abyss.png',
        title: 'Neon Abyss',
        developer: 'Veewo Games',
        tag: [category[1], category[2]],
        link: 'https://store.steampowered.com/app/788100/Neon_Abyss/',
        description: "Neon Abyss combines roguelike and action/platform games. The special feature of the game is its scalable dungeon system. These dungeons will change in real time according to your choices during your raids."
    },
    // Hades
    {
        img: './images/Hades.png',
        title: 'Hades',
        developer: 'Supergiant Games',
        tag: [category[1], category[5]],
        link: 'https://store.steampowered.com/app/1145360/Hades/',
        description: "As the immortal Prince of the Underworld, you will wield the mythical powers and weapons of Olympus to free yourself from the clutches of the god of the dead himself, building up your strength and unlocking new secrets with each new escape attempt. The gods of Olympus are at your side! Meet Zeus, Athena, Poseidon and many more, and choose from dozens of powerful blessings to boost your abilities. As you progress, you'll discover thousands of possible character configurations."
    },
    // The Witcher 3
    {
        img: './images/The Witcher 3.png',
        title: 'The Witcher 3',
        developer: 'CD Projekt',
        tag: [category[1], category[4]],
        link: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
        description: "Play the role of a highly trained professional monster killer. Trained from an early age and subjected to mutations that give them superhuman abilities, strength and reflexes, witch doctors are a counterbalance in a monster-infested world. Exterminate your enemies with the brutality of a professional monster hunter, equipped with an arsenal of upgradable weapons, mutation potions and combat magic. Hunt down a wide range of exotic monsters, from wild beasts roaming the mountain passes to cunning supernatural predators lurking in the shadows of densely populated cities. Use your rewards to upgrade your weapons, buy customised armour, bet on horse racing, card games and hand-to-hand combat, or enjoy the other pleasures of the night."
    },
    // Fortnite
    {
        img: './images/Fortnite.png',
        title: 'Fortnite',
        developer: 'Epic Games',
        tag: [category[1],category[6],category[7]],
        link: 'https://www.epicgames.com/fortnite/en-US/home',
        description: "Fortnite is a sandbox oriented Tower-Defense. Players meet as a team and have to crafted weapons and traps, then build a fortress and defend it against the many monsters that will come to attack it. This part of the game is the survival part of the game. There is another game mode which is the Battle Royale. 100 players find themselves on the same map with the aim of killing each other until there is only one player left alive and he is declared the winner. The card gets smaller and smaller as time goes by. There have been several seasons in the game, each of which has brought new features to the game."
    },
    // Assassin's creed Odyssey
    {
        img: "./images/Assassin's creed Odyssey.png",
        title: "Assassin's creed Odyssey",
        developer: 'Ubisoft',
        tag: [category[1],category[4],category[8]],
        link: 'https://www.ubisoft.com/en-gb/game/assassins-creed/odyssey',
        description: "Assassin's Creed Odyssey is a new entry into the franchise that takes place before Assassin's Creed Origins. It will be possible to embody the descendant of Leonidas from Sparta, boy or girl, in Ancient Greece. New features include a new combat system, pitched battles and an even more advanced RPG side with a multiple choice dialogue system."
    },
];

//Permet d'effacer le contenu du main container
const mainContainer = document.querySelector('.mainContainer');
mainContainer.innerHTML = '';

//Crée la div globale où se trouve toutes les cartes
const colonneMax = document.createElement('div');
colonneMax.className = 'mx-6 columns is-flex-wrap-wrap is-centered is-desktop';

for (let element of collection) {
    //On définit toutes les cartes
    const carte = document.createElement('section');
    carte.className = 'm-2 p-0 card column is-one-fifth';
    //On définit l'image de la carte
    const imageCarte = document.createElement('div');
    imageCarte.className = 'card-image';

    const figureCarte = document.createElement('figure');
    figureCarte.className = "image is-4by1";

    const newImg = document.createElement('img');
    newImg.src = element.img;
    //On définit les catégories
    const liste = document.createElement('ul');

    for (let elemTag of element.tag){
        const Tags = document.createElement('li');
        Tags.className = elemTag.style;
        Tags.textContent = elemTag.name;

        liste.appendChild(Tags);
    };
    //On définit le card-header
    const teteCarte = document.createElement('div');
    teteCarte.className = 'p-2 card-header is-flex-direction-column ioup';

    const titreCarte = document.createElement('h2');
    titreCarte.className = 'card-header-title is-centered title is-4';
    titreCarte.textContent = element.title;

    const sousTitreCarte = document.createElement('p');
    sousTitreCarte.className = 'subtitle is-6';
    sousTitreCarte.textContent = 'Developed by ' + element.developer;

    const contenuCarte = document.createElement('div');
    contenuCarte.className = 'p-2 card-content loul';
    contenuCarte.textContent = element.description;

    const piedCarte = document.createElement('footer');
    piedCarte.className = 'p-2 card-footer woup is-flex is-horizontal-center';

    const icones = document.createElement('a');
    icones.className = 'fas fa-gamepad';
    icones.href = element.link;

    mainContainer.appendChild(colonneMax);

    colonneMax.appendChild(carte);

    carte.appendChild(imageCarte);
    imageCarte.appendChild(figureCarte);
    figureCarte.appendChild(newImg);

    carte.appendChild(liste);


    carte.appendChild(teteCarte);
    teteCarte.appendChild(titreCarte);
    teteCarte.appendChild(sousTitreCarte);

    carte.appendChild(contenuCarte);

    carte.appendChild(piedCarte);
    piedCarte.appendChild(icones);

};