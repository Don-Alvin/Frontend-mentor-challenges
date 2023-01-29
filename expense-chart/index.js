const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
	type: "bar",
	data: {
		labels: ["mon", "tue", "wed", "thur", "fri", "sat", "sun"],
		datasets: [
			{
				label: "",
				data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
				backgroundColor: [
					"hsl(10, 79%, 65%)",
					"hsl(10, 79%, 65%)",
					"hsl(10, 79%, 65%)",
					"hsl(10, 79%, 65%)",
					"hsl(10, 79%, 65%)",
					"hsl(10, 79%, 65%)",
					"hsl(10, 79%, 65%)",
					"hsl(10, 79%, 65%)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
