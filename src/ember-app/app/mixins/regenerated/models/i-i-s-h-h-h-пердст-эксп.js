import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видЭксп: DS.attr('string'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  объектЭксп: DS.attr('string'),
  основПровед: DS.attr('string'),
  резулЭксп: DS.attr('i-i-s-h-h-h-рез-эксп'),
  цельЭксп: DS.attr('string'),
  заявНаСтр: DS.belongsTo('i-i-s-h-h-h-заяв-на-стр', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-h-h-h-клиент', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-h-h-h-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  видЭксп: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.видЭксп.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объектЭксп: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.объектЭксп.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  основПровед: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.основПровед.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  резулЭксп: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.резулЭксп.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цельЭксп: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.цельЭксп.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заявНаСтр: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.заявНаСтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-h-h-h-пердст-эксп.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПердстЭкспE', 'i-i-s-h-h-h-пердст-эксп', {
    основПровед: attr('Основ провед', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    видЭксп: attr('Вид эксп', { index: 2 }),
    резулЭксп: attr('Резул эксп', { index: 3 }),
    цельЭксп: attr('Цель эксп', { index: 4 }),
    объектЭксп: attr('Объект эксп', { index: 5 }),
    номер: attr('Номер', { index: 6 }),
    заявНаСтр: belongsTo('i-i-s-h-h-h-заяв-на-стр', 'Заяв на стр', {
      номер: attr('Номер', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'номер' }),
    сотрудники: belongsTo('i-i-s-h-h-h-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'фИО' }),
    клиент: belongsTo('i-i-s-h-h-h-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ПердстЭкспL', 'i-i-s-h-h-h-пердст-эксп', {
    основПровед: attr('Основ провед', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    видЭксп: attr('Вид эксп', { index: 2 }),
    резулЭксп: attr('Резул эксп', { index: 3 }),
    цельЭксп: attr('Цель эксп', { index: 4 }),
    объектЭксп: attr('Объект эксп', { index: 5 }),
    номер: attr('Номер', { index: 6 }),
    заявНаСтр: belongsTo('i-i-s-h-h-h-заяв-на-стр', 'Номер', {
      номер: attr('Номер', { index: 7 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-h-h-h-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 8 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-h-h-h-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
