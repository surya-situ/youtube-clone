import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import ChatSlice from "./ChatSlice";
import searchSlice from "./searchSlice";

const store = configureStore({

    reducer: {
        app: appSlice,
        //this searchSlice is form utils/searchSlice : it for the searching box.
        search: searchSlice,
        chat:ChatSlice
    }

});

export default store; 