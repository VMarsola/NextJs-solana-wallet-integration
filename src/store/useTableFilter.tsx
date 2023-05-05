import { create } from "zustand";

// type State = {
//   firstName: string;
//   lastName: string;
// };

// type Action = {
//   updateFirstName: (firstName: State["firstName"]) => void;
//   updateLastName: (lastName: State["lastName"]) => void;
// };

// // Create your store, which includes both state and (optionally) actions
// export const useStore = create<State & Action>((set) => ({
//   firstName: "",
//   lastName: "",
//   updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
//   updateLastName: (lastName) => set(() => ({ lastName: lastName })),
// }));

type State = {
  count: number;
};

type Action = {
  inc: (count: State["count"]) => void;
};

export const useStore = create<State & Action>((set) => ({
  count: 1,
  inc: () => set((state: State) => ({ count: state.count + 1 })),
}));
