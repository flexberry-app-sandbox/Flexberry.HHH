import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'HHH',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HHH',
          title: 'HHH'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
