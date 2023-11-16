import { MathfieldElement } from "mathlive";
import { bodyStyles, editorStyles, shadowRootStyles } from "./constants";
import { Editor } from "tinymce";


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
        addedElement.appendChild(mfeContainer);

        addShadowRootStyles(mfe);
        api.close();
      }
    });
    const wrapper = document.getElementById('dialogContent');
    wrapper.appendChild(mfe);
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