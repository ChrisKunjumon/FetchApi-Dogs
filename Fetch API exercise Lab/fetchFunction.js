const button=document.querySelector("#mainButton")
 function getRandomDogPhoto() {
    return fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response=>response.json())
    .catch(err=>console.log(err));


}

async function init(){
    
    loadSpinner();
    const data =await getRandomDogPhoto();
    console.log(data)
    renderDogPhoto(data.message);
    removeSpinner();
    
}



function renderDogPhoto(image){



    var htmlValue=document.querySelector("#container");
    htmlValue.innerHTML=` 
    <h1>The Fetch API Exercises</h1>
    <p>Open the web inspector console to test.</p>
    <img src="${image}" alt=”Random photo of a dog” />

  `
}

function loadSpinner() {
    $("#mainButton").attr("disabled",true);
    const spinner = `../assets/loader.svg`;
    const img = `<img src="${spinner}" id="spinner" alt="Loading spinner image" />`;
    document.querySelector(`#container`).insertAdjacentHTML(`beforeend`, img);
 
    
    
    }
    function removeSpinner() {
    const spinner = document.querySelector(`img#spinner`);
    spinner.parentElement.removeChild(spinner);
    $("#mainButton").attr("disabled",false);

    
    
    }

    function generateDog(){
        
        init();
        button.disabled=false;
    }
