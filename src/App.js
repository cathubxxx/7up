import logo from './assets/logo.png';
import './App.css';
import tg from './assets/tg.svg';
import tw from './assets/tw.svg';
import can from './assets/can.png'

function App() {
  const supply = "7.777.777";
  const contract = "TBA"
  const ticker = "7UP"

  return (
    <div className="App">
      <div className="main">
        <div className="insideApp">
          <div className="header">
            <div className="logoBlock">
              <img alt="logo" src={logo} />
            </div>
            <div className="navigation">
              <a href="#main"><p className="navItem">7UPITER</p></a>
              <a href="#tokenomics"><p className="navItem">TOKENOMICS</p></a>
              <a href="#about"><p className="navItem">ABOUT</p></a>
              <div className="socialBlock">
                <a href="https://t.me/sevenjupiter"><img className="social" alt="telegram" src={tg}/></a>
                <a href="https://twitter.com/7upJupiter"><img className="social" alt="twitter" src={tw}/></a>
              </div>
            </div>
          </div>
          <div className="imgButtonBlock">
            <img alt="can" className="can" src={can}/>
            <div className="buttonBlock"><button className="button"><p className="buttonHeading"><u>JOIN THE CLUB</u></p><p className="buttonSubheading">BUY {ticker}</p></button></div>
          </div>
        </div>
      </div>
      <div className="section" id="tokenomics">
          <div className="metric">
            <p className="smallHeading">SUPPLY</p>
            <h1 className="heading"><u>{supply}</u></h1>
          </div>
          <div className="metric">
            <p className="smallHeading">TAX</p>
            <h1 className="heading"><u>0/0</u></h1>
          </div>
          <div className="metric">
            <p className="smallHeading">MARKETING</p>
            <h1 className="heading"><u>20%</u></h1>
          </div>
      </div>
      <div className="about" id="about">
        <div className="caBlock"><p className="caText">CA: {contract}</p></div>
        <p className="bodyText">Once upon a cosmic fizz, in the far reaches of the celestial soda aisle, there existed a sparkling adventure that combined the effervescence of 7up
with the grandiosity of Jupiter. This whimsical tale began in a celestial convenience store, where the planets shopped
for their favorite beverages.</p>
      </div>
    </div>
  );
}

export default App;
