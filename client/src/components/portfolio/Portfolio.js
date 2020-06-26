import React from 'react'
import Hero from '../hero/Hero';
import PortItem from './portItem/PortItem'

function Portfolio(props) {

    let items = [

        {
            src: 'https://dummyimage.com/298x150/d4c768/ffffff', 
            alt: "dummyimage",
            title: 'title',
            description: 'Starwars themed minigame, fun project made to exercise and better my javascript knowledge.',
            gitlink: 'https://github.com/injecti0n'
        },
        {
            src: 'https://dummyimage.com/298x150/d4c768/ffffff', 
            alt: "dummyimage",
            title: 'title',
            description: 'Starwars themed minigame, fun project made to exercise and better my javascript knowledge.',
            gitlink: 'https://github.com/injecti0n'
        },
        {
            src: 'https://dummyimage.com/298x150/d4c768/ffffff', 
            alt: "dummyimage",
            title: 'title',
            description: 'Starwars themed minigame, fun project made to exercise and better my javascript knowledge.',
            gitlink: 'https://github.com/injecti0n'
        },
        {
            src: 'https://dummyimage.com/298x150/d4c768/ffffff', 
            alt: "dummyimage",
            title: 'title',
            description: 'Starwars themed minigame, fun project made to exercise and better my javascript knowledge.',
            gitlink: 'https://github.com/injecti0n'
        },
        {
            src: 'https://dummyimage.com/298x150/d4c768/ffffff', 
            alt: "dummyimage",
            title: 'title',
            description: 'Starwars themed minigame, fun project made to exercise and better my javascript knowledge.',
            gitlink: 'https://github.com/injecti0n'
        },



    ]

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <PortItem item={items} />
        </div>
    );

}

export default Portfolio;