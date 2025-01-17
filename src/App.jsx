import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import './index.css'
import Layout from './components/Layout/Layout'
import Music from './pages/Music/Music';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Group from './pages/Group/Group';
import GroupDetails from './components/GroupDetails/GroupDetails';








function App() {


  return (
    <>
    <BrowserRouter>

   <Layout>
   <Routes>
   <Route path="/login" element={<Login/>} />

          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/group" element={<Group/>} />
          <Route path="/group/:id" element={<GroupDetails/>} />




        </Routes>
   </Layout>
   </BrowserRouter>
    </>
  )
}

export default App
