import React, { Component } from 'react'
import $ from 'jquery';


var deep = 1

class FaqFolders extends Component {
  render() {
    return (
      <div>
        <div style={{ marginTop: "40px" }}>
          <button type="button" className="addButton" >Добавить папку</button>
        </div>
        <h5 style={{ marginTop: "40px" }}>Root</h5>
        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr>
                <th scope="col">
                  <label className="control control--checkbox">
                    <input type="checkbox" className="js-check-all" />
                    <div className="control__indicator"></div>
                  </label>
                </th>
                <th scope="col">
                  <p>№</p>
                  <input type="number" />
                </th>
                <th scope="col">
                  <p>Название</p>
                  <input type="text" />
                </th>
                <th scope="col">
                  <p>Кол-во вопросов</p>
                  <input type="number" />
                </th>
                <th scope="col">
                  <p>Дата создания</p>
                  <input type="date" />
                </th>
                <th scope="col">
                  <p>Уровень доступа</p>
                  <input type="text" />
                </th>
                <th scope="col">
                  <p>Действия</p>
                  <div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <label className="control control--checkbox">
                    <input type="checkbox" />
                    <div className="control__indicator"></div>
                  </label>
                </th>
                <td>1</td>
                <td>Корневая</td>
                <td>0</td>
                <td>-</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


function FaqEditor() {
  return (
    <div>FaqE</div>
  )
}


export default class Faq extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFolder: true
    };
    this.changeFolders = this.changeFolders.bind(this)
    this.changeIsFolderMode = this.changeIsFolderMode.bind(this)
  }
  componentDidMount() {
    $('.js-check-all').on('click', function () {

      if ($(this).prop('checked')) {
        $('th input[type="checkbox"]').each(function () {
          $(this).prop('checked', true);
        })
      } else {
        $('th input[type="checkbox"]').each(function () {
          $(this).prop('checked', false);
        })
      }
    });
  }
  changeIsFolderMode() {
    if (this.state.isFolder) {
      this.setState({ isFolder: false })
    } else {
      this.setState({ isFolder: true })
    }
  }
  changeFolders() {

  }
  render() {
    if (this.state.isFolder) {
      return (
        <div>
          <h1>F.A.Q</h1>
          <button className='addButton' style={{ marginTop: "20px" }} onClick={this.changeIsFolderMode}>Редактировать вопросы в этой папке</button>
          <FaqFolders />
        </div>
      )
    } else {
      return (
        <div>
          <h1>F.A.Q</h1>
          <button className='addButton' style={{ marginTop: "20px" }} onClick={this.changeIsFolderMode}>Переключиться к иерархии папок</button>
          <FaqEditor />
        </div>
      )
    }
  }
}
