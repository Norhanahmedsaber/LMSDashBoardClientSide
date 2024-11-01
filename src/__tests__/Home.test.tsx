import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter for testing
import { configureStore } from '@reduxjs/toolkit';
import Home from '../components/Home';
import rootReducer from '../state/rootReducer'; // Adjust based on your project structure

// Create a mock store with initial state
const mockStore = configureStore({
    reducer: rootReducer,
    preloadedState: {
        auth: {
            isloggedin: true, // Adjust to match your state shape
        },
        // Include other slices of state as necessary
    },
});
type AuroraBackgroundProps = {
    children: React.ReactNode; // Explicitly define children prop type
};

jest.mock('../components/ui/aurora-background', () => ({
    AuroraBackground: ({ children }: AuroraBackgroundProps) => <div>{children}</div>
}));

describe('Home', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </Provider>
        );
        
        expect(getByText('Welcome to Student Portal')).toBeInTheDocument();
        expect(getByText(/Keep an eye on your grades/)).toBeInTheDocument(); // This should now work
    });
});
