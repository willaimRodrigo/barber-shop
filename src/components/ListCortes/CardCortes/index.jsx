import style from "./style.module.scss";

export const CardCortes = ({cortes, addItem, categoria}) => {

    // CardCortes recebe os parametro por props e renderiza o card
    return (
        <li className={style.card} onClick={() => addItem(cortes.tipo, cortes.valor, categoria)}>
            <img className={style.img} src={cortes.img} alt={cortes.tipo} />
            <h5>{cortes.tipo}</h5>
            <p>${cortes.valor}</p>
        </li>
    )
}