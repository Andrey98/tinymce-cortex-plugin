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
        editor.insertContent(`<p class='mathFieldRow'></p>`);
        
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
        addedElement.setAttribute("contenteditable", "false");
        mfeContainer.addEventListener('click', () => openEditDialog(editor, mfeContainer));
        mfeContainersSet.add(mfeContainer);

        addShadowRootStyles(mfe);

        let nextSibling = addedElement.nextSibling as Element;
        while(nextSibling && (nextSibling.classList?.contains('ML__hidden') || (nextSibling.getAttribute && nextSibling.getAttribute('contenteditable') === 'false'))){
            nextSibling = nextSibling.nextSibling as Element;
        }
        if(nextSibling){
            editor.selection.setCursorLocation(nextSibling, 0);
        } else {
            const newLine = document.createElement('p');
            newLine.innerHTML = 'x';
            addedElement.parentElement.appendChild(newLine);
            editor.selection.select(newLine);
            editor.insertContent(`<p></p>`);
        }

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
        if(newMfe.value === hiddenValueHolder?.innerHTML){
            return api.close();
        }
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
        let nextSibling = newMfeContainer.parentElement?.nextSibling as Element;
        while(nextSibling && (nextSibling.classList?.contains('ML__hidden') || (nextSibling.getAttribute && nextSibling.getAttribute('contenteditable') === 'false'))){
            nextSibling = nextSibling.nextSibling as Element;
        }
        const siblingChild = nextSibling?.firstChild as Element;
        if(nextSibling && (!siblingChild?.getAttribute || siblingChild?.getAttribute(`data-mce-bogus`) !== "1")){
            editor.insertContent(`<p class='ML__hidden'></p>`);
            editor.selection.setCursorLocation(nextSibling, 0);
        } else {
            if(siblingChild?.getAttribute && siblingChild.getAttribute(`data-mce-bogus`) === "1"){
                newMfeContainer.parentElement.parentElement.removeChild(nextSibling);
            }
            const newLine = document.createElement('p');
            newLine.innerHTML = 'x';
            newMfeContainer.parentElement.parentElement.appendChild(newLine);
            editor.selection.select(newLine);
            editor.insertContent(`<p></p>`);
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