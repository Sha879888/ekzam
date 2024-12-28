import React from "react";

let Recover = (props) => {
    return (
      <div className="RecoverContainer" style={props.divStyle}>

        <div className="RecoverForm">
            <label>Имя</label> <input type="text"/> <br/>
            <label>Email</label> <input type="text"/> <br/>
            <label>Сообщение</label> <input type="text"/> <br/>
            <button>Отправить</button>
        </div>

        
        <div className="RecoverMap">
            <img src='./Media/orig.png'/>
            <h2>Местоположение нашего офиса</h2>
        </div>
      </div>
    );
  }
  
export default Recover;
