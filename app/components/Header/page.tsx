"use client"
export default function Header(){
    return(
        <p>{process.env.ENV_BROWSE}</p>
    )
}