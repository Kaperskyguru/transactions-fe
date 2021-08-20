<template>
  <div>
    <form v-on:submit.prevent="filter" class="m-5">
      <div class="form-row">
        <div class="form-group mb-2 col-md-4 col-sm-12">
          <label class="mr-sm-2 text-white" for="start"> Start Date</label>
          <input
            v-model="start"
            type="date"
            class="form-control mr-sm-2"
            required
            id="start"
          />
        </div>

        <div class="form-group mb-2 col-md-4 col-sm-12">
          <label class="mr-sm-2 text-white" for="end"> End Date</label>
          <input
            v-model="end"
            type="date"
            class="form-control mr-sm-2"
            required
            id="end"
          />
        </div>

        <button type="submit" class="btn btn-primary mb-2 col-md-2 col-sm-6">
          Filter
        </button>
      </div>
    </form>
    <Loader :show="show" />
  </div>
</template>

<script>
import Loader from "@/components/Loader";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      show: false,
      start: "",
      end: "",
      size: 20,
      skip: 0,
    };
  },

  methods: {
    async filter() {
      this.show = true;
      const payload = {
        start: this.start,
        end: this.end,
        size: 20,
        skip: 0,
      };
      await this.$store.dispatch("filterByStartEndDate", payload);
      this.show = false;
    },
  },
};
</script>