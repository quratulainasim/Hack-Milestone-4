let myName:any=document.getElementById("myName")
let design:any=document.getElementById("design")
let loc:any=document.getElementById("loc") 
let email:any=document.getElementById("email")
let phone:any=document.getElementById("phone")
let objective:any=document.getElementById("objective")
let quali1:any=document.getElementById("quali1")
let quali2:any=document.getElementById("quali2")
let quali3:any=document.getElementById("quali3")
let quali4:any=document.getElementById("quali4")
let car1:any=document.getElementById("car1")
let car2:any=document.getElementById("car2")
let skill1:any=document.getElementById("skill1")
let skill2:any=document.getElementById("skill2")
let skill3:any=document.getElementById("skill3")
let skill4:any=document.getElementById("skill4")
let skill5:any=document.getElementById("skill5")
let skill6:any=document.getElementById("skill6")
let pic:any=document.getElementById("pic")


let form=document.getElementById("form")
let submitBtn=document.getElementById("submitBtn")

form?.addEventListener("submit" , (event)=>{
event.preventDefault()

localStorage.setItem("myName" , myName.value)
localStorage.setItem("design" ,design.value )
localStorage.setItem("loc" , loc.value)
localStorage.setItem("email" , email.value)
localStorage.setItem("phone" ,phone .value)
localStorage.setItem("objective" ,objective.value)
localStorage.setItem("quali1" ,quali1 .value)
localStorage.setItem("quali2" ,quali2 .value)
localStorage.setItem("quali3" , quali3.value)
localStorage.setItem("quali4" ,quali4 .value)
localStorage.setItem("car1" , car1.value)
localStorage.setItem("car2" , car2.value)
localStorage.setItem("skill1" , skill1.value)
localStorage.setItem("skill2" ,skill2 .value)
localStorage.setItem("skill3" , skill3.value)
localStorage.setItem("skill4" , skill4.value)
localStorage.setItem("skill5" , skill5.value)
localStorage.setItem("skill6" ,skill6.value)

if (pic.files[0] && pic.files[0]){
    let reader=new FileReader()
    reader.addEventListener("load" ,()=>{
    let textimage:any=reader.result
    localStorage.setItem("profile_pic" ,textimage)        
    })
    reader.readAsDataURL(pic.files[0]) 
}

 window.location.href="./cv/cv.html"

})
