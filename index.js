import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/info.js"
import About from "./components/about.js"
import PhotoProfile from "./components/photo.js"
import Interests from "./components/interests.js"
import Footer from "./components/footer.js"

function App() {
    return (
        <div>
            <PhotoProfile />
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


