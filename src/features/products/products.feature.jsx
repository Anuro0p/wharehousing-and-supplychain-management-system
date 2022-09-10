import FeatureHeader from '../feature-header';
import ProductCard from './products-card';

const productsData = [
  { name: 'Mustang Gt', model: 'Ecoboost Fastback 2022' },
  { name: 'Mustang S', model: 'Ecoboost Convertible 2022' },
  { name: 'Mustang ', model: 'Premium Fastback 2022' },
  { name: 'Mustang Gt', model: 'Mach 1 Premium 2022' },
];

const Products = () => {
  return (
    <>
      <div className='container h-screen bg-slate-100'>
        <FeatureHeader name='Products' />

        <div className='bg-slate-100 flex flex-wrap gap-4 px-12'>
          {productsData.map((item, index) => (
            <ProductCard product={{ index, car: item }} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
