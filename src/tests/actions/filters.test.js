import {StartDateChanger,EndDateChanger,SortByAmount,SortByDate,SearchText} from "../../actions/filters";
import moment from "moment";

test("Start Date Set Test : ",() => {
    const result = StartDateChanger(moment(0));
    expect(result).toEqual({
        type:'SETSTART',
        startDate: moment(0)
    });
});

test("End Date Set Test : ",() => {
    const result = EndDateChanger(moment(0));
    expect(result).toEqual({
        type:'SETEND',
        endDate: moment(0)
    });
});

test("Sort by Date function Test" , () => {
    const result = SortByDate();
    expect(result).toEqual({
        type:'SORTDATE'
    });
});

test("Sort by Amount function Test" , () => {
    const result = SortByAmount();
    expect(result).toEqual({
        type:'SORTAMOUNT'
    });
});


test("Search by Text Function Test:",() =>{
    const result=SearchText("Rajath");
    expect(result).toEqual({
        type:"SEARCHTEXT",
        text:"Rajath"
    });
});

test("Search by Text Function Test for default value:",() =>{
    const result=SearchText();
    expect(result).toEqual({
        type:"SEARCHTEXT",
        text:""
    });
});