const express = require('express');
const router = express.Router();

// 1) create API and return input request with custom status code .

router.post("/statuscode",(req,res,next)=>{ 
    res.status(200).json({success:true, message: ' successfully',result:req.body, stattuscode:201 });
});
 // output
//  {
//     "success": true,
//     "message": " successfully",
//     "result": {},
//     "stattuscode": 201
// }

// 2) create API (input : name only string, mobile only number , address string , email valid)
// use object destructuring , apply validation of blank or undefined, return response .
router.post("/registration",(req,res,next)=>{ 
     let{name,email,mobile,address} = req.body;
    if(!name){
        res.json({success:false, message: ' provide name' });
    } else if(!email){
        res.json({success:false, message: ' provide email' });
    }if(!address){
        res.json({success:false, message: ' provide address' });
    }if(!mobile){
        res.json({success:false, message: ' provide mobile' });
    } else{
        //
    }
    res.status(200).json({success:true, message: ' successfully',details:req.body });
});

// output
// {
//     "success": true,
//     "message": " successfully",
//     "details": {
//         "name": "saurabh",
//         "email": "saurabh@gmail.com",
//         "mobile": 7277478119,
//         "address": "Chapra"
//     }
// }


// 3) create API (input : 4 numbers)
// use spread operators , create functions for addition and mutiplication , return response of both addition and multiplication , using template string or back ticks.

router.post("/addmulti",(req,res,next)=>{ 
    let{a,b,c}=req.body;
    

    addition = (a,b,c) => (a+b+c)
    var add = addition(a,b,c)

    multiplication = (a,b,c) => (a*b*c)
    var multi = multiplication(a,b,c)


    res.status(200).json({success:true, message: `addition ${add}, multiplicatio ${multi}` });
});

// output
// {
//     "success": true,
//     "message": "addition 50, multiplicatio 4000"
// }

// 4) create API (input : 8 numbers) 
// use rest parameters and  return response in array .

router.post("/restparameter",(req,res,next)=>{ 
    let{a,b,c,d,e,f,g,h}=req.body;
    
num = (a,b,c, ...inputnum) => inputnum
var result = num (a,b,c,d,e,f,g,h);


    res.status(200).json({success:true, message: 'success', result:result });
});

// output 
// {
//     "success": true,
//     "message": "success",
//     "result": [
//         1,
//         1,
//         1,
//         1,
//         1
//     ]
// }

// 5) create API (input :  3 numbers)
// use lambda function or fat arrow function , do addition and return response.

router.post("/arrowfunction",(req,res,next)=>{ 
    let{a,b,c}=req.body;
    
addition = (a,b,c) => a+b+c
var sum = addition (a,b,c);


    res.status(200).json({success:true, message: 'arrow function', result:sum });
});
//output
// {
//     "success": true,
//     "message": "arrow function",
//     "result": 50
// }

// 6) create API (input :array and new elements)
// use spread operator , copy given array to another array , add more elements into the new array return previous and new array in response.
router.post("/copyArray",(req,res,next)=>{ 
    let{num1,num2,array1}=req.body;
    
    let array2 = [...array1,num1,num2];

    res.status(200).json({success:true, message: 'array copy', result:{array1:array1, array2:array2}});
});

// output
// {
//     "success": true,
//     "message": "array copy",
//     "result": {
//         "array1": [
//             1,
//             2,
//             3
//         ],
//         "array2": [
//             1,
//             2,
//             3,
//             4,
//             5
//         ]
//     }
// }
module.exports = router;


