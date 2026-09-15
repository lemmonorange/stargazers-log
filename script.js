fetch("events.json")
    .then(response => response.json())
    .then(events => {
        const list = document.querySelector("#starred");
        events.forEach(event => {
            const item = document.createElement("li");
            item.textContent = `${event.name} - Starred on ${event.starred}`;
            list.appendChild(item);
        });
    });