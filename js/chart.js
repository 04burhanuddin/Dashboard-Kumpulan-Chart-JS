$(function() {
    /* ChartJS
     * -------
     * Data and config for chartjs
     */
    'use strict';

    //lLINE CHART
    var horizontalBar = {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [{
            label: 'Density of Planets (kg/m3)',
            data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 105, 255, 0.8)',
                'rgba(99, 132, 0, 0.6)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 105, 255, 0.8)',
                'rgba(99, 132, 0, 1)',
            ],
            borderWidth: 1,
            fill: false
        }]
    };

    var horizntalOptions = {
        plugins: {
            filler: {
                propagate: true
            }
        }
    }


    // Mengambil konteks dengan jQuery - menggunakan metode .get () jQuery
    if ($("#horizontalBar").length) {
        var horizontalBarCanvas = $("#horizontalBar").get(0).getContext("2d");
        //Bagian ini akan mendapatkan simpul pertama yang dikembalikan dalam koleksi jQuery.
        var horizontalBar = new Chart(horizontalBarCanvas, {
            type: 'horizontalBar',
            data: horizontalBar,
            options: horizntalOptions
        });
    };




    //BAR CHART
    var barChart = {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [{
            label: 'Density of Planets (kg/m3)',
            data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 105, 255, 0.8)',
                'rgba(99, 132, 0, 0.6)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 105, 255, 0.8)',
                'rgba(99, 132, 0, 1)',
            ],
            borderWidth: 1,
            fill: false
        }]
    };

    var barOptions = {
        plugins: {
            filler: {
                propagate: true
            }
        }
    };

    if ($("#barChart").length) {
        var barChartCanvas = $("#barChart").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'bar',
            data: barChart,
            options: barOptions
        });
    };
    //AND BAR CHART



    //LINE AREA CHART
    var lineChart = {
        labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [{
            label: "Car Speed",
            data: [15, 10, 21, 32, 12, 33, 10],
            fill: false,
            borderColor: '#f44252',
        }],
        borderWidth: 2,
        fill: false,
    };

    var lineOptions = {
        plugins: {
            filler: {
                propagate: true
            }
        }
    };

    if ($("#lineChart").length) {
        var lineCanvas = $("#lineChart").get(0).getContext("2d");
        var lineChart = new Chart(lineCanvas, {
            type: 'line',
            data: lineChart,
            options: lineOptions
        });
    };
    //END LINE AREA CHART




    //MULTI LINE AREA CHART
    var multiLineData = {
        labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [{
                label: 'Avanza',
                data: [12, 19, 3, 5, 2, 3, 37],
                borderColor: [
                    '#587ce4'
                ],
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Kijang',
                data: [5, 23, 7, 12, 42, 23, 30],
                borderColor: [
                    '#ede190'
                ],
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Alphard',
                data: [15, 10, 21, 32, 12, 33, 10],
                borderColor: [
                    '#f44252'
                ],
                borderWidth: 2,
                fill: false
            }
        ]
    };

    var multiLineAreaoptions = {
        title: {
            display: true,
            text: 'Car Speed'
        },
        plugins: {
            filler: {
                propagate: true
            }
        }
    };

    if ($("#multiLineArea").length) {
        var multiLineCanvas = $("#multiLineArea").get(0).getContext("2d");
        var lineChart = new Chart(multiLineCanvas, {
            type: 'line',
            data: multiLineData,
            options: multiLineAreaoptions
        });
    };
    //END MULTI LINE AREA CHART



    //PIE CHART
    var pieChart = {
        datasets: [{
            data: [2478, 5267, 734, 784, 433],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Afrika',
            'Asia',
            'Eropa',
            'Amerika',
            'Australia'
        ]
    };
    var PieOptions = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        title: {
            display: true,
            text: 'Perkiraan Populasi dunia tahun 2050'
        }
    };

    if ($("#pieChart").length) {
        var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
        var pieChart = new Chart(pieChartCanvas, {
            type: 'pie',
            data: pieChart,
            options: PieOptions
        });
    };
    //AND PIE CHART



    //DOUGHNUT PIE CHART
    var doughnutPieChart = {
        datasets: [{
            data: [2478, 5267, 734, 784, 433],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Afrika',
            'Asia',
            'Eropa',
            'Amerika',
            'Australia'
        ]
    };
    var doughnutPieOptions = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        title: {
            display: true,
            text: 'Perkiraan Populasi dunia tahun 2050'
        }
    };

    if ($("#doughnutChart").length) {
        var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
        var doughnutPieChart = new Chart(doughnutChartCanvas, {
            type: 'doughnut',
            data: doughnutPieChart,
            options: doughnutPieOptions
        });
    };
    //END DOUGHNUT CHART



    //SCATTER CHART
    var scatterChart = {
        datasets: [{
                label: '1950',
                data: [{
                        x: -10,
                        y: 0
                    },
                    {
                        x: 0,
                        y: 3
                    },
                    {
                        x: -25,
                        y: 5
                    },
                    {
                        x: 40,
                        y: 5
                    }
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 2,
                pointRadius: 5
            },
            {
                label: '2050',
                data: [{
                        x: 10,
                        y: 5
                    },
                    {
                        x: 20,
                        y: -30
                    },
                    {
                        x: -25,
                        y: 15
                    },
                    {
                        x: -10,
                        y: 5
                    }
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 2,
                pointRadius: 5
            }
        ]
    }

    var scattertOptions = {
        title: {
            display: true,
            text: 'Perkiraan Populasi Dunia Tahun 2050'
        }
    };

    if ($("#scatterChart").length) {
        var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
        var scatterChart = new Chart(scatterChartCanvas, {
            type: 'scatter',
            data: scatterChart,
            options: scattertOptions
        });
    };
    //END SCATTER CHART



    //BUBBLE CHART
    var bubbleChart = {
        labels: "Africa",
        datasets: [{
            label: ["China"],
            backgroundColor: "rgba(255,221,50,0.2)",
            borderColor: "rgba(255,221,50,1)",
            data: [{
                x: 21269017,
                y: 5.245,
                r: 15
            }]
        }, {
            label: ["Denmark"],
            backgroundColor: "rgba(60,186,159,0.2)",
            borderColor: "rgba(60,186,159,1)",
            data: [{
                x: 258702,
                y: 7.526,
                r: 10
            }]
        }, {
            label: ["Germany"],
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#000",
            data: [{
                x: 3979083,
                y: 6.994,
                r: 15
            }]
        }, {
            label: ["Japan"],
            backgroundColor: "rgba(193,46,12,0.2)",
            borderColor: "rgba(193,46,12,1)",
            data: [{
                x: 4931877,
                y: 5.921,
                r: 15
            }]
        }]
    };

    var bubbleChartOptions = {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                }
            }]
        }
    };

    if ($("#bubbleChart").length) {
        var bubbleChartCanvas = $("#bubbleChart").get(0).getContext("2d");
        var bubbleChart = new Chart(bubbleChartCanvas, {
            type: 'bubble',
            data: bubbleChart,
            options: bubbleChartOptions
        });
    };
    //AND BUBBLE CHART



    //POLAR AREA CHART
    var polarAreaChart = {
        labels: ["Afrika", "Asia", "Eropa", "Amerika", "Australia"],
        datasets: [{
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            pointBorderColor: "#587ce4",
            pointBackgroundColor: "rgba(179,181,198,1)",
            data: [8.77, 55.61, 21.69, 6.62, 6.82]
        }, {
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            pointBorderColor: "#ede190",
            pointBackgroundColor: "rgba(255,99,132,1)",
            data: [25.48, 54.16, 7.61, 8.06, 4.45]
        }]
    }

    var polarOptions = {
        title: {
            fill: true,
            display: true,
            text: 'Perkiraan Populasi dunia tahun 2050'
        }
    }
    if ($("#polarAreaChart").length) {
        var polarAreaCanvas = $("#polarAreaChart").get(0).getContext("2d");
        var polarAreaChart = new Chart(polarAreaCanvas, {
            type: 'polarArea',
            data: polarAreaChart,
            options: polarOptions
        });
    };
    //AND POLAR AREA



    //RADAR CHART
    var radarChart = {
        labels: ["Afrika", "Asia", "Eropa", "Amerika", "Australia"],
        datasets: [{
            label: '1950',
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointBorderColor: "#f44252",
            pointBackgroundColor: "rgba(179,181,198,1)",
            data: [8.77, 55.61, 21.69, 6.62, 6.82]
        }, {
            label: '2050',
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            pointBorderColor: "#587ce4",
            pointBackgroundColor: "rgba(255,99,132,1)",
            data: [25.48, 54.16, 7.61, 8.06, 4.45]
        }]
    }

    var radarOptions = {
        title: {
            display: true,
            text: 'Perkiraan Populasi dunia tahun 2050'
        }
    };
    if ($("#radarChart").length) {
        var radarCanvas = $("#radarChart").get(0).getContext("2d");
        var radarCanvas = new Chart(radarCanvas, {
            type: 'radar',
            data: radarChart,
            options: radarOptions
        });
    };
    //AND RADAR AREA CHART



    // MIXED CHART
    var mixedChart = {
        labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai", "Sao Paulo"],
        datasets: [{
                data: [22006299, 15835918, 14919501, 14797756, 14433147],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderWidth: 2
            },
            {
                label: 'ExampleLine1',
                data: [120000, 15000000, 1454210, 240124, 3358452],
                backgroundColor: '#587ce4',
                borderColor: '#587ce4',
                borderWidth: 2,
                type: 'line',
                fill: false
            },
            {
                label: 'ExampleLine2',
                data: [5024554, 2001424, 4454201, 4565420, 5659888],
                backgroundColor: '#f44252',
                borderColor: '#f44252',
                borderWidth: 2,
                type: 'line',
                fill: false
            }
        ]
    };


    var mixedOption = {
        title: {
            display: true,
            text: 'Perkiraan Populasi dunia tahun 2050'
        }
    };

    if ($("#mixedChart").length) {
        var mixedChartCanvas = $("#mixedChart").get(0).getContext("2d");
        var mixedChart = new Chart(mixedChartCanvas, {
            type: 'bar',
            data: mixedChart,
            options: mixedOption
        });
    };
    //AND MIXED CHART



    //SOCKET AREA GROUP BAR
    var socketAreaBar = {
        labels: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
        datasets: [{
            label: "Income - Base",
            type: "bar",
            stack: "Base",
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [30, 31, 32, 33, 34, 35, 36],
        }, {
            label: "Tax - Base",
            type: "bar",
            stack: "Base",
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [-15, -16, -17, -18, -19, -20, -21],
        }, {
            label: "Income - Sensitivity",
            type: "bar",
            stack: "Sensitivity",
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            data: [20, 21, 22, 23, 24, 25, 26],
        }, {
            label: "Tax - Sensitivity",
            type: "bar",
            stack: "Sensitivity",
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            backgroundColorHover: "#3e95cd",
            data: [-10, -11, -12, -13, -14, -15, -16]
        }]
    };

    var socketAreaBaroptions = {
        title: {
            display: true,
            text: 'Income'
        },
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    maxRotation: 0,
                    minRotation: 0
                }
            }],
            yAxes: [{
                stacked: true,
            }]
        },
    };

    if ($("#socketGroupChart").length) {
        var socketAreaBarChartCanvas = $("#socketGroupChart").get(0).getContext("2d");
        var socketAreaBar = new Chart(socketAreaBarChartCanvas, {
            type: 'bar',
            data: socketAreaBar,
            options: socketAreaBaroptions
        });
    };
    //AND SOCKET GROUP BAR



    //PAREA CHART
    var areaChart = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Facebook',
            data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
            borderColor: ['rgba(255, 99, 132, 0.5)'],
            backgroundColor: ['rgba(255, 99, 132, 0.5'],
            borderWidth: 1,
            fill: true
        }]
    };

    var areaOptions = {
        title: {
            display: true,
            text: 'Tingkat Penggunaan Faacebook'
        },
        plugins: {
            filler: {
                propagate: true
            }
        }
    };

    if ($("#areaChart").length) {
        var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
        var areaChart = new Chart(areaChartCanvas, {
            type: 'line',
            data: areaChart,
            options: areaOptions
        });
    };
    //AND AREA OPTION



    //MULTI AREA CHART
    var multiAreaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
                label: 'Facebook',
                data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
                borderColor: ['rgba(255, 99, 132, 0.5)'],
                backgroundColor: ['rgba(255, 99, 132, 0.5)'],
                borderWidth: 2,
                fill: true
            },
            {
                label: 'Twitter',
                data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
                borderColor: ['rgba(54, 162, 235, 0.5)'],
                backgroundColor: ['rgba(54, 162, 235, 0.5)'],
                borderWidth: 2,
                fill: true
            },
            {
                label: 'Linkedin',
                data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
                borderColor: ['rgba(255, 206, 86, 0.5)'],
                backgroundColor: ['rgba(255, 206, 86, 0.5)'],
                borderWidth: 2,
                fill: true
            }
        ]
    };

    var multiAreaOptions = {
        title: {
            display: true,
            text: 'Tingkat Penggunaan Sosmed'
        },
        plugins: {
            filler: {
                propagate: true
            }
        },
        elements: {
            point: {
                radius: 2
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    };

    if ($("#areachart-multi").length) {
        var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
        var multiAreaData = new Chart(multiAreaCanvas, {
            type: 'line',
            data: multiAreaData,
            options: multiAreaOptions
        });
    };
    //AND MULTI AREA CHARt

});