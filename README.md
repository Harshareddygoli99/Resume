# Harsha's Portfolio Website

A modern, interactive portfolio website with fluid animations, dynamic widgets, and a visually immersive UI. This project showcases skills and experience in a unique, next-gen graphical interface.

## Features

- 🚀 Futuristic UI with glass morphism and neon effects
- 🌟 Interactive 3D elements using Three.js
- ✨ Smooth animations with Framer Motion and GSAP
- 📱 Fully responsive design for all devices
- 🎨 Dynamic particle background with star-shaped elements
- 📊 Animated skill bars and project cards
- 📝 Functional contact form with EmailJS integration
- ⚡ Built with Next.js and TypeScript for optimal performance
- 🌐 Custom 404 page with automatic redirection for SPA routing

## Live Website

Visit the live website at: [https://harshareddygoli99.github.io/Resume/](https://harshareddygoli99.github.io/Resume/)

## Deployment

This project is configured for GitHub Pages deployment.

### Manual Deployment

You can manually deploy the site by running:

```bash
./deploy.sh
```

This script will:
1. Build the project
2. Create a `.nojekyll` file to ensure GitHub Pages processes the site correctly
3. Commit the build to the gh-pages branch
4. Push the gh-pages branch to GitHub

## Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/Harshareddygoli99/Resume.git
   cd Resume/resume-app
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
- Configure EmailJS in the `Contact.tsx` component

## Contact Form Setup

The contact form uses EmailJS for sending emails. To set up your own EmailJS integration:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (e.g., Gmail, Outlook)
3. Create an email template named `template_contact`
4. Update the `Contact.tsx` component with your:
   - Public Key
   - Service ID
   - Template ID

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js
- EmailJS

## Recent Updates

- Added black galaxy theme with star-shaped particle background
- Integrated EmailJS for functional contact form
- Added custom 404 pages to fix SPA routing on GitHub Pages
- Updated website tab name to "Harsha Portfolio"
- Improved mobile responsiveness

## License

This project is licensed under the MIT License.
