import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('cortex', {
    text: 'cortex button',
    onAction: () => {
      editor.setContent('<p>content added from cortex</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('cortex', setup);
};
