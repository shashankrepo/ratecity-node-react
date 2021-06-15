import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AllProducts from '../views/AllProducts';
import FirstHomeBuyer from '../views/FirstHomeBuyer';
import FixedRate from '../views/FixedRate';
import NextHomeBuyer from '../views/NextHomeBuyer';
import Nvestor from '../views/Nvestor';
import Refinance from '../views/Refinance';
import classes from './style.module.scss';
import { FC, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Layout: FC = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <div>
      <Header handleOpenSidebar={handleOpenSidebar} />
      <div className={classes.sidebar}>
        {openSidebar && <Sidebar handleCloseSidebar={handleCloseSidebar} />}
      </div>
      <Switch>
        <Route path="/refinance" component={Refinance} />
        <Route path="/fixed-rate" component={FixedRate} />
        <Route path="/first-home-buyer" component={FirstHomeBuyer} />
        <Route path="/nvestor" component={Nvestor} />
        <Route path="/all" component={AllProducts} />
        <Route path="/next-home-buyer" component={NextHomeBuyer} />
        <Route path="/">
          <Redirect to="/all" />
        </Route>
      </Switch>
    </div>
  );
};

export default Layout;
