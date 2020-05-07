import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("Login Page Component Render Test:", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("Should call login", () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
