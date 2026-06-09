import './style.css'
import { formatDistanceToNow } from "date-fns";

const completedHikesContainer = document.querySelector('#completed-hikes-container');
const plannedHikesContainer = document.querySelector('#planned-hikes-container');
const statsContainer = document.querySelector('#stats-container');

const completedHikes = [
    {
        name: "Ulriken",
        startPoint: "Montana",
        difficulty: "Moderate",
        distance: 8.4,
        elevation: 643,
        duration: 1,
        date: "2026-05-28",
        image: "oppstemten.jpg",
        video: "oppstemten.mp4",
        notes: "Beautiful morning hike. Clear view over Bergen and little wind.",
    },

     {
        name: "Fløyen",
        difficulty: "Easy",
        startPoint: "",
        distance: 0,
        elevation: 399,
        duration: 0,
        date: "2026-04-04",
        image: "floyen.jpg",
        video: "floyen.mp4",
        notes: "",
    },

];

const plannedHikes = [
   {
        name: "Gravdalsfjellet",
        difficulty: "Easy",
        startPoint: "",
        distance: 3.2,
        elevation: 351,
        duration: 2,
        date: "2026-06-16",
        image: "gravdalsfjellet.jpg",
        video: "gravdalsfjellet.mp4",
        notes: "",
    },

    {
        name: "Løvstakken",
        difficulty: "easy",
        startPoint: "",
        distance: 0,
        elevation: 0,
        duration: 0,
        date: "2026-07-03",
        image: "",
        notes: "",
    }
];


function createHikeCard(hike, type) {

    // create card wrapper
    console.log(hike);
    const card = document.createElement("article");
    card.classList.add("hike-card");
    
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    
    const titleGroup = document.createElement("div");
    titleGroup.classList.add("title-group");
    
    const startPoint = document.createElement("p");
    startPoint.textContent = hike.startPoint;

    // add hike title
    const title = document.createElement("h3");
    title.textContent = hike.name;

    // add difficulty badge
    const difficulty = document.createElement("span");
    difficulty.classList.add("difficulty-badge");
    difficulty.textContent = hike.difficulty;
  
    // create container for trail facts
    const trailFacts = document.createElement("div");
    trailFacts.classList.add("trail-facts");


    // store all trail facts in one array
    const facts = [
        {
            value: `${hike.distance} km`,
            label: "Distance",
        },
        {
            value: `${hike.elevation} m`,
            label: "Elevation",
        },
        {
            value: `${hike.duration} h`,
            label: "Duration",
        },
    ];
    
    // create a fact box for each item in that arrat
    for (const fact of facts) {
        const factBox = document.createElement("div");
        factBox.classList.add("trail-fact");

        const factValue = document.createElement("strong");
        factValue.textContent = fact.value;

        const factLabel = document.createElement("span");
        factLabel.textContent = fact.label;

        factBox.append(factValue, factLabel);
        trailFacts.append(factBox);
    }
    

    // add relative hike date
    const relativeDate = formatDistanceToNow(new Date(hike.date), {
        addSuffix: true,
    });
    
    const date = document.createElement("p");
    
    if (type === "completed") {
        date.textContent = `Hiked ${relativeDate}`;
    } else {
        date.textContent = `Planned ${relativeDate}`;
    }

    
    
    card.append(title, cardHeader, difficulty, trailFacts, date);
    return card;

}


for (const hike of completedHikes) {
    const card = createHikeCard(hike, "completed");
    completedHikesContainer.append(card);
}


for (const hike of plannedHikes) {
    const card = createHikeCard(hike, "planned");
    plannedHikesContainer.append(card);
}

