console.log("Amswer.js");


// to go home
document.getElementById('btn-goto-home').addEventListener('click',function(){
    console.log("btn-goto-home");
    window.location.href = 'index.html';
})

// ans - 1
document.getElementById('answer1').addEventListener('click',function(){
    console.log("answer1");
    window.location.href = 'Answer1.html';
    
})

// ans - 2
document.getElementById('answer2').addEventListener('click',function(){
    console.log("answer2");
    window.location.href = 'Answer2.html';
    
})