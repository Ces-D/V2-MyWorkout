import withAuthRedirect from "./withAuthRedirect";

export default function withAuth(WrappedComponent, location = "/profile") {
    return withAuthRedirect({
        WrappedComponent,
        location,
        expectedAuth: false,
    });
}
