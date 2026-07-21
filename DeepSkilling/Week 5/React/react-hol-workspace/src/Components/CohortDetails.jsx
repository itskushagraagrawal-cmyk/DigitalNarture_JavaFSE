import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ code, startedOn, currentStatus, coach, trainer }) => {
    const titleColor = currentStatus.toLowerCase() === 'ongoing' ? 'green' : 'blue';

    return (
        <div className={styles.box}>
            <h3 style={{ color: titleColor }}>{code}</h3>
            <dl style={{ margin: 0 }}>
                <dt>Started On</dt>
                <dd style={{ marginLeft: '10px' }}>{startedOn}</dd>
                
                <dt>Current Status</dt>
                <dd style={{ marginLeft: '10px' }}>{currentStatus}</dd>
                
                <dt>Coach</dt>
                <dd style={{ marginLeft: '10px' }}>{coach}</dd>
                
                <dt>Trainer</dt>
                <dd style={{ marginLeft: '10px' }}>{trainer}</dd>
            </dl>
        </div>
    );
};

export default CohortDetails;
