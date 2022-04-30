// // alert("hello world")
// window.addEventListener("load", function () {
//     console.log("load")
// })
// window.addEventListener("unload", function () {
//     console.log("unload")
// })
const calcy = () => {
    debugger;
    let wd = document.getElementById("wd").value;
    let math = document.getElementById("math").value;
    let computer = document.getElementById("computer").value;
    let phy = document.getElementById("phy").value;
    let grades = "";
    // console.log(wd)
    let totalGrade = parseFloat(wd) + parseFloat(math) + parseFloat(computer) + parseFloat(phy)
    alert(totalGrade)
    let perc = (totalGrade / 400) * 100;

    alert(perc)
    if (perc <= 100 && perc >= 80) {
        grades = "A"
    } else if (perc <= 79 && perc >= 60) {
        grades = "B"
    } else if (perc <= 59 && perc >= 40) {
        grades = "C"

    } else {
        grades = "F"
    }
    if (wd < 40) {
        document.getElementById("showdata").innerHTML = `out of 400 you total is ${totalGrade} and parcent is ${perc
            }% <br /> your grade is ${grades} You are Fail`
    } else if (math < 40) {
        document.getElementById("showdata").innerHTML = `out of 400 you total is ${totalGrade} and parcent is ${perc
            }% <br /> your grade is ${grades} You are Fail`


    } else if (computer < 40) {
        document.getElementById("showdata").innerHTML = `out of 400 you total is ${totalGrade} and parcent is ${perc
            }% <br /> your grade is ${grades} You are Fail`
    } else if (phy < 40) {
        document.getElementById("showdata").innerHTML = `out of 400 you total is ${totalGrade} and parcent is ${perc
            }% <br /> your grade is ${grades} You are Fail`

    } else {
        document.getElementById("showdata").innerHTML = `out of 400 you total is ${totalGrade} and parcent is ${perc
            }% <br /> your grade is ${grades} You are Pass`

    }
}