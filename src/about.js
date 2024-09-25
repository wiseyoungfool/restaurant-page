export default function about() {
    console.log("Entering About Page");
    const content = document.getElementById('content');
    content.innerHTML = "";

    content.innerHTML = `
    <div class="about">
        <h1>About</h1>
        <p>Founded in 3000 B.C. Benny's Dine and Dash has been serving terrified customers for over 5000 years. We delight in our ability cause the entire lives of our customers to flash before their eyes while they down the most disgusting food imaginable that we overcharge them egrigiously for. "It's for the experience!", they say, sweat gushing out of their pores while covered in blood and maimed from the waist down. "There's nothing like it!"</p>
        <p>Call today and book your reservation!</p>
        <h4>123-456-7890</h4>
    </div>`
}