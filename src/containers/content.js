import React from 'react'


export default class Content extends React.Component {

  render() {
    return (
      <div className="app__content">
        <div className="app__content__section">
          <h2 className="app__content__section__h2">Папки</h2>
          <h4 className="app__content__section__h4">Создайте папки и отсортируйте файлы!</h4>
          <img src="/assets/images/ТЗ_03 (2).png" alt=""/>
        </div>
        <div className="app__content__section">
          <h2 className="app__content__section__h2">Файлы</h2>
          <h4 className="app__content__section__h4">Загрузите Ваши файлы и начните работу с платформой!</h4>
          <img src="/assets/images/ТЗ_03 (2).png" alt=""/>
        </div>
      </div>

    )
  }
}

