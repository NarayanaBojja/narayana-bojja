import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../home/Home';
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import NoPage from "../nopgae/NoPage";

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="education" element={<Education />} />
                <Route path="experience" element={<Experience />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Main;