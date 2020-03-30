$(function() {
    $(".create-form").on("submit", function(event) {
        console.log("Order submitted")
        event.preventDefault();
        
        var burger_name = $("#burger-name").val().trim();
        if (burger_name === "") {
            alert("Please enter a burger name!")
        } else {
            var newBurger = {
                burger_name: $("#burger-name").val().trim(),
            }
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function() {
                    console.log("Added a new burger");
                    location.reload();
                }
            );
        }
    });
    // on click of button with .devour-status, change devour status to eaten
    $(".devour-status").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).attr("data-newDevour");
        var newDevourStatus = {
            devoured: newDevour
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourStatus
        }).then(
            function() {
                console.log("Burger devoured!");
                location.reload();
            }
        );
    });
  });