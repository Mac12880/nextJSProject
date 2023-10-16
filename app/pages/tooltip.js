import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


import React from 'react'

const TooltipPage = () => {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center h-5' style={{height: '100vh'}}>
            <OverlayTrigger 
            placement='top' 
            overlay={
                <Tooltip>
                Tooltip on test.
                </Tooltip>
            }>
                <p>
                    test
                </p>
            </OverlayTrigger>
            <OverlayTrigger 
            placement='top' 
            overlay={
                <Tooltip>
                Tooltip on test2.
                </Tooltip>
            }>
                <p>
                    test2
                </p>
            </OverlayTrigger>
        </div>
        
    </>
  )
}

export default TooltipPage