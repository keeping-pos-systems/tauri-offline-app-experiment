import { useNetworkModeStore } from "@/store/network-mode";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

export function NetworkModeSelect() {
	const { mode, setMode } = useNetworkModeStore();

	return (
		<Select value={mode} onValueChange={setMode}>
			<SelectTrigger>
				<SelectValue placeholder="Select the network mode" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="OFFLINE">Offline</SelectItem>
				<SelectItem value="ONLINE">Online</SelectItem>
			</SelectContent>
		</Select>
	);
}
