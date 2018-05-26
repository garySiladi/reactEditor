// @flow
import { CREATE_PROJECT } from '../actions/projectStructure';

const initialProjectInfo = {
  projectName: 'sample_project',
  id: '0',
  hierarchy: []
};

type initialProjectInfoType = {
  projectName: string,
  id: string,
  hierarchy: Array<any>
};

export default function projectStructure(
  state: initialProjectInfoType = initialProjectInfo,
  action: any
) {
  switch (action.type) {
    case CREATE_PROJECT:
      return Object.assign({}, initialProjectInfo, action.data);
    default:
      return state;
  }
}
