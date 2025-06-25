import './App.css';
import bgImage from './assets/bg.jpg';  // place your image in src/assets/

export default function App() {
  return (
    <div className="hero">
      <div className="overlay">
        <h1>Welcome to My Site</h1>
        <p>Discover amazing things</p>
        <button className="cta">Get Started</button>
      </div>
    </div>
  );
}