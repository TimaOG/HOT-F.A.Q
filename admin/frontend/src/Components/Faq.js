import React, { Component } from 'react'
import $ from 'jquery';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


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


class FaqEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      faqNumber: "faq0",
      faqCount: 0,
      faqData: [],
      isEdit: [],
      inputValue: "Название вопроса"
    };
    this.addFaq = this.addFaq.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  addFaq() {
    const header = $('#faqInput').val()
    const contentState = this.state.editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);
    this.state.faqData.push({ header: [header], data: htmlContent })
    this.setState({ faqData: this.state.faqData, faqCount: this.state.faqCount + 1, faqNumber: "faq" + this.state.faqCount })
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState: editorState,
    });
  };

  render() {
    const editorState = this.state.editorState;
    if (this.state.faqData.length === 0) {
      return (
        <div>
          <div>
            <input type='text' id="faqInput" style={{ marginTop: "20px" }} value={this.state.inputValue} onChange={this.handleInputChange}/>
            <div style={{ border: "1px solid #000", borderRadius: "5px", marginTop: "20px" }}>
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
          </div>
          <button className='addButton' style={{ marginTop: "20px" }} onClick={this.addFaq}>Добавить</button>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            {this.state.faqData.map(data => (
              <div id={this.state.faqNumber}>
                <h2>{data.header}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.data }}/>
              </div>
            ))}
            <input type='text' id="faqInput" style={{ marginTop: "20px" }} value="Название вопроса" />
            <div style={{ border: "1px solid #000", borderRadius: "5px", marginTop: "20px" }}>
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
          </div>
          <button className='addButton' style={{ marginTop: "20px" }} onClick={this.addFaq}>Добавить</button>
        </div>
      )
    }
  }
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
          <button className='addButton' style={{ marginTop: "20px", marginBottom: "20px" }} onClick={this.changeIsFolderMode}>Переключиться к иерархии папок</button>
          <FaqEditor />
        </div>
      )
    }
  }
}
