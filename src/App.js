import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavHome from "./components/NavHome"
import NavAbout from "./components/NavAbout"
import NavBlog from "./components/NavBlog"
import NavEvents from "./components/NavEvents"
import NavInterest from "./components/NavInterest"
import NavFaq from "./components/NavFaq"
import NavQoutes from "./components/NavQoutes"





export default function App() {
    return (
        <div>
            <Router>
                <Header />
                <div>
                    <Routes >
                        <Route path='/' element={<NavHome />} />
                        <Route path='/about' element={<NavAbout />} />
                        <Route path='/blog' element={<NavBlog />} />
                        <Route path='/events' element={<NavEvents />} />
                        <Route path='/interest' element={<NavInterest />} />
                        <Route path='/faq' element={<NavFaq />} />
                        <Route path='/qoutes' element={<NavQoutes />} />
                    </Routes>
                </div>
            </Router>
            <Footer />
        </div>
    )
}