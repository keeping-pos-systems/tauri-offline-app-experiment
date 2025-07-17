import { openDB } from "idb";

export const initDB = () =>
	openDB("offline-form-db", 1, {
		upgrade(db) {
			db.createObjectStore("formQueue", { keyPath: "id", autoIncrement: true });
		},
	});

export const storeOfflineForm = async (formData: any) => {
	const db = await initDB();
	await db.add("formQueue", { ...formData, timestamp: Date.now() });
};

export const getOfflineForms = async () => {
	const db = await initDB();
	return await db.getAll("formQueue");
};

export const removeForm = async (id: number) => {
	const db = await initDB();
	await db.delete("formQueue", id);
};
