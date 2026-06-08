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
        difficulty: "moderate",
        image: "oppstemten.jpg",
        video: "oppstemten.mp4",
        notes: "Beautiful morning hike. Clear view over Bergen and little wind.",
    },

     {
        name: "Fløyen",
        startPoint: "",
        distance: 0,
        elevation: 399,
        difficulty: "easy",
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
        difficulty: "easy",
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






