import './style.css'
import { formatDistanceToNow } from "date-fns";

const completedHikesContainer = document.querySelector('#completed-hikes-container');
const plannedHikesContainer = document.querySelector('#planned-hikes-container');
const statsContainer = document.querySelector('#stats-container');

const completedHikes = [
    {
        name: "Ulriken",
        startPoint: "Montana",
        distance: 8.4,
        elevation: 643,
        duration: 1,
        date: "2026-05-28",
        difficulty: "Moderate",
        image: "oppstemten.jpg",
        video: "oppstemten.mp4",
        notes: "Beautiful morning hike. Clear view over Bergen and little wind.",
    },

     {
        name: "Fløyen",
        startPoint: "",
        distance: 0,
        elevation: 399,
        difficulty: "Easy",
        date: "2026-04-04",
        image: "floyen.jpg",
        video: "floyen.mp4",
        notes: "",
    },

];

const plannedHikes = [
   {
        name: "Gravdalsfjellet",
        startPoint: "",
        distance: 3.2,
        elevation: 351,
        duration: 2,
        date: "2026-06-16",
        difficulty: "Easy",
        image: "gravdalsfjellet.jpg",
        video: "gravdalsfjellet.mp4",
        notes: "",
    },

    {
        name: "Løvstakken",
        startPoint: "",
        distance: 0,
        elevation: 0,
        difficulty: "",
        date: "",
        image: "",
        notes: "",
    }

];


function createHikeCard(hike) {
  console.log(hike);
  const card = document.createElement("article");
  card.classList.add("hike-card");

  const title = document.createElement("h3");
  title.textContent = hike.name;

  const distance = document.createElement("p");
  distance.textContent = hike.distance;

  const elevation = document.createElement("p");
  elevation.textContent = hike.elevation;

  const difficulty = document.createElement("p");
  difficulty.textContent = hike.difficulty;

  const date = document.createElement("p");
  date.textContent = hike.date;



  card.append(title, distance, elevation, difficulty, date);

  return card;
}


for (const hike of completedHikes) {
    const card = createHikeCard(hike);
    completedHikesContainer.append(card);
}


for (const hike of plannedHikes) {
    const card = createHikeCard(hike);
    plannedHikesContainer.append(card);
}

