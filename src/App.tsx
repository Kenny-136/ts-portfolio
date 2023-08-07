import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {

  return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</BrowserRouter>
		</>
  )
}

export default App
