import React from "react";
import { CardCortes } from "./CardCortes";

import style from "./style.module.scss";

// ListCortes recebe por props a função addItem, categoria e lista de cortes passando internamente para o card e renderizando cada card com o map
export const ListCortes = ({listCortes, addItem, categoria, removeItem}) => {
    
    return (
        <ul className={style.ul}>
            {listCortes.map((cortes) =>
                <CardCortes key={cortes.id} cortes={cortes}  addItem={addItem} categoria={categoria} removeItem={removeItem}/>
            )}
        </ul>
    )
}