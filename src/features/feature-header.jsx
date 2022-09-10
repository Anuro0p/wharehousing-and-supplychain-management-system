const FeatureHeader = (_props) => {
  return (
    <>
      <div className='w-full bg-slate-500 p-6 mb-8 text-xl font-bold text-gray-50 float-left'>
        {_props.name}
      </div>
    </>
  );
};
export default FeatureHeader;
