// if time allows, create a new class, allInstantGrams
  // allInstantGrams will be constructed with an allGrams property, set as an empty arr
  // whenever a new gram is created, push it into this arr
  // create a render method that will map through each of the grams stored in the allGrams arr and render it to the page

  class AllInstantGrams {
    constructor() {
      this.allInstantGrams = []
    }

    render() {
      this.allInstantGrams.map(function(gram) {
        return gram.render()
      }).join("")
    }

    addGram(instantGram) {
      var newGram = instantGram
      this.allInstantGrams.push(newGram)
    }
  }
