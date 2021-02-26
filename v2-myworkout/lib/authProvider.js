import React, { useState, useContext } from "react";

const AuthContext = React.createContext({
    isAuthenticated: false,
    setAuthenticated: () => {},
});

export const AuthProvider = ({ children, authenticated }) => {
    const [isAuthenticated, setAuthenticated] = useState(authenticated);
    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Context hook
 */
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
}

/**
 * Returns Boolean signaling auth status
 */
export function useIsAuthenticated() {
    const context = useAuth();
    return context.isAuthenticated;
}
