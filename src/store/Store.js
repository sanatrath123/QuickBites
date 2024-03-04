import { configureStore } from "@reduxjs/toolkit";
import CartReduser from "./CartSlice";

export const store = configureStore({

    reducer: {
       cart:CartReduser,
    },


})

