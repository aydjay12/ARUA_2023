import {createContext , useContext, useState} from 'react';
import thumbnailone from '../assets/thumbnail-1.jpg';



export let NewContext = createContext();

let NewContextProvider = function({children}){
    const [Image , setImage] = useState({img: thumbnailone , album: []});
    
    
    
    return (
        <NewContext.Provider value={{Image , setImage}}> 
            {children}
        </NewContext.Provider>
    );
};


export const useNewContext = () => useContext(NewContext);

export default NewContextProvider;