import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.h-h-h.caption'),
          title: i18n.t('forms.application.sitemap.h-h-h.title'),
          children: [{
            link: 'i-i-s-h-h-h-пердст-эксп-l',
            caption: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-пердст-эксп-l.caption'),
            title: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-пердст-эксп-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-h-h-h-клиент-l',
            caption: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-клиент-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-h-h-h-стр-полис-l',
            caption: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-стр-полис-l.caption'),
            title: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-стр-полис-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-h-h-h-договор-стр-l',
            caption: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-договор-стр-l.caption'),
            title: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-договор-стр-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-h-h-h-заяв-на-стр-l',
            caption: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-заяв-на-стр-l.caption'),
            title: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-заяв-на-стр-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-h-h-h-должности-l',
            caption: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-должности-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-h-h-h-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.h-h-h.i-i-s-h-h-h-сотрудники-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})