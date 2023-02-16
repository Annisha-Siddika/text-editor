document.getElementById('bold').addEventListener('click', function(){
    const textArea = document.getElementById('texts');
    if(textArea.style.fontWeight === '700'){
        textArea.style.fontWeight = '400';
    }
    else{
        textArea.style.fontWeight = '700';
    }
});

document.getElementById('italic').addEventListener('click', function(){
    const textArea = document.getElementById('texts');
    if (textArea.style.fontStyle === "italic") {
        textArea.style.fontStyle = "normal";
    } else {
        textArea.style.fontStyle = 'italic';
    }
});


document.getElementById('underline').addEventListener('click', function(){
    const textArea = document.getElementById('texts');
    if(textArea.style.textDecoration === 'underline'){
        textArea.style.textDecoration = 'none';
    }
    else{
        textArea.style.textDecoration = 'underline';
    }
});

document.getElementById('text-left').addEventListener('click', function(){
    const textArea = document.getElementById('texts');
    textArea.style.textAlign = 'left';

});
document.getElementById('text-justify').addEventListener('click', function(){
    const textArea = document.getElementById('texts');
    textArea.style.textAlign = 'justify';

});
document.getElementById('text-right').addEventListener('click', function(){
    const textArea = document.getElementById('texts');
    textArea.style.textAlign = 'right';

});
document.getElementById('text-center').addEventListener('click', function(){
    const textArea = document.getElementById('texts');
    textArea.style.textAlign = 'center';

});


document.getElementById('text-size').addEventListener('click', function(){
    const textArea = document.getElementById('texts');
    const inputPxSize = getInputFieldNumber('text-size');
  
    
    textArea.style.fontSize = inputPxSize + 'px';
})
document.getElementById('text-size').addEventListener('keyup', function(){
    const textArea = document.getElementById('texts');
    const inputPxSize = getInputFieldNumber('text-size');
    
    textArea.style.fontSize = inputPxSize + 'px';
})

document.getElementById('text-color').addEventListener('change', function(){
    const textArea = document.getElementById('texts');
    const getColor = document.getElementById('text-color').value;
    textArea.style.color = getColor;
})

function getInputFieldNumber(id){
 const inputNumber = document.getElementById(id).value;
    return inputNumber;
}
