import { defineStore } from "pinia";

export const useTagdataStore = defineStore({
  id: "tagdata",
  persist: true,
  state: () => {
    return {
      tags: [{ name: "首页", path: "/" }],
    }
  },
  actions: {
    setTagdata(data) {
      this.tags.push(data);
      console.log(this.tags);
    },
  },
});
