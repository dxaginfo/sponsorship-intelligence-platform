/**
 * Sponsorship Intelligence Platform
 * Charts and Data Visualization
 */

// Chart configuration
let performanceChart;

/**
 * Initialize all charts on the dashboard
 */
function initializeCharts() {
    initPerformanceChart();
}

/**
 * Initialize the performance trend chart
 */
function initPerformanceChart() {
    const ctx = document.getElementById('performance-chart').getContext('2d');
    
    // Sample data - in a real app, this would come from an API
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    const relevanceData = [68, 72, 75, 70, 78, 82, 85, 88, 92];
    const engagementData = [45, 48, 52, 58, 62, 70, 75, 80, 85];
    const roiData = [35, 40, 45, 52, 60, 65, 70, 78, 84];
    
    // Chart configuration
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Relevance Score',
                    data: relevanceData,
                    backgroundColor: 'rgba(63, 81, 181, 0.1)',
                    borderColor: 'rgba(63, 81, 181, 1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(63, 81, 181, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                },
                {
                    label: 'Audience Engagement',
                    data: engagementData,
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderColor: 'rgba(76, 175, 80, 1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                },
                {
                    label: 'ROI Score',
                    data: roiData,
                    backgroundColor: 'rgba(255, 152, 0, 0.1)',
                    borderColor: 'rgba(255, 152, 0, 1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(255, 152, 0, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(33, 33, 33, 0.9)',
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    padding: 12,
                    cornerRadius: 8,
                    caretSize: 6,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y + '%';
                            return label;
                        }
                    }
                },
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 15
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            },
            animation: {
                duration: 1500
            }
        }
    });
}

/**
 * Create radar chart for compatibility analysis
 * @param {string} elementId - The ID of the canvas element
 * @param {object} data - Compatibility data
 */
function createCompatibilityRadarChart(elementId, data) {
    const ctx = document.getElementById(elementId).getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Audience Overlap',
                'Values Alignment',
                'Brand Voice',
                'Integration Potential',
                'Cultural Relevance',
                'Co-creation Opportunity'
            ],
            datasets: [{
                label: 'Compatibility Score',
                data: [
                    data.audience,
                    data.values,
                    data.voice,
                    data.integration,
                    data.cultural || 70,
                    data.cocreation || 65
                ],
                backgroundColor: 'rgba(63, 81, 181, 0.2)',
                borderColor: 'rgba(63, 81, 181, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(63, 81, 181, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(63, 81, 181, 1)',
                pointBorderWidth: 2,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 20,
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.r + '%';
                        }
                    }
                }
            }
        }
    });
    
    return chart;
}

/**
 * Create a donut chart for sponsor-brand fit analysis
 * @param {string} elementId - The ID of the canvas element
 * @param {number} score - Overall compatibility score
 */
function createScoreDonutChart(elementId, score) {
    const ctx = document.getElementById(elementId).getContext('2d');
    
    // Determine color based on score
    let color;
    if (score >= 80) {
        color = 'rgba(76, 175, 80, 1)'; // Green for high scores
    } else if (score >= 60) {
        color = 'rgba(255, 152, 0, 1)'; // Orange for medium scores
    } else {
        color = 'rgba(244, 67, 54, 1)'; // Red for low scores
    }
    
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Compatibility', 'Gap'],
            datasets: [{
                data: [score, 100 - score],
                backgroundColor: [
                    color,
                    'rgba(200, 200, 200, 0.2)'
                ],
                borderColor: [
                    color,
                    'rgba(200, 200, 200, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true
            }
        }
    });
    
    // Add center text
    Chart.register({
        id: 'centerTextPlugin',
        beforeDraw: function(chart) {
            if (chart.config.type === 'doughnut') {
                const width = chart.width;
                const height = chart.height;
                const ctx = chart.ctx;
                
                ctx.restore();
                const fontSize = (height / 114).toFixed(2);
                ctx.font = fontSize + 'em sans-serif';
                ctx.textBaseline = 'middle';
                
                const text = score + '%';
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;
                
                ctx.fillStyle = color;
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }
    });
    
    return chart;
}