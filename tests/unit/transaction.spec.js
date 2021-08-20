import { shallowMount, createLocalVue } from "@vue/test-utils";
import Transactions from "@/components/Transactions.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Transactions.vue Test", () => {
  it("renders message when component is created with correct data", () => {
    // render the component
    const transactions = [
      {
        id: "81bb91f8-051e-491d-accf-0e80df11ba13",
        account: "Sydney Beard",
        description: "TEST",
        category: "",
        reference: "",
        currency: "GBP",
        amount: -1,
        status: "BOOKED",
        transactionDate: "2021-06-23T07:09:58.000Z",
        createdAt: "2021-06-23T17:09:31.000Z",
        updatedAt: "2021-06-23T17:09:31.000Z",
      },
    ];
    const wrapper = shallowMount(Transactions, {
      propsData: {
        data: transactions,
      },
    });

    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("Transactions");

    expect(wrapper.findAll("tr").length).toEqual(2);
  });
});
