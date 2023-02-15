const device = document.querySelector('#device');

function getSO() {
    const systems = [
        {
            key: "Win",
            value: "Windows"
        },
        {
            key: "Mac",
            value: "Mac OS"
        },
        {
            key: "Linux",
            value: "Linux"
        },
        {
            key: "Android",
            value: "Android"
        },
        {
            key: "like Mac",
            value: "iOS"
        }
    ];

    let name = "Unknown OS";
    device.innerHTML = name;

    for (let i = 0; i < systems.length; i++) {
        const system = systems[i];

        if (navigator.userAgent.indexOf(system.key) != -1) {
            name = system.value;
            device.innerHTML = name;
        }
    }
}

function init() {
    this.getSO();
}

init();