import Chart from 'react-apexcharts'


const options = {
    labels: ["Protein", 'Carbs', "Fat"],
    colors: ["#8b0000", "blue", "green"],
    stroke: {
        colors: ['#303036']
      },
    chart: {
        width: '50px',
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: true,
    },
    hover: {
        mode: null,
    },
    plotOptions: {
        donut: {
            labels: {
                show:false,
            },
        },
    },
    fill: {
        colors: ['#DE3163', '#6495ED', '#9FE2BF'],
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: '12px',
            fontFamily: undefined,
            backgroundColor: "black",
        },
    },
};


export default function ChartSumm({protein = 10,carbs= 20, fat= 40}){

    if (protein === 0 && carbs === 0 && fat===0){
        return <Chart options={options} series={[1,1,1]} type='pie' width={'200%'} height={'200%'}></Chart>
    }else {
        return  <Chart options={options} series={[protein,carbs,fat]} type='pie' width={'200%'} height={'200%'}></Chart>
    }
}