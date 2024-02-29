
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
.roles {
  margin-top: 0.5rem;
  display: flex;
  max-width: 75vw;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>

<template>
  <div v-if="loading" class="loading">
    <div class="spinner"></div>
  </div>
  <div class="roles">
    <div v-for="keyword in response" class="pill">
      <a class="dark:text-white text-white" :href="`https://news.google.com/search?q=${keyword['keyword']}&hl=en-GB&gl=GB&ceid=GB:en`" :title="keyword" target="_blank">
      {{ keyword['keyword'] }}
      </a>
    </div>
  </div>

</template>

<script>
console.log('trending-now.vue')
export default {
  name: 'TrendingNow',
  data() {
    return {
      loading: true,
      response: [],
      display_errors: false,
      errors: '',
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
  },
  created() {
    console.log('Component mounted.')
    this.getReport();
  },
}

</script>
