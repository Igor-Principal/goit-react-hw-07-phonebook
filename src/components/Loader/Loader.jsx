import { Bars } from 'react-loader-spinner';
import css from './loader.module.css'

const Loader = () => {
  return (
    <div className={css.loaderStyle}>
      <Bars
        height={60}
        width={60}
        color="black"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
