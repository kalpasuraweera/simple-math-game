// start button eka click kala pasu input values tika ganna
// index eka invivible karala game eka visible karanna
// input anuwa game eka setup karnna


$('#start').click( ()=>{
    const numDigits=Number($('#digits').val());
    const operator= $('#operator').val();
    if(numDigits>0){
        console.log('started');
        $('#index').addClass('notvisible');
        $('#game').removeClass('notvisible');
        $('#setop').text(operator);
        const value1=newNum(numDigits);
        const value2=newNum(numDigits);
        $('#value1').text(value1);
        $('#value2').text(value2);
        const finalAnswer= answerCal(operator,value1,value2);
        console.log(finalAnswer); 
        $('#check').click(()=>{
            const userAnswer= Number($('#useranswer').val());
            if(userAnswer==finalAnswer){
                alert("you won");
            }
        });
        
        
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