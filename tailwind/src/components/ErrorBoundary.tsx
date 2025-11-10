import React from 'react';

type State = { hasError: boolean; error?: Error | null };

export default class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // Log to console and you can extend to send to a monitoring service
    console.error('Uncaught error in component tree:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-50 text-red-900 min-h-screen">
          <h2 className="text-2xl font-semibold mb-2">Ocorreu um erro</h2>
          <p className="mb-4">Algo deu errado ao carregar esta página. Abra o console do navegador para ver detalhes.</p>
          <pre className="whitespace-pre-wrap text-sm bg-white p-3 rounded border">{String(this.state.error)}</pre>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
