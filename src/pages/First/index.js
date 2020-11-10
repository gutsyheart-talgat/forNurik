import React from 'react'
import style from './first.module.css'
import whats from './img/whatsapp.png'

export default function(){
    return(
        <div className={style.back}>
            <div className={style.cont}>
                <header className={style.contacts}> 
                    <b> 0 (706) 525 221 0 (555) 219 160 0 (773) 969 304 <br/></b>
                     с 9:00 до 20:00. Цена: 65 сом/м2
                </header>
                <main className={style.main}> 
                    <h1 className={style.h1}>
                        Химчистка ковров <br/>
                        с доставкой в Бишкеке
                    </h1>
                    <p className={style.p}>работаем в любое время года</p>
                    <button className={style.btn}>
                        <a href="https://api.whatsapp.com/send/?phone=%2B996557558306&text&app_absent=0">Заказать онлайн</a>
                    </button>
                </main>
                   <a href="https://api.whatsapp.com/send/?phone=%2B996557558306&text&app_absent=0">
                       <img className={style.whats} src={whats}/>
                   </a>
            </div>
            
        </div>
    )
}