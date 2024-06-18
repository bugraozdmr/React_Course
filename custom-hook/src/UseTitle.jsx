import React,{useEffect} from 'react'

export default function UseTitle(num) {
    useEffect(() => {
        document.title = `Sayı - ${num}`
    },[num]);
}
