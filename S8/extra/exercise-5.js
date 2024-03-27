// En base a la api Open Trivia (https://opentdb.com/api_config.php), vamos a desarrollar un trivial con la siguiente url 'https://opentdb.com/api.php?amount=10&type=multiple'. Esta api nos devolverá una serie de preguntas con sus respuestas, tanto erroneas como correctas. 

// La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial y que al darle al 'Start Game' le salgan las preguntas de la api para que pueda comenzar el juego. Una vez las responda todas, le mostraremos al usuario el resultado.

// Ten en cuenta que hay dos tipos de preguntas. Aquellas con 3 respuestas erroneas y 1 correcta y aquellas con respuesta verdadero / falso.


const inputQuestionNumber=document.querySelector(`input[data-function="questions-number"]`)
const btnStartGame= document.querySelector(`button[data-function="start-game"]`)
const divGameBoard=document.querySelector(`div[data-function="gameboard"]`)
const btnCheckGame= document.querySelector(`button[data-function="check-game"]`)
let correctAnswers=0


btnStartGame.addEventListener("click", async ()=>{

    const api= await fetch(`https://opentdb.com/api.php?amount=${inputQuestionNumber.value}`)
    const res= await api.json();

    if(inputQuestionNumber.value!=="" && inputQuestionNumber.value!==0){
        
    for (let i = 0; i < res.results.length; i++) {
        const questionDiv=document.createElement("div")
        questionDiv.setAttribute("style", "display:flex; flex-direction:column")
        divGameBoard.appendChild(questionDiv)

        const questionH3=document.createElement("h3")
        // const ulAnswer=document.createElement("ul")
        
        questionDiv.appendChild(questionH3)
        // questionDiv.appendChild(ulAnswer)

        
        questionH3.innerHTML=i+1+". "+res.results[i].question

        
        const allAnswers = [...res.results[i].incorrect_answers, res.results[i].correct_answer];        
        allAnswers.sort(()=>Math.random()-0.5)


        const selectAnswer=document.createElement(`select`)
        selectAnswer.setAttribute("style", "width: 200px")
        const option1= document.createElement("option")
        const option2= document.createElement("option")
        const option3= document.createElement("option")
        const option4= document.createElement("option")
        questionDiv.appendChild(selectAnswer)
        selectAnswer.appendChild(option1)
        selectAnswer.appendChild(option2)
        option1.innerHTML=allAnswers[0]
        option1.value=allAnswers[0]
        option2.innerHTML=allAnswers[1]
        option2.value=allAnswers[1]
        if(allAnswers.length>2){
        selectAnswer.appendChild(option3)
        selectAnswer.appendChild(option4)
        option3.innerHTML=allAnswers[2]
        option3.value=allAnswers[2]
        option4.innerHTML=allAnswers[3]
        option4.value=allAnswers[3]}
        const selectAnswer=document.createElement(`select`)
        selectAnswer.setAttribute("style", "width: 200px")
        const option1= document.createElement("option")
        const option2= document.createElement("option")
        const option3= document.createElement("option")
        const option4= document.createElement("option")
        questionDiv.appendChild(selectAnswer)
        selectAnswer.appendChild(option1)
        selectAnswer.appendChild(option2)
        option1.innerHTML=allAnswers[0]
        option1.value=allAnswers[0]
        option2.innerHTML=allAnswers[1]
        option2.value=allAnswers[1]
        if(allAnswers.length>2){
        selectAnswer.appendChild(option3)
        selectAnswer.appendChild(option4)
        option3.innerHTML=allAnswers[2]
        option3.value=allAnswers[2]
        option4.innerHTML=allAnswers[3]
        option4.value=allAnswers[3]}
        console.log(allAnswers);
        const h2Correct=document.createElement("h2")
        questionDiv.appendChild(h2Correct)
        h2Correct.innerHTML=""

        btnCheckGame.addEventListener("click", ()=>{
            if(selectAnswer.value===res.results[i].correct_answer){
                h2Correct.innerHTML="¡¡CORRECT!!"
                h2Correct.setAttribute("style","font-weight: bold; color: green")

            }else{
                h2Correct.innerHTML="ERROR"
                h2Correct.setAttribute("style","font-weight: bold; color: red")
            }
            btnCheckGame.disabled=true
            })
    }
    }
    
})
        const h2Correct=document.createElement("h2")
        questionDiv.appendChild(h2Correct)
        h2Correct.innerHTML=""
        
        btnCheckGame.addEventListener("click", ()=>{

        
            if(selectAnswer.value===res.results[i].correct_answer){
                h2Correct.innerHTML="¡¡CORRECT!!"
                h2Correct.setAttribute("style","font-weight: bold; color: green")
                correctAnswers++;
            }else{
                h2Correct.innerHTML="ERROR"
                h2Correct.setAttribute("style","font-weight: bold; color: red")
            }
            btnCheckGame.disabled=true})
   }}
btnStartGame.disabled=true })


