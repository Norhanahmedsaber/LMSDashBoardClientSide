
import { render, screen, fireEvent,act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../state/store';
import Auth from '../components/Auth';
import { login } from '../state/auth/authSlice';

describe('Auth Component', () => {
  beforeEach(() => {
    // Render the Auth component wrapped in a Redux Provider and MemoryRouter
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Auth />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders login button when not logged in', () => {
    // Check if the "Get Started" button is in the document
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument();
  });

  it('calls login action and navigates to DashboardPage when login button is clicked', () => {
    // Click the "Get Started" button
    fireEvent.click(screen.getByRole('button', { name: /Get Started/i }));
    
    // Check if the login action was dispatched
    const state = store.getState();
    expect(state.auth.isloggedin).toBe(true);  // Assert that the user is now logged in
    // Optionally: Check if the navigate function was called with the correct path
  });

  it('renders logout button when logged in', async () => {
    // Wrap the dispatch in act
    await act(async () => {
        store.dispatch(login());
    });
  
    // Re-render the Auth component
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Auth />
            </MemoryRouter>
        </Provider>
    );
  
    // Check if at least one logout button is in the document
    const logoutButtons = screen.getAllByText(/Logout/i);
    expect(logoutButtons.length).toBeGreaterThan(0);
});

});
