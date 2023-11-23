import { MathfieldElement } from "mathlive";
import { bodyStyles, editorStyles, shadowRootStyles } from "./constants";
import { Editor } from "tinymce";

export const mfeContainersSet = new Set();

export const makeDialogWrapperVisible = (): void => {
    const dialogWrapper = document.body.querySelector('.tox-tinymce-aux') as HTMLDivElement;
    dialogWrapper.classList.add('ML__visible');
} 

export const makeDialogWrapperHidden = (): void => {
  const dialogWrapper = document.body.querySelector('.tox-tinymce-aux') as HTMLDivElement;
  dialogWrapper.classList.remove('ML__visible');
} 

export const openDialog = (editor: Editor): void => {
    const mfe = new MathfieldElement();
    mfe.value = 'a^2+b^2';
    editor.windowManager.open({
      title: 'Mathlive',
      body: {
        type: 'panel',
        items: [
          {
            type: 'htmlpanel',
            html: `<span id='dialogContent'></span>`
          }
        ]
      },
      buttons: [
        {
          type: 'cancel',
          text: 'Close'
        },
        {
          type: 'submit',
          text: 'Save',
          primary: true
        }
      ],
      onClose: makeDialogWrapperHidden,
      onSubmit: function (api) {
        editor.selection.setContent(`<span class='mathFieldRow'></span>`);
        
        const addedElement = editor.getBody().getElementsByClassName('mathFieldRow')[0];
        addedElement.classList.remove('mathFieldRow');
        addedElement.innerHTML = '';
  
        mfe.contentEditable = 'false';
        const mfeContainer = mfe.shadowRoot.querySelector('.ML__mathlive');
        const valueHolder = document.createElement('span');
        valueHolder.innerHTML = mfe.value;
        valueHolder.classList.add('ML__hidden');

        addedElement.appendChild(mfeContainer);
        mfeContainer.appendChild(valueHolder);
        mfeContainer.setAttribute("contenteditable", "false");
        mfeContainer.addEventListener('click', () => openEditDialog(editor, mfeContainer));
        mfeContainersSet.add(mfeContainer);

        addShadowRootStyles(mfe);

        const nextSibling = addedElement.nextSibling as Element;
        if(nextSibling){
            editor.selection.setCursorLocation(nextSibling, 0);
        } else {
            const newLine = document.createElement('span');
            newLine.innerHTML = 'x';
            addedElement.parentElement.appendChild(newLine);
            editor.selection.select(newLine);
            editor.insertContent(`<span></span>`);
        }

        api.close();
      }
    });
    const wrapper = document.getElementById('dialogContent');
    wrapper.appendChild(mfe);

    makeDialogWrapperVisible();
};

export const openEditDialog = (editor: Editor, mfeContainer: Element): void => {
    const newMfe = new MathfieldElement();
    const hiddenValueHolder = mfeContainer.querySelector(".ML__hidden");
    newMfe.value = (hiddenValueHolder?.innerHTML || '').split('&amp;').join('&');
    editor.windowManager.open({
      title: 'Mathlive',
      body: {
        type: 'panel',
        items: [
          {
            type: 'htmlpanel',
            html: `<div id='dialogContent'></div>`
          }
        ]
      },
      buttons: [
        {
          type: 'cancel',
          text: 'Close'
        },
        {
          type: 'submit',
          text: 'Save',
          primary: true
        }
      ],
      onClose: makeDialogWrapperHidden,
      onSubmit: function (api) {
        if(newMfe.value === hiddenValueHolder?.innerHTML){
            return api.close();
        }
        const newMfeContainer = newMfe.shadowRoot.querySelector('.ML__mathlive');
        newMfe.contentEditable = 'false';
        newMfeContainer.setAttribute("contenteditable", "false");
        newMfeContainer.addEventListener('click', () => openEditDialog(editor, newMfeContainer));
        mfeContainersSet.add(newMfeContainer);
        mfeContainersSet.delete(mfeContainer);

        const valueHolder = document.createElement('span');
        valueHolder.innerHTML = newMfe.value;
        valueHolder.classList.add('ML__hidden');
        newMfeContainer.appendChild(valueHolder);
        mfeContainer.parentElement.replaceChild(newMfeContainer, mfeContainer);

        const nextSibling = newMfeContainer.parentElement.nextSibling as Element;
        if(nextSibling){
            editor.insertContent(`<p class='ML__hidden'></p>`);
            editor.selection.setCursorLocation(nextSibling, 0);
        } else {
            const newLine = document.createElement('span');
            newLine.innerHTML = 'x';
            newMfeContainer.parentElement.parentElement.appendChild(newLine);
            editor.selection.select(newLine);
            editor.insertContent(`<span></span>`);
        }
        api.close();
      }
    });
    const wrapper = document.getElementById('dialogContent');
    wrapper.appendChild(newMfe);

    makeDialogWrapperVisible();
};


export const addBodyStyles = (): void => {
  const style = document.createElement('style');
  style.innerHTML = bodyStyles;
  document.body.appendChild(style);
}

export const addEditorStyles = (editor: Editor): void => {
    const style = document.createElement('style');
    style.innerHTML = editorStyles;

    editor.on('init', () => editor.getBody().parentNode.appendChild(style))
}


export const addShadowRootStyles = (mfe: MathfieldElement): void => {
    const rootStyle = document.createElement('style');
    rootStyle.innerHTML = shadowRootStyles;
    mfe.shadowRoot.appendChild(rootStyle);
}