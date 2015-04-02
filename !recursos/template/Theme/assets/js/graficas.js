// Objetivo estratégico
var chart = c3.generate({
    bindto: '#chart-obj-est',
    data: {
        x : 'x',
      columns: [
            ['x', '2010', '2011', '2012', '2013' , '2014' , '2015' , '2016' , '2017' , '2018' , '2019'],
        ['data1', 1853, 1975, 2065, 2172, 2290, 2392,2496,2601,2708,2820],
        ['data2', 3.9, 4.1, 4.3, 4.4, 4.6, 4.9, 5.4, 5.7, 6.1, 6.5]
      ],
      names: {
	    data1: 'Mercado Ético / Miles de millones',
	    data2: 'SOM MK Comercial',
	  },
      axes: {
        data2: 'y2' // ADD
      },
      types: {
        data1: 'bar' // ADD
      },
      colors: {
       'data1': function(d) { return d.value < 2291 ? '#2C78B1' : '#379F39'; },
       data2: '#ED1C24'
      },
	    tick: {
	    	count: 10,
	    	fit: true,
	    	values: ['2010', '2011', '2012', '2013' , '2014' , '2015' , '2016' , '2017' , '2018' , '2019']
	    }
    },
    axis: {
      y: {
        label: { // ADD
          text: 'Mercado Ético / Miles de millones',
          position: 'top'
        }
      },
      y2: {
      	min: 0,
      	max:6,
        show: true,
        label: { // ADD
          text: 'SOM MK Comercial',
          position: 'top'
        },
        tick: {
           format: function (d) { return d + "%"; }
        }
      }
    }
});
// Proyeccion lanzamientos
var chart_2 = c3.generate({
    bindto: '#chart-pro-lan',
    data: {
        x : 'x',
      columns: [
            ['x', '2012', '2013' , '2014' , '2015' , '2016' , '2017' , '2018' , '2019'],
        ['data2', 117665, 129664, 137130, 155700, 164998, 176459,190166,204499],
        ['data1', 0, 0, 0, 2511, 9122, 17755,24292,24546]      
        //['data2', 117665, 129664, 137130, 158211, 174120, 194214,214458, 229045]   
        ],
      names: {
	    data1: 'Nuevos',
	    data2: 'Comercial',
	  },
      types: {
            data1: 'area',
            data2: 'area'
      },
        groups: [['data1', 'data2']],
        order: 'asc'
,      colors: {
       'data1': function(d) { return (d.value > 2510 && d.value < 9123 ? '#ff0000' : '#f97d2a'); },
       data2: '#2c78b0',
      }
    },
    grid: {
        x: {
            lines: [
                {value: 2015, text: '2015'},
                {value: 2016, text: '2016'},
            ]
        }
    },
    axis: {
      y: {
        label: { // ADD
          text: 'Mercado Ético / Miles de millones',
          position: 'top'
        }
      
      }
    }
});