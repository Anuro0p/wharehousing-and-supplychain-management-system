import { Add, Edit } from '@mui/icons-material';
import {
  Box,
  Divider,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from '@mui/material';

const ProductRawMaterial = () => {
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
  return (
    <>
      <div class='w-full rounded-xl mb-4 border border-gray-300 p-4 bg-white overflow-hidden shadow-lg'>
        <div className=' text-xl font-bold text-gray-700 '>
          {'Raw Materials'}
          <button className='bg-[#111111]    hover:bg-gray-700  ml-10 text-gray-50 py-1 px-4 rounded-full'>
            <p className='font-normal text-base '>
              <Add sx={{ fontSize: '20px', marginRight: '3px' }} />
              ADD
            </p>
          </button>
        </div>

        <div className='mt-4'>
          {/* --------------------------------------------------------------------------------------------------------------------------------------------------
            ------------------------------------------------------------------------Raw material 1------------------------------------------------------------
            -------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <Divider />
          <div className='p-4 flex'>
            <div className='w-1/3'>
              <div className=' text-lg  font-bold text-gray-700 '>
                {'Raw Materials'}
              </div>
              <div className=' text-md font-medium text-gray-700 '>
                {'Supplier:'} Mison sam
              </div>
            </div>
            <div className='w-2/3 grid grid-cols-1'>
              <div className='w-full'>
                <button className='bg-[#2e3a91] mr-2   hover:bg-blue-700 float-right  right-0 align-end text-gray-50 py-1 px-4 rounded-full'>
                  <p className='font-normal text-base '>
                    <Edit sx={{ fontSize: '20px', marginRight: '3px' }} />
                    Edit
                  </p>
                </button>
              </div>
              <div className=''>Stock</div>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <BorderLinearProgress variant='determinate' value={20} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant='body2' color='text.secondary'>
                    {20}%
                  </Typography>
                </Box>
              </Box>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------------------------------------------------
            ------------------------------------------------------------------------Raw material end------------------------------------------------------------
            -------------------------------------------------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};
export default ProductRawMaterial;
