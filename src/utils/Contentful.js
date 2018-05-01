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

  static getBlogPost() {
    const client = this.setClient();
    const blogPost = new Promise(
      function (resolve, reject) {
        client.getEntries({
            content_type: 'blogPost',
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
    return blogPost;
  }

  static getTenant(category) {
    const client = this.setClient();
    const tenant = new Promise(
      function (resolve, reject) {
        client.getEntries({
            content_type: 'tenant',
            order: '-sys.createdAt',
            'fields.category[in]': category
          })
          .then((entries) => {
            resolve(entries.items);
          }, (err) => {
            var reason = new Error('Error getting data!');
            reject(reason);
          });
      }
    );
    return tenant;
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

  static getTenantDetailBySlug(slug) {
    const client = this.setClient();
    const tenant = new Promise(
      function (resolve, reject) {
        client.getEntries({
          content_type: 'tenant',
          'fields.slug[in]': slug
        })
          .then((entries) => {
            resolve(entries);
          }, (err) => {
            var reason = new Error('Error getting data!');
            reject(reason);
          });
      }
    );
    return tenant;
  }

}