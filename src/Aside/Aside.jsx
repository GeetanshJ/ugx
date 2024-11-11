import React from 'react'
import "./Aside.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faWallet, faEnvelope, faCalendarDays,faMapPin,faUser,faChartSimple,faTable } from '@fortawesome/free-solid-svg-icons';

const Aside = () => {
    return (
        <div className='side-panel'>
            <div className="side-panel-elem">
                <div>Dashboard</div>
                <FontAwesomeIcon icon={faGauge} />
            </div>
            <div className="side-panel-elem">
                <div>Layouts</div>
                <FontAwesomeIcon icon={faWallet} />
            </div>
            <div className="side-panel-elem">
                <div>Mailbox</div>
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="side-panel-elem">
                <div>Calender</div>
                <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <div className="side-panel-elem">
                <div>UI Demands</div>
            </div>
        
            <div className="side-panel-elem">
                <div>Pages</div>
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="side-panel-elem">
                <div>Tables</div>
                <FontAwesomeIcon icon={faTable} />
            </div>
            <div className="side-panel-elem">
                <div>Charts</div>
                <FontAwesomeIcon icon={faChartSimple} />
            </div>

            <div className="side-panel-elem">
                <div>Maps</div>
                <FontAwesomeIcon icon={faMapPin} />
            </div>

            <div className="side-panel-elem">
                <div>Profiles</div>
                <FontAwesomeIcon icon={faUser} />
            </div>

        </div>
    )
}

export default Aside;
