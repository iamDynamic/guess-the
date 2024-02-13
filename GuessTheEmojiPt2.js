var q = document.getElementById("q")
var imgQ = document.getElementById("imgQ")
var TextValue = document.getElementById("TextValue")
var Submit = document.getElementById("Submit")
function getParameter(x) {
    params = window.location.href.split("?")[1].split("&");
    for (i = 0; i < params.length; i++) {
        // ["id","example"]
        e = params[i].split("=");
        if (e[0] == x) {
            return e[1];
        }
    }
}
var id = getParameter("id")
var AllGameQustions = {
    "levels": {
        "q1": "👁️ + 🏃‍♀️ ", // iran
        "q2": "🍕 + 🏠", // pizza hut
        "q3": "🚫 + 🏠 + 😔", // homeless
        "q4": "🧙 + 👓 + 💥", // harry poter
        "q5": "🇯 + 🍳", //japan
        "q6": "🍔 + 🍟 + 🤡", // mc donald
        "q7": "🧊 + 🍦 ", // ice cream
        "q8": "👸 + 🧊 + ⛄", // frozen
        "q9": "🐷 + 🐵 + 🦏 + 🎤 + 🎵 ", // sing
        "q10": "🚍 + 🚐 + 🚗 + 🚖 ", // cars
        "q11": "🥛 + 🛣️", // milky way
        "q12": "😈 + 🎅", // bad santa
        "q13": "🇮 + 📱", // iphone
        "q14": "📴 + 🌐", // internet off
        "q15": " BIG + 🦶", //Big Foot
        "q16": "🥋 + 👦", // karate kid
        "q17": "☁️ + 🧆", // cloudy meatball
        "q18": "🥤 +  🍰", //cupcake,
    }
}
// l1
if (id === "5f5eeb03-5899-47e1-A505-Bb82484db580") {
    console.log(`this is the id : { ${id} }`)
    q.innerHTML = AllGameQustions.levels.q1
    Submit.addEventListener("click", () => {
        if (TextValue.value == "Iran" || TextValue.value == "iran") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=910197ee-B3bc-465f-Bd01-F2ad62e77466"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=910197ee-B3bc-465f-Bd01-F2ad62e77466"
            }, 2000)
        }
    })
}
// l2
if (id === "910197ee-B3bc-465f-Bd01-F2ad62e77466") {
    console.log(`this is the id : { ${id} }`)
    q.innerHTML = AllGameQustions.levels.q2
    Submit.addEventListener("click", () => {
        if (TextValue.value == "pizza hut" || TextValue.value == "pizzahut") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=D268ab9f-4540-42de-880b-6838fe5079ec"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=D268ab9f-4540-42de-880b-6838fe5079ec"
            }, 2000)
        }
    })
}
// l3
if (id === `D268ab9f-4540-42de-880b-6838fe5079ec`) {
    console.log(`this is the id : { ${id} }`)
    q.innerHTML = AllGameQustions.levels.q3
    Submit.addEventListener("click", () => {
        if (TextValue.value == "homeless") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=0dbce53c-Cb6f-425a-A48f-F8eda1f0c0ea"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=0dbce53c-Cb6f-425a-A48f-F8eda1f0c0ea"
            }, 2000)
        }
    })
}
// l4
if (id === "0dbce53c-Cb6f-425a-A48f-F8eda1f0c0ea") {
    console.log(`this is the id : { ${id} }`)
    q.innerHTML = AllGameQustions.levels.q4
    Submit.addEventListener("click", () => {
        if (TextValue.value == "harry potter" || TextValue.value == "harrypotter") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=7fb8dab7-Baef-43cf-A9b9-643c4ba858b8"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=7fb8dab7-Baef-43cf-A9b9-643c4ba858b8"
            }, 2000)
        }
    })
}
// l5
if (id === "7fb8dab7-Baef-43cf-A9b9-643c4ba858b8") {
    console.log(`this is the id : { ${id} }`)
    q.innerHTML = AllGameQustions.levels.q5
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "japan" || TextValue.value == "Japan") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=7fb8dab7-Baef-43cf-A9b-643c4ba88b"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=7fb8dab7-Baef-43cf-A9b-643c4ba88b"
            }, 2000)
        }
    }) 
}
// l6
if (id === "7fb8dab7-Baef-43cf-A9b-643c4ba88b") {
    q.innerHTML = AllGameQustions.levels.q6
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "MCDONALD'S" || TextValue.value == "MC DONALD'S" || TextValue.value == "mc donald") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=E760bd06-8589-4f22-88e5-F32a544eb75"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=E760bd06-8589-4f22-88e5-F32a544eb75"
            }, 2000)
        }
    })
}
// l7
if (id === "E760bd06-8589-4f22-88e5-F32a544eb75") {
    q.innerHTML = AllGameQustions.levels.q7
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "ice cream" || TextValue.value == "icecream") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=1896ccdf-B1fb-4264-Bd77-4c210262fa95"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=1896ccdf-B1fb-4264-Bd77-4c210262fa95"
            }, 2000)
        }
    })
}
// l8
if (id === "1896ccdf-B1fb-4264-Bd77-4c210262fa95") {
    q.innerHTML = AllGameQustions.levels.q8
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "frozen" || TextValue.value == "Frozen") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=3d9e8c69-F5d1-4d84-Bd56-F787ec68a030"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=3d9e8c69-F5d1-4d84-Bd56-F787ec68a030"
            }, 2000)
        }
    })
}
// l9
if (id === "3d9e8c69-F5d1-4d84-Bd56-F787ec68a030") {
    q.innerHTML = AllGameQustions.levels.q9
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "sing" || TextValue.value == "Sing") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=2fe46e8d-21e3-41f1-Bf9b-050230a4e351"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=2fe46e8d-21e3-41f1-Bf9b-050230a4e351"
            }, 2000)
        }
    })
}
// l10
if (id === "2fe46e8d-21e3-41f1-Bf9b-050230a4e351") {
    q.innerHTML = AllGameQustions.levels.q10
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "Cars" || TextValue.value == "cars") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=84f8e069-2673-4f37-Ba72-Da5b7f45a4b3"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=84f8e069-2673-4f37-Ba72-Da5b7f45a4b3"
            }, 2000)
        }
    })
}
// l11
if (id === "84f8e069-2673-4f37-Ba72-Da5b7f45a4b3") {
    q.innerHTML = AllGameQustions.levels.q11
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "milky way" || TextValue.value == "milkyway") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=11fdda2d-Bb45-4236-A18b-2196130ae255"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=11fdda2d-Bb45-4236-A18b-2196130ae255"
            }, 2000)
        }
    })
}
// l12
if (id === "11fdda2d-Bb45-4236-A18b-2196130ae255") {
    q.innerHTML = AllGameQustions.levels.q12
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "bad santa" || TextValue.value == " badsanta") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=03d56e68-Cf56-448f-A46d-B657674c4bc9"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=03d56e68-Cf56-448f-A46d-B657674c4bc9"
            }, 2000)
        }
    })
}
// l13
if (id === "03d56e68-Cf56-448f-A46d-B657674c4bc9") {
    q.innerHTML = AllGameQustions.levels.q13
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "iphone" || TextValue.value == "Iphone") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=130d30eb-7759-4c43-89de-59581d8f1648"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=130d30eb-7759-4c43-89de-59581d8f1648"
            }, 2000)
        }
    })
}
// l14
if (id === "130d30eb-7759-4c43-89de-59581d8f1648") {
    q.innerHTML = AllGameQustions.levels.q14
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "internet off" || TextValue.value == "internetoff") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=E1398067-5d72-4b51-Bfe7-63bf25ee257b"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=E1398067-5d72-4b51-Bfe7-63bf25ee257b"
            }, 2000)
        }
    })
}
// l15
if (id === "E1398067-5d72-4b51-Bfe7-63bf25ee257b") {
    q.innerHTML = AllGameQustions.levels.q15
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "bigfoot" || TextValue.value == "big foot") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=40255124-3f5d-4948-886c-Cbb7151cebdf"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=40255124-3f5d-4948-886c-Cbb7151cebdf"
            }, 2000)
        }
    })
}
// l16
if (id === "40255124-3f5d-4948-886c-Cbb7151cebdf") {
    q.innerHTML = AllGameQustions.levels.q16
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "karate kid" || TextValue.value == "karatekid") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=426a160b-619f-4508-8a88-A368c71130fa"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=426a160b-619f-4508-8a88-A368c71130fa"
            }, 2000)
        }
    })
}
// l17
if (id === "426a160b-619f-4508-8a88-A368c71130fa") {
    q.innerHTML = AllGameQustions.levels.q17
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "cloudy meatball" || TextValue.value == "cloudymeatball") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=Ae201990-De38-4cfa-8bdc-5239b430e57"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "/Guess%20The%20Emoji%20Part%202.html?id=Ae201990-De38-4cfa-8bdc-5239b430e57"
            }, 2000)
        }
    })
}
// l18
if (id === "Ae201990-De38-4cfa-8bdc-5239b430e57") {
    q.innerHTML = AllGameQustions.levels.q18
    console.log(`this is the id : ${id}`)
    Submit.addEventListener("click",()=>{
        if (TextValue.value == "cupcake" || TextValue.value == "cup cake") {
            q.innerHTML = "Your Answer Is Correct"
            setTimeout(() => {
                location.href = "./index.html"
            }, 2000)
        } else {
            q.innerHTML = "Your Answer Is Not Correct"
            setTimeout(() => {
                location.href = "./index.html"
            }, 2000)
        }
    })
}