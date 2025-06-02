import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portoflio";
import Timeline from "./components/Timeline";
import { UIProvider } from "./context/UIProvider";

function App() {
    return (
        <UIProvider>
            <Header />
            <Introduction />
            <Portfolio />
            <Timeline />
            <Contact />
            <Footer />
        </UIProvider>
    );
}

export default App;
