import { Editor, TinyMCE } from 'tinymce';
import { addBodyStyles, addEditorStyles, openDialog } from './utils';

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
};

export default (): void => {
  tinymce.PluginManager.add('cortex', setup);
};
