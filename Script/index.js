const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(response=>response.json())
    .then(data=>displayLessons(data.data))
}
loadLessons();
const loadLevelWord=(id)=>{
   
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
     fetch(url)
     .then(response=>response.json())
     .then(data=>displayLevelWord(data.data))


}
const displayLevelWord=(words)=>{
   const wordContainer=document.getElementById("word-container");
   wordContainer.innerHTML="";
   words.forEach(word=>{
    console.log(word)
    const card=document.createElement("div");
    card.innerHTML=`
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold ">Meaning and pronounciation</p>
        <div class="text-2xl font-bangla font-medium">"${word.meaning}/ ${word.pronounciation}"</div>
        <div class="flex justify-between items-center">
            <button class="btn text-lg  bg-[#1A91FF10] hover:text-green-500 "><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn text-lg bg-[#1A91FF10] hover:text-green-500">
        <i class="fa-solid fa-volume-high"></i>
    </button>

        </div>

    </div>
    `
    wordContainer.append(card)
   })
}
const displayLessons=(lessons)=>{
//   1. Get the container and empty
const levelContainer=document.getElementById('level-container');
levelContainer.innerHTML="";

for(let lesson of lessons){
    const btndiv=document.createElement("div");
    btndiv.innerHTML=`
     <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open-reader"></i> Lesson-${lesson.level_no}</button>

    `
    levelContainer.append(btndiv)
}
// 2.Get into every lessons
// 3.Create element
// 4.append element

}