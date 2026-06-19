import Swiper from 'swiper'
import { Navigation, Pagination, Mousewheel, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'



// parks array
const parks = [
  {
    name: "Yosemite",
    type: "National Park",
    country: "United States",
    location: "California,",
    image: "/Images/yosemite.jpg",
    description: "Famous for its waterfalls, giant sequoias and granite cliffs.",
    established: 1890,
    area: "3,070 km²",
    elevation: "3,997 m",
  },

  {
    name: "Kruger",
    type: "National Park",
    country: "South Africa",
    location: "Limpopo & Mpumalanga,",
    image: "/Images/kruger.jpg",
    description: "One of Africa's largest game reserves, home to the Big Five.",
    established: 1926,
    area: "19,623 km²",
    elevation: "840 m",
  },

  {
    name: "Snowdonia",
    type: "National Park",
    country: "Wales",
    location: "North Wales,",
    image: "/Images/snowdonia.jpg",
    description: "Known for rugged mountains, glacial valleys and Wales' highest peak.",
    established: 1951,
    area: "2,130 km²",
    elevation: "1,085 m",
  },

  {
    name: "Serengeti",
    type: "National Park",
    country: "Tanzania",
    location: "Mara & Simiyu Regions,",
    image: "/Images/serengeti.jpg",
    description: "World-famous for the Great Migration and abundant wildlife.",
    established: 1951,
    area: "14,763 km²",
    elevation: "1,850 m",
  },

  {
    name: "Jasper",
    type: "National Park",
    country: "Canada",
    location: "Alberta,",
    image: "/Images/jasper.jpg",
    description: "A vast wilderness of glaciers, lakes and the Canadian Rockies.",
    established: 1907,
    area: "10,878 km²",
    elevation: "3,747 m",
  },

  

  {
    name: "Wadi Rum",
    type: "Valley",
    country: "Jordan",
    location: "Aqaba Governorate,",
    image: "/Images/wadi-rum.jpg",
    description: "A dramatic desert landscape of sandstone mountains and red dunes.",
    established: 1998,
    area: "720 km²",
    elevation: "1,854 m",
  },

  {
    name: "Khao Sok",
    type: "National Park",
    country: "Thailand",
    location: "Surat Thani Province,",
    image: "/Images/khao-sok.jpg",
    description: "Ancient rainforest with limestone cliffs, caves and emerald lakes.",
    established: 1980,
    area: "739 km²",
    elevation: "960 m",
  },

   {
    name: "Los Glaciares",
    type: "National Park",
    country: "Argentina",
    location: "Santa Cruz Province,",
    image: "/Images/los-glaciares.jpg",
    description: "Home to massive glaciers, snow-capped peaks and pristine lakes.",
    established: 1937,
    area: "7,269 km²",
    elevation: "3,405 m",
  },
  
  {
    name: "Torres del Paine",
    type: "National Park",
    country: "Chile",
    location: "Magallanes Region,",
    image: "/Images/torres-del-paine.jpg",
    description: "Known for its granite towers, turquoise lakes and Patagonian landscapes.",
    established: 1959,
    area: "2,420 km²",
    elevation: "3,050 m",
  },

];



const swiperWrapper = document.querySelector(".swiper-wrapper");
const parkDetails = document.querySelector(".park-details");
const detailsImage = document.querySelector(".details-image");
const detailsType = document.querySelector(".details-type");
const detailsTitle = document.querySelector(".details-title");
const detailsLocation = document.querySelector(".details-location");
const detailsDescription = document.querySelector(".details-description");
const detailsEstablished = document.querySelector(".details-established");
const detailsArea = document.querySelector(".details-area");
const detailsElevation = document.querySelector(".details-elevation");
let pointerX = null;
let pointerY = null;


// function that creates park cards from the array

function renderParkCards() {
  parks.forEach((park) => {
    const slide = document.createElement("article");
    slide.classList.add("swiper-slide", "park-slide");

    const image = document.createElement("img");
    image.src = park.image;
    image.alt = park.name;

    const title = document.createElement("h3");
    title.textContent = park.name;

    const country = document.createElement("p");
    country.classList.add("park-country");
    country.textContent = park.country;
    country.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${park.country}`;

    slide.append(image, title, country);


    slide.addEventListener("click", () => {
      showParkDetails(park);
      parkDetails.scrollIntoView({ behavior: "smooth", block: "start" });
    });



    swiperWrapper.append(slide);

  })

};


renderParkCards()

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Mousewheel ],
  loop: false, //для того, чтобы можно было сделать отступ слева 
  slidesPerView: 4.2,
  spaceBetween: 24,
  slidesOffsetBefore: 118,
  slidesOffsetAfter: 118,

  speed: 350,
  touchRatio: 2,
  threshold: 2,
  
  
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1.5,
    releaseOnEdges: true,
  },

  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 0.8,
    momentumVelocityRatio: 0.9,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
    },
    768: {
      slidesPerView: 2.4,
      slidesOffsetBefore: 48,
      slidesOffsetAfter: 48,
    },
    1024: {
      slidesPerView: 4.2,
      slidesOffsetBefore: 118,
     slidesOffsetAfter: 118,
    },
  },
  
 


  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // }, ---- чтоб удалить точки под каруселью

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    addIcons: false, //скрывает вшитые иконки стрелок

  },

})

function updateCardUnderPointer() {
  document.querySelectorAll(".park-slide.is-pointer-over").forEach((slide) => {
    slide.classList.remove("is-pointer-over");
  });

  if (pointerX === null || pointerY === null) {
    return;
  }

  const elementUnderPointer = document.elementFromPoint(pointerX, pointerY);
  const slide = elementUnderPointer?.closest(".park-slide");

  if (slide) {
    slide.classList.add("is-pointer-over");
  }
}

document.addEventListener("pointermove", (event) => {
  pointerX = event.clientX;
  pointerY = event.clientY;
  updateCardUnderPointer();
});

document.addEventListener("pointerleave", () => {
  pointerX = null;
  pointerY = null;
  updateCardUnderPointer();
});

swiper.on("setTranslate", updateCardUnderPointer);
swiper.on("transitionEnd", updateCardUnderPointer);


function showParkDetails (park) {
  detailsImage.src = park.image;
  detailsImage.alt = park.name;

  detailsType.textContent = park.type;
  detailsTitle.textContent = park.name;
  detailsLocation.textContent = `${park.location} ${park.country}`;
  detailsDescription.textContent = park.description;
  detailsEstablished.textContent = park.established;
  detailsArea.textContent = park.area;
  detailsElevation.textContent = park.elevation;
}

showParkDetails(parks[0])
