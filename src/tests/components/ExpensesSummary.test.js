import {shallow} from "enzyme";
import React from "react";
import {ExpensesSummary} from "../../components/ExpensesSummary"; 

test("Should render expenses Summary page with one expense" , () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />);
    expect(wrapper).toMatchSnapshot();


});


test("Should render expenses Summary page with multiple expense" , () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={29090935} />);
    expect(wrapper).toMatchSnapshot();

});