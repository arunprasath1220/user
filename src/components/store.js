import { create } from 'zustand';

const useStore = create((set) => ({
    isAuthenticated: false,
    userName: "", // Add userName state
    setAuthenticated: (status) => set({ isAuthenticated: status }),
    setUserName: (name) => set({ userName: name }), // Function to update username
}));

export default useStore;
