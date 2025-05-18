import { Montserrat, Pacifico } from "next/font/google";


export const pacifico = Pacifico({
    subsets: ['cyrillic', 'latin'],
    weight: '400',
    variable: '--font-pacifico',
  });
  
export  const montserrat = Montserrat({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-montserrat',
  });
  