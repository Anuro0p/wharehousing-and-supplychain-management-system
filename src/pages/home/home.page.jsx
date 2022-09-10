import { Outlet } from 'react-router-dom';
import SideNav from '../../shared/navigation/side-nav/side-nav';
import HeaderNav from '../../shared/navigation/heder-nav/header-nav';

const Home = () => {
  return (
    <>
      <div className='flex'>
        <div>
          <SideNav />
        </div>
        <div className='w-full'>
          <HeaderNav />

          <div className='pt-16'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
