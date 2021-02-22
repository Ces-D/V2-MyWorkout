import React from "react";

const AuthContext = React.createContext({
    isAuthenticated: false,
    isLoading: true,
    setAuthenticated: () => {},
});

/**
 * Initial value of 'isAuthenticated' comes from the 'authenticated'
 * prop which gets set by _app. We store that value in state and ignore
 * the prop from then on. The value can be changed by calling the
 * 'setAuthenticated()' method
 */

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = React.useState(false);
    const [isLoading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const initializeAuth = async () => {
            const res = await fetch("api/v1/auth/check");
            setAuthenticated(res.status === 200);
            setLoading(false);
        };
        initializeAuth();
    });
    return (
        <AuthContext.Provider
            value={{ isAuthenticated, isLoading, setAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hooks
export function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export function useIsAuthenticated() {
    const context = useAuth();
    return context.isAuthenticated;
}
