
// show the section by donation and history button
function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    //show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden')
}

//get the value by id 
function getTextFieldValueById(id){

    const inputValue = document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
    return inputValueNumber;
}



