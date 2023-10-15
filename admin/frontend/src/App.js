import './App.css';
import Faq from './Components/Faq';

function App() {
  return (
    <div classNameName="App">
      <header>

        <div className="logosec">
          <div className="logo">UserStorm</div>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
            className="icn menuicn" id="menuicn" alt="menu-icon" />
        </div>

        <div className="message">
          <div className="circle"></div>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png" className="icn" alt="" />
          <div className="dp">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
              className="dpicn" alt="dp" />
          </div>
        </div>

      </header>
      <div className="main-container">
        <div className="navcontainer">
          <nav className="nav">
            <div className="nav-upper-options">
              <div className="nav-option option1" onclick="loadPage('main')">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                  className="nav-img" />
                <h5>Главная</h5>
              </div>

              <div className="option2 nav-option" onclick="loadPage('faq')">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                  className="nav-img" />
                <h5>F.A.Q.</h5>
              </div>

              <div className="nav-option option3" onclick="loadPage('survey')">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                  className="nav-img" />
                <h5>Опросы</h5>
              </div>

              <div className="nav-option option4" onclick="loadPage('users')">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                  className="nav-img" />
                <h5>Пользователи</h5>
              </div>

              <div className="nav-option option5" onclick="loadPage('analiz')">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                  className="nav-img" />
                <h5>Аналитика</h5>
              </div>

              <div className="nav-option option6" onclick="loadPage('settings')">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                  className="nav-img" />
                <h5>Настройки</h5>
              </div>

              <div className="nav-option logout">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                  className="nav-img" />
                <h5>Выход</h5>
              </div>

            </div>
          </nav>
        </div>
        <div className="main">
          <Faq/>
        </div>
      </div>
    </div>
  );
}

export default App;
