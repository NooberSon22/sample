import { create } from "zustand";
const SampleStore = create((set) => ({
  aboutId: 0,
  updateAboutId: (id) => set({ aboutId: id }),
}));

export default SampleStore;
