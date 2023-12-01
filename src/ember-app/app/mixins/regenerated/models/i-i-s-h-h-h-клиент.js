import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  иНН: DS.attr('number'),
  номерПас: DS.attr('number'),
  серияПас: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-h-h-h-клиент.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-h-h-h-клиент.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПас: {
    descriptionKey: 'models.i-i-s-h-h-h-клиент.validations.номерПас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серияПас: {
    descriptionKey: 'models.i-i-s-h-h-h-клиент.validations.серияПас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-h-h-h-клиент.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-h-h-h-клиент.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-h-h-h-клиент', {
    фИО: attr('ФИО', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    номерПас: attr('Номер пас', { index: 2 }),
    серияПас: attr('Серия пас', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    иНН: attr('ИНН', { index: 5 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-h-h-h-клиент', {
    фИО: attr('ФИО', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    номерПас: attr('Номер пас', { index: 2 }),
    серияПас: attr('Серия пас', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    иНН: attr('ИНН', { index: 5 })
  });
};
