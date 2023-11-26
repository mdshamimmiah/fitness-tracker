import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './route/Route.jsx'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from './Firebase/AuthProvider.jsx';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
     </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
