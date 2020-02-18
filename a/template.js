var dataObject = {
  0: {"id":1,"menuname":"О клубе","city":"Chicago","state":"IL","url":"https://basecamp.com/"},
  1: {"id":2,"menuname":"Преимущества","city":"Mountain View","state":"CA","url":"http://google.com/"}
};

// Cache of the template
var template = document.getElementById("template-list-item");
// Get the contents of the template
var templateHtml = template.innerHTML;
// Final HTML variable as empty string
var listHtml = "";

// Loop through dataObject, replace placeholder tags
// with actual data, and generate final HTML
for (var key in dataObject) {
  listHtml += templateHtml.replace(/{{id}}/g, dataObject[key]["id"])
                          .replace(/{{menuname}}/g, dataObject[key]["name"])
                          .replace(/{{city}}/g, dataObject[key]["city"])
                          .replace(/{{state}}/g, dataObject[key]["state"])
                          .replace(/{{url}}/g, dataObject[key]["url"]);
}

// Replace the HTML of #list with final HTML
document.getElementById("list").innerHTML = listHtml;
