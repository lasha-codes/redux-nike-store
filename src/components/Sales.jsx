/* eslint-disable react/prop-types */
import Item from './utils/Item'
import Title from './utils/Title'

const Sales = ({ endpoint: { title, items } }) => {
  return (
    <>
      <div>
        <Title title={title} />
        <div>
          {items?.map((item, i) => {
            return <Item {...item} key={i} />
          })}
        </div>
      </div>
    </>
  )
}

export default Sales
