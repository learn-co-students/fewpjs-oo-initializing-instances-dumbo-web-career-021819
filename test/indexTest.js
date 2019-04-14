describe("breakfast", () => {
  it("has a class of breakfast", () => {
    expect(new Breakfast()).to.be.an.instanceof(Breakfast);
  })
  it("creates a new breakfast with the correct parameters", () => {
    bfast = new Breakfast('eggs', 'juice')
    expect(bfast.food).to.equal('eggs')
    expect(bfast.drink).to.equal('juice')
  })
})

describe("lunch", () => {
  it("has a class of lunch", () => {
    expect(new Lunch()).to.be.an.instanceof(Lunch);
  })
  it("creates a new lunch with the correct parameters", () => {
    newLunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')
    expect(newLunch.salad).to.equal('side salad')
    expect(newLunch.soup).to.equal('broccoli cheddar soup')
    expect(newLunch.drink).to.equal('iced tea')
  })
})

describe("dinner", () => {
  it("has a class of dinner", () => {
    expect(new Dinner()).to.be.an.instanceof(Dinner);
  })
  it("creates a new dinner with the correct parameters", () => {
    newDinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')
    expect(newDinner.salad).to.equal('balsamic salad')
    expect(newDinner.soup).to.equal('consomme')
    expect(newDinner.entree).to.equal('filet mignon')
    expect(newDinner.dessert).to.equal('cheesecake')
  })
})
