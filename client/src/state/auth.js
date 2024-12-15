import { create } from "zustand";

const AuthStore = create((set) => ({
  permissions: ["can edit", "can delete"],
}));

export default AuthStore;
