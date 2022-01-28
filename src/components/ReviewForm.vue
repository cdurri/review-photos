<template>
  <div class="review-form">
    <h1>Review Form</h1>
    <form @submit="formSubmit">
        <div class="form-group">
            <label for="email">Your Email Address</label>
            <input type="text"
                id="email"
                class="input form-control"
                v-model="userData.email">
        </div>
        <div class="form-group">
            <label for="satisfaction">Rating (1 - 10)</label>
            <input min="1"
                max="10"
                type="number"
                id="rating"
                class="input form-control"
                v-model.number="userData.rating">
        </div>
        <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message"
                    rows="5"
                    class="textarea form-control"
                    v-model="review"
                    placeholder="Your review...">
            </textarea>
        </div>
        <button class="button submit-button">Submit!
        </button>
    </form>
    
    <button 
      id="upload_widget" 
      class="button upload-button" @click="showUploadWidget">
        Upload files
    </button>

    
    <router-link :to="{name: 'reviews'}">
        <button class="button continue-button">Continue</button>
    </router-link>
   
  </div>
</template>
<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" defer></script>
<script>
export default {
    name: 'ReviewForm',
    data() {
        return {
            userData: {
                email: '',
                rating: '',
            },
            review: ''
        }
    },
    mounted() {
        let externalScript = document.createElement('script')
        externalScript.setAttribute('src', 'https://upload-widget.cloudinary.com/global/all.js')
        document.head.appendChild(externalScript)
    },
    methods: {
        submitted() {
            this.isSubmitted = true;
        },
        showUploadWidget() {
            cloudinary.openUploadWidget({
                cloudName: "smartbox",
                uploadPreset: "x4ndltu1",
                sources: [
                    "local",
                    "url",
                    "camera",
                    "image_search",
                    "google_drive",
                    "facebook",
                    "dropbox",
                    "instagram",
                    "shutterstock",
                    "getty",
                    "istock",
                    "unsplash"
                ],
                googleApiKey: "<image_search_google_api_key>",
                showAdvancedOptions: true,
                cropping: true,
                multiple: false,
                defaultSource: "local",
                styles: {
                    palette: {
                        window: "#FFFFFF",
                        windowBorder: "#90A0B3",
                        tabIcon: "#0078FF",
                        menuIcons: "#5A616A",
                        textDark: "#000000",
                        textLight: "#FFFFFF",
                        link: "#0078FF",
                        action: "#FF620C",
                        inactiveTabIcon: "#0E2F5A",
                        error: "#F44235",
                        inProgress: "#0078FF",
                        complete: "#20B832",
                        sourceBg: "#E4EBF1"
                    },
                    fonts: {
                        default: {
                            active: true
                        }
                    }
                }
            },
            (err, info) => {
                if (!err) {    
                    console.log("Upload Widget event - ", info);
                }
            });
        },
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;
            this.$http.post('/user', {
                email: this.userData.email,
                rating: this.userData.rating,
                review: this.review
            })
            .then(function (response) {
                currentObj.output = response.data;
            })
            .catch(function (error) {
                currentObj.output = error;
            });
        }
    },
}
</script>

<style scoped>
.review-form {
    width: 720px;
    margin: 0 auto;
}
label {
    text-align: left;
}
.form-group {
    margin-bottom: 20px;
}
h1 {
    font-size: 30px;
    font-weight: bold;
}
.submit-button {
    margin-top: 40px;
}
.upload-button {
    margin-top: 20px;
}
.continue-button {
    float: right;
    margin-top: 20px;
}
</style>
