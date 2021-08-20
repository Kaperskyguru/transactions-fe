import Transaction from "./TransactionRepository";
const repositories = {
  transactions: Transaction,
};
export default {
  get: (name) => repositories[name],
};
