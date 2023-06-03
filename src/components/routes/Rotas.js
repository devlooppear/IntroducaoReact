import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages//Layout';
import Contact from '../pages/Contact';
import Blogs from '../pages/Blogs';
import NoPage from '../pages/NoPage';
import App from '../../App'

function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="home" element={<Home />}/>
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default Rotas