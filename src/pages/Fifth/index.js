import React from 'react'
import style from './fifth.module.css'

export default function(){
    return(
        <div className={style.back}>
            <div className={style.cont}>
                <h1 className={style.h1}>Почему с CleanLux очень удобно?</h1>
                <div className={style.blocks}>
                    <div>
                        <h1 className={style.h1}>До позднего вечера</h1>
                        <p className={style.p}>Приезжаем с 9:00 до
                            20:00 – Вам не придется
                            менять свои планы
                            </p>
                    </div>
                    <div>
                        <h1 className={style.h1}>Часовые интервалы</h1>
                        <p className={style.p}>Не нужно
                            ждать курьера
                            несколько часов</p>
                    </div>
                    <div>
                        <h1 className={style.h1}>Бесплатная доставка</h1>
                        <p className={style.p}>Вывоз и доставка бесплатно по городу бесплатная</p>
                    </div>
                    <div>
                        <h1 className={style.h1}>Оплата за результат</h1>
                        <p className={style.p}> Только при получении
                            чистых ковров</p>
                    </div>
                </div>
            </div>
        </div>
    )
}