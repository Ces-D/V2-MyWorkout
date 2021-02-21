import Head from "next/head";
import Layout from "../components/Layout";
import { AuthProvider } from "../lib/Auth";
import { useRouter } from "next/router";
import cookie from "cookie";
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
