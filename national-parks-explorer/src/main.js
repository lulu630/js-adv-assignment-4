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
    location: "California,",
    country: "United States",
    image: `${import.meta.env.BASE_URL}Images/yosemite.jpg`,
    description: "Yosemite was first protected in 1864 and remains one of the most iconic landscapes in the Sierra Nevada. The park is famous for powerful waterfalls, deep valleys, granite cliffs and ancient giant sequoias. Its scenery was shaped by glaciers, which carved the dramatic form of Yosemite Valley. Beyond the most visited viewpoints, Yosemite protects grand meadows, clear streams, lakes and high mountain wilderness. The park covers nearly 1,200 square miles, giving wildlife and plant communities room to thrive. It is a place where geology, conservation history and High Sierra beauty all meet.",
    established: 1890,
    area: "3,070 km²",
    elevation: "3,997 m",
    visitors: "~4M (2025)",
  },

  {
    name: "Kruger",
    type: "National Park",
    location: "Limpopo & Mpumalanga,",
    country: "South Africa",
    image: `${import.meta.env.BASE_URL}Images/kruger.jpg`,
    description: "Kruger is one of Africa's great wildlife reserves and the flagship park of South African National Parks. The protected area covers nearly 2 million hectares across the Lowveld of northeastern South Africa. It was first established to protect wildlife in 1898 and later became one of South Africa's best known national parks. Kruger is home to the Big Five and an exceptional range of life, including hundreds of bird species and well over one hundred mammal species. SANParks also records rich plant, reptile, amphibian and fish diversity across the park. Alongside its wildlife, Kruger protects cultural heritage sites, including rock paintings and archaeological places such as Masorini and Thulamela.",
    established: 1926,
    area: "19,623 km²",
    elevation: "840 m",
    visitors: "~1.8M (2025)",
  },

  {
    name: "Snowdonia",
    type: "National Park",
    location: "North Wales,",
    country: "Wales",
    image: `${import.meta.env.BASE_URL}Images/snowdonia.jpg`,
    description: "Eryri, also known as Snowdonia, is Wales' largest national park, covering 823 square miles. Its landscape includes towering peaks, glacial valleys, lakes, rivers, forests and 74 miles of coastline. Yr Wyddfa, also called Snowdon, is the park's most famous summit and the highest mountain in Wales. The park contains nine mountain ranges and thousands of miles of routes for walking and exploring. Eryri is also a living cultural landscape, home to local communities where the Welsh language is part of everyday life. Its geology, native woodland, wildlife and heritage make it much more than a mountain destination.",
    established: 1951,
    area: "2,130 km²",
    elevation: "1,085 m",
    visitors: "~4M",
  },

  {
    name: "Serengeti",
    type: "National Park",
    location: "Mara & Simiyu Regions,",
    country: "Tanzania",
    image: `${import.meta.env.BASE_URL}Images/serengeti.jpg`,
    description: "Serengeti National Park protects vast plains of savanna in northern Tanzania. UNESCO describes its annual migration of wildebeest, gazelles and zebras, followed by predators, as one of the world's most impressive natural events. The wider migration route depends on seasonal water and grazing across the Serengeti ecosystem. The park supports one of the planet's most important predator-prey systems, with lions, leopards, cheetahs, hyenas and wild dogs. UNESCO also notes globally threatened or endangered species such as black rhinoceros, elephant, wild dog and cheetah. More than 500 bird species are present seasonally or year-round, adding to the park's remarkable biodiversity.",
    established: 1951,
    area: "14,763 km²",
    elevation: "1,850 m",
    visitors: "~491K (2025)",
  },

  {
    name: "Jasper",
    type: "National Park",
    location: "Alberta,",
    country: "Canada",
    image: `${import.meta.env.BASE_URL}Images/jasper.jpg`,
    description: "Jasper is the largest national park in the Canadian Rockies and part of the Canadian Rocky Mountain Parks UNESCO World Heritage Site. Parks Canada describes it as a place of abundant wildlife and an extensive trail network. The park includes rugged mountains, glaciers, lakes, waterfalls, hot springs and wide valleys shaped by ice and rivers. It is also known as one of the world's largest dark sky preserves, making the night sky part of the park experience. Visitors explore different regions of the park, from frontcountry viewpoints to remote backcountry routes. Jasper's scale gives it a strong wilderness character while still offering access to classic Rocky Mountain landscapes.",
    established: 1907,
    area: "10,878 km²",
    elevation: "3,747 m",
    visitors: "~2.13M (2025)",
  },

  {
    name: "Wadi Rum",
    type: "Valley",
    location: "Aqaba Governorate,",
    country: "Jordan",
    image: `${import.meta.env.BASE_URL}Images/wadi-rum.jpg`,
    description: "Wadi Rum is a protected desert landscape in southern Jordan, close to the border with Saudi Arabia. UNESCO lists it as a mixed natural and cultural World Heritage site covering about 74,000 hectares. The area is known for narrow gorges, natural arches, towering cliffs, caverns, ramps and red sand valleys. Its sandstone and granite formations create the dramatic scenery often called the Valley of the Moon. Wadi Rum also preserves evidence of around 12,000 years of human occupation and interaction with the desert. UNESCO records about 25,000 rock carvings and 20,000 inscriptions, showing the development of human thought and early alphabetic writing.",
    established: 1998,
    area: "720 km²",
    elevation: "1,854 m",
    visitors: "199K+ (2025)",
  },

  {
    name: "Khao Sok",
    type: "National Park",
    location: "Surat Thani Province,",    
    country: "Thailand",
    image: `${import.meta.env.BASE_URL}Images/khao-sok.jpg`,
    description: "Khao Sok National Park protects rainforest, limestone mountains, caves, rivers and the striking Cheow Lan Lake. The park covers about 739 square kilometers in Surat Thani Province. It includes one of the largest remaining areas of virgin forest in southern Thailand. The rainforest is often described as ancient and unusually diverse, with dense vegetation, bamboo, lianas and buttress-rooted trees. Cheow Lan Lake, created by the Ratchaprapha Dam, is now famous for turquoise water and steep limestone cliffs. Wildlife in and around the park includes monkeys, hornbills, elephants, tapirs and the giant Rafflesia flower.",
    established: 1980,
    area: "739 km²",
    elevation: "960 m",
    visitors: "~419K (2019)",
  },

   {
    name: "Los Glaciares",
    type: "National Park",
    location: "Santa Cruz Province,",
    country: "Argentina",
    image: `${import.meta.env.BASE_URL}Images/los-glaciares.jpg`,
    description: "Los Glaciares National Park lies in Argentine Patagonia and is named for the many glaciers that shape its landscape. UNESCO describes it as an area of exceptional natural beauty with rugged mountains and numerous glacial lakes. Lake Argentino, one of its most important lakes, stretches about 160 kilometers. Many glaciers are fed by the South Patagonian Ice Field, one of the largest ice fields outside the polar regions. The Perito Moreno Glacier is especially famous for calving blue icebergs into Lake Argentino with dramatic crashes. The park also protects Patagonian steppe, Magellanic forest, high mountain habitats and iconic peaks such as Fitz Roy.",
    established: 1937,
    area: "7,269 km²",
    elevation: "3,405 m",
    visitors: "~623K (2025)",
  },
  
  {
    name: "Torres del Paine",
    type: "National Park",
    location: "Magallanes Region,",
    country: "Chile",
    image: `${import.meta.env.BASE_URL}Images/torres-del-paine.jpg`,
    description: "Torres del Paine National Park is one of the defining landscapes of Chilean Patagonia. Its centerpiece is the Paine mountain group, including the three granite towers that give the park its name. The park brings together mountains, glaciers, rivers, waterfalls and vivid lakes such as Grey, Pehoe and Nordenskjold. It sits in a transition zone between Magellanic subpolar forest and Patagonian steppe. The Southern Patagonian Ice Field feeds glaciers in the park, including Grey, Dickson and Tyndall. Torres del Paine is also recognized as a UNESCO Biosphere Reserve and is known for wildlife such as guanacos, pumas, foxes, condors and many other birds.",
    established: 1959,
    area: "2,420 km²",
    elevation: "3,050 m",
    visitors: "284K+ (2025)",
  },

  {
    name: "Plitvice Lakes",
    type: "National Park",
    location: "Mala Kapela & Lička Plješivica,",
    country: "Croatia",
    image: `${import.meta.env.BASE_URL}Images/plitvice.jpg`,
    description: "Plitvice Lakes is Croatia's oldest and largest national park, set between the Mala Kapela and Lička Plješivica mountain ranges. Its lake system consists of 16 named lakes and numerous smaller ones arranged in natural cascades. Water flowing through the karst landscape deposits calcium carbonate, gradually forming the tufa barriers that separate the lakes and create waterfalls. This geological and biological process is still active, so the landscape continues to change over time. Most of the park is covered by well-preserved forests that provide habitat for brown bears, grey wolves, lynx and many rare species. Plitvice Lakes was added to the UNESCO World Heritage List in 1979 for its exceptional beauty and its ongoing natural processes.",
    established: 1949,
    area: "297 km²",
    elevation: "1,279 m",
    visitors: "~1.5M",
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
const detailsVisitors = document.querySelector(".details-visitors");
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
  modules: [Navigation, Mousewheel ],
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
      slidesPerView: 4.1,
      slidesOffsetBefore: 118,
     slidesOffsetAfter: 118,
    },
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    addIcons: false,
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
  detailsVisitors.textContent = park.visitors;
}

showParkDetails(parks[0])
