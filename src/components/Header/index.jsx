import style from "./style.module.scss";

export const Header = () => {
    return (
        <>
            <section className={style.header}>
                <div className={style.logo}>
                    <span>BS</span>
                    <h1>Barber Shop</h1>  
                </div>
                 
                <p>Seja bem vindo!</p>
                
            </section>
            
        </>
       
    )
    
};