function buycar(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Bought a car.!");
            res();
        },5000)
    })   
}
function planatrip(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Let's go to Manali.!");
            res();
        },2000)
    })
    
}
function reachmanali(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Reached Manali.!");
            res();
        },1000)
    })
}
function visitmountain(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Visited the mountain.!");
            res();
        },1000)
    })
}

//Promise hell
// buycar()
//     .then(()=>{
//         planatrip()
//             .then(()=>{
//                 reachmanali()
//                     .then(()=>{
//                         visitmountain()
//                             .then(()=>{
//                                 console.log("Finished.!");
//                             })
//                     })
//             })
//     })

//Solution: Async await. 
//Await should be inside an Async function. Otherwise, it will throw an error.!
async function trip(){
    await buycar();
    await planatrip();
    await reachmanali();
    await visitmountain();
}

trip();


//try catch:
// function buycar(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Bought a car.!");
//             res();
//         },5000)
//     })   
// }
// function planatrip(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Let's go to Manali.!");
//             res();
//         },2000)
//     })
    
// }
// function reachmanali(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Reached Manali.!");
//             rej("Some accident happened.!"); //to test error handling
//         },1000)
//     })
// }
// function visitmountain(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Visited the mountain.!");
//             res();
//         },1000)
//     })
// }

// async function trip(){
//     try{
//         await buycar();
//         await planatrip();
//         const error = await reachmanali();
//         await visitmountain();
//     }catch(err){
//         console.log(err);
//         console.log("Go to Hospital");
//     }
// }

// trip();