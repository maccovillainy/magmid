import React from 'react'
import List from './list'
export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        [
          {
            image: 'ТЗ_03.png',
            name: 'Новости',
            active: false
          }
        ],
        [
          {
            image: 'ТЗ_06.png',
            name: 'Файлы',
            active: true
          },
          {
            image: 'ТЗ_10.png',
            name: 'Медиаплан',
            active: false
          },
          {
            image: 'ТЗ_14.png',
            name: 'Таргетинг',
            active: false
          },
          {
            image: 'ТЗ_18.png',
            name: 'Устройства',
            active: false
          },
          {
            image: 'ТЗ_22.png',
            name: 'Приложения',
            active: false
          },
          {
            image: 'ТЗ_24.png',
            name: 'Сборка',
            active: false
          }
        ],
        [
          {
            image: 'ТЗ_27.png',
            name: 'Платежи',
            active: false
          },
          {
            image: 'ТЗ_30.png',
            name: 'Тарифы',
            active: false
          }
        ],
        [
          {
            image: 'ТЗ_33.png',
            name: 'Помощь',
            active: false
          },
          {
            image: 'ТЗ_35.png',
            name: 'Настройки',
            active: false
          }
        ]
      ]
    }

  }

  render() {
    return (
      <div className="app__sidebar">
        {this.state.data.map((list, i) => (
          <List key={i} list={list}/>
        ))}
      </div>

    )
  }
}