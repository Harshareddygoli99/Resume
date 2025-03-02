# Futuristic Interactive Resume

A modern, interactive resume website with fluid animations, dynamic widgets, and a visually immersive UI. This project showcases skills and experience in a unique, next-gen graphical interface.

## Features

- 🚀 Futuristic UI with glass morphism and neon effects
- 🌟 Interactive 3D elements using Three.js
- ✨ Smooth animations with Framer Motion and GSAP
- 📱 Fully responsive design for all devices
- 🎨 Dynamic particle background
- 📊 Animated skill bars and project cards
- 📝 Interactive contact form
- ⚡ Built with Next.js and TypeScript for optimal performance

## Deployment

This project is configured for GitHub Pages deployment.

### Automatic Deployment (GitHub Actions)

The project includes a GitHub Actions workflow that automatically builds and deploys the site when changes are pushed to the main branch.

### Manual Deployment

You can also manually deploy the site by running:

```bash
npm run deploy
```

This will:
1. Build the project
2. Create a `.nojekyll` file to ensure GitHub Pages processes the site correctly
3. Commit the build to the gh-pages branch
4. Push the gh-pages branch to GitHub

## Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/Harshareddygoli99/Resume.git
   cd Resume
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

- Update personal information in the `About.tsx` component
- Modify projects in the `Projects.tsx` component
- Add or remove skills in the `Skills.tsx` component
- Update experience in the `Experience.tsx` component

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js

## License

This project is licensed under the MIT License.
