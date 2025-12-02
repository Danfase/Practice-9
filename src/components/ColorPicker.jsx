import React, { useEffect, useState } from 'react'

import './ColorPicker.css'

export default function ColorPicker() {
    const [color, setColor] = useState('red')

    useEffect(() => {
        console.log(`Color now ${color}`)
    }, [color])

    return (
        <div className="App" style={{
            background: color,
            color: 'white'
          }}>
            <div style={{
                
            }}>
                <h2 style={{
                    background: 'white'
                }}>Count: 12</h2>
            </div>
            <button onClick={() => setColor('red')}>Красный</button>
            <button onClick={() => setColor('blue')}>Синий</button>
            <button onClick={() => setColor('green')}>Зеленый</button>
      
          </div>
    )
}
