import { useEffect } from "react";
import { employeeHttpRepository } from "@/repositories/employee/http";
import { getOfflineForms, removeForm } from "@/repositories/employee/offline";
import { useNetworkModeStore } from "@/store/network-mode";

export function useWatchNetworkMode() {
	const { setMode } = useNetworkModeStore();

	function updateStatus() {
		if (navigator.onLine) {
			setMode("ONLINE");
			getOfflineForms().then(async (forms) => {
				for (const form of forms) {
					try {
						await employeeHttpRepository.addNew(form);
						await removeForm(form.id);
					} catch (e) {
						console.error("Failed to sync form", form, e);
					}
				}
			});
		} else setMode("OFFLINE");
	}

	useEffect(() => {
		window.addEventListener("online", updateStatus);
		window.addEventListener("offline", updateStatus);

		return () => {
			window.removeEventListener("online", updateStatus);
			window.removeEventListener("offline", updateStatus);
		};
	}, []);
}
