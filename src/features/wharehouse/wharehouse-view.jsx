import { Divider } from '@mui/material';
import Chart from 'react-apexcharts';

const chartData = {
  series: [5, 15],
  options: {
    chart: {
      type: 'donut',
      dropShadow: {
        enabled: true,
        color: '#111',
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: ['Space left', 'Stock'],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8,
      },
    },
    states: {
      hover: {
        filter: 'none',
      },
    },
    theme: {
      palette: 'palette2',
    },
    title: {
      text: 'Capcity',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
};

const WharehouseView = (_props) => {
  return (
    <>
      <div class='w-full rounded-xl mb-4 border border-gray-300 bg-white overflow-hidden shadow-lg'>
        <div className=' p-6'>
          <div className=' text-xl font-bold text-gray-700 '>
            {_props.wharehouse.name}
          </div>
          <div className='text-sm mb-6 font-normal text-gray-700'>
            {_props.wharehouse.address1}
            <br />
            {_props.wharehouse.address2}
          </div>
          <div className='donut'>
            <Chart
              options={chartData.options}
              series={chartData.series}
              chartOptions={chartData.chartOptions}
              type='donut'
              width='310'
            />
          </div>
          <h1 className='text-md font-bold text-gray-700'>Information</h1>
          <Divider />
          <div className='grid grid-cols-2 mt-3'>
            <h1 className='text-md font-medium text-gray-700'>Capacity -</h1>
            <h1 className='text-md float-right font-medium text-gray-700'>
              {_props.wharehouse.capacity}
            </h1>
          </div>

          <Divider />
          <div className='grid grid-cols-2 mt-3'>
            <h1 className='text-md font-medium text-gray-700'>Stock -</h1>
            <h1 className='text-md float-right font-medium text-gray-700'>
              {_props.wharehouse.stock}
            </h1>
          </div>
          <Divider />
          <div className='grid grid-cols-2 mt-3'>
            <h1 className='text-md font-medium text-gray-700'>Is Active -</h1>
            <h1 className='text-md float-right font-medium text-gray-700'>
              {'yes'}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default WharehouseView;
