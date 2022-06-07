import NavigationComponent from "./components/navigation/NavigationComponent";
import SearchFilterBarComponent from "./components/searchFilterBar/SearchFilterBarComponent";
import CompaniesPage from "./pages/companies/CompaniesPage";

import './App.css';

const App = () => (
    <div className="h-full flex">
        <NavigationComponent />

        <div className="flex-1 flex flex-col overflow-hidden">
            <CompaniesPage />
        </div>
    </div>
);

export default App;
