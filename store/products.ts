import { defineStore } from 'pinia'
import productProps from "~/models/Product";

export const useCounterStore = defineStore('products', {
    state: () => ({
        count: 0,
        products: [] as productProps[],
        product: {} as productProps,
        productsList : [] as productProps[]
    }),
    getters: {
        $getProducts: (state) => state.products,

        $getProduct :(state) => {
            return (id: number) => {

            }
        },

        $getHomeMostSellProducts: (state) => {
            return () => {
                state.products.filter((product) => product.title === 'HomeSlider')
            }
        }
    },
    actions: {
        fetchProdutcs(){
            console.log('produtos')
        },

        fetchProduct(id : number){
            // @ts-ignore
            this.product = this.products.filter((item:productProps) => item.id === id )
        },

        createListProduct(filter : string){
            let tempList = []

            if(filter){
                tempList = this.products.filter((product : productProps) => product.title.includes(filter))
            } else {
                tempList = this.products
            }

            for (let i = 0; i < this.products.length; i += 16) {
                // @ts-ignore
                this.productsList.push(this.products.slice(i, i + 16));
            }
        }

    },
})