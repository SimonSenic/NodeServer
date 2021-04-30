$(() => {
    $.ajax({
        url: "http://localhost:3000/notes",
        type: "get",
        success: (result)=>{
            for(var i in result){
                const date = result[i].date;
                const title = result[i].title;
                const task = result[i].task
                const priority = result[i].priority;
                const price = result[i].price;
                const done = result[i].done;
                var text = "Date: " +date +" | Title: " +title +" | Task: " +task +" | Priority: "
                    +priority +" | Price: " +price +" | Done: " +done
                var element = $("<div></div></br>").text(text);
                $(".list").append(element);  
            }
        },
        error: (err)=>{
            console.log("Error: ", err);
        }
    })
})