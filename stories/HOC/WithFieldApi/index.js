import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, withFieldApi } from '../../../src';

const SomeComponent = props => (
  <button type="button" onClick={()=>
    props.fieldApi.setValue(
      Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>
    Random
  </button>
);

const ComponentWithFieldApi = withFieldApi('name')(SomeComponent);

const WithFieldApi = () => (
  <Form>
    <label>Name: <Text field="name"/></label>
    <button type="submit">Submit</button>
    <h5>Component with fieldApi:</h5>
    <ComponentWithFieldApi />
  </Form>
);

export default withDocs(readme, WithFieldApi);
