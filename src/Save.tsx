import React, { useState, useEffect, FC } from 'react';
// import useCookie, { setCookie } from 'react-use-cookie';
import { useCookies } from 'react-cookie';

// type SaveItems = {
//     myNumber?: string;
// }

// const Save: FC <SaveItems> = ({myNumber}) => {
//     // console.log(myNumber);
//     const [cookies,setCookies] = useCookies(['cookie-number'])

//     useEffect(() => {
//         if (Number(myNumber)!==0) {
//             setCookies('cookie-number',myNumber, { path: '/' })
//         }        
//     });

//     return (
//         <>
        
//         </>
//     )
// }

// export default Save;