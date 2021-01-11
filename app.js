buttondiv = document.getElementsByClassName('options');

for (const key in buttondiv) {
    if (Object.hasOwnProperty.call(buttondiv, key)) {
       let element = buttondiv[key];
    //    console.log(element);
        element.addEventListener('click', () => {
            console.log();
            element.childNodes[1].childNodes[3].childNodes[1].classList.add('wrong')
            element.childNodes[1].childNodes[3].childNodes[3].style.color = "white";
            console.log(element.childNodes[1].childNodes[3]);
        })
       
    }
}

function removeOptions () {
    let delay = 1;
    for (const key in buttondiv) {
        if (Object.hasOwnProperty.call(buttondiv, key)) {
           let element = buttondiv[key];
           console.log(element);
            element.classList.add('animate__animated')
            element.classList.remove('animate__flipInY')
            element.classList.add('animate__backOutDown')
            element.classList.add('animate__delay-' + delay + 's')
            delay += 1;
            console.log(delay);
           
        }
    }
}
function addOptions () {
    let delay = 1;
    for (const key in buttondiv) {
        if (Object.hasOwnProperty.call(buttondiv, key)) {
           let element = buttondiv[key];
           console.log(element);
            element.classList.add('animate__animated')
            element.classList.remove('animate__backOutDown')
            element.classList.add('animate__flipInY')
            element.classList.add('animate__delay-'+ delay+ 's')
            delay += 1;
            console.log(delay);
           
        }
    }
}


function removeOptions () {
    let delay = 1;
    for (const key in buttondiv) {
        if (Object.hasOwnProperty.call(buttondiv, key)) {
           let element = buttondiv[key];
           console.log(element);
            element.classList.add('animate__animated')
            element.classList.remove('animate__flipInY')
            element.classList.add('animate__backOutDown')
            element.classList.add('animate__delay-' + delay + 's')
            delay += 1;
            console.log(delay);
           
        }
    }
}
function addOptions () {
    let delay = 1;
    for (const key in buttondiv) {
        if (Object.hasOwnProperty.call(buttondiv, key)) {
           let element = buttondiv[key];
           console.log(element);
            element.classList.add('animate__animated')
            element.classList.remove('animate__backOutDown')
            element.classList.add('animate__flipInY')
            element.classList.add('animate__delay-'+ delay+ 's')
            delay += 1;
            console.log(delay);
           
        }
    }
}


function getQuestions() 
{
    let questionsObject = {};

    fetch("https://nigeria-past-questions2.p.rapidapi.com/api/m?subject=chemistry", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "511813cfebmsh840265052427695p1436efjsn2a369f47c58b",
            "x-rapidapi-host": "nigeria-past-questions2.p.rapidapi.com"
        }
    })
    .then(response => 
        response.json())
    .then(
        function(data)
        {
            questionsObject = data
            console.log(questionsObject);
            return questionsObject
        }
    ) 


    
}

getQuestions();
  



