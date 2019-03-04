import React from 'react'

function OrderListRow({order}) {
  return (
    <tr>
        <td className="font-weight-medium">13232</td>
        <td><Link to="/order/track">Herman Beck</Link></td>
        <td>
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style = {{width : '25%'}} aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
        </td>
        <td>CALL CUSTOMER</td>
        <td>Noida</td>
        
    </tr>
  )
}

export default OrderListRow;
