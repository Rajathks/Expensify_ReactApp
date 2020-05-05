
/* firebase.database().ref().set({
     name: "King Rajath KS",
   age : 24,
 isSingle : true,
 location : {
   city : " Bengaluru",
  country : "India"
}

}).then(() => console.log("Connected")).catch(e => console.log(e));

firebase
  .database()
  .ref("isSingle")
  .remove()
  .then(() => console.log("Data Removed"))
  .catch((e) => console.log(e));

  firebase
    .database()
    .ref()
    .update({
        stressLevel : 8,
        isSingle : null,
        'location/city' : "Namma Bengaluru"

    });


    firebase
    .database()
    .ref()
    .on("value",(snapshot) =>  {
            console.log(`${snapshot.val().name} lives in ${snapshot.val().location.city}`);
            
    });

*/
const expenses = [
    {
      id: "0",
      description: "lGum",
      note: "sample note",
      amount: parseFloat("5000", 10) * 100,
      createDate: 123,
    },
    {
      id: "1",
      description: "Rent",
      note: "Rent note",
      amount: "8000",
      createDate: 124,
    },
    {
      id: "2",
      description: "Bill",
      note: "Bill note",
      amount: "9000",
      createDate: 125,
    },
  ];
  
  expenses.map((expense) => {

    firebase
    .database()
    .ref('Expenses')
    .push(expense)
    .then(() => console.log(`Expense ${expense.id} has been added`))

  });
 
  firebase
  .database()
  .ref('Expenses')
  .on("value",(snapshot) => {
    const nexpenses = [];
    snapshot.forEach((childSnapshot) => { 
      nexpenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      }); 
    });
    console.log(nexpenses);
    
  })

  firebase
  .database()
  .ref('Expenses')
  .on("child_changed",(snapshot) =>{
    console.log(snapshot.key);
    
  })