import Link from "next/link";

function HeaderItems(props) {
    if (props.isAuthenticated) {
        return (
            <>
                <Link href="/">Home</Link>
                <Link href="/#account">Account</Link>
                <Link href="/#logout">Logout</Link>
            </>
        );
    }
    return (
        <>
            <Link href="/login">Login</Link>
        </>
    );
}
export default HeaderItems;
