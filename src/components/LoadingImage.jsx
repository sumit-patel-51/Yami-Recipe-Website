import React from 'react'
import { useInView } from 'react-intersection-observer'

function LoadingImage({src, alt}) {
    const {ref, inView} = useInView({triggerOnce:true});
  return (
    <div ref={ref} className="relative w-full bg-gray-200">
    {!inView && (
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="image-loader"></div>
      </div>
    )}
    {inView && (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-110 cursor-pointer duration-400"
      />
    )}
  </div>
  )
}

export default LoadingImage
