import React from 'react'
import { useState } from "react"
import { getValueFromLocalStorage, saveInLocalStorage } from "../../services/localStorage"
import { Button } from "../../Components/Button/button"
import { Profile } from "../../Components/Profile/Profile"

import "./HomeStyles.scss"

function Home() {

    const ButtonComponent = document.getElementById("MyButton")
    window.addEventListener("keydown", (event) => { 
      // event.preventDefault()
      // event.keyCode === 13 ? getName() : getName()
      event.code === "Enter" && getName()
    })
  

  const verifyIfIcluded = (key, value, list) => {
    const isIncluded = list.find((itemList) => (itemList[key].toLowerCase() === value.toLowerCase()))
    return isIncluded;
  }

  const [data, setData] = useState({
    avatar_url: "",
  })

  const getName = async () => {
    const valueName = document.getElementById("username").value;

    if (valueName) {
      
    }

    const userList = getValueFromLocalStorage("users");

    if (userList) {
      const user = verifyIfIcluded("login",valueName, userList);
  
      if (user) {
        setData(user)
        return;
      }
    }

    const data = await fetch(`https://api.github.com/users/${valueName}`);

    const response = await data.json();

    setData(response);

    if ( userList ) {
      const listToSave = [
        ...userList,
        response
      ]
      return saveInLocalStorage("users", listToSave )
    } 

    saveInLocalStorage("users", [response])

  }

  return (
    <main className="home-conainer">
    <div className="search-component">
      <input type="text" id="username" />
      <Button type="" onClick={() => getName()} id="MyButton"> Procurar </Button>
    </div>
      <Profile data={data} />
    </main>
  )
}

export default Home;
