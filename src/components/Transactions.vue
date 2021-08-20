<template>
  <div style="overflow: flex">
    <table
      class="table table-bordered table-hover table-active text-white table-sm"
    >
      <thead>
        <tr>
          <th scope="col">Account</th>
          <th scope="col">Reference</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
          <th scope="col">Transaction Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in data" :key="transaction.id">
          <td>{{ transaction.account }}</td>
          <td>{{ transaction.reference }}</td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.status }}</td>
          <td>
            {{ formatDate(transaction.transactionDate) }}
          </td>
          <td>
            <button class="btn btn-success" @click="view(transaction.id)">
              View
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: isPreviousEnd }">
          <a class="page-link" href="#" tabindex="-1" @click.prevent="previous"
            >Previous</a
          >
        </li>
        <li class="page-item" :class="{ disabled: isNextEnd }">
          <a class="page-link" @click.prevent="next" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    data: {
      type: [Array, Object],
      default: () => [],
    },
  },
  data() {
    return {
      size: 20,
      skip: 0,
    };
  },

  computed: {
    isPreviousEnd() {
      return this.skip === 0;
    },

    isNextEnd() {
      return this.data.length !== 20;
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toISOString().split("T")[0];
    },
    view(id) {
      this.$router.push(`/transactions/${id}`);
    },

    previous() {
      this.skip = this.skip - 20;
      const payload = {
        size: this.size,
        skip: this.skip,
      };
      this.$store.dispatch("all", payload);
    },

    next() {
      this.skip = this.skip + 20;
      const payload = {
        size: this.size,
        skip: this.skip,
      };
      this.$store.dispatch("all", payload);
    },
  },
  components: {},
};
</script>

<style></style>