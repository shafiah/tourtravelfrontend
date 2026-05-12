# Tour And Travel - Modern React Landing Page

A professional, responsive, and modern Tour and Travel website built with React.js functional components and React Hooks.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Auto-rotating Banner**: Beautiful travel image slider with auto-rotation
- **Trending Destinations**: Display of top destinations in a responsive grid layout
- **Modern UI/UX**: Professional color scheme with smooth animations and hover effects
- **Search Functionality**: Integrated search bar in the banner for destination searches
- **Navigation**: Comprehensive navbar with menu items and auth buttons

## Project Structure

```
tourandtravel/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Banner/
│   │   │   ├── Banner.jsx
│   │   │   └── Banner.css
│   │   └── DestinationCard/
│   │       ├── DestinationCard.jsx
│   │       └── DestinationCard.css
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.jsx
│   │       └── Home.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Destinations Included

### First Row
- Kerala
- Darjeeling
- Bali
- Kashmir

### Second Row
- Goa
- Dubai
- Manali
- Thailand

## Technologies Used

- **React 18.2.0**: Modern React library with hooks
- **React Router DOM**: For routing (routing-ready structure)
- **React Icons**: For beautiful SVG icons
- **CSS3**: Modern CSS with animations and transitions
- **Responsive Design**: Mobile-first approach

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps to Install

1. **Navigate to the project directory**:
   ```bash
   cd tourandtravel
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`

## Available Scripts

- **`npm start`**: Runs the app in development mode
- **`npm build`**: Builds the app for production
- **`npm test`**: Launches the test runner
- **`npm eject`**: Ejects from Create React App (irreversible)

## Component Details

### Navbar Component
- Sticky navigation with responsive hamburger menu
- Company logo on the left
- Navigation links: Flights, Hotels, Trains, Bus, Holidays
- Login and Sign Up buttons
- Mobile-responsive with collapsible menu

### Banner Component
- Auto-rotating carousel (5-second interval)
- 4 beautiful travel destination images
- Navigation arrows to manually change slides
- Dot indicators for slide position
- Search box with icon in the center
- Overlay effects for better readability

### DestinationCard Component
- Responsive image cards with 1:1 aspect ratio
- Destination name display
- Hover effects with scale and shadow transforms
- "Explore Now" button on hover
- Image zoom effect on hover

### Home Page
- Combines all components
- Section for trending destinations
- 4 columns grid layout (responsive)
- 8 destination cards (2 rows x 4 columns)
- Smooth animations and transitions

## Responsive Breakpoints

- **Desktop**: > 1024px (4 columns grid)
- **Tablet**: 768px - 1024px (3 columns grid)
- **Mobile**: 481px - 767px (2 columns grid)
- **Small Mobile**: < 480px (1-2 columns grid)

## Design Features

### Color Scheme
- Primary Gradient: `#667eea to #764ba2` (Purple)
- Accent Color: `#ff6b6b` (Red)
- Text: `#333` (Dark Gray)
- Background: `#f5f5f5` (Light Gray)

### Animations
- Smooth fade transitions between banner slides
- Slide animations for cards on scroll
- Hover scale effects
- Gradient transitions on buttons

### UI Elements
- Rounded corners (8px - 25px)
- Box shadows for depth
- Smooth transitions (0.3s - 0.8s)
- Responsive typography
- Flexbox and CSS Grid layouts

## Future Enhancements

- Add destination detail pages
- Implement booking functionality
- Add user authentication
- Integrate with backend API
- Add reviews and ratings
- Add payment gateway
- Add a contact form
- Add more travel packages
- Implement filtering options
- Add photo gallery with lightbox

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading images
- Minified CSS and JavaScript
- Optimized component re-renders
- Responsive image handling
- Efficient event handling

## Best Practices Implemented

- Functional components only
- React Hooks for state management
- Proper component structure and reusability
- BEM CSS naming convention
- Clean and readable code
- Comments for documentation
- Responsive mobile-first design

## Author

Created as a professional travel website template for Tour and Travel business.

## License

This project is open source and available under the MIT License.

---

**Happy Traveling! ✈️🌴**
