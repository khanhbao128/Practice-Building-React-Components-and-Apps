import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//make new component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:00PM" userComment="Nice blog posts" userAvatar={faker.image.avatar()} />
            </ApprovalCard>  
            <ApprovalCard> 
                <CommentDetail author="Jane" timeAgo="Today at 2:00PM" userComment="What a great story!" userAvatar={faker.image.avatar()} />
            </ApprovalCard>     
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
