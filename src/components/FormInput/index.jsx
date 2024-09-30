import style from "./style.module.scss";

// FormInput recebe os parametros por props que será passado em outro componente
export const FormInput = ({inputName, ...props}) => {
    return (
        <section className={style.section}>
            <div className={style.input}>
                <label htmlFor={props.id}>{inputName}</label>
                <input id={props.id} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
            </div>
        </section>
        
    )
}