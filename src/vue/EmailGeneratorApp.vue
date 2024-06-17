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

  <form @submit.prevent="generateEmail" class="p-6 flex flex-col md:flex-row" method="POST">
    <div class="w-full rounded-lg">
      <div class="flex justify-between p-4">
        <textarea name="information" v-model="information" class="block w-full border text-black"
                  style="min-height: 35vh"></textarea>
      </div>
      <div class="flex justify-between p-4">
        <div class="flex flex-wrap gap-2">
          <button type="submit"
                  class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
            <span class="text-sm">Generate Email</span>
          </button>
        </div>
      </div>
    </div>
  </form>
  <!--Loading !-->
  <div v-if="loading" class="loading">
    <svg
        version="1.1"
        id="dc-spinner"
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px"
        viewBox="0 0 38 38"
        preserveAspectRatio="xMinYMin meet"
    >
      <text x="14" y="21" font-family="Monaco" font-size="2px" style="letter-spacing:0.6" fill="grey">LOADING
        <animate
            attributeName="opacity"
            values="0;1;0" dur="1.8s"
            repeatCount="indefinite"/>
      </text>
      <path fill="#373a42" d="M20,35c-8.271,0-15-6.729-15-15S11.729,5,20,5s15,6.729,15,15S28.271,35,20,35z M20,5.203
        C11.841,5.203,5.203,11.841,5.203,20c0,8.159,6.638,14.797,14.797,14.797S34.797,28.159,34.797,20
        C34.797,11.841,28.159,5.203,20,5.203z">
      </path>
      <path fill="#373a42" d="M20,33.125c-7.237,0-13.125-5.888-13.125-13.125S12.763,6.875,20,6.875S33.125,12.763,33.125,20
        S27.237,33.125,20,33.125z M20,7.078C12.875,7.078,7.078,12.875,7.078,20c0,7.125,5.797,12.922,12.922,12.922
        S32.922,27.125,32.922,20C32.922,12.875,27.125,7.078,20,7.078z">
      </path>
      <path fill="#2AA198" stroke="#2AA198" stroke-width="0.6027" stroke-miterlimit="10" d="M5.203,20
        c0-8.159,6.638-14.797,14.797-14.797V5C11.729,5,5,11.729,5,20s6.729,15,15,15v-0.203C11.841,34.797,5.203,28.159,5.203,20z">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            calcMode="spline"
            keySplines="0.4, 0, 0.2, 1"
            keyTimes="0;1"
            dur="2s"
            repeatCount="indefinite"/>
      </path>
      <path fill="#859900" stroke="#859900" stroke-width="0.2027" stroke-miterlimit="10" d="M7.078,20
        c0-7.125,5.797-12.922,12.922-12.922V6.875C12.763,6.875,6.875,12.763,6.875,20S12.763,33.125,20,33.125v-0.203
        C12.875,32.922,7.078,27.125,7.078,20z">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="1.8s"
            repeatCount="indefinite"/>
      </path>
    </svg>
  </div>

  <div v-if="response" class="w-full rounded-lg">
    <v-md-editor v-model="response" />
  </div>
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
      loading: false,
      information: 'Add some customer information',
      response: "",
      display_errors: true,
    }
  },
  methods: {
    generateEmail() {
      this.loading = true;
      fetch(`https://automation.todayintel.com/api/email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              information: this.information,
            }),
          })
          .then(data => data.json())
          .then(data => {
            this.response = data.response;
            this.showWorkflow = true;
            console.log(this.response);
            this.loading = false;
          })
          .catch(error => {
            console.log(error);
            this.loading = false;
            this.response = error.message;
          });
    },
  },
  watch: {
    information(val) {
      console.log('Information changed to: ' + val);
    }
  },
  created() {
    console.log('Component created.');
  },
  mounted() {
    console.log('Component mounted.');
  },
}
</script>
