import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handleOptionClick(event.target.value);
  };

  const handleOptionClick = (option) => {
    if (option.toLowerCase() === 'home') {
      navigate('/home');
    } else if (option.toLowerCase() === 'contatos') {
      navigate('/contact');
    } else if (option.toLowerCase() === 'blogs') {
      navigate('/blogs');
    }
  };

  const options = ['Home', 'Contatos', 'Blogs'];

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">IntroReact</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded={isOptionsVisible}
            aria-label="Toggle navigation"
            onClick={toggleOptionsVisibility}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${isOptionsVisible ? ' show' : ''}`} id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contatos</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">Blogs</Link>
              </li>
            </ul>
            <select
              className="form-select"
              aria-label="Search Options"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Selecione uma opção</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
