import { MathfieldElement } from "mathlive";
import { bodyStyles, editorStyles, shadowRootStyles } from "./constants";
import { Editor } from "tinymce";

export const mfeContainersSet = new Set();

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
      onSubmit: function (api) {
        editor.selection.setContent(`<p class='mathFieldRow'></p>`);
        
        const addedElement = editor.getBody().getElementsByClassName('mathFieldRow')[0];
        addedElement.classList.remove('mathFieldRow');
        addedElement.innerHTML = '';
  
        mfe.contentEditable = 'false';
        const mfeContainer = mfe.shadowRoot.querySelector('.ML__mathlive');
        const valueHolder = document.createElement('span');
        valueHolder.innerHTML = mfe.value;
        valueHolder.classList.add('ML__hidden');

        addedElement.appendChild(mfeContainer);
        addedElement.appendChild(valueHolder);
        mfeContainer.setAttribute("contenteditable", "false");
        mfeContainer.addEventListener('click', () => openEditDialog(editor, mfeContainer));
        mfeContainersSet.add(mfeContainer);

        addShadowRootStyles(mfe);
        api.close();
      }
    });
    const wrapper = document.getElementById('dialogContent');
    wrapper.appendChild(mfe);
};

export const openEditDialog = (editor: Editor, mfeContainer: Element | Node): void => {
    const newMfe = new MathfieldElement();
    const hiddenValueHolder = mfeContainer.parentNode.querySelector(".ML__hidden");
    newMfe.value = hiddenValueHolder?.innerHTML || '';
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
      onSubmit: function (api) {
        const newMfeContainer = newMfe.shadowRoot.querySelector('.ML__mathlive');
        newMfe.contentEditable = 'false';
        newMfeContainer.setAttribute("contenteditable", "false");
        newMfeContainer.addEventListener('click', () => openEditDialog(editor, newMfeContainer));
        mfeContainersSet.add(newMfeContainer);
        mfeContainersSet.delete(mfeContainer);
        mfeContainer.parentElement.replaceChild(newMfeContainer, mfeContainer);
        if(hiddenValueHolder){
            hiddenValueHolder.innerHTML = newMfe.value;
        }
        api.close();
      }
    });
    const wrapper = document.getElementById('dialogContent');
    wrapper.appendChild(newMfe);
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