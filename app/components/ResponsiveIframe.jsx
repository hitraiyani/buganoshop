import React, {useEffect, useRef, useState} from 'react';

export function ResponsiveIframe({url}) {
  return (
    <div className="md:mt-[-50px] min-[992px]:mt-[0]">
      <iframe
        src={url}
        title="Embedded Content"
        frameBorder="0"
        allowFullScreen
        // ref={iFrameRef}
        id="iFrame1"
        width={'100%'}
        // style={{height: iframeHeight}}
        className=' max-[991px]:h-[83vh] min-[992px]:h-[1480px] min-[1200px]:h-[1449px] min-[1400px]:h-[1269px] min-[1800px]:h-[1560px]'
      />
    </div>
  );
}
