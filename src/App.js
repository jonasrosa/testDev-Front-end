import React, { useState } from "react";
import "./index.css";
import product from "./data/product.json";
function App() {
  
  let reduction=0 
  let valuer= 0
  let total= 0
  return (
    <div className="App">
      <main className="container">
        <div className="card">
          <div className="card--title">
            <h3>Meu carrinho</h3>
          </div>
          <div>
            <ul>
              {product.items.map((item,id)=>{
                valuer=item.price
                total=total+valuer
                console.log(total)
                return(
                     <li className="list" key={item.id}>
                <div className="list--img">
                  <img src={item.imageUrl} width="110px" height="140px"/>
                </div>
                <div className="list--box--text">
                  <h3>{item.name}</h3>
                 
                 <p className="valueProductDesconto">R${item.price} </p> {item.priceTags.map((price)=>{
                   reduction = price.rawValue                  
                    return(
                      <p className="valueProduct">R${ (valuer + reduction).toFixed(2)}</p>
                    )
                  })}
                </div>
              </li>
                )

              })}
           
            </ul>
          </div>
          <div className="card--Total">
            <div className="card--Total-value">
            <h3>Total</h3>
            <h3>R${total.toFixed(2)}</h3>
            </div>
            {total >= 10?(
              <div className="card-messagem">
                <h4>Parabéns, sua compra tem frete grátis!</h4>
              </div>
            ):("")}
            
          </div>
          <div className="card--footer">
            <button>Finalizar compra</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
