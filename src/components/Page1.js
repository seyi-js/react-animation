import React from 'react'
import { Spring } from 'react-spring/renderprops'
export const Page1 = () => {


    return (
        
        <React.Fragment>
            <Spring
                from={{opacity:0, marginTop: -600}}
                to={{opacity:1, marginTop: 0}}
            >
                { props => (
                    <div style={ props }>
                        <div style={ getStyles }>
                            <h1 className="text-center">Page1</h1>
            <p style={{fontSize: '18px'}}>
                                Twilio makes sending and receiving SMS easy. Find the documentation, sample code, and developer tools you need to build exactly what you want, fast. We’ll handle the complexity of mobile carrier and global regulations. Let’s get building.

                                Send your first message
                                1
                                TWILIO SERVERS
                                2
                                YOUR APP
                                 
            </p>   
                            <Spring
                            from={{ number: 0 }}
                            to={{ number: 100 }}
                            config={{duration: 10000}}
                            >
                                { props => (
                                    <h1 className="text-center">{props.number.toFixed()}</h1>
                               )} 
                            </Spring>
                        </div>
                   
                    </div>
            )}
        </Spring>
            
        </React.Fragment>
    )
}
const getStyles = {
    backgroundColor: 'darkslateblue',
    height: '18',
    paddingTop: '30px',
    paddingBottom: '30px',
    paddingRight: '10px',
    paddingLeft: '10px'
}

export default Page1
