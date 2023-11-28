const chartBarParty = c3.generate({
    bindto: '#chartBarParty',
    size: {
        height: 200
    },
    color: {
        pattern: ['#8082FF','#F4A76F','#57D2A9']
    },
    data: {
        x: 'x',
        columns: [
            ['x', 1996, 2000, 2004, 2008, 2012, 2016,2020],
            ['蝙蝠黨', 1500, 1500, 1500, 1500, 1500, 1500, 1500],
            ['弓箭黨', 1000, 1000, 1000, 1000, 1000, 1000, 1000],
            ['木棍黨', 500, 500, 500, 500, 500, 500, 500]
        ],
        type: 'bar',
    },
    axis: {
        y: {
          max: 2000,
          min: 0,
          tick: {
            values: [0, 500, 1000, 1500, 2000],
            format: function (d) { return d + '萬' ; },
          },
          padding: {top:0, bottom:0}
        }
      },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
    },
    legend: {
        show: false
    },
    grid: {
        y: {
          show: true,
        }
      }
});