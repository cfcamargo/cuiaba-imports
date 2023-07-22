import { defineStore } from 'pinia'
import productProps from "~/models/Product";

import axios from 'axios'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [] as productProps[],
        productsLength : 0,
        loading : false,
        pagina : 1,
        filters : {
            title : '',
            brand : '',
            category: ''
        }
    }),
    getters: {
        $getProducts(state): productProps[]{
            return state.products
        },

        $getPaginate(state){
            return state.pagina
        },

        $getProductsLength(state){
            return state.productsLength
        },

        $getLoadingStatus(state): boolean {
            return state.loading
        },

        $getIsFiltered(state){
            if(state.filters.title !== '' || state.filters.brand !== '' || state.filters.category !== ''){
                return true
            }
        }
    },
    actions: {
        async fetchProdutcs(page? : number){
            const filter = this.setFilterType()
            const api_url :string = `http://127.0.0.1:3333/products?${filter}${page ? 'page='+page : ''}`

            try {
                this.loading = true
                const { data } = await axios.get(api_url);
                this.products = data.products
                this.productsLength = data.links
                this.loading = false

            } catch (error) {
                console.error('An error occurred:', error);
            }
        },


        setPaginate(value: number){
            this.pagina = value
        },


        setFilter(key: string, value : string){
            // @ts-ignore
            this.filters[key] = value
        },

        resetFilters(){
            this.filters.title = ''
            this.filters.brand = ''
            this.filters.category = ''
            this.pagina = 1
        },

        setFilterType(){
            if(this.filters.title !== ''){
                return `title=${this.filters.title}&`
            } else if(this.filters.brand !== ''){
                return `brand=${this.filters.brand}&`
            } else if(this.filters.category !== ''){
                return `category=${this.filters.category}&`
            } else {
                return ''
            }
        }
    },
})