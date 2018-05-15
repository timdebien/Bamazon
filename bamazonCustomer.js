//require mysql and inquierer package
var mysql = require("mysql");
var inquirer = require("inquirer");

//intialize the conection with the data base var connection = mysql.conenction
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

//run connections.connect to establish conecttion
connection.connect(function (err) {
    if (err) throw err;
    displayInventory();
});
//at bottom of^^ call functions to displayInventoyr

var currenItemArr = []
//define display inventory function 
function displayInventory() {
    //displays of inventory
    console.log("inside display inventory");
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;

        console.log("~^~^~^~^~^~^~^~^^~Bamazon~^~^~^~^~^~^~^~^~^^~^~^~^~^")

        console.log(results);
        for (var i = 0; i < results.length; i++) {
            currenItemArr.push(results[i].item_id);
            console.log("#item: " + results[i].item_id + "|  product_name: " + results[i].product_name + "|  price: " + results[i].price);
        }
        inquirer.prompt([
            {
                name: "item",
                type: "input",
                message: "What is the item you would like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }

        ]).then(function (answer) {
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id == answer.item) {
                    if (results[i].stock_quantity >= answer.quantity) {
                        var product = results[i].product_name;
                        var newStockQuantity = results[i].stock_quantity - answer.quantity
                        var price = results[i].price
                        connection.query("UPDATE products SET ? WHERE ? ", [{ stock_quantity: newStockQuantity }, { item_id: answer.item }],
                            function (err, res) {
                                if (err) throw err;
                                console.log(`You just purchased ${answer.quantity} ${product}.We charged your card $${price * answer.quantity}`);
                                connection.end()
                            });
                    } else {
                        console.log('there is not enough fullfill the order');
                        connection.end()
                    }
                }
            }
        })
    });
}
    
    

    
    




// cheack greatday ex.





//check to make sure item number is a valid# use query response to check if item number is valid

//if valid check inventory another function called at bottom of display inventory 

//inside function do another query for product name price stock quanity from products table from item they want to purchase

//if stock quanity is greater then the purchase quanity

//if true subtract purchase quanity from stock quanity crate database and update database with difference of quanity

//call function display order inside display give order total amount purchased. give the name of product show quantity then multiply price of item by total price
//ask if they want to make another purchase using inquireer prompt

//if true reset varibles run display inventory function else connetions.end
