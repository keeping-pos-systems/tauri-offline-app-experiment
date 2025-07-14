import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-6">
				<Link to="/" className="[&.active]:font-bold">
					Home
				</Link>{" "}
				<Link to="/about" className="[&.active]:font-bold">
					About
				</Link>
				<Link to="/offline-mode-experiment" className="[&.active]:font-bold">
                    Offline mode
				</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
