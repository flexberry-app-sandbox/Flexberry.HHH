import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видСтр: DS.attr('i-i-s-h-h-h-виды-стр'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  срокСтр: DS.attr('number'),
  суммаСтр: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-h-h-h-клиент', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-h-h-h-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  видСтр: {
    descriptionKey: 'models.i-i-s-h-h-h-заяв-на-стр.validations.видСтр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-h-h-h-заяв-на-стр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-h-h-h-заяв-на-стр.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  срокСтр: {
    descriptionKey: 'models.i-i-s-h-h-h-заяв-на-стр.validations.срокСтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаСтр: {
    descriptionKey: 'models.i-i-s-h-h-h-заяв-на-стр.validations.суммаСтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-h-h-h-заяв-на-стр.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-h-h-h-заяв-на-стр.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявНаСтрE', 'i-i-s-h-h-h-заяв-на-стр', {
    номер: attr('Номер', { index: 0 }),
    срокСтр: attr('Срок стр', { index: 1 }),
    видСтр: attr('Вид стр', { index: 2 }),
    суммаСтр: attr('Сумма стр', { index: 3 }),
    дата: attr('Дата', { index: 4 }),
    клиент: belongsTo('i-i-s-h-h-h-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    сотрудники: belongsTo('i-i-s-h-h-h-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ЗаявНаСтрL', 'i-i-s-h-h-h-заяв-на-стр', {
    номер: attr('Номер', { index: 0 }),
    срокСтр: attr('Срок стр', { index: 1 }),
    видСтр: attr('Вид стр', { index: 2 }),
    суммаСтр: attr('Сумма стр', { index: 3 }),
    дата: attr('Дата', { index: 4 }),
    клиент: belongsTo('i-i-s-h-h-h-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-h-h-h-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
