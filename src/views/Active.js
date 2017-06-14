// src/views/Active.js
var m = require("mithril")
var List = require("../model/List");


module.exports = {
    view: function() {
        var todos = List.displayList("Active");
        return todos.map(function(object, index) {
                return m("li.todoLi", [
                    m("div.input-group", [
                        m("span.input-group-addon",
                          m("input", {
                            type: "checkbox",
                            checked: false,
                            onclick: function() {
                                object.toggleState()
                                if (object.checkboxstate == false) {
                                    List.allstatechecked = false
                                }
                                List.checkAllComp();
                            }

                        })
                        ),
                        m("div.form-control", object.text),
                          m("span.input-group-btn ",
                            m("button.btn-no-marg", {
                                onclick: function() {
                                    List.removeFromList(index);
                                }
                            }, m("span.glyphicon glyphicon-remove delete-btn[aria-hidden='true']")))
                    ])
                ])
            })
            // ]

    }
}
