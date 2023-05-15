

// Employee = function(){




//         theEmp = {
    
//             name:"",
    
//             salary:0
    
    
    
    
//         };
    
    
    
    
//         getSalary=function(){  //private method
    
//             return theEmp.salary;
    
//         }
    
    
    
    
//         setSalary = function(aSalary){  //private method
    
//             theEmp.salary=salary;
    
    
    
    
//         }
    
//         giveRaise = function(amount){ //public method
    
//             setSalary(getSalary() + amount);
    
//         }
    
    
    
    
//         //insert a statement here to make giveRaise public
    
    
    
    
//         giveRaise=function(amount){
    
//             theEmp.setSalary(theEmp.getSalary()+amount)
    
//         }
    
    
    
    
//         return theEmp;
    
//     }
    
//   //  ans   not sure\

// //theEmp.giveRaise=function(x){
// //   giveRaise(x);
// //};





    
    
//     var Account =(function(){
    
    
    
    
//         var Balance =0;
    
//         var AcctNo =0;
    
//         var Owner = "";
    
//         var getBalance = function(){  // private method
    
    
    
    
//             return Balance;
    
//         }
    
    
    
    
//         var setBalance = function(newBalance){ //private method
    
//            Balance = newBalance;
    
//         }
    
    
    
    
//         var Open = function(balance,acctno,owner){ //public method
    
    
    
    
//             setBalance(balance);
    
//             AcctNo=acctno;
    
//             Owner=owner;
    
//         }
    
    
    
    
//         var Deposit = function(amount) { //public method
    
//  setBalance(getBalance() +amount);
    
//     }
    
    
    
    
//      return {...}; // Your return object here
    
    
    
    
    
//     })();