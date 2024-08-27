globalInstance = undefined;
const importObject = {
    env: {
        rand: rand,
        malloc: malloc,
    },
};
let heapBase = 0; // Initialize heap base pointer

(async () => {
    let response = await fetch("name_generator.wasm");
    let bytes = await response.arrayBuffer();
    let { instance } = await WebAssembly.instantiate(bytes, importObject);
    globalInstance = instance;

    getRandomName();
})();

var syllablesSlider = document.getElementById("syllablesRange");
var syllablesSliderValue = document.getElementById("syllablesRangeValue");
syllablesSliderValue.innerHTML = syllablesSlider.value;

syllablesSlider.oninput = function() {
    syllablesSliderValue.innerHTML = this.value;
}

var amountSlider = document.getElementById("amountRange");
var amountSliderValue = document.getElementById("amountRangeValue");
amountSliderValue.innerHTML = amountSlider.value;

amountSlider.oninput = function() {
    amountSliderValue.innerHTML = this.value;
}

function getRandomName() {
    let ideas_div = document.getElementById("idea-div");
    ideas_div.innerHTML = "";

    var humanoidCheckbox = document.getElementById("humanoidCheckBox");

    var createdNames = [];

    for (var _i = 0; _i < amountSliderValue.innerHTML; _i++) {
        let a = "";
        do {
            const linearMemory = globalInstance.exports.memory;
            const offset = globalInstance.exports.generate_random_name_alloc(1, syllablesSlider.value, humanoidCheckbox.checked ? 1 : 0);
            const stringBuffer = new Uint8Array(
                linearMemory.buffer,
                offset,
                globalInstance.exports.get_current_random_name_size(),
            );

            let str = "";
            for (let i = 0; i < stringBuffer.length; i++) {
                str += String.fromCharCode(stringBuffer[i]);
            }

            a = "<a id=\"" + str + "\" href=\"javascript:copyToClipboard('" + str + "');\">" + str + "</a></br></br>";
            heapBase = 0;
        } while(createdNames.includes(a));

        ideas_div.innerHTML += a;
        createdNames.push(a);
    }
}

function rand() {
    return Math.floor(Math.random() * 0x7fffffff);
}

function malloc(n) {
    const ptr = heapBase; // Get the current heap base pointer
    heapBase += n; // Increment the heap base pointer by the size of the allocation
    return ptr; // Return the pointer to the allocated memory
}

function copyToClipboard(id) {
    console.log(id);
    navigator.clipboard.writeText(document.getElementById(id).innerText);
    var x = document.getElementById("copied-clipboard");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
