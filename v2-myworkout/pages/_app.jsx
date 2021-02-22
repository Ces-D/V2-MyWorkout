import Layout from "../components/Layout";
import { AuthProvider } from "../lib/authProvider";
import "./globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
}

export default MyApp;
