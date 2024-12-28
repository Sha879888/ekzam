import React, {useState} from 'react';
import './App.css';

import Main from './Copmonents/Main';
import Work from './Copmonents/Work';
import Company from './Copmonents/Company';
import Recover from './Copmonents/Recover';
import Calculator from './Copmonents/Calculator';

function App() {

  const [ActiveComponent, setActiveComponent] = useState(1);

  const renderComponent = () => {
    switch (ActiveComponent) {
      case 1:
        return <Main/>;
      case 2:
          return <Company/>;
      case 3:
        return <Work/>;
      case 4:
        return <Calculator arg1={5} arg2={5} arg3={5} arg4={5} arg5={5} arg6={5}/>
      case 5:
          return <Recover/>;
    }
  };

  return (
    <div className="App">
      <header className="MainHeader">
        <img src='Media/logo.png'/>

        <div className="ButtonContainer">
          <button onClick={() => setActiveComponent(1)}>Главная</button>
        </div>

        <div className="ButtonContainer">
          <button onClick={() => setActiveComponent(2)}>О нас</button>
        </div>

        <div className="ButtonContainer">
          <button onClick={() => setActiveComponent(3)}>Услуги</button>
        </div>

        <div className="ButtonContainer">
          <button onClick={() => setActiveComponent(4)}>Калькулятор</button>
        </div>

        <div className="ButtonContainer">
          <button onClick={() => setActiveComponent(5)}>Обратная связь</button>
        </div>
      </header>

      {renderComponent()}

      <footer>
        <h2>Адрес: г. Москва, ул. Примерная д. 10</h2>
        <h2>Телефон: 8 (999) 177-17-17</h2>
        <h2>Электронная почта: info@architecturecomfort.ru</h2>
      </footer>
    </div>
  );
}

export default App;

/*
Адрес:
г. Москва, ул. Примерная д. 10

Телефон:
8 (999) 177-17-17

Электронная почта:
info@architecturecomfort.ru)

Часы работы:
Пн - Пт: 10:00 - 19:00
Сб: 10:00 - 16:00
Вс: выходной

*/


/*
 <h4>Тл-фон: 8 (999) 177-17-17</h4>
        <h4>Email: info@architecturecomfort.ru</h4>
        <h4>Адрес: г. Москва, ул. Примерная д. 10</h4>
*/