import { useEffect, useState } from "react";

const useFetchImg = (imgUrl) => {
    console.log('imgUrl: ', imgUrl); 

    /**
     * 1. if imgUrl is Null, return default img, OK
     * 2. if url  in the response has an ugly format, just return def img
     */
    const def = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637'
    const initial  = imgUrl ? imgUrl : def;

    const [src, setSrc] = useState(initial)

    useEffect(() => {
        const fetchedImg = async () => {
            try{
            await fetch(`https://covers.openlibrary.org/b/isbn/${imgUrl}-M.jpg`)
                .then(res => { 
                    const { url } = res; 
                    // write some logic to identify if url  in the response has an ugly format, if so just return def img
                    // if (isUgly url ) setSrc(def);
                    console.log(url); 
                    console.log(res);
                })
            } catch (error){
            console.error(error);
            }
        }
        fetchedImg();
        }, [imgUrl]);


    return src;
}

export default useFetchImg;