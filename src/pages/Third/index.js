import React from 'react'
import style from './third.module.css'
import img from './chistka.jpg'

export default function(){
    return(
        <div className={style.back}>
            <div className={style.cont}>
                <h1 className={style.h1}>Почему нужно чистить ковер в CleanLux?</h1>
                <div className={style.info}>
                    <div className={style.blocks}>
                        <p>
                            Чистим ковры на профессиональной фабрике ―
                            ковры проходят более тщательную обработку
                        </p>
                        <p>Выводим пыль, клещей и насекомых</p>
                        <p>
                            На фабрике ковер полностью просохнет ―
                            в доме не будет сырости и благоприятной
                            среды для бактерий
                        </p>
                        <p>
                            Не придётся дышать чистящими
                            средствами и терпеть шум оборудования
                        </p>
                        <p>
                            Не придется несколько часов находиться
                            дома в ожидании окончания работ
                        </p>
                    </div>
                    <img src={img} className={style.img}/>
                </div>
            </div>
        </div>
    )
}