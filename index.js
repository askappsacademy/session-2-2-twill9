const run = function () {
    // Exercise 1
    document.getElementById("ptag-id").innerHTML = "Hello World!"

    // Exercise 2
    document.getElementById('ptag-id').style.backgroundColor = "red";

    // Exercise 3
    const fruits = ['Apple', 'Banana', 'Orange'];
    const fruitColors = {'Apple': 'red', 'Banana': 'green', 'Orange': 'orange'};
    const fruitList = document.createElement('ol');
    // Part 1
    fruitList.textContent = 'Fruit Cart';
    // part 2
    fruits.forEach(fruit => {
        let fruitNode = document.createElement('li');
        fruitNode.id = 'fruit'
        fruitNode.innerText = fruit;
        fruitNode.style.backgroundColor = fruitColors[fruit];

        fruitList.appendChild(fruitNode);

        return fruitNode
    })

    document.getElementById("shopping-cart").appendChild(fruitList)
}

run()