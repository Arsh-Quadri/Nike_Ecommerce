import Cart from "./Components/Cart";
import FlexContent from "./Components/FlexContent";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Sales from "./Components/Sales";
import Stories from "./Components/Stories";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './Data/Data';

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative scroll-hidden scroll-style">
        <Main heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />

        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  );
}

export default App;
