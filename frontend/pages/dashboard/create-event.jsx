import React, { useContext } from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../components/seo';
import CreateEventMain from '../../components/createEventPage';
import { mustBeLoggedInServer } from '../../lib/authorization';
import { AppContext } from '../../context/AppContext';

const index = (props) => {
    const { setCurrentUser } = useContext(AppContext);
    setCurrentUser(props.userData)  
    return (
        <Wrapper>
            <SEO pageTitle={"Create Event"}/>
            <CreateEventMain/>
        </Wrapper>
    );
};

export const getServerSideProps = async (context) => {
    return mustBeLoggedInServer(context);
  };

export default index;