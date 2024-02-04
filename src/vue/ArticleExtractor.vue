<template>
  <section>
    <div class="container px-6 py-16 mx-auto text-center">
      <div class="max-w-lg mx-auto">
        <div
            class="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
          <form @submit.prevent="extractArticle" class="p-6 flex flex-col md:flex-row">
            <div class="flex flex-col">
              <label for="link" class="hidden">Website Url</label>
              <input v-model="link" type="url" name="link" id="link" placeholder="https://"
                     class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0">
            </div>
            <button type="submit"
                    class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
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

    </div>
    <div class="container px-6 mx-auto mb-3">
      {{response.summary}}
    </div>
    <div class="container px-6 mx-auto mb-3">
      <div v-html="response.spacy"></div>

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
  name: 'ArticleExtractor',
  data() {
    return {
      title: 'SEO Analyzer',
      subtitle: 'Get a more detail SEO report for your website by contacting me directly or setup a meeting.',
      loading: false,
      link: '',
      response: '',
    }
  },
  methods: {
    extractArticle() {
      // Show loading icon
      this.loading = true;
      // Make API call
          fetch(`https://api.todayintel.com/nlp/article`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              link: this.link,
            }),
          })
          .then(response => response.json())
          .then(response => {
            this.response = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.log(error);

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
