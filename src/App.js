//Styles;
import './assets/css/App.css'; 

//Components; 
import NavBar from './Components/NavBar';
import WeatherPanel from './Components/WeatherPanel'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
    </div>
  );
}

export default App;
