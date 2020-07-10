

$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});











// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(document).ready(function() {
//     $(".devour-form").on("submit", function(event) {
//       event.preventDefault();

      
//       var id = $(this).children(".burger_id").val();
     
    
  
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         method: "PUT",
//         url: "/burgers/" + burger_id
//       }).then(
//         function(data) {
//           console.log("changed devoured to", newDevoured);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     // $(".create-form").on("submit", function(event) {
//     //   // Make sure to preventDefault on a submit event.
//     //   event.preventDefault();
  
//     //   var newBurger = {
//     //     burger_name: $("#ca").val().trim(),
//     //           };
  
//     //   // Send the POST request.
//     //   $.ajax("/api/burgers", {
//     //     type: "POST",
//     //     data: newBurger
//     //   }).then(
//     //     function() {
//     //       console.log("created new burger");
//     //       // Reload the page to get the updated list
//     //       location.reload();
//     //     }
//     //   );
//     // });
  
//     // $(".delete-cat").on("click", function(event) {
//     //   var id = $(this).data("id");
  
//     //   // Send the DELETE request.
//     //   $.ajax("/api/cats/" + id, {
//     //     type: "DELETE"
//     //   }).then(
//     //     function() {
//     //       console.log("deleted cat", id);
//     //       // Reload the page to get the updated list
//     //       location.reload();
//     //     }
//     //   );
//     // });
//   });
  