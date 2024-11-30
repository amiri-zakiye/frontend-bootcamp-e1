const input = document.querySelector("input")

function debounce(callback, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => callback(...args), delay);
    };
}

input.addEventListener("input", debounce((e) => {
    const value = e.target.value.trim();
    alert(`The value is "${value}" and it's ${value.length} characters long!`);
}, 500))