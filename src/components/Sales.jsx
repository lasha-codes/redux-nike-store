/* eslint-disable react/prop-types */
import Item from './utils/Item'
import Title from './utils/Title'

const Sales = ({ endpoint: { title, items } }) => {
  return (
    <>
      <div className='nike-container my-10'>
        <Title title={title} />
        <div className='grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7'>
          {items?.map((item, i) => {
            return <Item {...item} key={i} />
          })}
        </div>
      </div>
    </>
  )
}

export default Sales
