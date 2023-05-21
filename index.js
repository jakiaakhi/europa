$(document).ready(function(){
    var calculator_string = '';

    var actionButtons = [
        '+',
        '-',
        '*',
        '/',
    ];

    $(".calculator-button button").click(function(){
        var selectedButton = $(this).attr('data-btn-action');

        if(selectedButton === '=' || selectedButton === '%'){
            
        }else{
            if(actionButtons.includes(selectedButton)){
                selectedButton = ' ' + selectedButton + ' ';
            }
            calculator_string += selectedButton;
            $(".result-input").text(calculator_string);
        }
    });
});







$(document).ready(function(){
    var calculator_string = '';

    var actionButtons =[
        '+',
        '-',
        '*',
        '/',
    ];

    $ ("calculator-button button"),click(function(){
        var selectedButton = $(this).attr('data-btn-action');

        if(selectedButton === '=' || selectedButton === '%'){

        }else{
          if (actionButtons.includes(selectedButton)){
                selectedButton = ' ' + selectedButton + ' ';
          } 
          calculator_string += selectedButton;
          $(".result-input").text(calculator_string); 
        }
    });
});