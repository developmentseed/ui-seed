'use strict';
import React from 'react';
import { render } from 'react-dom';
import UISeed from '../../../assets/scripts/index';
const { Modal, ModalHeader, ModalBody, ModalFooter } = UISeed.Modal;
const { GlobalLoading, showGlobalLoading, hideGlobalLoading } = UISeed.Loading;
var ScrollArea = UISeed.ScrollArea;
const Dropdown = UISeed.Dropdown;
var FileInput = UISeed.FileInput;

UISeed.hello();

console.log('UISeed.Loading', UISeed.Loading);

class ModalShowcase extends React.Component {
  constructor (props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({open: true});
  }

  closeModal () {
    this.setState({open: false});
  }

  render () {
    return (
      <div>
        <button className='button button--primary-raised-dark' type='button' onClick={this.openModal}><span>Open Modal</span></button>
        <Modal
          id='modal-showcase'
          className='modal--dark modal--medium'
          onCloseClick={this.closeModal}
          revealed={this.state.open} >

          <ModalHeader>
            <div className='modal__headline'>
              <p className='modal__subtitle'>Modal subtitle</p>
              <h1 className='modal__title'>This is the modal title</h1>
            </div>
            <div className='modal__introduction'>
              <p>This a description. It contains extra information about lorem ipsum dolor sit amet.</p>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className='prose'>
              <p>This modal is currently under development.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur ac tellus at rutrum. Duis vestibulum tempor commodo. Phasellus efficitur fermentum quam nec semper. Nulla convallis dui quis ante dapibus, at mollis mi fringilla. Ut sit amet pellentesque nibh.</p>
              <p>Etiam ultrices est a auctor sodales. Ut sit amet feugiat est, id sodales leo. Vestibulum id lorem lectus. Aliquam dictum egestas elementum. Proin blandit auctor justo. Praesent quis odio a justo tempus dictum. Praesent sed nisi dui. Vestibulum velit dui, accumsan quis dui a, iaculis dictum quam.</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='mfa-xmark' type='button' title='Cancel' onClick={this.closeModal}><span>Cancel</span></button>
            <button className='mfa-tick' type='submit' title='Save'><span>Save</span></button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const renderModal = function () {
  var container = document.querySelector('[data-hook="modal"]');
  if (container === null) return;
  render(<ModalShowcase />, container);
};

renderModal();

// // /////////////////////////////////////////////////////////////////////

var renderPanel = function () {
  var container = document.querySelector('[data-hook="scroll"]');
  if (container === null) return;

  var el = React.createElement('div', null,
    <section className='panel'>
      <header className='panel__header'>
        <div className='panel__headline'>
          <h1 className='panel__title'>Panel title</h1>
          <p className='panel__subtitle'>Panel subtitle</p>
        </div>
        <div className='panel__header-toolbar'>
          <ul className='toolbar__menu'>
            <li className='toolbar__menu-item'><a href='#' title='Learn more' className='tba-question tba--text-hidden'><span>What is this?</span></a></li>
            <li className='toolbar__menu-item toolbar__menu-item--sep'><a href='#' title='Download' className='tba-pencil tba--text-hidden'><span>Download</span></a></li>
            <li className='toolbar__menu-item'><a href='#' title='Close' className='tba-xmark tba--text-hidden'><span>Close</span></a></li>
          </ul>
        </div>
      </header>

        <ScrollArea
          style={{height: '10rem'}}
          speed={1.6}
          className='panel__body'
          contentClassName='panel__body-inner'
          smoothScrolling={true}
          horizontal={false} >

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
        </ScrollArea>

      <footer className='panel__footer'></footer>
    </section>
  );

  render(el, container);
};

renderPanel();

// /////////////////////////////////////////////////////////////////////

const renderDrop = function () {
  const container = document.querySelector('[data-hook="react:drops"]');
  if (container === null) return;

  const Main = () => (
    <div>
      <Dropdown
        triggerClassName='button button--primary-plain'
        triggerActiveClassName='button--active'
        triggerText='Drop down center'
        direction='down'
        alignment='center' >

        <h6 className='drop__title'>This is a title</h6>
        <ul className='drop__menu drop__menu--iconified' role='menu'>
          <li><a href='#' title='This is Item 1a' className='drop__menu-item'><i className='uisi-pencil'></i>Edit</a></li>
          <li><a href='#' title='This is Item 2a' className='drop__menu-item drop__menu-item--example-icon'>Download</a></li>
        </ul>
        <ul className='drop__menu drop__menu--iconified' role='menu'>
          <li><a href='#' title='This is Item 1a' className='drop__menu-item delete'><i className='uisi-trash-bin'></i>Delete</a></li>
        </ul>
      </Dropdown>

      <Dropdown
        className='drop__content--special'
        triggerElement='a'
        triggerClassName='button button--base-plain'
        triggerActiveClassName='button--active'
        triggerTitle='Show/hide options'
        triggerText='Drop up left'
        direction='up'
        alignment='left' >

        <ul className='drop__menu' role='menu'>
          <li><a href='#' title='This is Item 1a' className='drop__menu-item'>Item 1a</a></li>
          <li><a href='#' title='This is Item 2a' className='drop__menu-item'>Item 2a</a></li>
        </ul>
        <ul className='drop__menu' role='menu'>
          <li><a href='#' title='This is Item 1b' className='drop__menu-item'>Item 1b</a></li>
          <li><a href='#' title='This is Item 2b' className='drop__menu-item'>Item 2b</a></li>
        </ul>
        <div className='drop__inset'>
          <p>This is a drop inset.</p>
        </div>
      </Dropdown>
    </div>
  );

  render(<Main />, container);
};

renderDrop();

// /////////////////////////////////////////////////////////////////////

class LoadingShowcase extends React.Component {
  showLoading () {
    showGlobalLoading();
    setTimeout(() => hideGlobalLoading(), 1024);
  }

  render () {
    return (
      <div>
        <button className='button button--primary-raised-dark' type='button' onClick={this.showLoading}><span>Show loading</span></button>
        <GlobalLoading />
      </div>
    );
  }
}

var renderLoading = function () {
  var container = document.querySelector('[data-hook="loading"]');
  if (container === null) return;
  render(<LoadingShowcase />, container);
};

renderLoading();

// // /////////////////////////////////////////////////////////////////////

class FileExample extends React.Component {
  constructor (props) {
    super(props);
    this.state = { file: null };
  }

  onFileSelected (file) {
    this.setState({ file });
  }

  render () {
    return (
      <FileInput
        id='file-upload-example'
        name='file-upload-example'
        label='Custom input file - React'
        value={this.state.file}
        placeholder='Choose a file'
        onFileSelect={this.onFileSelected.bind(this)}/>
    );
  }
}

var renderFileInput = function () {
  var container = document.querySelector('[data-hook="react:file"]');
  if (container === null) return;
  render(<FileExample />, container);
};

renderFileInput();
