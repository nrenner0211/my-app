import { Banner } from '../components/Banner';
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";

export const Home = () => {
    return (
        <section className="home">
            <Banner />
            <Projects />
            <Footer />
        </section>
    )
}