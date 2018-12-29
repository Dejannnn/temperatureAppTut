import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
export default (dataAboutCity) => {


  return(

         <td>
      <Sparklines data={dataAboutCity.InfData}  width={120} height={180}>
          <SparklinesLine color={dataAboutCity.color} />
          <SparklinesReferenceLine type="mean" />
    </Sparklines>
         </td>

    );
}