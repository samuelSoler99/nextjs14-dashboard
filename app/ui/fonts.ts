import {Lusitana, Montserrat} from 'next/font/google'
import {undefined} from "zod";

export const montserrat = Montserrat({subsets:['latin']})
export const lusitana = Lusitana({
    weight: ["400","700"],
    subsets:['latin']})