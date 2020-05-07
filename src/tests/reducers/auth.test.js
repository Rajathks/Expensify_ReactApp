import AuthReducer from "../../reducers/auth";

test("Test login Reducer", () => {
  const action = {
    type: "LOGIN",
    uid: "125kyz",
  };
  const result = AuthReducer({}, action);
  expect(result.uid).toBe(action.uid);
});

test("Test logout Reducer", () => {
  const action = {
    type: "LOGOUT",
  };

  const result = AuthReducer({ uid: "Anyt" }, action);
  expect(result).toEqual({});
});
