import React from "react";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { ListCortes } from "../ListCortes";
import { Prices } from "../Prices";
import { FormInput } from "../FormInput/index";
import { Button } from "../Button";



export const Page = () => {

    const [barbaSelect, setBarbaSelect] =  useState(null);
    const [cabeloSelect, setCabeloSelect] = useState(null);
    const [total, setTotal] = useState(0);
    const [cabelos, setCabelos] = useState([]);
    const [barbas, setBarbas] = useState([]);

    useEffect(() => {
        getCortes();
        getBarbas();
    }, []);

    const getCortes = async () => {
        const response = await fetch('http://localhost:3005/cabelos')
        const data = await response.json();
        setCabelos(data);
    }

    const getBarbas = async () => {
        const response = await fetch('http://localhost:3005/barbas')
        const data = await response.json();
        setBarbas(data);
    }

    const [cabelosForm, setCabelosForm] = useState({
        tipo: "",
        img: "",
        valor: ""
    })

    const handleCorte = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3005/cabelos', {
            method: 'POST',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(cabelosForm)
        })

        const data = await response.json();
        alert(`Corte ${data.tipo} cadastrado com sucesso`);

        getCortes();
        
        setCabelosForm({
            tipo: "",
            img: "",
            valor: ""
        })
    }


    // addItem pega o tipo e valor e faz o calculo com o CSSMathProduct, se estiver vazio, subtrai o valor, se houver algo, ele substitui o valor atual e aplica ao valor total
    const addItem = (tipo, valor, categoria) => {

        const valorNum = Number(valor);
        
        if (categoria === "cabelo") {

            if (cabeloSelect && cabeloSelect.tipo === tipo){
                setTotal(prevTotal => prevTotal - valorNum);
                setCabeloSelect(null);
            } else {
                if (cabeloSelect !== null) {
                    setTotal(prevTotal => prevTotal - cabeloSelect.valor);
                }
                setCabeloSelect({tipo, valor: valorNum });
                setTotal(prevTotal => prevTotal + valorNum);
            }
        } else if (categoria === "barba") {
            
            if(barbaSelect && barbaSelect.tipo === tipo) {
                setTotal(prevTotal => prevTotal - valorNum);
                setBarbaSelect(null);
            } else {
                if (barbaSelect !== null) {
                   setTotal(prevTotal => prevTotal - barbaSelect.valor); 
                }
                setBarbaSelect({tipo, valor:valorNum });
                setTotal(prevTotal => prevTotal + valorNum);
            }
                
        }           
    };
    // useEffect faz a verificação se o corte há desconto e calccula o calculo respondendo com o valor atual corrigido
    useEffect(() => {
            if(barbaSelect !== null && cabeloSelect !== null) {
                const totalComDesconto = (barbaSelect.valor + cabeloSelect.valor) * 0.8;
                setTotal(totalComDesconto);
            }  else if (barbaSelect !== null) {
                setTotal(barbaSelect.valor);
            } else if (cabeloSelect !==null) {
                setTotal(cabeloSelect.valor);
            } else {
                setTotal(0);
            }
        }, [barbaSelect, cabeloSelect]);


    return (
        <>
        
            <section className={styles.section}>

                <h3>Cortes de cabelos</h3>

                <ListCortes listCortes={cabelos} addItem={addItem} categoria="cabelo"/> 
            </section>
       
            <section className={styles.section}>
                <h3>Cortes de barbas</h3>

                <ListCortes listCortes={barbas} addItem={addItem} categoria="barba"/>
            
            </section>
       
            <section className={styles.section}>
                <div className={styles.discount}>
                    <h4>Promoção</h4>
                    <p>Corte + Barba 20% de desconto!</p> 
                </div>
               
            </section>

            <section>
                <h3>Sugestoes de Cortes</h3>
                <form onSubmit={handleCorte}>
                    <div className={styles.boxform}>
                    <FormInput 
                    inputName="Tipo" 
                    id="tipo" 
                    type="text" 
                    placeholder="Digite o tipo do corte!"
                    value={cabelosForm.tipo}
                    onChange={(e) => setCabelosForm({ ...cabelosForm, tipo: e.target.value})}
                    />

                    <FormInput
                     inputName="Imagem" 
                     id="img" 
                     type="text" 
                     placeholder="Cole a URL da imagem aqui"
                     value={cabelosForm.img}
                     onChange={(e) => setCabelosForm({ ...cabelosForm, img: e.target.value})}
                     />

                     <FormInput
                     inputName="Valor" 
                     id="valor" 
                     type="number" 
                     placeholder="Preço sugerido"
                     value={cabelosForm.valor}
                     onChange={(e) => setCabelosForm({ ...cabelosForm, valor: e.target.value})}
                     />

                    <Button text="Cadastrar" type="submit"/>
                </div>
                </form>
            </section>
        
            {/* prices esta recebendo por children os valores e nome da propriedade e retornando, caso esteja vazio, exige uma mensagem string */}
            <Prices>
                    <h4>Orçamento:</h4>
                    <p>Barba:{barbaSelect ? `${barbaSelect.tipo}` : "Nenhum selecionado"}</p>
                    <p>Cabelo:{cabeloSelect ? `${cabeloSelect.tipo}` : "Nenhum selecionado"}</p>
                    <h6>Total: ${total}</h6>   
            </Prices>
       </>
    )
    
};