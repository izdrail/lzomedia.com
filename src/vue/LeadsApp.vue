<template>
  <div>

    <div class="mb-5">
      <input v-model="search" type="text" class="form-input max-w-xs" placeholder="Search..." />
    </div>

    <!-- <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :sortable="true"> </vue3-datatable> -->
    <vue3-datatable
        :rows="rows"
        :columns="cols"
        :loading="loading"
        :totalRows="2"
        :isServerMode="false"
        @change="changeServer"
    >


        <template #header>
          <div class="flex flex-row justify-between">
            <div class="flex flex-row items-center">
              <div class="flex flex-col">
                <div class="text-lg font-bold">Leads</div>
                <div class="text-sm text-gray-500">List of all leads</div>
              </div>
            </div>
          </div>
        </template>
        <template #body>
          <div class="flex flex-col">
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-col">
                <div class="text-sm font-bold">Name</div>
                <div class="text-xs text-gray-500">John Doe</div>
              </div>
              <div class="flex flex-col">
                <div class="text-sm font-bold">Email</div>
                <div class="text-xs text-gray-500">john@example.com</div>
              </div>
              <div class="flex flex-col">
                <div class="text-sm font-bold">Phone</div>
                <div class="text-xs text-gray-500">123-456-7890</div>
              </div>
              <div class="flex flex-col">
                <div class="text-sm font-bold">Company</div>
                <div class="text-xs text-gray-500">ACME Inc.</div>
              </div>
            </div>
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-col">
                <div class="text-sm font-bold">Name</div>
                <div class="text-xs text-gray-500">John Doe</div>
              </div>
              <div class="flex flex-col">
                <div class="text-sm font-bold">Email</div>
                <div class="text-xs text-gray-500">john@example.com</div>
              </div>
              <div class="flex flex-col">
                <div class="text-sm font-bold">Phone</div>
                <div class="text-xs text-gray-500">123-456-7890</div>
              </div>
              <div class="flex flex-col">
                <div class="text-sm font-bold">Company</div>
                <div class="text-xs text-gray-500">ACME Inc.</div>
              </div>
            </div>
          </div>
        </template>

    </vue3-datatable>
  </div>
</template>

<script>
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
export default {
  name: 'LeadsApp',
  components: {
    Vue3Datatable,
  },
  data() {
    return {

      loading: false,
      response: [],
      display_errors: true,
      errors: '',
      keyword: '',
      total_rows: 2,
      search: '',
      rows: [
        {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '123-456-7890',
          company: 'ACME Inc.',
        },
        {
          name: 'Jane Doe',
          email: 'jane@example.com',
          phone: '555-123-4567',
          company: 'XYZ Corp.',
        },
      ],
      cols: [
        {
          name: 'Name',
          selector: 'name',
        },
        {
          name: 'Email',
          selector: 'email',
        },
        {
          name: 'Phone',
          selector: 'phone',
        },
        {
          name: 'Company',
          selector: 'company',
        },
      ],
    }
  },
  methods: {
    changeServer() {

      console.log('changeServer')
      this.loading = false;

    },
    created() {
      console.log('Component mounted.')
    },
  }
}

</script>
