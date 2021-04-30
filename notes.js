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
                var text = "<b>Date:</b> " +date +" | <b>Title:</b> " +title +" | <b>Task:</b> " +task +" | <b>Priority:</b> "
                    +priority +" | <b>Price:</b> " +price +" | <b>Done:</b> " +done
                if(done==false) text += " <button onclick=\"complete(this)\" value=\""+title +"\">Complete</button>"
                var element = $("<div></div></br>").html(text);
                $(".list").append(element);  
            }
        },
        error: (err)=>{
            console.log("Error: ", err);
        }
    })
})

function complete(title){
    $.ajax({
        url: "http://localhost:3000/note/done?title=" +title.value,
        type: "patch",
        //dataType: "json",
        //contentType: "application/json",
        success: (result)=>{
            location.reload
            console.log(result);
        },
        error: (err)=>{
            console.log("Error: ", err);
        }
    })
}