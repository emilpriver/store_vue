<template>
    <section id="single_product">
        <div id="hero">
            <div class="con">
                <div class="images" v-if="loaded == true">
                    <div v-for="(image,index) in product.images" v-bind:key="index" class="col">
                        <img  :src="image"  :alt="product.title"/>
                    </div>
                </div>
                <div class="product_info" v-if="loaded == true">
                    <div class="row mb-10">
                        <div class="col">
                            <span class="sub-title"> {{product.sub_title}} </span>
                        </div>
                        <div class="col">
                            <span class="price">{{product.price}} KR</span>
                        </div>
                    </div>
                    <div class="row mb-40">
                        <div class="col">
                            <h1>{{product.title}}</h1>
                        </div>
                    </div>
                    <div class="row mb-30">
                        <div class="size" v-for="number in range(38,50)" v-bind:key="number">
                            <span>EU {{number}}</span>
                        </div>
                    </div>
                    <div class="row mb-50">
                        <div class="col">
                            <button> Add to cart </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p class="description" v-html="product.description"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
//cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default {
    name: 'product',
    data: () => {
        return {
            product: null,
            loaded: false
        }
    },
    created() {

        //get product
        axios.get('http://localhost:5000/api/products/' + this.$route.params.slug)
        .then(response => {
            console.log(response.data.products)
            this.product = response.data.products
            this.loaded = true
        })
        .catch(err => console.log(err))

    },
    methods:{
        range:function(start,stop){
            return new Array(stop-start).fill(start).map((n,i)=>n+i);
        },
        add_to_cart: () => {
            axios.post('http://localhost:5000/api/cart/add',{
                slug: this.$route.params.slug,
                cart_id: cookies.get('cart_id') ? cookies.get('cart_id') : false
            })
            .then(response => {
                cookies.set('cart_id', response.data.cart_id, { 
                    path: '/' 
                });
            })
            .catch(err => {console.log(err)})
        }
    }
}
</script>

<style lang="scss">
$font: "Helvetica Neue", Helvetica, Arial,'Cabin', sans-serif;

#single_product{
    width: 100%;
    float: left;
    margin-top: 120px;
    padding-bottom: 100px;
    
    #hero {
        width: 100%;
        float: left;

        .con{
            max-width: 1600px;
            margin: 0px auto;
            width: 100%;
            .images{
                width: 60%;
                float: left;
                display: flex;
                flex-wrap: wrap;

                .col{
                    flex: 0 0 50%;
                    padding: 10px;
                    box-sizing: border-box;

                    img{
                        max-width: 100%;
                        height: auto;
                        width: auto;
                        display: block;
                    }
                }
            }
            .product_info{
                width: 30%;
                float: left;
                padding-top: 50px;
                padding: 20px;
                box-sizing: border-box;

                @for $i from 1 through 100 {
                    .mb-#{$i} {
                        margin-bottom: #{$i}px
                    }
                    .mt-#{$i} {
                        margin-top: #{$i}px
                    }
                }
                
                .row{
                    width: 100%;
                    float: left;
                    display: flex;
                    flex-wrap: wrap;
                    .col{
                        flex: 1;
                        text-align: left;

                        &:last-of-type {
                            text-align: right;
                        }

                        &:first-of-type {
                            text-align: left;
                        }

                        * {
                            color: #000
                        }

                        h1{
                            text-align: left;
                            width: 100%;
                            margin: 0px;
                            font-size: 30px;
                            font-weight: 500;
                            color: #000;
                            font-family: $font;
                        }

                        h2{
                            text-align: left;
                            width: 100%;
                            margin: 0px;
                            font-size: 20px;
                            font-weight: 700;
                            color: #000;
                            font-family: $font;
                        }

                        span {
                            text-align: left;
                            width: 100%;
                            margin: 0px;
                            font-size: 15px;
                            font-weight: 500;
                            color: #000;
                            font-family: $font;
                        }

                        button{
                            width: 350px;
                            max-width: 100%;
                            margin: 0px auto;
                            height: 40px;
                            border-radius: 5px;
                            cursor: pointer;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: #fff;
                            background: #000;
                            border: none;
                            outline: none;
                            font-family: 'Cabin', sans-serif;
                            font-weight: 700;
                            font-size: 20px;
                            text-transform: uppercase;
                        }
                        .description {
                            padding: 20px;
                            box-sizing: border-box;
                            font-size: 17px;
                            font-family: $font;
                            font-weight: 500;
                        }
                    }
                    .size {
                        flex: 0 0 30%;
                        margin-bottom: 10px;
                        text-align: center;
                        span{
                            margin: 0px auto;
                            border-radius: 5px;
                            height: 40px;
                            width: 100px;
                            border: 2px solid #9a9797;
                            display: flex;
                            justify-content: center;
                            font-family: $font;
                            font-weight: 700;
                            cursor: pointer;
                            color: #9a9797;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }
}
</style>

