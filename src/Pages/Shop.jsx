import React from "react"
import Hero from '../Components/Hero/Hero.jsx'
import Popular from "../Components/Popular/Popular.jsx"
import Offers from "../Components/Offerce/Offers.jsx"
import NewCollection from "../Components/NewCollection/NewCollection.jsx"
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx"

const Shop = ()=>{
    return(
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
    </div>
    )
}

export default Shop