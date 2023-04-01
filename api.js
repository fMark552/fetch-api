const companyInput=document.getElementById("companyName")
const productInput=document.getElementById("productName")
const darabInput=document.getElementById("darab")
const fizetendoInput=document.getElementById("fizetendo")

const kartyakDiv=document.getElementById("kartyak")

const createButton=document.getElementById("create")
createButton.addEventListener("click", createRendeles)

const readButton=document.getElementById("read")
readButton.addEventListener("click", readAllRendeles)

function createRendeles()
{
    let url="https://retoolapi.dev/rE7Gw9/data" // post
    const data = getDataJSON()
    
    fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log("Success:", data) // 200-299
    })
    .catch((error)=> {
        console.log("Error:", error)
    })
}

function getDataJSON()
{
    let company=companyInput.value
    let product=productInput.value
    let darab=darabInput.value
    let fizetendo=fizetendoInput.value

    let rendeles=`{"name":"${company}", "product":"${product}", "darab":"${darab}", "fizetendo":"${fizetendo}"}`
    return JSON.parse(rendeles)
}

function readAllRendeles()
{
    removeAllChild(kartyakDiv)
    let url="https://retoolapi.dev/rE7Gw9/data"
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>showAllRendelés(data))
}

function showAllRendelés(data)
{
    for(let i=0; i< data.length; i++)
    {
        const element=data(i)
        let rendeles=document.createElement("div")
        rendeles.innerHTML=rendelesToHTML(element)
        kartyakDiv.appendChild(rendeles)
    }
}

function rendelesToHTML()
{
    let text=`
        <div class="card">
            <div class="card-header">
                <h1><p>${element.name}</p></h1>  
            </div>
            <div class="card-body">
                <h5 class="card-title">${element.product} ${element.darab}</h5>
                <h5>${element.fizetendo}</h5>
            </div>
        </div>`
    return text
}

function removeAllChild(parent)
{
    while(parent.firstChild)
    {
        parent.removeChild(parent.lastChild)
    }
}







/*
https://retoolapi.dev/rE7Gw9/data

GET
/rE7Gw9/data

GET filter
/rE7Gw9/data?name=value

GET by id
/rE7Gw9/data/1

GET paginate
/rE7Gw9/data?_page=2&_limit=10

POST
/rE7Gw9/data

PUT
/rE7Gw9/data/1

PATCH
/rE7Gw9/data/1

DELETE
/rE7Gw9/data/1
*/