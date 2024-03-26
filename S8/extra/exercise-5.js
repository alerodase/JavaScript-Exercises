// En base a la api Open Trivia (https://opentdb.com/api_config.php), vamos a desarrollar un trivial con la siguiente url 'https://opentdb.com/api.php?amount=10&type=multiple'. Esta api nos devolverá una serie de preguntas con sus respuestas, tanto erroneas como correctas. 

// La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial y que al darle al 'Start Game' le salgan las preguntas de la api para que pueda comenzar el juego. Una vez las responda todas, le mostraremos al usuario el resultado.

// Ten en cuenta que hay dos tipos de preguntas. Aquellas con 3 respuestas erroneas y 1 correcta y aquellas con respuesta verdadero / falso.


const inputQuestionNumber=document.querySelector(`input[data-function="questions-number"]`)
const btnStartGame= document.querySelector(`button[data-function="start-game"]`)
const divGameBoard=document.querySelector(`div[data-function="gameboard"]`)
const btnCheckGame= document.querySelector(`button[data-function="check-game"]`)


btnStartGame.addEventListener("click", async ()=>{

    const api= await fetch(`https://opentdb.com/api.php?amount=${inputQuestionNumber.value}&type=multiple`)
    const res= await api.json();

    if(inputQuestionNumber.value!=="" && inputQuestionNumber.value!==0){
        
    for (let i = 0; i < res.results.length; i++) {
        const questionDiv=document.createElement("div")
        questionDiv.setAttribute("style", "display:flex; flex-direction:column")
        divGameBoard.appendChild(questionDiv)

        const questionH3=document.createElement("h3")
        const ulAnswer=document.createElement("ul")
        
        questionDiv.appendChild(questionH3)
        questionDiv.appendChild(ulAnswer)

        
        questionH3.innerHTML=i+1+". "+res.results[i].question

        
        const allAnswers = [...res.results[i].incorrect_answers, res.results[i].correct_answer];        
        allAnswers.sort(()=>Math.random()-0.5)

        for (let j = 0; j < allAnswers.length; j++) {
           const answers=document.createElement("li")
           answers.innerHTML=allAnswers[j]
           ulAnswer.appendChild(answers) 
        }

        const inputAnswer=document.createElement(`input`)
        inputAnswer.setAttribute("placeholder", "Escribe tu respuesta")
        questionDiv.appendChild(inputAnswer)
        console.log(allAnswers);
    }

    }
    
})


