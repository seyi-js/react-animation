import React from 'react'
import { Spring } from 'react-spring/renderprops'
export const Page3 = () => {
    return (
        <React.Fragment>
        <Spring
            from={{opacity:0, marginLeft: -500}}
            to={{opacity:1, marginLeft: 0}}
            config={ { delay: 1000, durations: 1000 } }
        >
            { props => (
                <div style={ props }>
                    <div style={ getStyles }>
                        <h1 className="text-center">Page3</h1>
        <p style={{fontSize: '18px'}}>
                            Twilio makes sending and receiving SMS easy. Find the documentation, sample code, and developer tools you need to build exactly what you want, fast. We’ll handle the complexity of mobile carrier and global regulations. Let’s get building.

                            Send your first message
                            1
                            TWILIO SERVERS
                            2
                            YOUR APP
                             
        </p>   
                    </div>
               
                </div>
        )}
    </Spring>
        
    </React.Fragment>
    )
}
const getStyles = {
    backgroundColor: 'rgb(58, 200, 255)',
    height: '18',
    paddingTop: '30px',
    paddingBottom: '30px',
    paddingRight: '10px',
    paddingLeft: '10px'
}
export default Page3