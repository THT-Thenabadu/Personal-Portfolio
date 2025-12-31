import logo from './logo.svg';
import './App.css';
import Particles from './Particles.jsx';
import Heading from './Components/Heading.jsx';
import ProjectSlider from './Components/ProjectSlider.jsx';
import Title from './Components/Title.jsx';
import TrueFocus from './Components/TrueFocus.jsx';

function App() {
  return (
    <div className="App">
      <Particles />

        <Heading />
        <Title
        title='Projects'
        className='Title-container'
        />
        <ProjectSlider className="slider"/>
      <Title
      title='Skills'
      className='Title-container2'

      />
      <div className="TrueFocus-container">
      <TrueFocus
      sentence='HTML CSS JAVASCRIPT React'
      manualMode= 'false'
      blurAmount='6'
      />
      </div>


    </div>
  );
}

export default App;
