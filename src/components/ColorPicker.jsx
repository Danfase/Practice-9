import React, { useEffect, useState } from 'react'

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
            <h2>Count: 12</h2>
            <button onClick={() => setColor('red')}>Красный</button>
            <button onClick={() => setColor('blue')}>Синий</button>
            <button onClick={() => setColor('green')}>Зеленый</button>
      
          </div>
    )
}
