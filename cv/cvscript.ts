window.addEventListener("load", () => {
  let myName = localStorage.getItem("myName");
  let design = localStorage.getItem("design");
  let loc = localStorage.getItem("loc");
  let email = localStorage.getItem("email");
  let phone = localStorage.getItem("phone");
  let objective = localStorage.getItem("objective");
  let quali1 = localStorage.getItem("quali1");
  let quali2 = localStorage.getItem("quali2");
  let quali3 = localStorage.getItem("quali3");
  let quali4 = localStorage.getItem("quali4");
  let car1 = localStorage.getItem("car1");
  let car2 = localStorage.getItem("car2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let skill4 = localStorage.getItem("skill4");
  let skill5 = localStorage.getItem("skill5");
  let skill6 = localStorage.getItem("skill6");

  let picture = localStorage.getItem("profile_pic");

  let cvname: any = document.getElementById("cvname");
  cvname.textContent = myName;

  let cvdesign: any = document.getElementById("cvdesign");
  cvdesign.textContent = design;

  let cvlocation: any = document.getElementById("cvlocation");
  cvlocation.textContent = loc;

  let cvemail: any = document.getElementById("cvemail");
  cvemail.textContent = email;

  let cvphone: any = document.getElementById("cvphone");
  cvphone.textContent = phone;

  let cvobjective: any = document.getElementById("cvobjective");
  cvobjective.textContent = objective;

  let cvquali1: any = document.getElementById("cvquali1");
  cvquali1.textContent = quali1;

  let cvquali2: any = document.getElementById("cvquali2");
  cvquali2.textContent = quali2;

  let cvquali3: any = document.getElementById("cvquali3");
  cvquali3.textContent = quali3;

  let cvquali4: any = document.getElementById("cvquali4");
  cvquali4.textContent = quali4;

  let cvcar1: any = document.getElementById("cvcar1");
  cvcar1.textContent = car1;

  let cvcar2: any = document.getElementById("cvcar2");
  cvcar2.textContent = car2;

  let cvskill1: any = document.getElementById("cvskill1");
  cvskill1.textContent = skill1;

  let cvskill2: any = document.getElementById("cvskill2");
  cvskill2.textContent = skill2;

  let cvskill3: any = document.getElementById("cvskill3");
  cvskill3.textContent = skill3;

  let cvskill4: any = document.getElementById("cvskill4");
  cvskill4.textContent = skill4;

  let cvskill5: any = document.getElementById("cvskill5");
  cvskill5.textContent = skill5;

  let cvskill6: any = document.getElementById("cvskill6");
  cvskill6.textContent = skill6;

  let cvimage: any = document.getElementById("cvimage");
  cvimage.src = picture;
});

let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
  window.print();
});

let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
  window.history.back();
});
