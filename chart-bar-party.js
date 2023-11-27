const chartBarParty = c3.generate({
    bindto: '#chartBarParty',
    size: {
        width: 450,
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
            padding: {top:0, bottom:0}
        }
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
    },
    legend: {
        // position: 'inset'
    },
    grid: {
        y: {
          lines: [
            {value: 0},
            {value: 500},
            {value: 1000},
            {value: 1500},
            {value: 2000},
          ]
        }
      }
});