import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'aabc-1100',
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'user' }, action);
  expect(state).toEqual({});
});
