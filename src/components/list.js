import React from 'react'
import classNames from 'classnames'
export default props => {
  return (
    <ul className="app__sidebar__ul">
      {
        props.list.map((item, i) => (
          <li key={i} className="app__sidebar__li">
            <a href="" className={classNames({
              "app__sidebar__a": true,
              active: item.active
            })}
            >
              <img src={`/assets/images/${item.image}`} alt="" className="app__sidebar__img"/>
              <span className="app__sidebar__span">{item.name}</span>
            </a>
          </li>)
        )
      }
    </ul>
  )
}
