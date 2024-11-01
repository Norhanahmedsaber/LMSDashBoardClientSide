// src/state/auth/__tests__/authSlice.test.ts
import authReducer, { login, logout } from '../../src/state/auth/authSlice.ts';

describe('Auth Slice', () => {
  const initialState = { isloggedin: false };

  it('should handle login', () => {
    const action = login();
    const state = authReducer(initialState, action);
    expect(state.isloggedin).toBe(true);
  });

  it('should handle logout', () => {
    const action = logout();
    const state = authReducer({ isloggedin: true }, action);
    expect(state.isloggedin).toBe(false);
  });
});
