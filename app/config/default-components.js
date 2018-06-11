export default [
  {
    componentName: 'Button',
    componentIcon: 'square',
    componentID: 1,
    type: 'component',
    componentHTMLTag: 'a',
    traits: [
      { name: 'color', value: '#000000' },
      { name: 'padding', value: '0.2' },
      { name: 'backgroundColor', value: '#FFFFFF' },
      { name: 'margin', value: '0.2' },
      { name: 'fontSize', value: '1' },
      { name: 'content', value: 'Hello World!' },
      { name: 'click', value: 'https://www.google.com' }
    ]
  },
  {
    componentName: 'Text',
    componentIcon: 'font',
    componentID: 2,
    type: 'component',
    componentHTMLTag: 'span',
    traits: [
      { name: 'color', value: '#000000' },
      { name: 'padding', value: '0.2' },
      { name: 'backgroundColor', value: '#FFFFFF' },
      { name: 'margin', value: '0.2' },
      { name: 'fontSize', value: '1' },
      { name: 'content', value: 'Hello World!' }
    ]
  },
  {
    componentName: 'Image',
    componentIcon: 'image',
    componentID: 3,
    type: 'component',
    componentHTMLTag: 'img',
    traits: [
      { name: 'padding', value: '0.2' },
      { name: 'margin', value: '0.2' },
      { name: 'backgroundColor', value: '#FFFFFF' },
      { name: 'height', value: '2' },
      { name: 'width', value: '2' },
      {
        name: 'backgroundURL',
        value: ''
      }
    ]
  }
];
