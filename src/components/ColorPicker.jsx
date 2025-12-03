import React, { useEffect, useState } from 'react'
import './ColorPicker.css'

export default function ColorPicker() {
    const [color, setColor] = useState('red')

    useEffect(() => {
        console.log(`Color now ${color}`)
    }, [color])

    return (
        <div className="color-picker">
            <div 
                className="color-picker__block"
                style={{ backgroundColor: color }}
            ></div>

            <div className="color-picker__buttons">
                <button 
                    className="color-picker__button color-picker__button--red"
                    onClick={() => setColor('red')}
                >
                    Красный
                </button>

                <button 
                    className="color-picker__button color-picker__button--blue"
                    onClick={() => setColor('blue')}
                >
                    Синий
                </button>

                <button 
                    className="color-picker__button color-picker__button--green"
                    onClick={() => setColor('green')}
                >
                    Зеленый
                </button>
            </div>
        </div>
    )
}
