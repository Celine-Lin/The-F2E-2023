const chartLineParty = c3.generate({
    bindto: '#chartLineParty',
    size: {
        width: 370,
        height: 200
    },
    color: {
        pattern: ['#8082FF','#F4A76F','#57D2A9']
    },
    data: {
        x: 'x',
        columns: [
            ['x', 1996, 2000, 2004, 2008, 2012, 2016,2020],
            ['蝙蝠黨', 0.4, 0.43, 0.37, 0.37, 0.43, 0.4, 0.5],
            ['弓箭黨', 0.25, 0.28, 0.30, 0.27, 0.25, 0.28, 0.32],
            ['木棍黨', 0.20, 0.23, 0.17, 0.25, 0.20, 0.27, 0.16]
        ],
    },
    axis: {
        y: {
            max: 0.5,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                values: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                format: function (d) { return parseInt(d*100) + '%' ; },
            },
        },
        x: {
            padding: {
                left: 1,
                right: 1,
            }
        }
    },
    legend: {
        show: false
    },
    point: {
        show: false,
    },
    grid: {
        y: {
          show: true,
        }
      }
});