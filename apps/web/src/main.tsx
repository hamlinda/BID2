import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

// Import your pages/components here
// import Login from './Login';
// import AuthCallback from './AuthCallback';

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/auth/callback/:provider", element: <AuthCallback /> },
]);

const App = () => (
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
