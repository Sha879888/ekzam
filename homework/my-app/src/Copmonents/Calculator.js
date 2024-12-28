import React from "react";

let Calculator = (props) => {

    let finalPrice = 0;

    let count = () => {
        finalPrice += props.arg1 + props.arg2 + props.arg3 + props.arg4 + props.arg5 + props.arg6;
    }

    return (
      <div className="CalculatorContainer" style={props.divStyle}>

        <div className="CalculatorForm">
            <label>Плошадь (кв. м)</label> <input type="number"/> <br/>
            <label>Количество этажей</label> <input type="number"/> <br/> 
            <label>Тип фундамента</label> <select>
                <option value="ленточный">ленточный</option>
                <option value="плитный">плитный</option>
                <option value="столбчатый">столбчатый</option>
            </select>
            <label>Материал стен</label> <select>
                <option value="кирпич">кирпич</option>
                <option value="дерево">дерево</option>
                <option value="газобетон">газобетон</option>
            </select>
            <label>Тип крыши</label> <select>
                <option value="плоская">плоская</option>
                <option value="скатная">скатная</option>
            </select>
            <label>Доп. опции</label> <select>
                <option value="балкон">балкон</option>
                <option value="терраса">терраса</option>
                <option value="гараж">гараж</option>
            </select>
            <br/>
            <button onClick= { count() }>Рассчитать стоимость</button>
            <label>Плошадь (кв. м)</label>
            <label>Количество этажей</label>
            <label>Тип фундамента: </label>
            <label>Материал стен</label>
            <label>Тип крыши</label>
            <label>Доп. опции</label>
            <br/>
            <label>Итоговая стоимость: {finalPrice}</label>
           
        </div>

      </div>
    );
  }
  
export default Calculator;

/*
Площадь (кв. м.)
		Количество этажей
		Тип фундамента (ленточный, плитный, столбчатый)
		Материал стен (кирпич, дерево, газобетон и т.д.)
		Тип крыши (плоская, скатная)
		Дополнительные опции (балкон, терраса, гараж и т.д.
    */