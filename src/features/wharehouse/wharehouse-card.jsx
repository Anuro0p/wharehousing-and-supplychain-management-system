import { Edit } from '@mui/icons-material';
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

const WharehouseCard = (_props) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: 200,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }));

  const [capacity, setCapacity] = useState(
    (_props.wharehouse.stock * 100) / _props.wharehouse.capacity
  );

  useEffect(() => {
    setCapacity((_props.wharehouse.stock * 100) / _props.wharehouse.capacity);
  }, [_props.wharehouse]);
  return (
    <div class='w-full rounded-xl mb-4 border border-gray-300 bg-white overflow-hidden shadow-lg'>
      <div className='flex'>
        <div className='w-2/5 grid grid-cols-1  pl-10 p-6'>
          <div className=' text-xl font-bold text-gray-700 float-left'>
            {_props.wharehouse.name}
          </div>
          <div className='text-sm font-normal text-gray-700'>
            {_props.wharehouse.address1}
            <br />
            {_props.wharehouse.address2}
          </div>
        </div>
        <div className='w-3/5 '>
          <div className='grid grid-cols-1'>
            <div className='pt-3 pr-14'>
              <button
                className='bg-[#2e3a91] mr-2   hover:bg-blue-700 float-right  right-0 align-end text-gray-50 py-1 px-4 rounded-full'
                onClick={() => _props.viewChange()}
              >
                <p className='font-normal text-base '>
                  <Edit sx={{ fontSize: '20px', marginRight: '3px' }} />
                  Edit
                </p>
              </button>
            </div>
            <div className=' py-2 -ml-6 pr-16'>
              <div className=''>Capacity</div>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <BorderLinearProgress
                    variant='determinate'
                    value={capacity}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant='body2' color='text.secondary'>
                    {capacity}%
                  </Typography>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WharehouseCard;
