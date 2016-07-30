/**
 * Created by assassin on 2016/7/18.
 */

var app = require("./component/app");

var path = require("path");

console.info(path.join("文件名：", __dirname, "mywork"));


console.info(__filename);

function outer() {
    var count = 0;
    return function inner() {
        count++;
        console.info("count:", count)
    }
}

outer()();

var data = app.add(3, 6);

console.info(data);
