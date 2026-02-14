const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(response=>response.json())
    .then(data=>displayLessons(data.data))
}
loadLessons();
const displayLessons=(lessons)=>{
//   1. Get the container and empty
const levelContainer=document.getElementById('level-container');
levelContainer.innerHTML="";

for(let lesson of lessons){
    const btndiv=document.createElement("div");
    btndiv.innerHTML=`
     <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open-reader"></i> Lesson-${lesson.level_no}</button>

    `
    levelContainer.append(btndiv)
}
// 2.Get into every lessons
// 3.Create element
// 4.append element

}