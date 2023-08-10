import Feature from '../feature/feature.component';
import Button from '../button/button.component';

import './features-and-call-to-action.styles.scss';

const FeaturesAndCallToAction = () => {

    return (
        <div className="features-and-call-to-action-container">
            <div className="features-description-container">
                <h2>How It Works</h2>
                <p className='features-description-text'>An outstanding place for better education!</p>
                <div className='features-container'>
                    <Feature info={{ name: 'online', title: 'All Online', description: 'Chat using WhatsApp, Messenger, or SMS, Audio, Video, Screen Sharing, and White Board.' }} />
                    <Feature info={{ name: 'schedule', title: 'Flexible Schedule', description: 'Set your working hours Prescheduled or On Demand Session.' }} />
                    <Feature info={{ name: 'money', title: 'Make Extra Money', description: 'Earn up to $20 per hour for scheduled sessions of up to $30 for on-demand sessions.' }} />
                    <Feature info={{ name: 'send', title: 'Get Paid Weekly', description: 'Setup your bank account and automatically receive funds weekly.' }} />
                </div>
            </div>
            <div className="call-to-action-container">
                <img src="assets/call-to-action.jpg" alt="" className="call-to-action-image" />
                <div className="call-to-action">
                    <h3>Start tutoring with <span>LINGLOBAL</span></h3>
                    <p>We&apos;re always looking for talented tutors. Set your own rate, get paid and make a difference.</p>
                    <Button value='Become a tutor now!' />
                </div>
            </div>
        </div>
    )
};

export default FeaturesAndCallToAction;