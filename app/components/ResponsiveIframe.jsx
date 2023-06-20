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
        className=' max-[991px]:h-screen min-[992px]:h-[1040px] min-[1179px]:h-[1039px] min-[1800px]:h-[1420px]'
      />
    </div>
  );
}
