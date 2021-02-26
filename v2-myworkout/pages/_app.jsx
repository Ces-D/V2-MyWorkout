
import Layout from "../components/Layout";
import { AuthProvider } from "../lib/authProvider";

import "./globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider authenticated={authenticated}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
}

export default MyApp;
