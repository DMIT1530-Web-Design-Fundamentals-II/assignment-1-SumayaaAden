document.addEventListener('DOMContentLoaded', () => {
    const xValues = ["WIND", "HYDRO & TIDAL", "NATURAL GAS & OIL", "BIOMASS", "SOLID FUEL", "IMPORTS"];
    const yValues = [12, 9, 20, 3, 43, 13];
    const barColors = ["#A6C181", "#1F416F", "#666666", "#2A5EA9", "#EED368", "#112740"];

    new Chart("myChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues,
            }],
        },
        options: {
            legend: { display: false },
            title: {
                display: false,
                text: "Energy Stats",
            },
            
        },
    });

    const progressBarsContainer = document.getElementById('progress-bars-container');

    xValues.forEach((label, index) => {
        const container = document.createElement('div');
        container.className = 'progress-bar-container';

        const progressBarInner = document.createElement('div');
        progressBarInner.className = 'progress-bar-inner';
        progressBarInner.style.width = `${yValues[index]}%`;
        progressBarInner.style.backgroundColor = barColors[index];
        progressBarInner.textContent = `${label}: ${yValues[index]}%`;

        container.appendChild(progressBarInner);
        progressBarsContainer.appendChild(container);
    });
});
