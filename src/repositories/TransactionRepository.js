import Client from "./AxiosClient";
const resource = "/transactions";

export default {
  get(size = 20, skip = 0) {
    return Client.get(`${resource}?size=${size}&skip=${skip}`);
  },
  show(id) {
    return Client.get(`${resource}/${id}`);
  },
  filterByDate({ start, end, size = 20, skip = 0 }) {
    return Client.get(
      `${resource}/filter?start=${start}&end=${end}&size=${size}&skip=${skip}`
    );
  },
};
