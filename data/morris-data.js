$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '01 2010',
            Balance: 1000,
            Rewards: null,
            Transactions: 0
        }, {
            period: '02 2010',
            Balance: 900,
            Rewards: null,
            Transactions: 100
        }, {
            period: '03 2010',
            Balance: 900,
            Rewards: 100,
            Transactions: 100
        }, {
            period: '04 2010',
            Balance: 800,
            Rewards: 100,
            Transactions: 200
        }, {
            period: '05 2010',
            Balance: 800,
            Rewards: 100,
            Transactions: 200
        }, {
            period: '06 2010',
            Balance: 500,
            Rewards: 200,
            Transactions: 500
        }, {
            period: '07 2010',
            Balance: 500,
            Rewards: 200,
            Transactions: 500
        }, {
            period: '08 2010',
            Balance: 400,
            Rewards: 200,
            Transactions: 600
        }, {
            period: '09 2010',
            Balance: 400,
            Rewards: 100,
            Transactions: 600
        }, {
            period: '10 2010',
            Balance: 400,
            Rewards: 200,
            Transactions: 600
        },{
            period: '11 2010',
            Balance: 400,
            Rewards: 100,
            Transactions: 600
        },
            {
                period: '12 2010',
                Balance: 400,
                Rewards: 100,
                Transactions: 600
            }
        ],
        xkey: 'period',
        ykeys: ['Balance', 'Rewards', 'Transactions'],
        labels: ['Balance', 'Rewards', 'Transactions'],
        pointSize: 1,
        hideHover: 'auto',
        resize: true
    });
    
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Grossary",
            value: 100
        }, {
            label: "Travel",
            value: 100
        }, {
            label: "Health",
            value: 10
        },
        {
            label: "Fuel",
            value: 50
        },
        {
            label: "Leisure",
            value: 100
        }],
        resize: true
    });

    $('#ob-spend').html(360);
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
