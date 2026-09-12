const searchBtn=document.getElementById("searchBtn");
searchBtn.addEventListener("click",function(){
    const job =document.getElementById("searchInput").value;
    const result=document.getElementById("result");

    if(job ==""){
        result.innerText="please enter a job title to search";
        result.style.color="red";

    }
    else{
        result.innerText="searching for:"+job;
        result.style.color="green";

        
    }

    const cards=document.querySelectorAll(".job-card");
    cards.forEach(function(card){
        const jobName=card.dataset.job.toLowerCase();
        if(jobName.includes(job.toLowerCase())){
            card.style.display="flex";

        }
        else{
            card.style.display="none";
        }
    })
});



const applyBtns=document.querySelectorAll(".job-card button");
applyBtns.forEach(function(btn){
    btn.addEventListener("click",function(){
        window.location.href="apply.html";
    });
});

const registerBtn=document.getElementById("registerBtn");
registerBtn.addEventListener("click",function(){
    alert("Registration page coming soon ....")
});





