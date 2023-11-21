<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
        <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
          {{ title }}
        </h1>
        <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
          {{ subtitle }}
        </p>

        <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
           9 Haddon Road, London, SE25 6TH
          </div>
        </div>

        <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            <a class="underline" href="tel:+44 744 821 88 99">
              +44 744 821 88 99
            </a>
          </div>
        </div>

        <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            <a class="underline" href="mailto:Stefan@LzoMedia.com">
              Stefan@LzoMedia.com
            </a>
          </div>
        </div>
      </div>
      <form @submit.prevent="getSeoReport" class="p-6 flex flex-col justify-center">
        <div class="flex flex-col text-white">
          Provide your website url.
        </div>
        <div class="flex flex-col">
          <label for="link" class="hidden">Website Url</label>
          <input v-model="link" type="url" name="link" id="link" placeholder="https://" class="w-100 mt-2 py-3 px-3 rounded-lg bg-variant dark:bg-gray-700 border border-gray-400 dark:border-gray-700 dark:text-white-800">
        </div>
        <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
          <span v-if="loading">
            Loading...
          </span>
          <span v-else>
            Submit
          </span>
        </button>
      </form>
    </div>
  </section>
  <section class="mt-3">
    <div v-html="response" class="grid dark:text-white grid-cols-1">
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
      subtitle: 'Get a more detail SEO report for your website by contacting us.',
      loading: false,
      link: '',
      response: '',
    }
  },
  methods: {
    getSeoReport() {
      // Show loading icon
      this.loading = true;
      // Make API call
      fetch(`http://31.14.41.92:8000/seo-analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          link: this.link,
          format: 'html',
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
          this.loading = false;
        });
    },
  },
}
</script>