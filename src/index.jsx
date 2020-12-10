import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import Segments from './Segments';
import FirstSegment from './FirstSegment';
import SecondSegment from './SecondSegment';

const App = () => {
  return (
    <div className="ui container">
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail />
      </ApprovalCard>
    </div>
    <Segments>
      <FirstSegment />
    </Segments>
    <Segments>
      <SecondSegment />
    </Segments>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));