import './App.css';
import photo from './me.jpeg'
import linkedin from "./icons8-linkedin-circled.gif"
import email from './icons8-email-open-50.png'
import twitter from './icons8-twitter.gif'
import github from './icons8-github.gif'

function App() {
  return (
    <div className="App">
      <img src = {photo} className = "photo"/>
      <h1>Advait Dhingra</h1>
      <h2>Particle Physics Enthusiast</h2>
      <h4>From Bonn, Federal Republic of Germany</h4>
      <div>
      <a href = "https://linkedin.com/in/advaitdhingra" target="_blank"><img src = {linkedin} style = {{
        width: "30px"
      }}/></a>
      <a href = "mailto:advait.dhingra1006@gmail.com"><img src = {email} style = {{
        width: "30px"
      }}/></a>
      <a href = "https://twitter.com/advaitdhingra" target="_blank"><img src = {twitter} style = {{
        width: "30px"
      }}/></a>
      <a href = "https://github.com/advaitdhingra" target="_blank"><img src = {github} style = {{
        width: "30px"
      }}/></a>
      </div>
    </div>
  );
}

export default App;
