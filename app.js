// // 1. Then
// const emailRef = document.querySelector(".email");

// const statusRef = document.querySelector(".status")

// const videoRef = document.querySelector(".video")

// // console.log(emailRef);

// // fetch("https://jsonplaceholder.typicode.com/users/1")
// //   .then((response) => {
// //     return response.json();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //     emailRef.innerHTML = data.email
// //   });

// // 2. Async/await

// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data.email
// }

// main();

// //new promise

// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("FREE")
//         }, 2000)
//     })
// }

// //challenge 23:33 includes subscription status from above

// function getVideo(subscriptionStatus) {
//     return new Promise((resolve, reject) => {
//         if(subscriptionStatus === "VIP") {
//             resolve("show video")
//         }
//         else if(subscriptionStatus === "FREE") {
//             resolve("show trailer")
//         }
//         else{
//             reject("no video")
//         }
//     })
// }

// async function main() {
//     const status = await getSubscriptionStatus();
//     statusRef.innerHTML = status
//     try {
//         console.log(await getVideo(status))
//     }
//     catch (e) {
//         console.log(e)
//         videoRef.innerHTML = e;
//     }
// }

// main();

const emailRef = document.querySelector(".email");
const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

async function main1(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
    emailRef.innerHTML = data.email;
}

main1 ();

function getSubscriptionStatus(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP");
        }, 2000);
    });
}

function getVideo(subscriptionStatus){
    return new Promise ((resolve, reject) => {
        if(subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if(subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else{
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try {
        console.log(await getVideo(status))
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
}

main ();