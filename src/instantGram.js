// create the instantGram class
  // create a constructor that will take a url and a caption as args
  // create a render method that will display these to the page

  class InstantGram {
    constructor(imageUrl, caption) {
      this.imageUrl = imageUrl
      this.caption = caption
    }

    render() {
      return $("#photo-list").append(`<ul><img src="${this.imageUrl}"></ul><ul>${this.caption}</ul>`)
    }
  }
