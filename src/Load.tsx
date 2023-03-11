import React, { useState, useEffect } from 'react';
// import { getCookie } from 'react-use-cookie';
import { useCookies } from 'react-cookie';

export default function useLoader() {
    const [myCookies] = useCookies(['cookie-number']);

    return myCookies['cookie-number'];
}

// export default function Load() {
//     const [myCookies] = useCookies(['cookie-number']);

//     useEffect(() => {
//         console.log(myCookies['cookie-number']);
//     },[])

//     return (
//         <>
//             <p>{myCookies['cookie-number']}</p>
//         </>
//     )

// }