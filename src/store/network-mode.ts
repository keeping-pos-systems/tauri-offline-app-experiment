import { create } from "zustand";

type Store = {
	mode: "OFFLINE" | "ONLINE";
	setMode(mode: Store["mode"]): void;
};

export const useNetworkModeStore = create<Store>((set) => ({
	mode: "ONLINE",
	setMode(mode) {
		return set({
			mode,
		});
	},
}));
