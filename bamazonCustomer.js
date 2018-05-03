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


//define display inventory function 
function displayInventory() {
    console.log("inside display inventory");
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
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
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                  }
            }
            
        ])
        .then(function (answer) {
            console.log(answer);


        });

    });
    


}


//inside function query conection.query pass in string

// cheack greatday ex.

//get reponse back loop through reponse of query on 11 log item 

//inquireer to prompt the user what item # they want to purchase and quanity

//check to make sure item number is a valid# use query response to check if item number is valid

//if valid check inventory another function called at bottom of display inventory 

//inside function do another query for product name price stock quanity from products table from item they want to purchase

//if stock quanity is greater then the purchase quanity

//if true subtract purchase quanity from stock quanity crate database and update database with difference of quanity

//call function display order inside display give order total amount purchased. give the name of product show quantity then multiply price of item by total price
//ask if they want to make another purchase using inquireer prompt

//if true reset varibles run display inventory function else connetions.end
