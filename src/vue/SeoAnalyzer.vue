
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
            errors: '',
            // SEO Report
            render_report: false,
            loading_time: '',
            word_count: '',
            warnings: [],
            keywords: [],
            headings: [],
            // Charts
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
                    this.loading = false;
                    this.render_report = true;
                    this.response = data;
                    this.loading_time = data.data.total_time;
                    this.word_count = data.data.pages[0].word_count;
                    this.warnings = data.data.pages[0].warnings;
                    this.keywords = data.data.pages[0].keywords;
                    this.headings = data.data.pages[0].headings;

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
    },
}

</script>
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
  <section>
      <!-- THE Errors!-->
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
    <!-- THE FORM !-->
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
        <div>
          <p class="text-sm text-gray-600 mt-2  dark:text-gray-400">
           Please provide a valid URL.
          </p>
        </div>
      </div>
    </div>

    <!-- SEO REPORT !-->
    <div v-if="render_report">

      <!-- SEO REPORT HEADER !-->
      <div class=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div class="grid gap-24 row-gap-8 lg:grid-cols-5">
          <div class="grid gap-8 lg:col-span-2">
            <div>
              <p class="mb-2 text-lg text-green-500 font-bold">
                Loading time
              </p>
              <p class="">
                This is the time it takes for your website to load. The faster the better.
              </p>
            </div>
            <div>
              <p class="mb-2 text-lg text-blue-500 font-bold">
                Word count
              </p>
              <p class="">
                This is the number of words on your website. The more the better. Anything over 500 words is good.
              </p>
            </div>
            <div>
              <p class="mb-2 text-lg text-orange-500 font-bold">
                Warnings
              </p>
              <p class="">
                These are the warnings that were found on your website. The less the better.
              </p>
            </div>
          </div>
          <div class="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            <div class="flex flex-col justify-between p-10">
              <div>
                <p class="text-lg font-semibold dark:text-white sm:text-base">
                  Loading Time
                </p>
                <p class="text-2xl font-bold sm:text-xl">
                  <div v-if="loading_time < 1" class="dark:text-green-500">
                    {{ loading_time }} seconds
                  </div>
                  <div v-else-if="loading_time >= 1 && loading_time < 2" class="dark:text-orange-500">
                    {{ loading_time }} seconds
                  </div>
                  <div v-else class="dark:text-red-500">
                    {{ loading_time }} seconds
                  </div>
                </p>
              </div>
              <div>
                <p class="text-lg font-semibold dark:text-blue-500 sm:text-base">
                  Word Count
                </p>
                <p class="text-2xl font-bold  sm:text-xl">
                  {{ word_count }}
                </p>
              </div>
              <div>
                <p class="text-lg font-semibold text-orange-500 sm:text-base">
                  Warnings
                </p>
                <p class="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  {{ warnings.length }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <!-- Headings !-->
      <section class="">
        <div class="max-w-6xl mt-12 container">
          <h2 class="text-3xl  font-bold text-gray-800 dark:text-gray-100">
            Headings
          </h2>
          <div class="flow-root mt-12 sm:mt-16">
            <div class="divide-y divide-gray--200 my-9">
              <div class="mb-3 " v-for="(headingsArray, headingType) in headings" :key="headingType">
                <h3 class="mt-2">
                  H{{ headingType.slice(1) }}
                </h3>
                <p v-for="(heading, index) in headingsArray" :key="index">
                {{ heading }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- KEYWORDS !-->
      <div class="justify-content-start w-100 mt-24 mb-4 text-start">
        <h2 class="text-3xl mb-6 font-bold text-gray-800 dark:text-gray-100">
          Keywords Appearance
        </h2>
        <div v-for="keyword in keywords" class="my-2 mr-2 inline-block rounded-full bg-fuchsia-600 px-6 pb-2 pt-2.5">
          <span class="text-white font-bold text-lg">
            {{ keyword[0] }}
          </span>
          {{ keyword[1] }}
        </div>
      </div>



      <!-- WARNINGS !-->
      <div class="container">


        <h1 class="text-3xl mb-6 font-bold text-gray-800 dark:text-gray-100">
          Warnings
        </h1>

        <div v-for="(warning, index) in warnings" class="mb-3  flex w-full  bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex items-center justify-center w-12 bg-red-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
            </svg>
          </div>

          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
              <p class="text-sm text-gray-600 dark:text-gray-200">
                {{ warning }}
              </p>
            </div>
          </div>
        </div>

      </div>


    </div>

  </section>

</template>
