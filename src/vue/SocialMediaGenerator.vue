<style>

.pill {
  display: flex;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  color: var(--accent-text-over);
  border: 1px solid var(--accent-regular);
  background-color: var(--accent-regular);
  border-radius: 999rem;
  font-size: var(--text-md);
  line-height: 1.35;
  white-space: nowrap;
}

</style>

<template>


  <form>
    <div class="w-full rounded-lg">

      <div class="flex justify-between p-4 ">
        <input v-model="domain"
               class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
               id="domain" name="domain" placeholder="Type your domain here " required="">
      </div>


      <div class="flex p-4 ">
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <article class="pb-6">
            <div v-for="post in news" class="flex items-center mr-4">
              <input type="checkbox"
                                                       class="h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 text-blue-600"
                                                       id="guest-permission-1-checkbox"
                                                       name="guest-permission-checkbox">
              <label
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" data-testid="flowbite-label"
                for="guest-permission-1-checkbox">
                {{ post.title }}
              </label>
            </div>
          </article>
        </div>
      </div>

    </div>
  </form>

</template>

<script>
console.log('SocialMediaGenerator.vue')
export default {
  name: 'SocialMediaGenerator',
  data() {
    return {
      loading: true,
      domain: '',
      response: [],
      display_errors: false,
      errors: '',
      news: [],
    }
  },
  methods: {
    getReport() {
      // Show loading icon
      this.loading = true;
      // Make API call
      fetch(`https://api.todayintel.com/google/trending`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
          .then(response => response.json())
          .then(response => {
            console.log(response.data);
            this.loading = false;
            this.render_report = true;
            this.response = response.data;

          })
          .catch(error => {
            console.log(error);
            this.display_errors = true;
            this.errors = error;
            this.loading = false;
          });
    },
    getNews(keyword) {
      console.log('Getting news...' + keyword);
      // Make API call
      fetch(`https://api.todayintel.com/google/news/${keyword}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
          .then(response => response.json())
          .then(response => {
            console.log(response.data);
            this.news = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    },
    generateSocialMedia() {
      console.log('Generating social media post...');
      // Make API call
      fetch(`https://api.todayintel.com/social-media/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          domain: this.domain,
          news: this.news,
        }),
      })
          .then(response => response.json())
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
  },
  created() {
    console.log('Component mounted.')
    this.getReport();
    this.getNews('trending');
  },

  watch: {
    domain: function (val) {
      console.log('Domain changed to: ' + val);
    }
  },
  mounted() {
    console.log('Component mounted.')
    this.getNews('trending');
  }
}

</script>
