import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { filter, map } from 'lodash';
import { PostsAction, postsFetch } from '../actions';
import { MainState } from '../../index';
import { PostsState } from '../reducers';
import { PostItem } from './PostItem';
import { Message } from './Message';

// State interface (not internal component state)
// TODO: Form state can be probably partially based on `redux-form` interfaces, but I can't find proper one
interface StateProps {
    postsState: PostsState;
    formState: {
        postsSearch: {
            values?: {
                phrase: string;
            }
        }
    };
}

// Actions interface
interface DispatchProps {
    postsFetch: typeof postsFetch;
}

// Component interface
interface Props extends StateProps, DispatchProps {}

class PostsList extends React.Component<Props, {}> {

    componentDidMount() {
        this.props.postsFetch();
    }

    // If the render method will be too long (at some point in the future)
    // it should be sliced to multiple methods like `renderLoading`, `renderError`, `renderList` etc.
    render() {
        const {props} = this;
        const posts = props.postsState.posts;
        const phrase = props.formState.postsSearch.values && props.formState.postsSearch.values.phrase;

        // Posts are loading
        if (props.postsState.loading) {
            return <Message>⏳ Loading...</Message>;
        }

        // There's an error during fetching API
        else if (props.postsState.error) {
            return <Message>😫 Sorry, there's an error during fetching data</Message>;
        }

        // Phrase field is filled, so list filtered posts
        else if (phrase) {
            const filteredPosts = filter(posts, post => post.title.indexOf(phrase) >= 0);

            if (filteredPosts.length) {
                return map(filteredPosts, post => <PostItem key={post.id} post={post} phrase={phrase}/>);
            }

            return <Message>🔍 Oops, nothing found</Message>;
        }

        // List unfiltered posts
        if (posts.length) {
            return map(posts, post => <PostItem key={post.id} post={post}/>);
        }

        return <Message>😞 Oops, no posts available</Message>;
    }
}

// Provide access to state
const mapStateToProps = (state: MainState) => ({
    postsState: state.posts,
    formState: state.form
});

// Provide access to dispatching actions
const mapDispatchToProps = (dispatch: Dispatch<PostsAction>) => ({
    ...bindActionCreators({postsFetch}, dispatch)
});

// Connect mappers with component
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
