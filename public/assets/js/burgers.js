$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var test = $("#newburger").val().trim();
        console.log(test)
    
        var newBurger = {
            burger_name: $("#newburger").val().trim(), 
            devoured: 0
        };
        console.log("burger-" + newBurger)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added another burger");
            location.reload();
        });
    });

    $(".devourBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var isDevoured = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function() {
            console.log("Burger Devoured");
            location.reload();
        })
    });

    
    
});