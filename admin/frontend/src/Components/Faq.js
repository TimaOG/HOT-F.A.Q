import React, { Component } from 'react'
import $ from 'jquery';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from 'draft-js';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import pen from '../img/pencil.svg';
import trash from '../img/trash.svg';
import search from '../img/search.svg';
import cancelFilters from '../img/x-square.svg'
import Modal from 'react-bootstrap/Modal';

var deep = 1

class FaqFolders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAdd: false,
    };
    this.hideAddButton = this.hideAddButton.bind(this)
    this.showAddButton = this.showAddButton.bind(this)
  }
  showAddButton() {
    this.setState({ isShowAdd: true });
  }
  hideAddButton() {
    this.setState({ isShowAdd: false });
  }
  render() {
    return (
      <div>
        <div style={{ marginTop: "40px" }}>
          <button type="button" className="addButton" onClick={this.showAddButton}>Добавить папку</button>
        </div>
        <h5 style={{ marginTop: "20px" }}>Root</h5>
        <div className="table-responsive">
          <table className="table">
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
                    <img style={{ display: "inline-block" }} src={search} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={cancelFilters} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
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
                <td>
                  <div>
                    <img style={{ display: "inline-block" }} src={pen} />
                    <img style={{ display: "inline-block", marginLeft: '20px' }} src={trash} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ display: "inline", marginRight: '10px' }}>1</p>
          <button type="button" className="tableButton" style={{ marginRight: '10px' }}>&lt;</button>
          <input type="number" className="tableInput" style={{ marginRight: '10px' }} value={0} />
          <button type="button" className="tableButton" style={{ marginRight: '10px' }}>&gt;</button>
          <p style={{ display: "inline" }}>5</p>
        </div>
        <Modal
          show={this.state.isShowAdd}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Добавить папку</h4>
            <div>
              
            </div>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button className='addButton' onClick={this.hideAddButton}>Закрыть</button>
            <button className='addButton' onClick={this.hideAddButton}>Сохранить</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}


class FaqEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      editorEditState: EditorState.createEmpty(),
      faqData: [],
      currentEditNumber: -1,
      inputValue: "Название вопроса",
      editInputValue: ""
    };
    this.addFaq = this.addFaq.bind(this)
    this.editFaq = this.editFaq.bind(this)
    this.delFaq = this.delFaq.bind(this)
    this.doneEditFaq = this.doneEditFaq.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputEditChange = this.handleInputEditChange.bind(this)
  }
  handleInputEditChange(event) {
    this.setState({ editInputValue: event.target.value });
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  addFaq() {
    const header = $('#faqInput').val()
    console.log(header)
    const contentState = this.state.editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);
    this.state.faqData.push({ header: [header][0], data: htmlContent })
    this.setState({ faqData: this.state.faqData })
    const html = '<p></p>';
    const contentBlock = htmlToDraft(html);
    const contentStateHtml = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentStateHtml);
    this.setState({ editorState: editorState, inputValue: "Название вопроса" })
  }

  editFaq = (editIndex, data) => {
    this.setState({ currentEditNumber: editIndex })
    this.setState({ editInputValue: data.header })
    const html = data.data;
    const contentBlock = htmlToDraft(html);
    const contentStateHtml = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentStateHtml);
    this.setState({ editorEditState: editorState })
  }
  doneEditFaq(index) {
    const header = this.state.editInputValue
    const contentState = this.state.editorEditState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);
    this.state.faqData[index] = { header: [header][0], data: htmlContent }
    this.setState({ currentEditNumber: -1, faqData: this.state.faqData })
  }
  delFaq = (index) => {
    this.state.faqData.splice(index, 1)
    this.setState({ faqData: this.state.faqData })
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState: editorState,
    });
  };
  onEditorEditStateChange = (editorState) => {
    this.setState({
      editorEditState: editorState,
    });
  };

  render() {
    const editorState = this.state.editorState;
    const editorEditState = this.state.editorEditState;
    if (this.state.faqData.length === 0) {
      return (
        <div>
          <div>
            <input className="inputStyle" type='text' id="faqInput" style={{ marginTop: "20px" }} value={this.state.inputValue} onChange={this.handleInputChange} />
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
            {this.state.faqData.map((data, index) => (
              <div>
                {this.state.currentEditNumber == index ? (
                  <div>
                    <input className="inputStyle" type='text' style={{ marginTop: "20px" }} value={this.state.editInputValue} onChange={this.handleInputEditChange} />
                    <button className='addButton' onClick={() => this.doneEditFaq(index)}>Сохранить</button>
                    <div style={{ border: "1px solid #000", borderRadius: "5px", marginTop: "20px" }}>
                      <Editor
                        editorState={editorEditState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorEditStateChange}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className='faqBlock'>
                      <div>
                        <h2 style={{ display: "inline-block" }}>{data.header}</h2>
                        <button className='addButton' onClick={() => this.editFaq(index, data)} style={{ marginLeft: '20px' }}><img style={{ display: "inline-block" }} src={pen} /></button>
                        <button className='addButton' onClick={() => this.delFaq(index)} style={{ marginLeft: '10px' }}><img style={{ display: "inline-block" }} src={trash} /></button>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: data.data }} style={{ border: "1px solid #000", borderRadius: "5px", marginTop: "20px" }} />
                    </div>
                    <hr />
                  </div>
                )}
              </div>
            ))}
            <input className="inputStyle" type='text' id="faqInput" style={{ marginTop: "20px" }} value={this.state.inputValue} onChange={this.handleInputChange} />
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
          <h1>F.A.Q.</h1>
          <button className='addButton' style={{ marginTop: "20px" }} onClick={this.changeIsFolderMode}>Редактировать вопросы в этой папке</button>
          <FaqFolders />
        </div>
      )
    } else {
      return (
        <div>
          <h1>F.A.Q.</h1>
          <button className='addButton' style={{ marginTop: "20px", marginBottom: "20px" }} onClick={this.changeIsFolderMode}>Переключиться к иерархии папок</button>
          <FaqEditor />
        </div>
      )
    }
  }
}
