import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[]
    },
    reducers:{
        // fetchProducts(state,action){
        //     state.data = action.payload
        // }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }
})

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get',async ()=>{
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json()
    return result
})

// export const getProducts = ()=>{
//     return async function getProductsThunk(dispatch,getState){
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json()
//         dispatch(fetchProducts(result))
//     }
// }