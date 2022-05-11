// start button eka click kala pasu input values tika ganna
// index eka invivible karala game eka visible karanna
// input anuwa game eka setup karnna
let gamePoints=0;

$('#start').click( ()=>{
    const numDigits=Number($('#digits').val());
    const operator= $('#operator').val();
    if(numDigits>0){
        $('#index').addClass('notvisible');
        $('#game').removeClass('notvisible');
        gamePlay(operator,numDigits);
        
        
    }
    
});


function newNum(numDigits){
    let theValue='';
    for(i=0;i<numDigits;i++){
        theValue+=Math.floor(Math.random()*10);
    }
    return Number(theValue)

}

function answerCal(operator,value1,value2){
    let answer=0;
    switch (operator) {
        case '+':
            answer=value1+value2;
        break;
        case '-':
            answer=value1-value2;
        break;
        case '*':
            answer=value1*value2;
        break;
        case '/':
            answer=value1/value2;
        break;
            
    
        default:
            console.log('please select a operator');
        break;
    }

    return answer


}

function gamePlay(operator,numDigits){
    $('#setop').text(operator);
        const value1=newNum(numDigits);
        const value2=newNum(numDigits);
        $('#value1').text(value1);
        $('#value2').text(value2);
        const finalAnswer= answerCal(operator,value1,value2);
        $('#skip').click(()=>{
            gamePlay(operator,numDigits);
        });
        $('#check').click(()=>{
            const userAnswer= Number($('#useranswer').val());
            if(userAnswer==finalAnswer){
                $('#useranswer').val('');
                gamePoints+=5;
                alert("You won.!! You have "+ gamePoints+ " points");
                gamePlay(operator,numDigits);
            }
        });
}