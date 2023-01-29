// ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
/* 
java script is a high level interpreted programming language.
*/
// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?

/* 
যখন JavaScript ফাইলটি ব্রাউজারে লোড করা হয়, তখন JavaScript ইঞ্জিন ফাইলের প্রতিটি লাইনকে উপরে থেকে নীচে চালাবে। এটি একটি interpreted programming language তাই সোর্স কোড এক্সিকিউশনের আগে বাইনারি কোডে কম্পাইল করা হয় না।
 */

// ৩. ভেরিয়েবল কি জিনিস?
/* 
we think variable is a box where we can store value .
In programming variable is a value that can change ,depnending on condition or  on information passed to the program. 
*/

// ভেরিয়েবল কিভাবে ডিক্লেয়ার করে ?
/* 
a হতে z অথবা A হতে Z পর্যন্ত যেকোন বর্ন ব্যবহার করা যাবে.
ডিজিট ব্যবহার করতে পারবেন তবে শুরুতে না.
underscore ব্যবহার করতে পারবেন তবে space ব্যবহার করতে পারবেন না
কোন কীওয়ার্ড ব্যবহার করতে পারবেন না
*/
// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
var firstName = "Sumona";
// console.log(firstName);
firstName = "Asha";
console.log(firstName);

// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি 
/* 
1.string
2.number
3.boolan
4.null
5.undifine
*/
// দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে?

// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
// ১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 
// Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয়
/*  JavaScript arrays are zero-indexed: the first element of an array is at index 0 , the second is at index 1 */

/* ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।  */

var books = [390, 100, 110, 50, 1000, 250, 120];

for(var i = 0; i < books.length; i++){
    book = books[i];
    if(book > 200){
        continue;
    }
    console.log(book)
};

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
for(var i = 30; i <= 86; i++){
    if (i > 44){
        break;
    }
    console.log(i)

}

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

var phoneModel = ["Samphony", "Samsam", "Vivo", "Oppo", "Iphone"];
var Model = 0;
while(Model < phoneModel.length){
    console.log(phoneModel[Model]);
    Model++
}

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

var skills = ["html", "html5", "css", "css3", "bootstrap", "tailwind","javascript"];

for(var i = 0; i < skills.length; i++){
    var skill = skills[i];
    console.log(skill)
}

// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
var i = 581
while(i <= 623){
    console.log(i );
    i += 2
}
for (var i = 581; i <= 623; i++){
    if(i % 2 != 0){
    console.log(i)

    }
}

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  