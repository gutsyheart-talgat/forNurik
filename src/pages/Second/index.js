import React from 'react'
import style from './second.module.css'

export default function(){
    return(
        <div className={style.back}>
            <div className={style.cont}>
                <h1 className={style.h1}>Как мы чистим ковер?</h1>
                <div className={style.blocks}>
                    <p><b>1.</b>Очищаем поверхность от легких загрязнений ― пыль, песок, крошки</p>
                    <p><b>2.</b>Выводим пятна, используя инновационные автоматические системы, моем и затем полоскаем ковер</p>
                    <p><b>3.</b>Отжимаем ковер в центрифуге</p>
                    <p><b>4.</b>Осматриваем ковер для оценки результата</p>
                    <p><b>5.</b>Сушим ковер в специализированной камере</p>
                    <p><b>6.</b>Расчесываем и пылесосим ковер</p>
                </div>
            </div>
        </div>
    )
}