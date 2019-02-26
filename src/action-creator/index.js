import * as Actions from '../actions/Actions.js';
import Contentful from '../utils/Contentful';

export function getBlogContent(posts) {
  return {
    type: Actions.GET_BLOG_CONTENT,
    posts
  }
}

export function hideLoader() {
  return {
    type: Actions.HIDE_LOADER,
    loading: false
  }
}

export function setCurrentHeader(link) {
  return {
    type: Actions.SET_CURRENT_HEADER,
    link
  }
}

export function setHeaderBackground(background) {
  return {
    type: Actions.SET_HEADER_BACKGROUND,
    background
  }
}

export function getFaq() {
  return (dispatch) => {
    Contentful.getFaqContent()
    .then((res) => {
      const response = res[0];
      dispatch({
        type: Actions.GET_FAQ_CONTENT,
        faq: response
      })
    })
  }
}

export function getServiceContent() {
  return (dispatch) => {
    Contentful.getServiceContent()
    .then((res) => {
      const response = res;
      dispatch({
        type: Actions.GET_SERVICES_CONTENT,
        services: response
      })
    })
  }
}

export function getPost() {
  return (dispatch) => {
    Contentful.getPostContent()
    .then((res) => {
      const content = res;
      dispatch({
        type: Actions.GET_POST_CONTENT,
        content
      })
    })
    .catch(err => {
      throw err;
    })
  }
}
