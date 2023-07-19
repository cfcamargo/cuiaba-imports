import { defineStore } from 'pinia'
import productProps from "~/models/Product";

import axios from 'axios'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [] as productProps[], //armazena a listagem em memoria, para nao ficar requisitando toda hora
        productsList : [] as productProps[][], // cria a lista de produtos dividindo os dados em arrays com 16 itens, para usar o index como paginacao
        loading : false
    }),
    getters: {
        $getProducts(state){
            return state.productsList
        },

        $getProductsList(state): productProps[][]{
          return state.productsList
        },

        $getProductById : (state) => {
            return (id: number) => state.products.filter((product) => product.id === id)
        },

        $getShopMostSearchProducts(state): productProps[] {

            return state.products.filter((product: productProps) => product.mostSearchShop)
        },

        $getHomeMostSellProducts(state): productProps[] {
            let mostSellproducts: productProps[] = []

            state.products.map((product) => {
                if(mostSellproducts.length < 10 && product.mostSellHome === true){
                    mostSellproducts.push(product)
                }
            })

            return mostSellproducts
        },

        $getLoadingStatus(state): boolean {
            return state.loading
        },
    },
    actions: {

        async fetchProdutcs(){
            const api_key = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY
            const apiId = import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${apiId}/values/bd?key=${api_key}`

            try {
                this.loading = true
                const response = await axios.get(url);
                let data = response.data.values;
                const transformedProducts: Array<productProps> = []

                data.map((product: any) => {
                    if(product[0] !== 'id'){
                        let transformedProduct = {
                            id : Number(product[0]),
                            title : product[1],
                            sub: product[2],
                            description : product[3],
                            brand: product[4],
                            category : product[5],
                            cover : product[6],
                            videoURL : product[7],
                            mostSellHome : product[8] === 'sim',
                            mostSearchShop : product[9] === 'sim',
                            variants : product[10].split(',')
                        } as productProps

                        transformedProducts.push(transformedProduct)

                    }
                    this.products = transformedProducts
                    this.createListProduct()

                })
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },

        createListProduct(filter? : string){
            let tempList = []

            if(filter){
                tempList = this.products.filter((product : productProps) => product.title.includes(filter))
            } else {
                tempList = this.products
            }

            let chunks : any = [];
            for (let i = 0; i < tempList.length; i += 16) {
                chunks.push(tempList.slice(i, i + 16));
            }
            this.productsList = chunks
            this.loading = false
        }
    },
})