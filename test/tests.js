const test = QUnit.test;

function truthTeller(trueOrFalse) {
    return trueOrFalse;
}

test('function returns true or false', function(assert) {
    //Arrange
    const truthyThing = true;
    const expectedResult = true;

    //Act 
    const functionResult = truthTeller(truthyThing);

    //Assert
    assert.equal(functionResult, expectedResult);
});
