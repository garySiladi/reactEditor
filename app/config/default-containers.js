export default [
  {
    componentName: 'Horizontal',
    componentIcon: 'ellipsis-h',
    componentHTMLTag: 'div',
    type: 'container',
    componentID: 101,
    traits: [
      { name: 'color', value: '#FFFFFF' },
      { name: 'backgroundColor', value: '#000000' },
      { name: 'display', value: 'flex' },
      { name: 'flexDirection', value: 'row' },
      { name: 'padding', value: '0.2' },
      { name: 'justifyContent', value: 'center' },
      { name: 'alignItems', value: 'center' }
    ]
  },
  {
    componentName: 'Vertical',
    componentIcon: 'ellipsis-v',
    componentHTMLTag: 'div',
    type: 'container',
    componentID: 102,
    traits: [
      { name: 'color', value: '#FFFFFF' },
      { name: 'backgroundColor', value: '#000000' },
      { name: 'display', value: 'flex' },
      { name: 'flexDirection', value: 'column' },
      { name: 'padding', value: '0.2' },
      { name: 'justifyContent', value: 'center' },
      { name: 'alignItems', value: 'center' }
    ]
  }
];
