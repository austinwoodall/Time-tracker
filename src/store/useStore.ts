import create from "zustand";
import { devtools, persist, StateStorage } from "zustand/middleware";
import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";

interface IStore {
	user: any;
	session: any;
	error: any;
	// setUser: (user: any) => void;
}

const storage: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		console.log(name, "has been retrieved");
		return (await getItemAsync(name)) || null;
	},
	setItem: async (name: string, value: any): Promise<void> => {
		console.log(name, "with value", value, "has been set");
		return await setItemAsync(name, value);
	},
	removeItem: async (name: string): Promise<void> => {
		console.log(name, "has been removed");
		return await deleteItemAsync(name);
	}
};

const useStore = create<IStore>()(
	devtools(
		persist(
			(set) => ({
				user: {},
				session: {},
				error: {}
				// setUser: () => set((state) => ({ user: state.user })),
				// logout: () => set({ user: {} })
			}),
			{
				name: "user-store",
				getStorage: () => storage
			}
		)
	)
);

// ((set) => ({
// 	user: {},
// 	setUser: () => set((state) => ({ user: state.user })),
// 	logout: () => set({ user: {} })
// }))

export default useStore;
