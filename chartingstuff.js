$(document).ready(function(){
	$('#chart').highcharts({
        chart: {
            type: 'column'
        },
        colors: ['#012D3D', '#38AD9E', '#FFEB9E', '#FF6867', '#D0DBED'
        ],
        title: {
            text: 'Deaths by age group'
        },
        xAxis: {
            categories: ['Under 1 year', '1 to 4 years', '5 to 14 years', '15 to 24 years', '25 to 34 years', '35 to 44 years', '45 to 54 years', '55 to 64 years', '65 to 74 years', '75 to 84 years', '85 years and over']
        },
        yAxis: {
            title: {
                text: 'in thousands'
            }
        },
        legend: false,
        series: [{
            name: 'Total accidents',
            data: accidents.total.values
        }, {
            name: 'Motor vehicle accidents',
            data: accidents.trafficAccidents.values
        }, {
            name: 'Non-Motor vehicle accidents',
            data: accidents.nonTrafficAccidents.values
        }, {
            name: 'Poisoning accidents',
            data: accidents.poisoning.values
        }, {
            name: 'Falls accidents',
            data: accidents.falls.values
        }]
        
    });
    
    
    $(function () {
        $('#piechart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ['#38AD9E', '#FFEB9E', '#FF6867', '#D0DBED'
        	],
        	title: '',
            tooltip: {
        	    pointFormat: '<b>{point.percentage}%</b>',
            	percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: "Death's share",
                data: [
                    ['Accidents in Motor Vehicles',   accidents.trafficAccidents.sum],
                    ['Accidents in Non-Motor Vehicles',  accidents.nonTrafficAccidents.sum],
                    ['Poisoning',  accidents.poisoning.sum],
                    ['Falls',  accidents.falls.sum],
                ]
            }]
        });
    });
    
    
    var myvalues = [10,12,15,7,8,12,23,1,4,6,8,6,4,3,23,5,6,7,3,4,7,15,5,6,7,5,4,23,5,6,5,4];
    $('#linechart').sparkline(myvalues, { type: 'bar'});
    
    function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }
    
    $('#total_name').html(accidents.total.name);
    $('#total_value').html(commaSeparateNumber(accidents.total.sum));
    $('#motor_name').html(accidents.trafficAccidents.name);
    $('#motor_value').html(commaSeparateNumber(accidents.trafficAccidents.sum));
    $('#nonmotor_name').html(accidents.nonTrafficAccidents.name);
    $('#nonmotor_value').html(commaSeparateNumber(accidents.nonTrafficAccidents.sum));
    $('#falls_name').html(accidents.falls.name);
    $('#falls_value').html(commaSeparateNumber(accidents.falls.sum));
    $('#poisoning_name').html(accidents.poisoning.name);
    $('#poisoning_value').html(commaSeparateNumber(accidents.poisoning.sum));
    $('#total_number').html(commaSeparateNumber(accidents.total.sum));
    
    function getPercent(a,b){
    var c = a / b * 100;
    return c.toFixed(2);
    }
    
    var totalPercent = getPercent(grandTotal, grandTotal);
    var motorPercent = getPercent(accidents.trafficAccidents.sum, grandTotal);
    var nonmotorPercent = getPercent(accidents.nonTrafficAccidents.sum, grandTotal);
    var poisoningPercent = getPercent(accidents.poisoning.sum, grandTotal);
    var fallPercent = getPercent(accidents.falls.sum, grandTotal);
    
    $('.total_bar').css({'width':totalPercent+'%', 'background-color':'#012D3D'});
    $('.motor_bar').css({'width':motorPercent+'%', 'background-color':'#38AD9E'});
    $('.nonmotor_bar').css({'width':nonmotorPercent+'%', 'background-color':'#FFEB9E'});
    $('.poisoning_bar').css({'width':poisoningPercent+'%', 'background-color':'#FF6867'});
    $('.falls_bar').css({'width':fallPercent+'%', 'background-color':'#D0DBED'});

});