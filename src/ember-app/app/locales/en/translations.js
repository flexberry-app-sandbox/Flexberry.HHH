import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHHHДоговорСтрLForm from './forms/i-i-s-h-h-h-договор-стр-l';
import IISHHHДолжностиLForm from './forms/i-i-s-h-h-h-должности-l';
import IISHHHЗаявНаСтрLForm from './forms/i-i-s-h-h-h-заяв-на-стр-l';
import IISHHHКлиентLForm from './forms/i-i-s-h-h-h-клиент-l';
import IISHHHПердстЭкспLForm from './forms/i-i-s-h-h-h-пердст-эксп-l';
import IISHHHСотрудникиLForm from './forms/i-i-s-h-h-h-сотрудники-l';
import IISHHHСтрПолисLForm from './forms/i-i-s-h-h-h-стр-полис-l';
import IISHHHДоговорСтрEForm from './forms/i-i-s-h-h-h-договор-стр-e';
import IISHHHДолжностиEForm from './forms/i-i-s-h-h-h-должности-e';
import IISHHHЗаявНаСтрEForm from './forms/i-i-s-h-h-h-заяв-на-стр-e';
import IISHHHКлиентEForm from './forms/i-i-s-h-h-h-клиент-e';
import IISHHHПердстЭкспEForm from './forms/i-i-s-h-h-h-пердст-эксп-e';
import IISHHHСотрудникиEForm from './forms/i-i-s-h-h-h-сотрудники-e';
import IISHHHСтрПолисEForm from './forms/i-i-s-h-h-h-стр-полис-e';
import IISHHHДоговорСтрModel from './models/i-i-s-h-h-h-договор-стр';
import IISHHHДолжностиModel from './models/i-i-s-h-h-h-должности';
import IISHHHЗаявНаСтрModel from './models/i-i-s-h-h-h-заяв-на-стр';
import IISHHHКлиентModel from './models/i-i-s-h-h-h-клиент';
import IISHHHПердстЭкспModel from './models/i-i-s-h-h-h-пердст-эксп';
import IISHHHСотрудникиModel from './models/i-i-s-h-h-h-сотрудники';
import IISHHHСтрПолисModel from './models/i-i-s-h-h-h-стр-полис';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-h-h-h-договор-стр': IISHHHДоговорСтрModel,
    'i-i-s-h-h-h-должности': IISHHHДолжностиModel,
    'i-i-s-h-h-h-заяв-на-стр': IISHHHЗаявНаСтрModel,
    'i-i-s-h-h-h-клиент': IISHHHКлиентModel,
    'i-i-s-h-h-h-пердст-эксп': IISHHHПердстЭкспModel,
    'i-i-s-h-h-h-сотрудники': IISHHHСотрудникиModel,
    'i-i-s-h-h-h-стр-полис': IISHHHСтрПолисModel
  },

  'application-name': 'HHH',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'HHH',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HHH',
          title: 'HHH'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'h-h-h': {
          caption: 'HHH',
          title: 'HHH',
          'i-i-s-h-h-h-пердст-эксп-l': {
            caption: 'Пердст эксп',
            title: ''
          },
          'i-i-s-h-h-h-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-h-h-h-стр-полис-l': {
            caption: 'Стр полис',
            title: ''
          },
          'i-i-s-h-h-h-договор-стр-l': {
            caption: 'Договор стр',
            title: ''
          },
          'i-i-s-h-h-h-заяв-на-стр-l': {
            caption: 'Заяв на стр',
            title: ''
          },
          'i-i-s-h-h-h-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-h-h-h-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-h-h-h-договор-стр-l': IISHHHДоговорСтрLForm,
    'i-i-s-h-h-h-должности-l': IISHHHДолжностиLForm,
    'i-i-s-h-h-h-заяв-на-стр-l': IISHHHЗаявНаСтрLForm,
    'i-i-s-h-h-h-клиент-l': IISHHHКлиентLForm,
    'i-i-s-h-h-h-пердст-эксп-l': IISHHHПердстЭкспLForm,
    'i-i-s-h-h-h-сотрудники-l': IISHHHСотрудникиLForm,
    'i-i-s-h-h-h-стр-полис-l': IISHHHСтрПолисLForm,
    'i-i-s-h-h-h-договор-стр-e': IISHHHДоговорСтрEForm,
    'i-i-s-h-h-h-должности-e': IISHHHДолжностиEForm,
    'i-i-s-h-h-h-заяв-на-стр-e': IISHHHЗаявНаСтрEForm,
    'i-i-s-h-h-h-клиент-e': IISHHHКлиентEForm,
    'i-i-s-h-h-h-пердст-эксп-e': IISHHHПердстЭкспEForm,
    'i-i-s-h-h-h-сотрудники-e': IISHHHСотрудникиEForm,
    'i-i-s-h-h-h-стр-полис-e': IISHHHСтрПолисEForm
  },

});

export default translations;
