"use client";

import { AnimatePresence } from "framer";

export default function Component({props}){
    return (
        <AnimatePresence mode={'wait'}>
            {props}
        </AnimatePresence>
    )
}