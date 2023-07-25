import "./App.css";
import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import data from "./components/data";
function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots = {item.openSpots}
        // instead of writing code manually we can write as below
        item = {item}
      />
    );
  });
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
