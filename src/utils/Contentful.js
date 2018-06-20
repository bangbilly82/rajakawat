import { createClient } from 'contentful';
import config from '../config/config';
import _ from 'lodash';

export default class Contentful {

  static setClient() {
    const client = createClient({
      space: config.contentful.spaceId,
      accessToken: config.contentful.accessToken
    })
    return client;
  }

  static getFaqContent() {
    const client = this.setClient();
    const faqContent = new Promise(
      function (resolve, reject) {
        client.getEntries({
            content_type: 'faq',
            order: '-sys.createdAt',
            include: 2
          })
          .then((entries) => {
            resolve(entries.items);
          }, (err) => {
            var reason = new Error('Error getting data!');
            reject(reason);
          });
      }
    );
    return faqContent;
  }

  static getPostContent() {
    const client = this.setClient();
    const postContent = new Promise(
      function (resolve, reject) {
        client.getEntries({
            content_type: 'post',
            order: '-sys.createdAt',
            include: 2
          })
          .then((entries) => {
            resolve(entries.items);
          }, (err) => {
            reject(err);
          });
      }
    );
    return postContent;
  }

  static getBlogPostBySlug(slug) {
    const client = this.setClient();
    const blogPostById = new Promise(
      function (resolve, reject) {
        client.getEntries({
          content_type: 'blogPost',
          'fields.slug[in]': slug
        })
          .then((entry) => {
            resolve(entry);
          }, (err) => {
            var reason = new Error('Error getting data!');
            reject(reason);
          });
      }
    );
    return blogPostById;
  }

}