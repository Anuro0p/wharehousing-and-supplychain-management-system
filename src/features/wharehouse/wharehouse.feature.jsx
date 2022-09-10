import { useState } from 'react';
import FeatureHeader from '../feature-header';
import WharehouseCard from './wharehouse-card';
import WharehouseView from './wharehouse-view';

const wharehouses = [
  {
    name: 'Harman Garrage H/W',
    address1: 'Firehouse palace 200',
    address2: 'kochi India',
    stock: 10,
    capacity: 20,
  },
  {
    name: 'Geovani Garrage H/W',
    address1: 'Bolgatty palace 200',
    address2: 'kochi India',
    stock: 5,
    capacity: 20,
  },
];

const Wharehouse = () => {
  const [view, setView] = useState(false);
  return (
    <>
      <div className='container h-screen bg-slate-100'>
        <FeatureHeader name='Wharehouse' />

        <div className='bg-slate-100 flex px-12'>
          <div className={view ? 'w-3/5' : 'w-full'}>
            {wharehouses.map((_item) => (
              <WharehouseCard
                wharehouse={_item}
                viewChange={() => setView(!view)}
              />
            ))}
          </div>
          {view && (
            <div className='w-2/5 h-screen px-4'>
              <WharehouseView wharehouse={wharehouses[1]} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Wharehouse;
