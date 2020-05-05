import moment from "moment";

export  const expense=  [
    {
        id:"1",
        description : "lGum",
        note:"sample note",
        amount : "5000",
        createDate : moment(0)
    },
    {
        id:"2",
        description : "Rent",
        note:"Rent note",
        amount : "8000",
        createDate : moment(0).subtract(4,"days").valueOf()
    },
    {
        id:"3",
        description : "Bill",
        note:"Bill note",
        amount : "9000",
        createDate : moment(0).add(5,"days").valueOf()
    }
];
