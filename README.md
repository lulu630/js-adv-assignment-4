# National Parks Explorer

A responsive website for discovering national parks and protected landscapes from around the world. The project presents a curated collection of destinations through an image carousel and provides facts, statistics, and detailed descriptions for each location.

**Live demo:** [lulu630.github.io/js-adv-assignment-4](https://lulu630.github.io/js-adv-assignment-4/)

## Features

- Responsive, touch-friendly park carousel
- Mouse-wheel and navigation-button controls
- Detailed information for every destination
- Smooth scrolling between the park carousel and detail section
- Responsive layouts for desktop and mobile screens
- Reduced-motion support for selected visual effects
- Video hero section and image-based park cards

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- [Swiper](https://swiperjs.com/)
- [Vite](https://vite.dev/)
- [Font Awesome](https://fontawesome.com/)

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm before running the project locally.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lulu630/js-adv-assignment-4.git
   ```

2. Open the application directory:

   ```bash
   cd js-adv-assignment-4/national-parks-explorer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Open the local URL printed in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build in `dist` |
| `npm run preview` | Serves the production build locally for testing |

## Project Structure

```text
js-adv-assignment-4/
├── .github/workflows/        # GitHub Pages deployment workflow
├── national-parks-explorer/
│   ├── public/               # Images and video
│   ├── src/
│   │   ├── main.js           # Park data and application logic
│   │   └── style.css         # Layout, components, and responsive styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Deployment

The site is built with Vite and deployed to GitHub Pages through the workflow in `.github/workflows/deploy.yml`. A new deployment runs automatically whenever changes are pushed to the `main` branch.

## Credits

Images are sourced from [Unsplash](https://unsplash.com/). Park information is based on official national park authorities, government tourism and conservation agencies, UNESCO, and the other sources credited on the website.

## Author

Created by [lulu630](https://github.com/lulu630).
