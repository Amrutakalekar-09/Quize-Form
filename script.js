var quizdata = [
    {
        quetion : 'Which framework is realeted js',
        a: '.net',
        b: 'flask',
        c: 'react',
        d: 'django',
        correct : 'c'
    },
    {
        quetion : 'Which is not a programing language',
        a: 'html',
        b: 'python',
        c: 'java',
        d: 'js',
        correct : 'a'
    },
    {
        quetion : 'Which is not a framework',
        a: 'react',
        b: 'javascript',
        c: 'angular',
        d: 'django',
        correct : 'b'
    },
    {
        quetion : 'css stands for',
        a: 'cascading style state',
        b: 'cascading style sheet',
        c: 'cascading sheet of style',
        d: 'none',
        correct : 'b'
    }
]
var quiz =document.getElementById('quiz')
var answer =document.querySelectorAll('.answer')
var quetion =document.getElementById('quetion')
var option_a =document.getElementById('a_value')
var option_b =document.getElementById('b_value')
var option_c =document.getElementById('c_value')
var option_d =document.getElementById('d_value')

var submitbtn =document.getElementById('submit')

var currentQuetion = 0
var quizScore = 0

loadQuiz()
function loadQuiz()
{
    deselect()
    quetion.innerHTML = quizdata[currentQuetion].quetion
    option_a.innerText = quizdata[currentQuetion].a
    option_b.innerText = quizdata[currentQuetion].b
    option_c.innerText = quizdata[currentQuetion].c
    option_d.innerText = quizdata[currentQuetion].d
}
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption=answer.id
        }
    })
    if(selectedoption == quizdata[currentQuetion].correct){
        quizScore=quizScore+1
    }
    currentQuetion=currentQuetion+1
    if(currentQuetion==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`
    }
    else{
        loadQuiz()
    }
})
