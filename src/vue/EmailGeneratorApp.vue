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
        <textarea v-model="information" height="100vh" class="block w-full border text-black" style="min-height: 35vh"></textarea>
      </div>

      <div class="flex justify-between p-4 ">
        <div class="flex flex-wrap gap-2">
          <button @click="generateEmail(information)" class="pill">
            <span class="text-sm">
              Generate Email
            </span>
          </button>
        </div>
      </div>

    </div>
  </form>

</template>

<script>
console.log('EmailGeneratorApp.vue')
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

VMdEditor.use(vuepressTheme, {
  Prism,
});
export default {
  name: 'EmailGeneratorApp',
  components: {
    VMdEditor,
  },
  data() {
    return {
      loading: true,
      information: '',
      response: [],
      display_errors: false,
    }
  },
  methods: {
    generateEmail(information) {
      console.log('Getting news...' + keyword);
      // Make API call
      fetch(`https://automation.todayintel.com/google/news/${keyword}`, {
        method: 'POST',
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
  },
  created() {
    console.log('Component mounted.')
  },

  watch: {
    information: function (val) {
      console.log('Domain changed to: ' + val);
    }
  },
  mounted() {
    console.log('Component mounted.')
  }
}

</script>
