$(document).ready(function(){
  $("#submit-button").click(function(event) {
    event.preventDefault();
    var url = $("#image-url").val()
    var caption = $("#caption").val()
    var instantGram = new InstantGram(url, caption)
    var eachGram = new allInstantGrams(instantGram)
    instantGram.render()




    // line below will render image and caption. create class constructors to render images
    // $("#photo-list").append(`<ul><img src="${url}"></ul><ul>${caption}</ul>`)
    $("#image-url").val("")
    $("#caption").val("")
  })
})
