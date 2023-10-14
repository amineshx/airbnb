import React from 'react'
import Nav from './components/nav'
import Card from './components/Cards'
import data from './components/data'
import './index.css'



function App() {
    const NewCard = data.map(card => {
        return (
            <Card
                key={card.id}
                {...card}
            />
        )
    })
    return (
        <div>
            <Nav />
            <section className='card-list'>
                {NewCard}
            </section>

        </div>
    )
};
export default App