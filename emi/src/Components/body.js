import '../Styles/body.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Homeloan from './homeloan';
import Personalloan from './personalloan';
import Carloan from './carloan';


const body=()=>{
    return (
        <>
        <h5 className='mainhead'>EMI Calculator for Home Loan, Car Loan & Personal Loan in India</h5>
        <div className="bodydiv">
        <div className="emicalc">
            <Tabs>
                <TabList>
                <Tab>Home Loan</Tab>
                <Tab>Personal Loan</Tab>
                <Tab>Car Loan</Tab>

                </TabList>

                <TabPanel>
                <Homeloan/>
                </TabPanel>
                <TabPanel>
                <Personalloan/>
                </TabPanel>
                <TabPanel>
                <Carloan/>
                </TabPanel>
             </Tabs>
        </div>
        </div>
        </>
    )
}

export default body;