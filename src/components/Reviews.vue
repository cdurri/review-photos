<template>
  <div class="reviews">
        <div class="columns is-2">
            <div class="column">
              <div class="reviews__rating">
                <span>
                  <i></i>
                </span>
              </div>
              <div class="reviews__author">
               <p class="review__author">
                  <span>MARK1990</span>
                </p>
              </div>
            </div>
            <div class="column is-10">
                <time>27/10/2022</time>
                <div>
                  <p class="reviews__body">
                    We had a very enjoyable stay at the beautiful Rose Hotel. Everything was very satisfactory except the service which was very slow on occasion. However, the staff were all very professional and pleasant at all times.
                  </p>  
                </div>
                <div>
                   <img v-for="(image, index) in images" :src="image" :key="index" />
                </div> 
            </div>
        </div>

         <router-link :to="{name: 'reviews_form'}">
            <button class="button continue-button">Previous</button>
        </router-link>
  </div>
</template>
<script>
export default {
    name: 'Reviews',
    data() {
        return {
            images: ['https://placeimg.com/150/110/any', 'https://placeimg.com/150/110/any', 'https://placeimg.com/150/110/any']
        }
    },
}
</script>

<style scoped>
.reviews {
    width: 720px;
    margin: 0 auto;
}
.reviews__body {
  padding-bottom: 10px;
}
img {
  margin-right: 10px;
}
</style>

