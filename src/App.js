import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary";
import SideBar from "./components/SideBar";
import AppRouter from "./Routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SideBar />
        <AppRouter />
      </ErrorBoundary>
    </div>
  );
}
