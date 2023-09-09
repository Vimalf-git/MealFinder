
const findfood=async()=>{
    const section=document.getElementById("food-list");
    const main=document.getElementById("main");
    const findVal=document.getElementById("search-con").value;
    if(findVal==""){
        alert(" Enter a food name to search")
    }
    const fetxhData=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${findVal}`)

    const res=await fetxhData.json();
    console.log(res);
    if(res.meals==null){
        alert("no food found")
    }else{
        main.style.height="auto";
        res.meals.map(a=>{
            console.log("enter into map");
            let div = document.createElement("div");
            // div.setAttribute("class","content")
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${a.strMealThumb}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-center">${a.strMeal}</h5>
              <a href="${a.strYoutube}" class="btn btn-primary d-flex justify-content-center">Watch video</a>
            </div>
          </div>`

    section.append(div);
        })


    }
    console.log(res);
    document.getElementById("search-con").value="";
}