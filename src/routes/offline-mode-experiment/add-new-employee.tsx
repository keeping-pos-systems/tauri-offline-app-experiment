import { createFileRoute } from "@tanstack/react-router";
import { AddNewEmployee } from "@/features/employee/addNew";

export const Route = createFileRoute(
	"/offline-mode-experiment/add-new-employee",
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <AddNewEmployee />;
}
