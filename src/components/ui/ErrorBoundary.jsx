import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI de error personalizada
      return this.props.FallbackComponent 
        ? <this.props.FallbackComponent error={this.state.error} />
        : (
          <div className="error-fallback">
            <h2>Algo salió mal</h2>
            <p>Ha ocurrido un error inesperado. Por favor, recarga la página.</p>
            <button onClick={() => window.location.reload()}>
              Recargar página
            </button>
          </div>
        );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;