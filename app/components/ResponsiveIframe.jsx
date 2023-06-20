import React, {useEffect, useRef, useState} from 'react';

export function ResponsiveIframe({url}) {
  return (
    <div className="mt-[-50px] min-[992px]:mt-[0]">
      <iframe
        src={url}
        title="Embedded Content"
        frameBorder="0"
        allowFullScreen
        // ref={iFrameRef}
        id="iFrame1"
        width={'100%'}
        // style={{height: iframeHeight}}
        className=' max-[991px]:h-[calc(100vh_-_72px)] min-[992px]:h-[1260px] min-[1200px]:h-[1310px] min-[1400px]:h-[1110px]'
      />
    </div>
  );
}
