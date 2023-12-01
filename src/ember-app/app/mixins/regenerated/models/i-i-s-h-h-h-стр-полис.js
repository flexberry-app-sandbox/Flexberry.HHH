import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  срокДейст: DS.attr('number'),
  стрТариф: DS.attr('number'),
  террСтр: DS.attr('string'),
  договорСтр: DS.belongsTo('i-i-s-h-h-h-договор-стр', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-h-h-h-клиент', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-h-h-h-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-h-h-h-стр-полис.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-h-h-h-стр-полис.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  срокДейст: {
    descriptionKey: 'models.i-i-s-h-h-h-стр-полис.validations.срокДейст.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стрТариф: {
    descriptionKey: 'models.i-i-s-h-h-h-стр-полис.validations.стрТариф.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  террСтр: {
    descriptionKey: 'models.i-i-s-h-h-h-стр-полис.validations.террСтр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  договорСтр: {
    descriptionKey: 'models.i-i-s-h-h-h-стр-полис.validations.договорСтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-h-h-h-стр-полис.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-h-h-h-стр-полис.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрПолисE', 'i-i-s-h-h-h-стр-полис', {
    дата: attr('Дата', { index: 0 }),
    срокДейст: attr('Срок дейст', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    террСтр: attr('Терр стр', { index: 3 }),
    стрТариф: attr('Стр тариф', { index: 4 }),
    клиент: belongsTo('i-i-s-h-h-h-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    договорСтр: belongsTo('i-i-s-h-h-h-договор-стр', 'Договор стр', {
      стрСлучаи: attr('Стр случаи', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'стрСлучаи' }),
    сотрудники: belongsTo('i-i-s-h-h-h-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('СтрПолисL', 'i-i-s-h-h-h-стр-полис', {
    дата: attr('Дата', { index: 0 }),
    срокДейст: attr('Срок дейст', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    террСтр: attr('Терр стр', { index: 3 }),
    стрТариф: attr('Стр тариф', { index: 4 }),
    клиент: belongsTo('i-i-s-h-h-h-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true }),
    договорСтр: belongsTo('i-i-s-h-h-h-договор-стр', 'Стр случаи', {
      стрСлучаи: attr('Стр случаи', { index: 6 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-h-h-h-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
