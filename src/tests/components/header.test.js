import React from "react";

import {shallow} from "enzyme";
import Header from "../../components/Header";

test("Header Component Render Test:",() =>{
   // const renderer = new ReactShallowRenderer();
    //renderer.render(<Header />);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();


});