const chartVoteRate = c3.generate({
    bindto: '#chartVoteRate',
    data: {
        columns: [
            ['data1', 24],
            ['data2', 66],
        ],
        type : 'donut',
    },
    size: {
        width: 100,
        height: 100
      },
    color: {
        pattern: ['#E9ECEF','#D4009B']
    },
    legend: {
        show: false
    },
    donut: {
        width: 10,
        title: "投票率",
        label: {
            show: false
        },
    },
});