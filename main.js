var text = "Lorem ipsum 24 dolor sit"

regex = /[0-9]/g;
result = text.match(regex)
console.log(result)

regex = /\d/g;
result = text.match(regex)
console.log(result)

regex = /(top|best|school)/g;
result = text.match(regex)
console.log(result)

regex = /\s/g;
result = text.match(regex)
console.log(result)

text = "heeey , how are you!";
regex = /e+/g
result = text.match(regex)
console.log(result)


text = "so , i hope e will see each other again soon"
regex = /so*/g;
result = text.match(regex)
console.log(result)


text = "hello , heloo , hellooo"
regex =/o{3}/g;
result = text.match(regex)
console.log(result)

text = "hello , heloo , hellooo, helloooo, helooooo, helloooooo"
regex =/o{3,5}/g;
result = text.match(regex)
console.log(result)

text = "Lorem ipsum 24 dolor sit!"

regex =/!$/g;
result = text.match(regex)
console.log(result)


regex =/^Lor/g;
result = text.match(regex)
console.log(result)
