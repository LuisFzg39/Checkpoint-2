// TODO: arregla typos de "error", maneja caso de error y exito

import { log } from "console"

export async function getPlants() {
    
    try {
        
        const res = await fetch("http://192.168.131.101:8080/dca/api/plants")
        const data = await res.json()

        console.log(data)

    } catch (error) {
        
    }

}
