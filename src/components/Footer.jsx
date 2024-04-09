/* eslint-disable react/prop-types */
const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className='bg-theme pt-7 pb-5 flex w-full justify-center items-center'>
        <div className='nike-container text-slate-200'>
          <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
            {titles.map((val, i) => (
              <div key={i} className='grid items-center'>
                <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => {
              return (
                <ul key={i} className='grid items-center gap-1'>
                  {list.map((val, i) => {
                    return (
                      <li key={i} className='text-sm sm:text-xs'>
                        {val.link}
                      </li>
                    )
                  })}
                </ul>
              )
            })}
            <div className='mt-5 text-center w-full'>
              <div
                className='text-sm md:text-center flex items-center gap-5 justify-center
             w-full'
              >
                <p className='text-sm  min-w-[200px]'>
                  &copy; All copyrights reserved
                </p>
                <span className='min-w-[140px] font-semibold'>
                  @lasha-codes
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
