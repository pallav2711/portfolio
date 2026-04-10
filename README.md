# Pallav Kanani - Developer Portfolio

A modern, highly interactive, and visually stunning developer portfolio website built with the MERN stack.

## 🚀 Features

- **Modern Design**: Dark theme with gradients, glassmorphism, and smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive UI**: Framer Motion animations and particle.js background
- **Contact Form**: Integrated with MongoDB and email notifications
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Optimized loading and rendering

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion (animations)
- Particles.js (background effects)
- React Icons
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Nodemailer (email)
- Express Validator

## 📁 Project Structure

```
pallav-portfolio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Node.js backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── index.js
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd pallav-portfolio
```

2. **Install all dependencies**
```bash
npm run install-all
```

3. **Configure environment variables**

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. **Start MongoDB**
```bash
# If using local MongoDB
mongod
```

5. **Run the application**

Development mode (runs both client and server):
```bash
npm run dev
```

Or run separately:
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

6. **Open your browser**
```
http://localhost:3000
```

## 📧 Email Configuration

For the contact form to work:

1. **Gmail Setup**:
   - Enable 2-factor authentication
   - Generate an app-specific password
   - Use that password in `.env`

2. **Other Email Services**:
   - Update `EMAIL_SERVICE` in `.env`
   - Configure credentials accordingly

## 🌐 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Set root directory to `client`
4. Add environment variable: `REACT_APP_API_URL=your-backend-url`
5. Deploy

### Backend (Render/Railway/Heroku)

1. Push code to GitHub
2. Create new web service
3. Set root directory to `server`
4. Add environment variables from `.env`
5. Deploy

### Full Stack (Vercel)

You can also deploy both on Vercel:
- Frontend: Deploy `client` folder
- Backend: Deploy `server` folder as serverless functions

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `client/src/components/Hero.jsx`
2. **About Section**: Edit `client/src/components/About.jsx`
3. **Projects**: Edit `client/src/components/Projects.jsx`
4. **Skills**: Edit `client/src/components/Skills.jsx`
5. **Services**: Edit `client/src/components/Services.jsx`

### Change Colors

Edit `client/tailwind.config.js`:
```js
colors: {
  primary: '#6366f1',    // Change primary color
  secondary: '#8b5cf6',  // Change secondary color
}
```

### Add Particles.js

Add this script to `client/public/index.html`:
```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

## 📱 Sections

1. **Hero** - Landing section with animated typing
2. **About** - Professional introduction
3. **Skills** - Technical skills with progress bars
4. **Projects** - Portfolio showcase with filters
5. **Services** - Offered services
6. **Testimonials** - Client reviews
7. **Contact** - Contact form with validation
8. **Footer** - Social links and info

## 🔧 Available Scripts

```bash
npm run dev          # Run both client and server
npm run client       # Run frontend only
npm run server       # Run backend only
npm run build        # Build for production
npm run install-all  # Install all dependencies
```

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Pallav Kanani**
- Full Stack Developer
- AI & ML Student

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!
