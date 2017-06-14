// src/model/List
var m = require("mithril")

var ToDoList = {
    displayList: [],
    list: [],
    allstatechecked: false,
    addToList: function(text, checkboxstate) {
        var task = {text: text, checkboxstate: checkboxstate};
        console.log(task);
        return m.request({
            method: "POST",
            url: "http://localhost:8000/tasks",
            data: task
        })
        this.loadList();
    },

    loadList: function() {
        return m.request({
            method: "GET",
            url: "http://localhost:8000/tasks",
        })
        .then(function(response) {
            ToDoList.list = response
            
        })
    },

    displayList: function(state) {
<<<<<<< HEAD
        // var TF;
        // if (state == "All") {
        //     return this.list
        // }
        // if (state == "Completed") {
        //     TF = true
        // } else if (state == "Active") {
        //     TF = false
        // }
        
        // for (var i = 0; i < this.list.length; i++) {
        //     if (this.list[i].checkboxState == TF) {
        //         displayList.push(this.list[i])
        //     }
        // }
        // return displayList;
         return m.request({
            method: "GET",
            url: "http://localhost:8000/tasks/"+state,
        })
        .then(function(response) {
            ToDoList.displayList = response
            console.log(ToDoList.list)
            console.log(ToDoList.list)
        })
=======
        var TF;
        if (state == "All") {
            return this.list
        }
        if (state == "Completed") {
            TF = true
        } else if (state == "Active") {
            TF = false
        }
        var displayList = [];
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].checkboxstate == TF) {
                displayList.push(this.list[i])
            }
        }
        return displayList;
>>>>>>> 5c0c4d901b107c614946e5a795275b89e972f716
    },

    toggleCompleted: function(id, checkbox) {   
        // this.list[id].tag = "Completed"
       task = {checkboxstate: !checkbox}
        return m.request({
            method: "PUT",
            url: "http://localhost:8000/tasks/" + id,
            data: task

        }).then(function(response){
            ToDoList.loadList();
        })
    
    },



    removeFromList: function(id) {
        // this.list.splice(id, 1);
        // for (var i = id; i < this.list.length; i++) {
        //     this.list[i].id = this.list[i].id - 1
            
        // }
        // this.checkAllComp();
         return m.request({
            method: "DELETE",
            url: "http://localhost:8000/tasks/" + id
        }).then(function(response){
            ToDoList.list.push(response)
        })
    },

    toggleAllComp: function(TF) {
        for (var i = 0; i < ToDoList.list.length; i++) {
            ToDoList.toggleCompleted(ToDoList.list[i]._id, !TF)
            console.log(ToDoList.list[i].checkboxstate)
        }
        // var allItems = this.displayList("Active");
        // if (allItems.length == 0) {
        //     console.log(this.allstatechecked)
        //     this.allstatechecked = true
        // } else {
        //     console.log(this.allstatechecked)
        //     this.allstatechecked = false
        // }
    }
}
    
    module.exports = ToDoList;