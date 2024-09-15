import "bulma/css/bulma.css";
// import Css lib using npm install.
// it is a common way to use css lib in react process.
// most libs have basic cards text images etc.
import ProfileCard from "../../pdas/src/profileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

// when importing images must be in src file
// these are served in different ways depending on the size
// less than 9.4kb raw data is converted into a string base 64
// or if it is over a 9.4kb it will serve it up directly
// as a file.

// you only use import for images that are from src if they are from an API you dont import them

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
              title="Alexa" 
              handle="@alexa99" 
              image={AlexaImage}
              description="Alexa was created by Amazon it helps you buy things" />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@Cortana32"
                image={CortanaImage}
                description="Cortana was made by microsoft, Who knows what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard 
              title="Siri" 
              handle="@siri01" 
              image={SiriImage}
              description="Siri was made by Apple and is being phased out. We think" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
