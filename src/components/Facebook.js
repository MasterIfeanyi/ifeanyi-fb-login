import React, {useState} from 'react'
import FacebookLogin from "react-facebook-login"
import Card from "./Card"

const Facebook = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")


    const responseFacebook = (response) => {
        console.log(response)
        setIsLoggedIn(true)
        setName(response.name)
        setEmail(response.email)
        setPicture(response.picture.data.url)
    }
  
    let fbContent;

    if (isLoggedIn) {
        fbContent = (

            <Card 
                name={name}
                email={email}
                pictur={picture}
            />
        )
    } else {
        fbContent = (

            <div className="login" style={{
                padding: "10px 20px",
                margin: "10px 20px"
            }}>
                <FacebookLogin
                appId="1343316909464529"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook" />
            </div>
        )
    }


  return (
    <>
        <section>
            {fbContent} 
        </section>
    </>
  )
}

export default Facebook