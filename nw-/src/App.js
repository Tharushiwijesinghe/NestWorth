import { Routes, Route } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import Estimate from "./components/estimate.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";
import Services from "./components/services.jsx";
import Testimonials from "./components/testimonials.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";


export default function App() {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: false,
        });

        sr.reveal(
            `nav, #hero, #services, #estimate, #testimonials, #contact, footer`,
            {
                opacity: 0,
                interval: 300,
            }
        );
    }, []); // <- Uncommented the useEffect dependency array

    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Services />
                            <Estimate />
                            <Testimonials />
                            <Contact />
                        </>
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
}
