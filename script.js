const btn_insert = document.getElementById("btn_insert")

btn_insert.addEventListener("click", () => {
    const title = document.getElementById("title").value
    const task = document.getElementById("task").value
    const priority = parseInt(document.getElementById("priority").value)
    const price = parseFloat(document.getElementById("price").value)
    const object = { title, task, priority, price };

    console.log(price)
    
    $.ajax({
        url: "http://localhost:3000/note/new",
        type: "post",
        dataType: "json",
        //contentType: "application/json",
        data: object,
        success: (result)=>{
            console.log(result);
        },
        error: (err)=>{
            console.log("Error: ", err);
        }
    })
})