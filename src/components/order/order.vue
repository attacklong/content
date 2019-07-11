<template>
    <div class="demo">
        <div class="address">{{msg}}
       </div>
       <div class="shopcart">
           <shopcart v-if="$route.meta.keepAlive" :select-foods="selectedFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
         
       </div>
    </div>
</template>
<script>
import shopcart from '../shopcart/shopcart'
export default {
    name:'order',
    date(){
           return{
           msg:'123'
           }
        },
    

}
</script>

