import topAnim1 from "./images/top_anim_1.png";
import topAnim2 from "./images/top_anim_2.png";
import topAnim3 from "./images/top_anim_3.png";
import topAnim4 from "./images/top_anim_4.png";
import bottomAnim1 from "./images/bottom_anim_1.png";
import bottomAnim2 from "./images/bottom_anim_2.png";
import bottomAnim3 from "./images/bottom_anim_3.png";
import bottomAnim4 from "./images/bottom_anim_4.png";

import background from "./images/background.jpg";
import panier from "./images/panier.png";
import tasse from "./images/tasse.jpg";
import seeds from "./images/seeds.jpg";
import romarin from "./images/romarin.png";
// import bottom from './images/bottom_oil_1.png';
import logo from "./images/logo_melisse_oil.png";
// import melisse from './images/melisse.png';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="root-container">

      <img src={background} className="background" alt="background" /> 

        <img src={romarin} className="romarin" alt="romarin" />

        <div className="titre-pousse">Ca pousse !</div>

        <img src={panier} className="panier" alt="panier" />

        <div className="titre-cueillette">Cueillette</div>
        <div className="ampersand">&#38;</div>
        <div className="titre-sechage">Séchage</div>


        {/* <img src={seeds} className="seeds" alt="seeds" /> */}
        <div className="titre-melange">Les mélanges</div>

        <img src={tasse} className="tasse" alt="tasse" />
        <div className="pitch">Tisanes artisanales du Gers</div>


        <img src={topAnim1} className="top anim1" alt="top" />
        <img src={topAnim2} className="top anim2" alt="top" />
        <img src={topAnim3} className="top anim3" alt="top" />
        <img src={topAnim4} className="top anim4" alt="top" />

        <img src={bottomAnim1} className="bottom anim1" alt="bottom" />
        <img src={bottomAnim2} className="bottom anim2" alt="bottom" />
        <img src={bottomAnim3} className="bottom anim3" alt="bottom" />
        <img src={bottomAnim4} className="bottom anim4" alt="bottom" />



        {/* <img src={bottom} className="bottom" alt="bottom" /> */}
        {/* <img src={melisse} className="melisse" alt="melisse" /> */}

        <img src={logo} className="logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;

// import topAnim1 from './images/top_anim_1.png';
// import topAnim2 from './images/top_anim_2.png';
// import topAnim3 from './images/top_anim_3.png';
// import topAnim4 from './images/top_anim_4.png';

// import bottomAnim1 from './images/bottom_anim_1.png';
// import bottomAnim2 from './images/bottom_anim_2.png';
// import bottomAnim3 from './images/bottom_anim_3.png';
// import bottomAnim4 from './images/bottom_anim_4.png';

{
  /* <img src={topAnim1} className="top anim1" alt="top" />
        <img src={topAnim2} className="top anim2" alt="top" />
        <img src={topAnim3} className="top anim3" alt="top" />
        <img src={topAnim4} className="top anim4" alt="top" /> */
}

// <img src={bottomAnim1} className="bottom anim1" alt="bottom" />
// <img src={bottomAnim2} className="bottom anim2" alt="bottom" />
// <img src={bottomAnim3} className="bottom anim3" alt="bottom" />
// <img src={bottomAnim4} className="bottom anim4" alt="bottom" />
