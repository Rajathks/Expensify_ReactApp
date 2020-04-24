import moment from "moment";
import FilterReducer from "../../reducers/filters";

test("Default values of Filter reducer test : ", () => {
    const result = FilterReducer(undefined,{type:'@@INIT'});
    expect(result).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    });
});


 test("Should sort by Amount test:",() =>{
     const result = FilterReducer(undefined,{type:'SORTAMOUNT'});
     expect(result.sortBy).toBe('amount')
 });

 test("Should sort by date Test:",() =>{
     const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
     }
     const action = {
         type:"SORTDATE"
     }
     const result = FilterReducer(currentState,action);
     expect(result.sortBy).toBe("date");
 });


 test("Should test Start date Filter", () =>{
     const result = FilterReducer(undefined,{type:"SETSTART",startDate:moment(1)});
     expect(result).toEqual({
         text: '',
         sortBy: 'date',
         startDate: moment(1),
         endDate: moment().endOf("month")

     });
 });

 test("Should test Search Text Filter", () =>{
    const result = FilterReducer(undefined,{type:"SEARCHTEXT",text:"Rajath"});
    expect(result.text).toBe("Rajath");
});

test("Should test End Date Filter", () =>{
    const result = FilterReducer(undefined,{type:"SETEND",endDate:moment(2)});
    expect(result).toEqual({
        text:'',
        sortBy:"date",
        startDate:moment().startOf("month"),
        endDate:moment(2)
    });
});