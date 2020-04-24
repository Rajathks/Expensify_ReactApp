import React from "react";
import {shallow} from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";

test("Not Found Component Test : ", () =>{
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});