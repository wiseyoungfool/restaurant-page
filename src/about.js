export default function about() {
    console.log("Entering About Page");
    const content = document.getElementById('content');
    content.innerHTML = "";

    content.innerHTML = `
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod</p>
    <h4>123-456-7890</h4>`
}