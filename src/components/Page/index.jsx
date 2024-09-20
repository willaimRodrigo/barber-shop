import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export const Page = () => {

    const [barbaSelect, setBarbaSelect] =  useState(null);
    const [corteSelect, setCorteSelet] = useState(null);
    const [total, setTotal] = useState(0);

    const TabelaDeCortes = {
        cortes: [
            { id: 1, tipo: "Militar", valor: 40 },
            { id: 2, tipo: "Samurai", valor: 50 },
            { id: 3, tipo: "Pompour", valor: 45 },
            { id: 4, tipo: "Moicano", valor: 35 },
            { id: 5, tipo: "Razor part", valor: 25 },
        ],

        barbas: [
            { id: 6, tipo: "Capitão Jack", valor: 50 },
            { id: 7, tipo: "Van Dyke", valor: 40 },
            { id: 8, tipo: "Barba Média", valor: 50 },
            { id: 9, tipo: "Barba Baixa", valor: 40 },
            { id: 10, tipo: "Barba Zero", valor: 35 },
        ],
        estAberto: true,
    };

    const addItem = (tipo, valor, categoria) => {
        
        if (categoria === "corte") {

            if (corteSelect && corteSelect.tipo === tipo){
                setTotal(prevTotal => prevTotal - corteSelect.valor);
                setBarbaSelect(null);
            } else {
                if (corteSelect !== null) {
                    setTotal(prevTotal => prevTotal - corteSelect.valor);
                }
                setCorteSelet({tipo, valor });
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
        
    useEffect(() => {
            if(barbaSelect !== null && corteSelect !== null) {
                const totalSemDesconto = barbaSelect.valor + corteSelect.valor;
                setTotal(totalSemDesconto * 0.8);
            }  
        }, [barbaSelect, corteSelect]);


    return (
        <>
        
            <section className={styles.section}>

                <h3>Cortes de cabelos</h3>
                <ul>
                    {TabelaDeCortes.cortes.map(corte => (
                        <li key={corte.id} onClick={() => addItem(corte.tipo, corte.valor, "corte")}>
                            <p>{corte.id}</p>
                            <h5>{corte.tipo}</h5>
                            <p>${corte.valor}</p>
                        </li>
                    ))}
                </ul> 
            </section>
       
            <section className={styles.section}>
                <h3>Cortes de barbas</h3>
                <ul>
                        {TabelaDeCortes.barbas.map(barba => (
                            <li key={barba.id} onClick={() => addItem(barba.tipo, barba.valor, "barba")}>
                                <p>{barba.id}</p>
                                <h5>{barba.tipo}</h5>
                                <p>${barba.valor}</p>
                            </li>
                        ))}
                    </ul> 
            </section>
       
            <section className={styles.section}>
                <div className={styles.discount}>
                    <h4>Promoção</h4>
                    <p>Corte + Barba 20% de desconto!</p> 
                </div>
               
            </section>
        
            <section className={styles.section}>
                <div className={styles.prices}>
                    <h4>Orçamento:</h4>
                    <p>Barba:{barbaSelect ? `${barbaSelect.tipo}` : "Nenhum selecionado"}</p>
                    <p>Cabelo:{corteSelect ? `${corteSelect.tipo}` : "Nenhum selecionado"}</p>
                    <h6>Total: ${total}</h6>
                </div>
                
            </section>
       </>
    )
    
};