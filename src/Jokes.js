import React, {useEffect, useState} from "react";
import './App.css'

const Jokes = () =>{
    const [joke, setJoke] = useState('')

    const  loadJoke =  async() =>{
        let response = await fetch('https://api.chucknorris.io/jokes/random')
       const data = await response.json()
        // console.log("Data", data)
        setJoke(data)

    }

    useEffect(()=>{
        // loadJoke doesnt worked, bad implementation
        var interval = undefined
        loadJoke()

        interval = setInterval(function(){
           loadJoke()
        }, 10000)

        return () => clearInterval(interval)
    },[])
    return (
        <div className="joke">
            {/*<img src={joke.icon_url} alt="joke image"/>*/}
            {joke && <h3>{joke.value}</h3>}

        </div>
    )
}

export default Jokes;