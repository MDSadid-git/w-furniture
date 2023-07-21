import React from 'react';

import {useLocation} from 'react-router-dom'
import Table from '../../Components/Table/Table';

const Wishlist = () => {
    const {pathname} = useLocation()
    return (
      <div className="my-10">
      <Table />
      
    </div>
    );
};

export default Wishlist;