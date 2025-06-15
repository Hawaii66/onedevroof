import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$card")({
  component: RouteComponent,
  loader: ({ params }) => {
    return redirect({
      to: "/",
      params: {
        query: params.card,
      },
    });
  },
});

function RouteComponent() {
  return null;
}
