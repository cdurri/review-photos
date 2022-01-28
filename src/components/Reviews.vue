<template>
  <div class="reviews">
        <div class="columns is-2">
            <div class="column">
              <div class="reviews__rating">
                <p>{{ rating }}</p>
                <span>
                 <img src="" />
                </span>
              </div>
              <div class="reviews__author">
               <p class="review__author">
                  <span>{{ author }}</span>
                </p>
              </div>
            </div>
            <div class="column is-10">
                <time>{{ date }}</time>
                <div>
                  <p class="reviews__body">
                    {{ review }}
                  </p>  
                </div>
                <div>
                   <img :src="info[0].images[0].url" />
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
            images: ['https://placeimg.com/150/110/any', 'https://placeimg.com/150/110/any', 'https://placeimg.com/150/110/any'],
            info: [],
            author: '',
            date: '',
            review: '',
            rating: ''
        }
    },
    async mounted() {
        const response =  await this.$http.get('https://localhost/api/reviews');

        console.log('response:', response)
        this.info = response.data;

        this.date = this.info[0].date;
        this.review = this.info[0].comment;
        this.rating = this.info[0].rating;

        console.log('infos:', this.info);

        this.getAuthorName();
    },
    methods: {
       getAuthorName() {
          const email = this.info[0].email;
          console.log('email:', email);
          const authorArray = email.split('@');
          console.log('authorArray:', authorArray)
          const author = authorArray[0];
          this.author = author.toUpperCase();
        }
    }
   
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

