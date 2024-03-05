import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "../src/Components/Layout"
import Yellowstone from "../src/Components/Pages/Yellowstone"
import SmokyMountains from "./Components/Pages/SmokyMountains"
import Yosemite from "./Components/Pages/Yosemite"
import Arches from '../src/Components/Pages/Arches'
import Banff from '../src/Components/Pages/Banff'
import BryceCanyon from '../src/Components/Pages/BryceCanyon'
import Fundy from '../src/Components/Pages/Fundy'
import Glacier from '../src/Components/Pages/Glacier'
import GrandCanyon from '../src/Components/Pages/GrandCanyon'
import GranTeton from '../src/Components/Pages/GranTeton'
import GrosMorne from '../src/Components/Pages/GrosMorne'
import Sequoia from '../src/Components/Pages/Sequoia'
import RockyMountain from '../src/Components/Pages/RockyMountain'
import Jasper from '../src/Components/Pages/Jasper'
import MountRainier from '../src/Components/Pages/MountRainier'
import NewRiver from '../src/Components/Pages/NewRiver'
import './App.css'

function App() {

    return (
        <>
            <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/Yellowstone" element={<Yellowstone />} />
                <Route path="/Yosemite" element={<Yosemite />} />
                <Route path="/SmokyMountains" element={<SmokyMountains />} />
                <Route path="/Banff" element={<Banff />} />
                <Route path="/Arches" element={<Arches />} />
                <Route path="/Glacier" element={<Glacier />} />
                <Route path="/Jasper" element={<Jasper />} />
                <Route path="/NewRiver" element={<NewRiver />} />
                <Route path="/RockyMountain" element={<RockyMountain />} />
                <Route path="/Sequoia" element={<Sequoia />} />
                <Route path="/GranTeton" element={<GranTeton />} />
                <Route path="/MountRainier" element={<MountRainier />} />
                <Route path="/GrosMorne" element={<GrosMorne />} />
                <Route path="/Fundy" element={<Fundy />} />
                <Route path="/BryceCanyon" element={<BryceCanyon />} />
                <Route path="/GrandCanyon" element={<GrandCanyon />} />
            </Routes>
            </Router>
        </>
    )
}

export default App
