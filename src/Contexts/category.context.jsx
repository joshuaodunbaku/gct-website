import { createContext } from "react";

export const CategoryContext = createContext({

})

export const CategoryProvider = () => {

    const value = {}
    return <CategoryContext.Provider value={value}>

    </CategoryContext.Provider>
}