var classNames = []
var classTypes = []
var gradeList = []

function classConfirm(index){
  classNames.splice(index, 0, document.getElementsByClassName("inputText")[index].value);
  classTypes.splice(index, 0, document.getElementsByClassName("dropdowns")[index].value);
  document.getElementsByClassName("inputText")[index].disabled = true
  document.getElementsByClassName("dropdowns")[index].disabled = true
  document.getElementsByClassName("buttons")[index].disabled = true
  console.log(classNames)
}

function findGPA(){
  if (document.getElementsByClassName("inputText")[7].value !== ""){
    for (var i = 0; i<8; i++){
      classNames.splice(i, 0, document.getElementsByClassName("inputText")[i].value);
      classTypes.splice(i, 0, document.getElementsByClassName("dropdowns")[i].value);
      document.getElementsByClassName("inputText")[i].disabled = true
      document.getElementsByClassName("dropdowns")[i].disabled = true
      if(document.getElementsByClassName("gradedropdowns")[i].value == "A+" && document.getElementsByClassName("dropdowns")[i].value == "Honors"){
        gradeList.splice(i, 0, 4.5)
      } else if (document.getElementsByClassName("gradedropdowns")[i].value == "A" && document.getElementsByClassName("dropdowns")[i].value == "Honors"){
        gradeList.splice(i, 0, 4)
      } else if (document.getElementsByClassName("gradedropdowns")[i].value == "B+" && document.getElementsByClassName("dropdowns")[i].value == "Honors"){
        gradeList.splice(i, 0, 3.5)
      } else if (document.getElementByClassName("gradedropdowns")[i].value == "B" && document.getElementsByClassName("dropdowns")[i].value == "Honors"){
        gradeList.splice(i, 0, 3)
      } else if (document.getElementsByClassName("gradedropdowns")[i].value == "C+" && document.getElementsByClassName("dropdowns")[i].value == "Honors"){
        gradeList.splice(i, 0, 2.5)
      } else if (document.getElementsByClassName("gradedropdowns")[i].value == "C" && document.getElementsByClassName("dropdowns")[i].value == "Honors"){
        gradeList.splice(i, 0, 2)
      } else if (document.getElementsByClassName("gradedropdowns")[i].value == "D+" && document.getElementsByClassName("dropdowns")[i].value == "Honors"){
        gradeList.splice(i, 0, 1.5)
      } else if (document.getElementsByClassName("gradedropdowns")[i].value == "D" && document.getElementsByClassName("dropdowns")[i].value == "Honors"){
        gradeList.splice(i, 0, 1)
      } else if (document.getElementsByClassName("gradedropdowns")[i].value == "F" && document.getElementsByClassName("dropdowns")[i].value == "Honors"){
        gradeList.splice(i, 0, 0.5)
      }
    console.log(classNames)
    console.log(classTypes)
    console.log(gradeList)
  }
}
}