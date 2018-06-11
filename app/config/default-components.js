export default [
  {
    componentName: 'Button',
    componentIcon: 'square',
    componentID: 1,
    type: 'component',
    componentHTMLTag: 'span',
    traits: [{ name: 'color', value: '#000000' }]
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
  }
];
