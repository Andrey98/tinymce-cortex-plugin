import { Editor, TinyMCE } from 'tinymce';
import { addBodyStyles, addEditorStyles, mfeContainersSet, openDialog, openEditDialog } from './utils';

declare const tinymce: TinyMCE;

const setup = (editor: Editor): void => {
  editor.ui.registry.addButton('cortex', {
    text: 'Add mathlive',
    onAction: () => {
      openDialog(editor);
    }
  });

  addBodyStyles();
  addEditorStyles(editor);

  editor.on('SetContent', () => {
    const mfeContainers = editor.getBody().querySelectorAll('.ML__mathlive');
    mfeContainers.forEach(container => {
      if(!mfeContainersSet.has(container)){
        mfeContainersSet.add(container);
        container.addEventListener('click', () => openEditDialog(editor, container));
      }
    });
  });
};

export default (): void => {
  tinymce.PluginManager.add('cortex', setup);
};
