import { configureStore, createSlice } from '@reduxjs/toolkit';

let clientActionsContainer = createSlice({
    name: 'clientActionsContainer',

    initialState: {
        menuType: 'home',
        ptype: null,
        uppcode: null
    },

    reducers: {
        rdxChgMenuType(state, action) {
            state.menuType = action.payload;
        },

        rdxChgPtype(state, action) {
            state.ptype = action.payload;
        },

        rdxChgUppcode(state, action) {
            state.uppcode = action.payload;
        }
    }
})


export const { rdxChgMenuType, rdxChgPtype, rdxChgUppcode } = clientActionsContainer.actions

export default configureStore({
    reducer: {
        clientActionsContainer: clientActionsContainer.reducer, // menuType2에 접근해야한다. (왼쪽꺼)
    }
});