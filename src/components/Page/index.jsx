import React from "react";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { ListCortes } from "../ListCortes";
import { TabelaCortes } from "../TabelaCortes";
import { Prices } from "../Prices";


export const Page = () => {

    const [barbaSelect, setBarbaSelect] =  useState(null);
    const [cabeloSelect, setCabeloSelect] = useState(null);
    const [total, setTotal] = useState(0);

    // addItem pega o tipo e valor e faz o calculo com o CSSMathProduct, se estiver vazio, subtrai o valor, se houver algo, ele substitui o valor atual e aplica ao valor total
    const addItem = (tipo, valor, categoria) => {
        
        if (categoria === "cabelo") {

            if (cabeloSelect && cabeloSelect.tipo === tipo){
                setTotal(prevTotal => prevTotal - cabeloSelect.valor);
                setBarbaSelect(null);
            } else {
                if (cabeloSelect !== null) {
                    setTotal(prevTotal => prevTotal - cabeloSelect.valor);
                }
                setCabeloSelect({tipo, valor });
                setTotal(prevTotal => prevTotal + valor);
            }
        } else if (categoria === "barba") {
            
            if(barbaSelect && barbaSelect.tipo === tipo) {
                setTotal(prevTotal => prevTotal - barbaSelect.valor);
                setBarbaSelect(null);
            } else {
                if (barbaSelect !== null) {
                   setTotal(prevTotal => prevTotal - barbaSelect.valor); 
                }
                setBarbaSelect({tipo, valor });
                setTotal(prevTotal => prevTotal + valor);
            }
                
        }           
    };
    // useEffect faz a verificação se o corte há desconto e calccula o calculo respondendo com o valor atual corrigido
    useEffect(() => {
            if(barbaSelect !== null && cabeloSelect !== null) {
                const totalSemDesconto = barbaSelect.valor + cabeloSelect.valor;
                setTotal(totalSemDesconto * 0.8);
            }  
        }, [barbaSelect, cabeloSelect]);


    return (
        <>
        
            <section className={styles.section}>

                <h3>Cortes de cabelos</h3>

                <ListCortes listCortes={TabelaCortes.cabelo} addItem={addItem} categoria="cabelo"/> 
            </section>
       
            <section className={styles.section}>
                <h3>Cortes de barbas</h3>

                <ListCortes listCortes={TabelaCortes.barbas} addItem={addItem} categoria="barba"/>
            
            </section>
       
            <section className={styles.section}>
                <div className={styles.discount}>
                    <h4>Promoção</h4>
                    <p>Corte + Barba 20% de desconto!</p> 
                </div>
               
            </section>
        
            {/* prices esta recebendo por children os valores e nome da propriedade e retornando, caso esteja vazio, exige uma mensagem string */}
            <Prices>
                    <h4>Orçamento:</h4>
                    <p>Barba:{barbaSelect ? `${barbaSelect.tipo}` : "Nenhum selecionado"}</p>
                    <p>Cabelo:{cabeloSelect ? `${cabeloSelect.tipo}` : "Nenhum selecionado"}</p>
                    <h6>Total: ${total.toFixed(2)}</h6>   
            </Prices>
       </>
    )
    
};