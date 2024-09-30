import { useState } from "react";
import { Button } from "../Button";
import { FormInput } from "../FormInput";
import styles from "./style.module.scss";

export const Footer = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    // handleSubmit faz a verificação se os campos estão preenchidos ou não e manda alerta

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome && email) {
            alert(`Formulário enviado com sucesso ! Nome: ${nome}, Email: ${email}`);
            
        }
        else {
            alert("Por favor, preencha todos os campos.")
            console.log(nome, email);
        }
    }

    return (
        <>

            <form className={styles.form} onSubmit={handleSubmit}>

                <h2>Cadastre-se para receber novidades</h2>

                <div className={styles.boxform}>
                    <FormInput 
                    inputName="Nome" 
                    id="nome" 
                    type="text" 
                    placeholder="Digite seu Nome!"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />

                    <FormInput
                     inputName="Email" 
                     id="email" 
                     type="text" 
                     placeholder="Digite se melhor Email!"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />

                    <Button text="Enivar" type="submit"/>
                </div>

            </form>
        </>
    )
}