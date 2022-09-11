import { Edit } from '@mui/icons-material';
import { Box, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import car3 from '../../assets/img/car3.png';
import car4 from '../../assets/img/car4.png';
import car5 from '../../assets/img/car5.png';

const car = [car3, car4, car5];

const ProductInfo = () => {
  const { id } = useParams();
  return (
    <>
      <div class='w-full rounded-xl mb-4 border border-gray-300 bg-white overflow-hidden shadow-lg'>
        <div className='flex'>
          <div className='w-1/3  border-r-2 grid grid-cols-1  pl-10 p-6'>
            <div>
              <div className=' text-xl font-bold text-gray-700 '>
                {'Mustang'}
              </div>
              <div className='text-sm font-normal text-gray-700'>
                {'power hourse '}
              </div>
              <img src={car[id % 3]} alt={'carr'} />
            </div>
          </div>
          <div className='w-2/3 '>
            <div className='grid grid-cols-1'>
              <div className='pt-3 pr-14'>
                <button className='bg-[#2e3a91] mr-2   hover:bg-blue-700 float-right  right-0 align-end text-gray-50 py-1 px-4 rounded-full'>
                  <p className='font-normal text-base '>
                    <Edit sx={{ fontSize: '20px', marginRight: '3px' }} />
                    Edit
                  </p>
                </button>
              </div>
              <div className=' p-2  pr-16'>
                <div className='text-xl font-bold text-gray-700'>
                  Informations
                </div>
                <Divider />
                <div className='grid grid-cols-2 pt-3'>
                  <div className='text-lg font-medium text-gray-700'>Model</div>
                  <div className='text-md font-normal'>23 VHX</div>
                </div>
                <Divider />
                <div className='grid grid-cols-2 pt-3'>
                  <div className='text-lg font-medium text-gray-700'>Stock</div>
                  <div className='text-md font-normal'>336</div>
                </div>
                <Divider />
                <div className='grid grid-cols-2 pt-3'>
                  <div className='text-lg font-medium text-gray-700'>
                    Total Sold
                  </div>
                  <div className='text-md font-normal'>130</div>
                </div>
                <Divider />
                <div className='grid grid-cols-2 pt-3'>
                  <div className='text-lg font-medium text-gray-700'>
                    Informations
                  </div>
                  <div className='text-md font-normal'>Informations</div>
                </div>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}></Box>
                  <Box sx={{ minWidth: 35 }}></Box>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
