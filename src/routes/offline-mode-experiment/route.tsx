import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { NetworkModeSelect } from "@/components/network-mode-select";
import { useWatchNetworkMode } from "@/lib/useWatchNetwork";

export const Route = createFileRoute("/offline-mode-experiment")({
	component: RouteComponent,
	errorComponent: () => <div>Error</div>,
});

function RouteComponent() {
	useWatchNetworkMode();

	return (
		<div className="flex gap-6 p-3">
			<div className="space-y-6">
				<NetworkModeSelect />
				<div className="flex flex-col gap-3 p-3 bg-secondary rounded-xl">
					<Link to="/offline-mode-experiment/add-new-employee">
						Add new employee
					</Link>
					<Link to="/offline-mode-experiment/create-order">
						Create an order
					</Link>
					<Link to="/offline-mode-experiment/menu">Menu</Link>
				</div>
			</div>

			<div className="flex-grow p-6">
				<Suspense>
					<Outlet />
				</Suspense>
			</div>
		</div>
	);
}
