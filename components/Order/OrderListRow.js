import React from 'react';
import Link from 'next/link';

function OrderListRow({order}) {
  return (
    <tr>
        <td className="font-weight-medium">13232</td>
        <td><Link href="/order/track"><a>Herman Beck</a></Link></td>
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
