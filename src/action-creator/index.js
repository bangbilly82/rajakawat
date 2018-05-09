import * as Actions from '../actions/Actions.js';

export function getBlogContent(posts) {
  return {
    type: Actions.GET_BLOG_CONTENT,
    posts
  }
}

export function setCurrentHeader(link) {
  return {
    type: Actions.SET_CURRENT_HEADER,
    link
  }
}
