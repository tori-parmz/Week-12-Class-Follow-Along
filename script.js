//fetch("http://example.come/movies.json")
//.then((response) => response.json())
//.then((data) => console.log(data));

$.get("https://deckofcardsapi.com/api/deck/new/", function(data, status){
console.log("Data: ", data, "Status: ", status)
});

//$.post("https://crudcrud.com/api/fbad53b2d9414cd99cc7f73567899337/users", {
  //  "name": "king kong",
  //  "location": "USA"
//}, (data, status) => {
 //   console.log("Data: ", data, "Status: ", status)
//})

$.ajax({
    type: 'post',
    url: 'https://crudcrud.com/api/fbad53b2d9414cd99cc7f73567899337/users',
    data: JSON.stringify({
        "name": "king kong",
        "location": "USA"
    }),
    contentType: "application/json; charset=utf-8",
    success: function (data, status) {
        console.log("Data: ", data, "Status: ", status)

    }
})