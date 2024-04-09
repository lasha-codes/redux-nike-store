/* eslint-disable react/prop-types */
const Clips = ({ clip, imgsrc }) => {
  return (
    <>
      <div className='relative h-28 w-32 rounded-xl overflow-hidden group'>
        <img
          src={imgsrc}
          alt='img/clips'
          className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10'
        />
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className='absolute top-0 right-0 left-0 flex h-full w-full object-cove z-0'
        >
          <source type='video/mp4' src={clip} />
        </video>
      </div>
    </>
  )
}

export default Clips
