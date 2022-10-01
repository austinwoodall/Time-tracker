import create from "zustand";
import { persist, StateStorage } from "zustand/middleware";
import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";

interface IStore {
	session: any;
	error: any;
	clearStore: () => any;
}

const storage: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		// console.log(JSON.stringify(name, null, 2), "has been retrieved");
		return (await getItemAsync(name)) || null;
	},
	setItem: async (name: string, value: any): Promise<void> => {
		// console.log(
		// 	JSON.stringify(name, null, 2),
		// 	"with value",
		// 	JSON.stringify(value, null, 2),
		// 	"has been set"
		// );
		return await setItemAsync(name, value);
	},
	removeItem: async (name: string): Promise<void> => {
		// console.log(name, "has been removed");
		return await deleteItemAsync(name);
	}
};

const useStore = create<IStore>()(
	persist(
		(set) => ({
			session: {},
			error: {},
			clearStore: () =>
				set({
					session: {},
					error: {}
				})
		}),
		{
			name: "user-store",
			getStorage: () => storage
		}
	)
);

export default useStore;
