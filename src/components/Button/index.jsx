import style from "./style.module.scss";

// button recebe apenas a props de typo chamando o clique submit
export const Button = ({text, ...props}) => {
    return (
        <button className={style.button} type={props.type}>{text}</button>
    )
}