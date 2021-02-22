import React from "react";
import Alert from "react-bootstrap/Alert";

class RequestErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: error, errorInfo: errorInfo });
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <Alert variant="danger">
                        <Alert.Heading>{this.state.errorInfo}</Alert.Heading>
                    </Alert>
                    {this.props.children}
                </>
            );
        }
        return this.props.children;
    }
}

export default RequestErrorBoundary;
