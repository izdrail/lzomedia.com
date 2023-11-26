<template>
  <section>
    <div class="container px-6 py-16 mx-auto text-center">
      <div class="max-w-lg mx-auto">
        <label for="link" class="hidden">Website Url</label>
        <div class="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">

          <form @submit.prevent="getSeoReport" class="p-6 flex flex-col md:flex-row">
            <div class="flex flex-col">

              <input required v-model="link" type="url" name="link" id="link" placeholder="https://" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0">
            </div>
            <button type="submit" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
              <div v-if="loading">
                Loading...
              </div>
              <div v-else>
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>


      <div v-if="loading">
        <span class="loading loading-ring loading-xs"></span>
        <span class="loading loading-ring loading-sm"></span>
        <span class="loading loading-ring loading-md"></span>
        <span class="loading loading-ring loading-lg"></span>
      </div>

      <div class="w-full max-w-sm mx-auto mt-6">
        <div v-if="display_errors" class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex items-center justify-center w-12 bg-red-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
            </svg>
          </div>

          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
              <p class="text-sm text-gray-600 dark:text-gray-200">
                {{ errors }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.page-header {
 display: none;
}
</style>

<script>
console.log('seo-analyzer.vue')

export default {
  name: 'SeoAnalyzer',
  data() {
    return {
      title: 'SEO Analyzer',
      subtitle: 'Get a more detail SEO report for your website by contacting me directly or setup a meeting.',
      loading: false,
      link: '',
      response: '',
      display_errors: false,
      errors: "",
    }
  },
  methods: {
    getSeoReport() {
      // Show loading icon
      this.loading = true;
      // Make API call
      fetch(`https://api.todayintel.com/seo/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          link: this.link,
          format: 'json',
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.response = data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.display_errors = true;
          this.errors = error;
          this.loading = false;
        });
    },
  },
  mounted() {
    console.log('Component mounted.')
    window.loadingSpeed = 35;
  },
}
</script>