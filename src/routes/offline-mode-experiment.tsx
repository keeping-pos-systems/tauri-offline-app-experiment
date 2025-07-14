import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/offline-mode-experiment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/offline-mode-experiment"!</div>
}
