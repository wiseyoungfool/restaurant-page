export default function menu() {
    console.log("Entering Menu Page");
    const content = document.getElementById('content');
    content.innerHTML = "";

    content.innerHTML = `
    <div class="menu-item">
        <h1>Pasta de la Ducho</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
        <h2>$20</h2>
    </div>
    div class="menu-item">
        <h1>Caviellier breadcake</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
        <h2>$20</h2>
    </div>
    div class="menu-item">
        <h1>Baja Blast Burger</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
        <h2>$20</h2>
    </div>
    div class="menu-item">
        <h1>Dirt Mudpie</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
        <h2>$20</h2>
    </div>`
}