
let tablediv = document.getElementById("data")
let count=1
let url="http://localhost:6700/api/users";

const fetchapi = async()=>{
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    appenddata(data)
}
fetchapi()
const appenddata=(data)=>{
    if(data.length==0){
        let empty = document.getElementById("empty")
        let img = document.createElement("img")
        img.style="margin:30px;margin-left:550px"
        img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixhnZxucLmfqq5yDQ2Gyd08Z1XRAa44_LJQ&usqp=CAU")
        empty.append(img) 
    }

    data.map(e=>{
        let tr = document.createElement("tr")
        let td1= document.createElement("td")
        td1.textContent=count++
        let td2 = document.createElement("td")
        td2.innerText=e.firstname
        let td3 = document.createElement("td")
        td3.innerText=e.email
        let td4 = document.createElement("td")
        td4.innerText=e.gender
        let td5 = document.createElement("td")
        td5.innerText=e.status

        let td6 = document.createElement("td")
        let span = document.createElement("span")
        span.textContent="edit"
        span.setAttribute("class","material-symbols-outlined")


        let td7 = document.createElement("td")
        let span2 = document.createElement("span")
        span2.textContent="delete"
        span2.setAttribute("class","material-symbols-outlined")
        span2.style="cursor:pointer"
        let id = e._id
        span2.onclick=async()=>{
            let req = await fetch(`http://localhost:6700/api/users/${id}`,{
                method:"delete"
            })
            let data =await req.json()
            if(confirm("Do you Want to deleted Successfully!")){
                setTimeout(()=>{
                    alert("User Successfully Deleted !")
                },1000)
            }
            console.log(data)
        }

       
        td6.append(span)
        td7.append(span2)
        tr.append(td1,td2,td3,td4,td5,td6,td7)
        tablediv.append(tr)
    })
}




