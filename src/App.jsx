import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

// layouts and pages:
import RootLayout from "./layouts/RootLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PropertiesPage from "./pages/PropertiesPage"
import DevelopmentPage from "./pages/DevelopmentPage"
import MultifamilyPage from "./pages/MultifamilyPage"
import ContactPage from "./pages/ContactPage"

// router and routes:
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path={"/properties"} element={<PropertiesPage />} />
            <Route path={"/development"} element={<DevelopmentPage />} />
            <Route path={"/multifamily"} element={<MultifamilyPage />} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/contact"} element={<ContactPage />}/>
        </Route>
    )
);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
