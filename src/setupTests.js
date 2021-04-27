// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';

global.renderWithQueryClient = (renderComponent) =>{
 const queryClient = new QueryClient()
    return {
        ...render(
            <QueryClientProvider client={queryClient}>
                {renderComponent}
            </QueryClientProvider>
        )
    } 
}
