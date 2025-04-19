import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';
import NotFoundPage from './pages/not-found-page';
import PortfolioPage from './pages/portfolio-page';

const router = createBrowserRouter([
    { path: '/', element: <PortfolioPage />, errorElement: <NotFoundPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/contact', element: <ContactPage /> },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
