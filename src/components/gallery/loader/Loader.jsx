import React from 'react';
import css from '../loader/Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;

// import React from 'react';
// import css from '../loader/Loader.module.css';

// export default function Loader() {
//   return (
//     <div className={css.backdrop}>
//       <div className={css.loader}></div>
//     </div>
//   );
// }
