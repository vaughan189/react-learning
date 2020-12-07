import * as React from 'react';
import { Post } from '../actions';
import './PostItem.css';

interface Props {
    post: Post;
    phrase?: string;
}

export const PostItem: React.SFC<Props> = props => {
    let title: string | JSX.Element = props.post.title;

    // I think highlight feature is great, but solution can be prettier
    if (props.phrase) {
        const regex = new RegExp(props.phrase, 'gi');
        title = title.replace(regex, e => `<span class="highlight">${e}</span>`);
    }

    // TODO: I don't like `dangerouslySetInnerHTML` solution, but I don't have any other ideas ATM
    return (
        <div className="post">
            <h1 dangerouslySetInnerHTML={{__html: title}}/>
            <p>{props.post.body}</p>
        </div>
    );
};
